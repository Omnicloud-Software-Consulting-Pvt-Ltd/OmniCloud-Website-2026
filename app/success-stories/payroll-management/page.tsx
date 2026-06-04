'use client';

import SuccessStoryDetail from '@/components/SuccessStoryDetail';
import { Shield } from 'lucide-react';

export default function PayrollManagementPage() {
  const content = {
    title: "Payroll Management",
    clientIntro: "An employee payment and payroll management organization handling salary processing and operations. Their business involves managing structured payroll products that require flexible pricing models, compliance-driven documentation, and secure customer approvals.",
    requirements: [
      "A complete Revenue Cloud–based sales and pricing system.",
      "Custom pricing development driven by charge types and pricing frequency.",
      "Structured product presentation for improved user experience.",
      "Dynamic form management based on selected products.",
      "Secure document generation and digital signature capabilities."
    ],
    solution: `We implemented a full end-to-end solution using Salesforce Revenue Cloud (RCA) as the central platform. Products were modeled using a catalog and category structure, significantly enhancing usability for sales users.
    
    A custom pricing engine was developed to calculate pricing dynamically based on charge type and pricing frequency, ensuring flexibility and accuracy.
    
    Additionally, a Form Manager was built using Lightning Web Components (LWC), which intelligently determines and displays the required forms based on the products selected in the quote. The solution was integrated with DocuSign for seamless document generation and digital signatures.`,
    highlights: [
      "End-to-End Revenue Cloud: Complete payroll sales lifecycle managed within Salesforce.",
      "Custom Pricing Logic: Pricing calculated dynamically based on charge type and frequency.",
      "Dynamic Form Management: LWC-based Form Manager driven by product selection.",
      "Integrated Digital Signing: DocuSign integration for secure signatures."
    ]
  };

  return <SuccessStoryDetail {...content} icon={Shield} />;
}
