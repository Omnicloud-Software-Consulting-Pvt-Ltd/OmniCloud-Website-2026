// One-off: recolor "Running man.gif" -> cyan figure on transparent bg,
// re-encoded as an animated WebP. Run: node scripts/recolor-runningman.cjs
const sharp = require('sharp');

const SRC = process.argv[2] || 'scripts/source/running-man-source.gif';
const OUT = 'public/assets/running-man-cyan.webp';
const CYAN = [0, 181, 226]; // brand-cyan #00b5e2

(async () => {
  const meta = await sharp(SRC, { animated: true }).metadata();
  const { width, pageHeight, pages } = meta;
  const delays = meta.delay && meta.delay.length ? meta.delay : new Array(pages).fill(30);

  const { data } = await sharp(SRC, { animated: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // black figure -> opaque cyan, white bg -> transparent, edges -> soft alpha
  for (let i = 0; i < data.length; i += 4) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    let a = Math.round(255 - lum);
    if (a < 0) a = 0;
    else if (a > 255) a = 255;
    data[i] = CYAN[0];
    data[i + 1] = CYAN[1];
    data[i + 2] = CYAN[2];
    data[i + 3] = a;
  }

  const frameBytes = width * pageHeight * 4;

  // union bounding box of the figure across all frames (keeps motion aligned)
  let minX = width, minY = pageHeight, maxX = 0, maxY = 0;
  for (let p = 0; p < pages; p++) {
    const base = p * frameBytes;
    for (let y = 0; y < pageHeight; y++) {
      for (let x = 0; x < width; x++) {
        if (data[base + (y * width + x) * 4 + 3] > 16) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
  }
  const pad = 8;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(pageHeight - 1, maxY + pad);
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  // slice the vertically-stacked frames, crop to the box, re-encode as PNG for join
  const frames = [];
  for (let p = 0; p < pages; p++) {
    const slice = data.subarray(p * frameBytes, (p + 1) * frameBytes);
    frames.push(
      await sharp(slice, { raw: { width, height: pageHeight, channels: 4 } })
        .extract({ left: minX, top: minY, width: cropW, height: cropH })
        .png()
        .toBuffer()
    );
  }
  console.log(`cropped to ${cropW}x${cropH} (from ${width}x${pageHeight})`);

  await sharp(frames, { join: { animated: true } })
    .webp({ delay: delays, loop: 0, quality: 90, effort: 4 })
    .toFile(OUT);

  const om = await sharp(OUT, { animated: true }).metadata();
  console.log(`wrote ${OUT} -> ${om.pages} frames, ${om.width}x${om.pageHeight}`);
})().catch((e) => {
  console.error('ERR', e.message);
  process.exit(1);
});
