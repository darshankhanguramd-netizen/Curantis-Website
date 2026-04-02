import type { Metadata } from 'next';
import ServiceNotOfferedNotice from '@/components/ServiceNotOfferedNotice';

export const metadata: Metadata = {
  title: 'Weight Management',
  description: 'Weight management is not currently offered at Curantis Specialty Care.',
  robots: { index: false, follow: true },
};

export default function WeightManagementPage() {
  return <ServiceNotOfferedNotice title="Weight management" />;
}
