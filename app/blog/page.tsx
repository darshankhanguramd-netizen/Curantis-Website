import type { Metadata } from 'next';
import Image from 'next/image';
import ResourceTabs from '@/components/ResourceTabs';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Patient education and clinical resources from Curantis Specialty Care.',
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>
              <span className="text-brand-600">Resources</span>
            </h1>
            <p className="mt-4 text-lg text-navy-600">
              Health education and handouts from our specialists team — more content coming soon.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-50 shadow-soft-lg">
            <Image
              src="/images/resources-hero.png"
              alt="Patient resources portal on a tablet"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <ResourceTabs />
    </>
  );
}
