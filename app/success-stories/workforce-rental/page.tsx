'use client';

import SuccessStoryDetail from '@/components/SuccessStoryDetail';
import { Clock } from 'lucide-react';

export default function WorkforceRentalPage() {
  const content = {
    title: "Workforce & Machinery Rental",
    clientIntro: "A leasing services organization providing skilled resources and heavy machinery on a rental basis. Their leasing model is driven by usage-based consumption, where services are billed based on predefined units such as hours or days.",
    requirements: [
      "Ability to quote services with predefined granted hours or days.",
      "Tracking of actual consumption from a third-party system.",
      "Support for overconsumption pricing beyond granted limits.",
      "Weekly aggregation of consumption data per service.",
      "Automated, recurring invoice generation."
    ],
    solution: `We implemented a complete end-to-end solution using Salesforce Revenue Cloud with Consumption Management at its core. Services were quoted with predefined granted consumption units, which were then associated with assets created in Revenue Cloud Assets.
    
    A custom grant provider and pricing logic were developed to calculate both standard consumption pricing and overconsumption charges. Actual usage data was collected from a third-party application and ingested into Salesforce Consumption Management.
    
    On a weekly basis, total consumption was calculated at the asset level. Using custom actions, invoices were generated automatically through a custom API-based invoice creation engine.`,
    highlights: [
      "Usage-Based Leasing Model: Services billed based on actual hours/days consumed.",
      "Overconsumption Pricing: Flexible pricing for granted units and excess usage.",
      "Asset-Level Billing Control: Consumption tied directly to Revenue Cloud Assets.",
      "Weekly Automated Invoicing: Custom API-driven invoice creation with minimal manual effort."
    ]
  };

  return <SuccessStoryDetail {...content} icon={Clock} />;
}
