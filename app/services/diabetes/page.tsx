import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diabetes Care',
  description: 'Virtual diabetes specialist care for Type 1, Type 2, insulin management, and complex diabetes. OHIP-covered consultations across Ontario.',
};

export default function DiabetesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Activity className="w-4 h-4" /> OHIP Covered
            </div>
            <h1>Diabetes <span className="text-brand-600">Care</span></h1>
            <p className="mt-6 text-lg text-navy-600">
              Expert virtual consultations for Type 1 and Type 2 diabetes, insulin management, 
              hypoglycemia, and complex metabolic care — delivered by a board-certified endocrinologist.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/refer" className="btn-primary">Refer a Patient <ArrowRight className="w-4 h-4 ml-2" /></Link>
              <Link href="/how-it-works" className="btn-secondary">How It Works</Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-50 to-warm-50 flex items-center justify-center">
            <p className="text-navy-400 text-sm">[Image: Lifestyle diabetes management]</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Type 1 Diabetes', desc: 'Insulin optimization, pump management, CGM interpretation, and acute complication prevention.' },
              { title: 'Type 2 Diabetes', desc: 'Medication titration, A1C reduction strategies, and cardiovascular risk management.' },
              { title: 'Insulin Management', desc: 'Basal-bolus optimization, sliding scale transitions, and insulin pump assessment.' },
              { title: 'Complex Diabetes', desc: 'Multi-drug regimens, recurrent DKA, renal dosing adjustments, and steroid-induced diabetes.' },
              { title: 'Hypoglycemia', desc: 'Assessment of recurrent hypoglycemia, medication adjustment, and self-management education.' },
              { title: 'Pre-Diabetes', desc: 'Risk stratification, lifestyle intervention, and pharmacologic prevention strategies.' },
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
                'A1C persistently above target despite primary care management',
                'New Type 1 diabetes diagnoses requiring specialist initiation',
                'Complex insulin regimens needing optimization',
                'Recurrent hypoglycemia or diabetic ketoacidosis',
                'Diabetes with multiple comorbidities',
                'Pre-diabetes with high cardiovascular risk',
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
                'Initial consultation: 30–45 minutes by secure video',
                'Pre-visit intake including recent labs and glucose data',
                'Detailed care plan shared with your referring physician',
                'Follow-up visits for ongoing management as needed',
                'Allied health referrals (dietitian, CDE) when appropriate',
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
