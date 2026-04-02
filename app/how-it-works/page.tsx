import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ClipboardList, Video, Heart, RefreshCw, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'How virtual specialist care works at Curantis — from physician referral to ongoing management, in five simple steps.',
};

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Physician Referral',
    description: 'Your family doctor or nurse practitioner submits a referral through our online form or by fax. The referral includes your clinical question, relevant history, current medications, and recent lab results.',
    detail: 'We accept referrals from any Ontario-licensed physician or NP. Referrals are typically reviewed within 2–3 business days. Urgent referrals are triaged within 24 hours.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Intake & Preparation',
    description: 'Our team contacts you to schedule your appointment and collect any additional information — recent glucose data, pulmonary function tests, imaging results, or medication lists.',
    detail: 'You\'ll receive a confirmation with instructions on how to join your virtual visit, what technology you\'ll need, and what to have ready for your consultation.',
  },
  {
    icon: Video,
    step: '03',
    title: 'Virtual Consultation',
    description: 'Meet with your specialist by secure video. This is a real clinical consultation — your specialist reviews your data, discusses your health concerns, and works with you to develop a plan.',
    detail: 'Initial consultations are typically 30–45 minutes. All you need is a device with a camera, a microphone, and a stable internet connection. A private, quiet space is recommended.',
  },
  {
    icon: Heart,
    step: '04',
    title: 'Care Plan & Communication',
    description: 'Your specialist develops a detailed care plan including medication changes, lifestyle recommendations, and any further investigations. A clear consult note is sent to your referring physician.',
    detail: 'Prescriptions (if needed) are sent electronically to your pharmacy. Your family doctor receives a full summary so there are no gaps in communication.',
  },
  {
    icon: RefreshCw,
    step: '05',
    title: 'Ongoing Follow-Up',
    description: 'For chronic conditions, follow-up appointments are scheduled as clinically appropriate — all virtual, all from home. Allied health services (dietitian, CDE, respiratory therapy) are available when needed.',
    detail: 'Follow-ups are typically 15–20 minutes. When your condition is stable and goals are met, you\'ll be transitioned back to your family physician with a discharge summary.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>How Virtual Care <span className="text-brand-600">Works</span></h1>
          <p className="mt-6 text-xl text-navy-600">
            From referral to ongoing management — a clear, simple process designed to 
            respect your time and keep you connected with your care team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="space-y-16">
            {steps.map((s, i) => (
              <div key={i} className="relative pl-20">
                <div className="absolute left-0 top-0">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute top-16 left-7 w-px h-16 bg-brand-200" />
                  )}
                </div>
                <div className="text-sm font-semibold text-brand-500 mb-1">Step {s.step}</div>
                <h3 className="text-2xl mb-3">{s.title}</h3>
                <p className="text-navy-600 mb-3">{s.description}</p>
                <p className="text-sm text-navy-500">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-8">What You&rsquo;ll Need</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Technology', desc: 'A smartphone, tablet, or computer with a camera, microphone, and internet connection.' },
              { title: 'Environment', desc: 'A private, quiet, well-lit space where you can speak openly about your health.' },
              { title: 'Documents', desc: 'Have your medication list, recent lab results, and any glucose/respiratory data handy.' },
              { title: 'OHIP Card', desc: 'Your valid Ontario Health Card — please have it available for verification.' },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <h4 className="font-display text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Ready to Get Started?</h2>
          <p className="mt-4">Ask your family doctor to send us a referral, or contact us with questions.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/refer" className="btn-primary">Refer a Patient</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
