import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Weight Management',
  description: 'Medical weight management with physician oversight, dietitian support, and pharmacotherapy. Private-pay and HSA accepted.',
};

export default function WeightManagementPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-warm-100 text-warm-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Scale className="w-4 h-4" /> Private / HSA / Benefits
            </div>
            <h1>Weight <span className="text-brand-600">Management</span></h1>
            <p className="mt-6 text-lg text-navy-600">
              A physician-led, evidence-based approach to medical weight management combining 
              specialist oversight, registered dietitian support, pharmacotherapy (where 
              clinically appropriate), and behavioural coaching for sustainable outcomes.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="btn-primary">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
              <Link href="/fees" className="btn-secondary">View Fees</Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-warm-50 to-brand-50 flex items-center justify-center">
            <p className="text-navy-400 text-sm">[Image: Healthy lifestyle / wellness]</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Medical Assessment', desc: 'Comprehensive metabolic evaluation including lab work, body composition, comorbidity screening, and medication review.' },
              { title: 'Pharmacotherapy', desc: 'When clinically indicated, access to GLP-1 receptor agonist therapy and other evidence-based weight management medications under physician supervision.' },
              { title: 'Nutrition Counseling', desc: 'One-on-one sessions with a Registered Dietitian for individualized meal planning, caloric strategies, and sustainable dietary change.' },
              { title: 'Behavioural Coaching', desc: 'Goal-setting, habit formation, and motivational strategies to build long-term lifestyle changes that stick.' },
              { title: 'Ongoing Monitoring', desc: 'Regular follow-up visits to track progress, adjust treatment plans, monitor lab markers, and manage side effects.' },
              { title: 'Post-Bariatric Support', desc: 'Follow-up care for patients who have undergone bariatric surgery, including nutritional monitoring and metabolic optimization.' },
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
        <div className="container-wide max-w-3xl">
          <h2 className="mb-6">Who This Is For</h2>
          <ul className="space-y-3">
            {[
              'Adults with a BMI ≥ 30 (or ≥ 27 with weight-related comorbidities)',
              'Patients with obesity-related Type 2 diabetes, hypertension, or dyslipidemia',
              'Individuals who have not achieved goals with diet and exercise alone',
              'Patients interested in GLP-1 RA pharmacotherapy under medical supervision',
              'Post-bariatric surgery patients requiring ongoing metabolic follow-up',
              'Anyone seeking a structured, physician-supervised weight management program',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                <span className="text-navy-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-warm-50 border border-warm-200 rounded-xl p-6">
            <p className="text-sm text-warm-800">
              <strong>Note:</strong> Weight management services are not covered by OHIP. 
              Fees are payable by the patient via credit card, debit, e-transfer, or Health 
              Spending Account. Many employer extended health plans cover Registered Dietitian 
              services. See our <Link href="/fees" className="text-brand-600 underline hover:text-brand-800">Fee Schedule</Link> for details.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Interested in Our Weight Management Program?</h2>
          <p className="mt-4">Contact us to learn more or to schedule your initial assessment.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/fees" className="btn-secondary">View Fees</Link>
          </div>
        </div>
      </section>
    </>
  );
}
