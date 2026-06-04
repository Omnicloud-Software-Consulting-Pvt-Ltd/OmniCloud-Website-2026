'use client';

import ProductDetail from '@/components/ProductDetail';
import { ShoppingCart } from 'lucide-react';

export default function ConsumerGoodsPage() {
  const content = {
    title: "Consumer Goods Cloud",
    description: "Salesforce Consumer Goods Cloud is your gateway to redefining success in the Consumer Goods industry. We specialize in empowering consumer goods businesses to streamline operations, enhance sales performance, and foster stronger relationships with retail partners.",
    features: [
      "Retail Execution: Transform Retail Execution Process and enhance retail performance.",
      "Van Sales: End to End Execution for direct store delivery.",
      "Sales Management: Streamline sales processes and optimize distribution channels.",
      "Territory Management: Maximize retail performance by strategically managing territories.",
      "Multimarket Operations: Facilitate efficient management across multiple markets.",
      "Actionable Insights: Comprehensive Insights into Inventory and Market Trends for better demand forecasting.",
      "Visit Planning: Strategic planning and execution of customer visits.",
      "Trade Promotion: Efficient Trade Promotion Management to enhance campaign effectiveness."
    ]
  };

  return <ProductDetail {...content} icon={ShoppingCart} />;
}
