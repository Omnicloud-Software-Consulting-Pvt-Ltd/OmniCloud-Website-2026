'use client';

import ProductDetail from '@/components/ProductDetail';
import { RefreshCw } from 'lucide-react';

export default function RevenueLifecyclePage() {
  const content = {
    title: "Revenue Lifecycle Management",
    description: "Revenue Lifecycle Management (RLM) is a strategic approach that organizations use to manage the end-to-end processes of generating and recognizing revenue. It encompasses everything from initial customer engagement to contract renewal, ensuring a streamlined and compliant approach.",
    features: [
      "Sales Cycle Optimization: Automates and optimizes the sales cycle, reducing time and effort to close deals.",
      "Revenue Forecasting: Provides real-time insights into revenue streams by integrating sales, finance, and service data.",
      "Enhanced Compliance: Ensures compliance with financial regulations (ASC 606 and IFRS 15) through automated processes.",
      "Customer Experience: Provides superior customer service, addressing issues promptly and efficiently, driving retention.",
      "Operational Efficiency: Automates billing, invoicing, and payment processes, reducing administrative burden.",
      "Data-Driven Decisions: Offers integrated dashboards and reports for better management and decision-making."
    ]
  };

  return <ProductDetail {...content} icon={RefreshCw} />;
}
