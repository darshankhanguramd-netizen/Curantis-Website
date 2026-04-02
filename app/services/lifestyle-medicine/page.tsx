import type { Metadata } from 'next';
import ServiceNotOfferedNotice from '@/components/ServiceNotOfferedNotice';

export const metadata: Metadata = {
  title: 'Lifestyle Medicine',
  description: 'Lifestyle medicine is not currently offered at Curantis Specialty Care.',
  robots: { index: false, follow: true },
};

export default function LifestyleMedicinePage() {
  return <ServiceNotOfferedNotice title="Lifestyle medicine" />;
}
