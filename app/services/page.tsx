import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, ArrowRight } from 'lucide-react';
import Pancreas from '@/components/icons/Pancreas';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Virtual specialist diabetes, endocrinology, and respirology care. OHIP-covered consultations plus private allied health options.',
};

const services = [
  {
    icon: Pancreas,
    title: 'Diabetes Care',
    href: '/services/diabetes',
    tag: 'OHIP Covered',
    description:
      'Comprehensive management of Type 1 and Type 2 diabetes, including insulin optimization, hypoglycemia management, continuous glucose monitoring interpretation, and complex diabetes co-management.',
    conditions: [
      'Type 1 Diabetes',
      'Type 2 Diabetes',
      'Hypoglycemia assessment',
      'Pre-diabetes / metabolic syndrome',
      'Gestational diabetes follow-up',
      'Complex multi-drug regimen optimization',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Respirology',
    href: '/services/respirology',
    tag: 'OHIP Covered',
    description:
      'Assessment and management of chronic respiratory conditions through virtual consultation, with pulmonary function test interpretation and treatment optimization.',
    conditions: [
      'Asthma (difficult-to-control)',
      'COPD management',
      'Interstitial Lung Disease',
      'Chronic cough assessment',
      'Inhaler technique optimization',
      'Spirometry interpretation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>
              Our <span className="text-brand-600">Services</span>
            </h1>
            <p className="mt-6 text-xl text-navy-600">
              Specialist diabetes, endocrinology, and respirology consultations covered by OHIP,
              plus allied health services available through private pay, Health Spending Accounts,
              or employer benefits.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-50 shadow-soft-lg">
            <Image
              src="/images/services-hero.png"
              alt="Virtual specialist care services including diabetes, respirology and more"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide space-y-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
              id={service.href.split('/').pop()}
            >
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h2 className="text-3xl mb-4">{service.title}</h2>
                <p className="text-navy-600 mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="btn-primary text-sm"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h4 className="font-display text-base mb-4 text-navy-800">
                    Conditions & Services
                  </h4>
                  <ul className="space-y-2.5">
                    {service.conditions.map((c, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-navy-600">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < services.length - 1 && <hr className="lg:col-span-5 border-navy-100" />}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Not sure which service applies?</h2>
          <p className="mt-4">
            Send us a referral and our team will triage to the appropriate specialist or 
            allied health provider.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/refer" className="btn-primary">Refer a Patient</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
