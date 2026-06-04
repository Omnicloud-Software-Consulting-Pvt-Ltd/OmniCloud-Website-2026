'use client';

import ProductDetail from '@/components/ProductDetail';
import { Cloud } from 'lucide-react';

export default function SalesforceCloudPage() {
  const content = {
    title: "Salesforce Cloud",
    description: "Unlock the full potential of your business with Salesforce Cloud implementation, encompassing Sales Cloud, Service Cloud, and Experience Cloud. Our expert team ensures seamless integration and customization to meet your unique business needs.",
    features: [
      "Sales Cloud: Drive growth by managing sales processes efficiently, from lead generation to closing deals.",
      "Service Cloud: Enhance customer service experience, enabling faster issue resolution and stronger customer relationships.",
      "Experience Cloud: Connect customers, partners, and employees through personalized portals and communities.",
      "Efficiency: Automate and streamline sales, service, and engagement processes, reducing manual work.",
      "Customization: Tailor Salesforce Cloud solutions to fit specific business requirements.",
      "Integration: Seamlessly connect with other systems to create a unified, data-driven environment.",
      "Scalability: Support business growth with solutions that adapt to evolving needs and increasing demands."
    ]
  };

  return <ProductDetail {...content} icon={Cloud} />;
}
