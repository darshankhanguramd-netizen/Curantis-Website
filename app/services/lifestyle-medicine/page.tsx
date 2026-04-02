import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lifestyle Medicine',
  description: 'Evidence-based lifestyle medicine for metabolic health, nutrition, stress management, and chronic disease prevention. Virtual care across Ontario.',
};

export default function LifestyleMedicinePage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-warm-100 text-warm-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Heart className="w-4 h-4" /> Private / HSA / Benefits
            </div>
            <h1>Lifestyle <span className="text-brand-600">Medicine</span></h1>
            <p className="mt-6 text-lg text-navy-600">
              Evidence-based lifestyle interventions that target the root causes of chronic 
              disease — nutrition, physical activity, sleep, stress, and behaviour — to prevent, 
              treat, and reverse metabolic conditions.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="btn-primary">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
              <Link href="/fees" className="btn-secondary">View Fees</Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sage-50 to-brand-50 flex items-center justify-center">
            <p className="text-navy-400 text-sm">[Image: Wellness / healthy living]</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Nutrition Counseling', desc: 'Individualized nutrition plans with a Registered Dietitian, tailored to your metabolic profile, preferences, and goals.' },
              { title: 'Exercise Prescription', desc: 'Safe, evidence-based physical activity recommendations considering your medical conditions and fitness level.' },
              { title: 'Sleep Optimization', desc: 'Assessment and strategies for improving sleep quality — a critical and often overlooked driver of metabolic health.' },
              { title: 'Stress Management', desc: 'Practical tools for managing chronic stress, which directly impacts blood sugar, weight, and cardiovascular risk.' },
              { title: 'Chronic Disease Prevention', desc: 'Targeted interventions for metabolic syndrome, pre-diabetes, and cardiovascular risk reduction.' },
              { title: 'Behaviour Change Coaching', desc: 'Structured coaching using motivational interviewing and habit science to support lasting change.' },
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
              'Individuals with metabolic syndrome or pre-diabetes seeking non-pharmacologic strategies',
              'Patients with Type 2 diabetes looking to complement medical treatment with lifestyle change',
              'Anyone managing weight-related comorbidities (hypertension, dyslipidemia)',
              'Patients seeking structured support for sustainable dietary and exercise habits',
              'Individuals experiencing fatigue, poor sleep, or chronic stress impacting their health',
              'Those interested in a proactive, prevention-focused approach to chronic disease',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                <span className="text-navy-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Ready to Take a Different Approach?</h2>
          <p className="mt-4">Contact us to learn more about our lifestyle medicine programs.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/fees" className="btn-secondary">View Fees</Link>
          </div>
        </div>
      </section>
    </>
  );
}
