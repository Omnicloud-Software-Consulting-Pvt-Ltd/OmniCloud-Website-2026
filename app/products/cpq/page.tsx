'use client';

import ProductDetail from '@/components/ProductDetail';
import { Calculator } from 'lucide-react';

export default function CPQPage() {
  const content = {
    title: "Salesforce CPQ",
    description: "Revenue Cloud by Salesforce seamlessly integrates Salesforce CPQ (Configure, Price, Quote) to optimize your entire revenue lifecycle. This powerful solution automates quoting, contracting, and ensuring accuracy and efficiency from lead to contract.",
    features: [
      "Automated Quoting: Transforms leads into opportunities, manages accounts, and creates precise quotes quickly.",
      "Error-Free Pricing: Automated approval process to maintain pricing consistency and avoid errors.",
      "Contract Generation: Streamlined generation of quotes and contracts to reduce manual work and ensure compliance.",
      "Process Efficiency: Streamline sales and billing processes, reducing manual effort and errors.",
      "Pricing Accuracy: Ensure accurate pricing, quoting, and billing, improving customer satisfaction.",
      "Unified Platform: Seamlessly integrate with other Salesforce solutions.",
      "Scalability: Support complex business models and scale as your business grows."
    ]
  };

  return <ProductDetail {...content} icon={Calculator} />;
}
