'use client';

import ServiceDetail from '@/components/ServiceDetail';
import { Lightbulb } from 'lucide-react';

export default function ConsultingPage() {
  const content = {
    title: "Consulting & Advisory",
    description: "Our Consulting & Advisory services are designed to help you harness the full potential of the Salesforce platform. We offer strategic guidance and expert advice across various Salesforce solutions, ensuring your organization can achieve its business goals efficiently and effectively.",
    features: [
      "Business Process Optimization: Streamline workflows, eliminate inefficiencies, and implement best practices to enhance productivity and drive business growth.",
      "Salesforce Strategy Development: Develop a comprehensive Salesforce strategy that aligns with overall business objectives.",
      "Strategic Roadmap: Identifying KPIs, setting achievable goals, and creating a roadmap for successful implementation and adoption.",
      "Initial Assessment: A thorough analysis of your current state to identify gaps and opportunities.",
      "Strategic Planning: Aligning technology with your long-term business vision.",
      "Solution Design: Architecting robust, scalable solutions tailored to your unique needs.",
      "Continuous Improvement: Ongoing optimization to ensure your Salesforce instance evolves with your business."
    ]
  };

  return <ServiceDetail {...content} icon={Lightbulb} />;
}
