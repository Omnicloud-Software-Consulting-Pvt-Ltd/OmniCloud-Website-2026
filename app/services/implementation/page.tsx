'use client';

import ServiceDetail from '@/components/ServiceDetail';
import { Layers } from 'lucide-react';

export default function ImplementationPage() {
  const content = {
    title: "Implementation Services",
    description: "Our Implementation Services cover the comprehensive range of Salesforce solutions, ensuring a seamless integration and optimal performance across your entire organization.",
    features: [
      "Sales Cloud: Enhance sales processes, efficient lead management, opportunity tracking, and sales forecasting.",
      "Service Cloud: Transform customer service operations, streamline case management, automate service processes, and provide a 360-degree view of customers.",
      "Experience Cloud: Create engaging and personalized online experiences for customers, partners, and employees with custom portals and communities.",
      "Consumer Goods Cloud: Maximize retail and consumer goods operations, enhance retail execution, streamline supply chain management, and provide insights that drive sales.",
      "CPQ & Billing: Simplify quote-to-cash process, automate complex pricing, streamline quoting, and manage billing efficiently.",
      "Revenue Lifecycle Management: Optimize revenue operations from quote to cash, providing real-time visibility, improved compliance, and enhanced financial forecasting."
    ]
  };

  return <ServiceDetail {...content} icon={Layers} />;
}
