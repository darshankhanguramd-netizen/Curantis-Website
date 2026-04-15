import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Respirology',
  description: 'Virtual respirology consultations for asthma, COPD, interstitial lung disease, and chronic cough. OHIP-covered care across Ontario.',
};

export default function RespirologPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Stethoscope className="w-4 h-4" /> OHIP Covered
            </div>
            <h1><span className="text-primary-500">Respirology Care</span></h1>
            <p className="mt-6 text-lg text-navy-600">
              Assessment and management of chronic respiratory conditions through secure 
              virtual consultations — including inhaler optimization, spirometry interpretation, 
              and long-term disease management.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/refer" className="btn-primary">Refer a Patient <ArrowRight className="w-4 h-4 ml-2" /></Link>
              <Link href="/how-it-works" className="btn-secondary">How It Works</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-50 shadow-soft-lg">
            <Image
              src="/images/services/respirology-care.png"
              alt="Respiratory care consultation and inhaler management"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Asthma', desc: 'Difficult-to-control asthma, inhaler optimization, action plan development, and biologic eligibility assessment.' },
              { title: 'COPD', desc: 'Staging, pharmacotherapy optimization, exacerbation prevention, and pulmonary rehabilitation referral.' },
              { title: 'Interstitial Lung Disease', desc: 'Diagnostic workup coordination, monitoring, and treatment planning for ILD subtypes.' },
              { title: 'Chronic Cough', desc: 'Systematic evaluation of persistent cough lasting more than 8 weeks with targeted treatment.' },
              { title: 'Inhaler Technique', desc: 'Device selection, technique assessment, and switching guidance for optimal drug delivery.' },
              { title: 'Spirometry Interpretation', desc: 'Expert review and interpretation of pulmonary function tests with clinical correlation.' },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <h4 className="font-display text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-wide grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6">Who Should Be Referred</h2>
            <ul className="space-y-3">
              {[
                'Asthma not controlled despite appropriate inhaler therapy',
                'COPD with frequent exacerbations or diagnostic uncertainty',
                'Suspected interstitial lung disease',
                'Chronic cough lasting > 8 weeks without clear etiology',
                'Need for biologic therapy assessment',
                'Spirometry results requiring specialist interpretation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6">What to Expect</h2>
            <ul className="space-y-3">
              {[
                'Initial consultation: 20–30 minutes by secure video',
                'Follow-up visits: typically about 15 minutes by secure video (as clinically needed)',
                'Medication review and inhaler technique assessment',
                'Detailed consult note and care plan to referring physician',
                'When labs or imaging are ordered, requisitions are emailed to you',
                'Respiratory therapy referrals when appropriate',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Ready to Refer?</h2>
          <p className="mt-4">Submit a referral online or download our referral form for faxing.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/refer" className="btn-primary">Refer a Patient</Link>
            <Link href="/refer#download" className="btn-outline">Download Referral Form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
