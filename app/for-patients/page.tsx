import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Clock, MapPin, CheckCircle2, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Patients',
  description: 'Information for patients about virtual specialist care at Curantis — what to expect, how to prepare, and what conditions we treat.',
};

export default function ForPatientsPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>For <span className="text-brand-600">Patients</span></h1>
            <p className="mt-6 text-xl text-navy-600">
              You&rsquo;ve been referred to Curantis Specialty Care by your doctor.
              Here&rsquo;s what to expect — from your first appointment to ongoing care.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-50 shadow-soft-lg">
            <Image
              src="/images/for-patients/for-patients-hero.png"
              alt="Patients enjoying a virtual specialist consultation from home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Clock, title: 'Shorter Wait Times', desc: 'Virtual delivery means you see a specialist faster — typically weeks, not months.' },
              { icon: MapPin, title: 'Care From Home', desc: 'No driving, no parking, no waiting rooms. Your appointment happens wherever you are.' },
              { icon: Shield, title: 'No Cost (OHIP)', desc: 'Specialist consultations are covered by OHIP. You pay nothing with a valid Ontario Health Card.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Conditions We Help With</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Type 1 and Type 2 diabetes',
                'Insulin management and optimization',
                'Hypoglycemia (low blood sugar episodes)',
                'Pre-diabetes and metabolic syndrome',
                'Asthma (difficult to control)',
                'COPD management',
                'Chronic cough',
                'Interstitial lung disease',
                'Nutrition counseling (diabetes-focused)',
                'Diabetes self-management education',
                'Metabolic health as part of diabetes care',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <span className="text-sm text-navy-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-8">What to Expect at Your Appointment</h2>
          <div className="space-y-6">
            {[
              { q: 'Before your visit', a: 'Our team will contact you to schedule your appointment and let you know what to have ready — medication list, recent lab results, glucose data, and your OHIP card.' },
              { q: 'During your visit', a: 'You\'ll meet with your specialist by secure video for 20–30 minutes. They\'ll review your health information, ask questions, discuss findings, and build a care plan with you.' },
              { q: 'After your visit', a: 'Your specialist sends a detailed summary and care plan to your family doctor. Prescriptions (if needed) go to your pharmacy electronically. Additional requisitions (labs and imaging) will be emailed to you directly. Follow-up visits are scheduled as needed.' },
              { q: 'Allied health services', a: 'If recommended, you can access dietitian, diabetes educator, or respiratory therapy sessions. These will be private-pay when available — contact us for updates and pricing.' },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <h4 className="font-display text-lg mb-2">{item.q}</h4>
                <p className="text-sm text-navy-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need a referral?', a: 'Yes. OHIP-covered specialist consultations require a referral from your family doctor or nurse practitioner. Some private-pay allied health services may not require a referral — contact us to confirm.' },
              { q: 'Is there a cost?', a: 'Specialist physician consultations are covered by OHIP at no cost to you. Allied health services (dietitian, CDE, respiratory therapy) will be private-pay when offered — contact us for current information.' },
              { q: 'What technology do I need?', a: 'A smartphone, tablet, or computer with a camera, microphone, and internet connection. We\'ll send you instructions on how to join your video visit.' },
              { q: 'Is my information secure?', a: 'Yes. We use PHIPA-compliant platforms and encrypted video. Your health information is protected under Ontario\'s privacy legislation. See our Privacy Policy for details.' },
              { q: 'Can I see a specialist if I live in rural Ontario?', a: 'Absolutely — that\'s a core reason we exist. Our virtual model is designed specifically to serve patients in rural, northern, and underserved communities across Ontario.' },
            ].map((item, i) => (
              <div key={i} className="border-b border-navy-100 pb-6">
                <h4 className="font-display text-lg mb-2">{item.q}</h4>
                <p className="text-sm text-navy-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Have More Questions?</h2>
          <p className="mt-4">We&rsquo;re happy to help. Reach out any time.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <a href="tel:+10000000000" className="btn-secondary">
              <Phone className="w-4 h-4 mr-2" /> (000) 000-0000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
