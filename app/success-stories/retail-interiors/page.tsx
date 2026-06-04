'use client';

import SuccessStoryDetail from '@/components/SuccessStoryDetail';
import { Layers } from 'lucide-react';

export default function RetailInteriorsPage() {
  const content = {
    title: "Retail Interior Solutions",
    clientIntro: "A retail interiors and store-makeover specialist providing end-to-end interior solutions for commercial spaces. They manage a wide range of materials, from raw components to semi-built elements that are customized based on project requirements.",
    requirements: [
      "Centralized inventory and order management.",
      "End-to-end quote-to-order processing.",
      "Flexible, property-driven pricing based on material type and design attributes.",
      "Seamless integration with NetSuite for order and finance synchronization.",
      "Improved sales communication and standardized quote documents.",
      "Real-time visibility across sales, inventory, and operations."
    ],
    solution: `We implemented Salesforce Revenue Cloud as the core system to manage the complete quote-to-order lifecycle. Custom pricing logic was developed to dynamically calculate prices based on product properties, supporting a diverse interior material catalog.
    
    Salesforce was bi-directionally integrated with NetSuite, enabling automatic creation of quotes and orders in NetSuite and syncing record IDs back into Salesforce for full traceability.
    
    Outlook was integrated with Salesforce to streamline sales communication, and professional, well-structured quote and order documents were developed to match business needs.`,
    highlights: [
      "Property-Driven Pricing: Advanced pricing logic tailored to raw and semi-built interior materials.",
      "Bi-Directional NetSuite Integration: Seamless quote and order synchronization with full traceability.",
      "End-to-End Quote-to-Order: Reduced manual handoffs and processing time.",
      "Operational Transparency: Real-time visibility into sales, inventory, and order status."
    ]
  };

  return <SuccessStoryDetail {...content} icon={Layers} />;
}
