'use client';

import ProductDetail from '@/components/ProductDetail';
import { Receipt } from 'lucide-react';

export default function BillingPage() {
  const content = {
    title: "Salesforce Billing",
    description: "Salesforce Billing is a comprehensive billing and revenue management solution designed to streamline and automate the entire quote-to-cash process. Built on the robust Salesforce platform, it integrates seamlessly with Salesforce CPQ to provide a unified, end-to-end solution.",
    features: [
      "Quote-to-Cash: Streamlines and automates the entire quote-to-cash process.",
      "Invoicing & Payments: Manages customer billing, invoicing, payments, and revenue recognition.",
      "Operational Efficiency: Enhances billing accuracy, reduces operational costs, and improves customer satisfaction.",
      "Revenue Recognition: Helps comply with standards (ASC 606 and IFRS 15) through automation and auditable records.",
      "Improved Cash Flow: Accelerates billing cycle, ensuring timely invoicing and payment collection.",
      "Customer Satisfaction: Provides accurate and timely invoices, flexible payment options, and transparent billing information."
    ]
  };

  return <ProductDetail {...content} icon={Receipt} />;
}
