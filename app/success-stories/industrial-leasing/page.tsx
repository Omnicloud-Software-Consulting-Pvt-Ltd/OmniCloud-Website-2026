'use client';

import SuccessStoryDetail from '@/components/SuccessStoryDetail';
import { Cpu } from 'lucide-react';

export default function IndustrialLeasingPage() {
  const content = {
    title: "Industrial Equipment Leasing",
    clientIntro: "A leading industrial equipment company providing Ground Maintenance and Air Support Equipment through leasing, sales, and rental models. Their portfolio includes high-value machinery requiring strong control over pricing, approvals, and asset tracking.",
    requirements: [
      "Unified lead-to-asset process within Salesforce.",
      "Support for lease, sale, and rental pricing models.",
      "Automated approval processes based on lease percentage thresholds.",
      "Accurate pricing calculations considering asset age, interest rates, and discounts.",
      "Real-time inventory synchronization with Microsoft Business Central.",
      "Automatic asset creation once a quote is finalized."
    ],
    solution: `We implemented Salesforce Revenue Cloud as the central platform to manage the complete sales and asset lifecycle. Inventory was modeled as Salesforce products and kept in sync with Microsoft Business Central through a bi-directional integration.
    
    A comprehensive pricing engine was designed to handle all lease and pricing logic within a single pricing procedure, eliminating fragmented calculations.
    
    Approval workflows were implemented to automatically route deals based on lease percentages, ensuring governance without slowing down sales. Once a quote was finalized, assets were created automatically, removing manual steps and reducing errors.`,
    highlights: [
      "True Lead-to-Asset Automation: From lead creation to asset generation, the entire process runs seamlessly within Salesforce.",
      "Single Pricing Engine: Interest rates, asset age, discounts, and lease terms are calculated in one centralized procedure.",
      "Smart Approvals: Lease-based approval logic ensures compliance while keeping the process fast.",
      "Bi-Directional Inventory Sync: Real-time integration with Business Central ensures accurate inventory availability."
    ]
  };

  return <SuccessStoryDetail {...content} icon={Cpu} />;
}
