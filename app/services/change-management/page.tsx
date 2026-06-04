'use client';

import ServiceDetail from '@/components/ServiceDetail';
import { Users } from 'lucide-react';

export default function ChangeManagementPage() {
  const content = {
    title: "Change Management",
    description: "Our Change Management services are designed to facilitate a seamless transition to new Salesforce processes and systems, ensuring that your organization adapts effectively and embraces change. We prioritize user adoption and minimize disruption, helping your team navigate through transformations smoothly and efficiently.",
    features: [
      "Change Strategy Development: Define scope, identify stakeholders, and set clear goals and milestones.",
      "Stakeholder Engagement: Identify and involve key stakeholders early to ensure buy-in and support.",
      "Communication Planning: Develop detailed communication plans to keep all stakeholders informed and engaged.",
      "Training and Education: Provide comprehensive training programs tailored to different user groups.",
      "User Adoption Support: Maximize user adoption with ongoing support, hands-on training, and user manuals.",
      "Continuous Improvement: Regularly review and adjust strategies to foster a culture of adaptability and resilience."
    ]
  };

  return <ServiceDetail {...content} icon={Users} />;
}
