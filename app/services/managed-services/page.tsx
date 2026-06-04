'use client';

import ServiceDetail from '@/components/ServiceDetail';
import { Server } from 'lucide-react';

export default function ManagedServicesPage() {
  const content = {
    title: "Managed IT Services",
    description: "Our Managed IT Services ensure that your Salesforce environment operates at peak efficiency, allowing you to focus on your core business activities while we handle the technical complexities. We provide continuous support and proactive management to keep your Salesforce platform running smoothly and securely.",
    features: [
      "Continuous Support: 24/7 monitoring and issue resolution to ensure minimal downtime.",
      "Proactive Management: Regular system health checks and performance optimization.",
      "Security Compliance: Ensuring your Salesforce environment adheres to the latest security standards.",
      "System Administration: Managing users, roles, profiles, and permissions.",
      "Enhancements: implementing new features and updates to keep pace with business needs.",
      "Release Management: Smooth handling of Salesforce seasonal releases and updates."
    ]
  };

  return <ServiceDetail {...content} icon={Server} />;
}
