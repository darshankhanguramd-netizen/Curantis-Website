import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Clock, CheckCircle2, ArrowRight, Download, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Providers',
  description: 'Referral information for physicians and NPs. Fast virtual specialist access for your patients — diabetes, endocrinology, respirology, and more.',
};

export default function ForProvidersPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>For Referring <span className="text-brand-600">Physicians</span></h1>
            <p className="mt-6 text-lg text-navy-600">
              Fast, reliable virtual specialist access for your patients. Clear communication. 
              Detailed consult notes. No access bonuses impacted.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/refer" className="btn-primary">
                <Send className="w-4 h-4 mr-2" /> Refer Online
              </Link>
              <Link href="/refer#download" className="btn-outline">
                <Download className="w-4 h-4 mr-2" /> Download Form
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy-50 to-brand-50 flex items-center justify-center">
            <p className="text-navy-400 text-sm">[Image: Professional clinical workspace]</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12">Why Refer to Curantis?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Faster Access', desc: 'Virtual delivery means shorter wait times for your patients — weeks, not the typical 6–12 month specialist queue.' },
              { icon: FileText, title: 'Clear Communication', desc: 'Detailed consult notes and care plans sent back to you after every visit. No guessing what happened.' },
              { icon: CheckCircle2, title: 'FHO-Friendly', desc: 'Referral-only specialist model — no patient self-referral, no impact on your Family Health Organization access bonuses.' },
            ].map((item, i) => (
              <div key={i} className="card p-8">
                <item.icon className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-display text-xl mb-2">{item.title}</h4>
                <p className="text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-8">How to Refer</h2>
          <div className="space-y-6">
            <div className="card p-6 flex gap-6 items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                <Send className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Option 1: Online Referral Form</h4>
                <p className="text-sm text-navy-600 mb-3">
                  Complete our secure online form with patient demographics, clinical question, 
                  history, medications, and recent labs. Requires your CPSO number and OHIP 
                  billing number.
                </p>
                <Link href="/refer" className="text-brand-600 hover:text-brand-800 text-sm font-medium inline-flex items-center gap-1">
                  Go to Online Form <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="card p-6 flex gap-6 items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Option 2: Download &amp; Fax</h4>
                <p className="text-sm text-navy-600 mb-3">
                  Download our referral form (PDF), complete it, sign, and fax to 
                  <strong> (905) 555-0124</strong>. Same information as the online form.
                </p>
                <a href="/documents/curantis-referral-form.pdf" download className="text-brand-600 hover:text-brand-800 text-sm font-medium inline-flex items-center gap-1">
                  Download PDF <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-6">What to Include in Your Referral</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Your CPSO number and OHIP billing number',
              'Clinic name, phone, fax, and email',
              'Patient demographics and OHIP number',
              'Clinical question / reason for referral',
              'Relevant medical history and diagnoses',
              'Current medication list with doses',
              'Recent lab results (A1C, eGFR, lipids, PFTs)',
              'Glucose monitoring data (if applicable)',
              'Urgency level (routine, semi-urgent, urgent)',
              'Any previous specialist involvement',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                <span className="text-sm text-navy-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-6">What You&rsquo;ll Receive Back</h2>
          <ul className="space-y-3">
            {[
              'Acknowledgment of referral within 2–3 business days (24 hours for urgent)',
              'Detailed consultation note after the patient\'s visit',
              'Clear care plan with medication recommendations',
              'Follow-up schedule and discharge plan when appropriate',
              'Direct communication channel for questions about shared patients',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                <span className="text-navy-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-brand-600 text-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-white text-3xl">Ready to Refer?</h2>
          <p className="mt-4 text-brand-100 text-lg">
            Online form takes under 5 minutes. Or download the PDF and fax it over.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/refer" className="bg-white text-brand-700 font-medium px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
              Refer Online
            </Link>
            <Link href="/refer#download" className="border-2 border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors">
              Download Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
