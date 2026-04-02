import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CreditCard, Receipt, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fee Schedule',
  description: 'Fee schedule for Curantis Specialty Care. OHIP-covered specialist consultations and private allied health service pricing.',
};

const ohipServices = [
  { service: 'Initial Specialist Consultation — Endocrinology', fee: 'OHIP', code: 'A415' },
  { service: 'Follow-Up Consultation — Endocrinology', fee: 'OHIP', code: 'A416' },
  { service: 'Initial Specialist Consultation — Internal Medicine', fee: 'OHIP', code: 'A415' },
  { service: 'Follow-Up Consultation — Internal Medicine', fee: 'OHIP', code: 'A416' },
  { service: 'Initial Specialist Consultation — Respirology', fee: 'OHIP', code: 'A415' },
  { service: 'Follow-Up Consultation — Respirology', fee: 'OHIP', code: 'A416' },
  { service: 'Complex Diabetes Management (extended consult)', fee: 'OHIP', code: 'K730' },
  { service: 'Telemedicine Premium (video consultation)', fee: 'OHIP', code: 'K083' },
];

const privateServices = [
  {
    category: 'Registered Dietitian',
    items: [
      { service: 'Initial Nutrition Assessment (60 min)', fee: '$175' },
      { service: 'Follow-Up Nutrition Session (30 min)', fee: '$95' },
      { service: 'Meal Planning Package (4 sessions)', fee: '$340' },
      { service: 'Diabetes-Focused Nutrition Program (6 sessions)', fee: '$480' },
    ],
  },
  {
    category: 'Certified Diabetes Educator (CDE)',
    items: [
      { service: 'Initial Diabetes Education Session (60 min)', fee: '$150' },
      { service: 'Follow-Up Education Session (30 min)', fee: '$85' },
      { service: 'Insulin Self-Management Training (2 sessions)', fee: '$250' },
      { service: 'CGM/Pump Onboarding & Education (60 min)', fee: '$175' },
    ],
  },
  {
    category: 'Respiratory Therapy',
    items: [
      { service: 'Inhaler Technique Assessment & Training (30 min)', fee: '$90' },
      { service: 'Pulmonary Rehabilitation Session (45 min)', fee: '$120' },
      { service: 'COPD Self-Management Education (60 min)', fee: '$140' },
      { service: 'Respiratory Therapy Package (4 sessions)', fee: '$400' },
    ],
  },
  {
    category: 'Weight Management Program',
    items: [
      { service: 'Initial Medical Weight Management Assessment (60 min)', fee: '$250' },
      { service: 'Follow-Up Weight Management Visit (30 min)', fee: '$125' },
      { service: 'Comprehensive 12-Week Program (physician + dietitian)', fee: '$1,450' },
      { service: 'GLP-1 RA Medication Monitoring Visit (15 min)', fee: '$75' },
    ],
  },
  {
    category: 'Lifestyle Medicine & Coaching',
    items: [
      { service: 'Lifestyle Medicine Assessment (60 min)', fee: '$200' },
      { service: 'Behavioural Change Coaching Session (45 min)', fee: '$120' },
      { service: 'Sleep & Stress Optimization Consultation (45 min)', fee: '$130' },
      { service: 'Metabolic Health Package (8 sessions)', fee: '$850' },
    ],
  },
  {
    category: 'Administrative & Other',
    items: [
      { service: 'Missed Appointment / No-Show Fee', fee: '$50' },
      { service: 'Medical Letter / Form Completion (non-OHIP)', fee: '$50–$150' },
      { service: 'Copy of Medical Records (per request)', fee: '$30' },
      { service: 'Late Cancellation Fee (< 24 hours notice)', fee: '$50' },
    ],
  },
];

export default function FeesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>Fee <span className="text-brand-600">Schedule</span></h1>
          <p className="mt-4 text-lg text-navy-600">
            Specialist physician consultations are covered by OHIP at no cost to patients. 
            Allied health and lifestyle medicine services are available through private 
            payment, Health Spending Accounts, or employer benefits.
          </p>
        </div>
      </section>

      {/* OHIP Services */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-7 h-7 text-brand-600" />
            <h2 className="text-2xl">OHIP-Insured Services</h2>
          </div>
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 mb-8">
            <p className="text-sm text-brand-800">
              The following services are billed directly to OHIP. There is <strong>no cost</strong> to 
              patients with valid Ontario Health Card coverage. A physician referral is required.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-navy-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-navy-900">Service</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-navy-900 text-right">Fee</th>
                  <th className="py-3 text-sm font-semibold text-navy-900 text-right">Billing Code</th>
                </tr>
              </thead>
              <tbody>
                {ohipServices.map((s, i) => (
                  <tr key={i} className="border-b border-navy-100">
                    <td className="py-3 pr-4 text-sm text-navy-700">{s.service}</td>
                    <td className="py-3 pr-4 text-sm text-brand-600 font-medium text-right">{s.fee}</td>
                    <td className="py-3 text-sm text-navy-500 text-right font-mono">{s.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Private Services */}
      <section className="section-padding bg-navy-50/50">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="w-7 h-7 text-brand-600" />
            <h2 className="text-2xl">Private-Pay &amp; Allied Health Services</h2>
          </div>
          <div className="bg-warm-50 border border-warm-200 rounded-xl p-5 mb-8">
            <p className="text-sm text-warm-800">
              The following services are <strong>not covered by OHIP</strong>. Payment is accepted 
              via credit card, debit, e-transfer, or direct Health Spending Account (HSA) billing. 
              Many employer extended health plans cover dietitian, diabetes education, and respiratory 
              therapy services — check with your benefits provider. Tax-eligible receipts are provided.
            </p>
          </div>

          <div className="space-y-10">
            {privateServices.map((cat, i) => (
              <div key={i}>
                <h3 className="text-xl mb-4 pb-2 border-b border-navy-200">{cat.category}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody>
                      {cat.items.map((item, j) => (
                        <tr key={j} className="border-b border-navy-100">
                          <td className="py-3 pr-4 text-sm text-navy-700">{item.service}</td>
                          <td className="py-3 text-sm font-semibold text-navy-900 text-right whitespace-nowrap">
                            {item.fee}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Coverage Info */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="mb-8">Payment &amp; Coverage Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <Receipt className="w-8 h-8 text-brand-600 mb-4" />
              <h4 className="font-display text-lg mb-2">Tax Receipts</h4>
              <p className="text-sm text-navy-600">
                Receipts for all private-pay services are provided and may be eligible 
                for medical expense tax credits or HSA reimbursement.
              </p>
            </div>
            <div className="card p-6">
              <CreditCard className="w-8 h-8 text-brand-600 mb-4" />
              <h4 className="font-display text-lg mb-2">Payment Methods</h4>
              <p className="text-sm text-navy-600">
                We accept Visa, Mastercard, Interac debit, e-transfer, and direct 
                billing to select HSA providers. Payment is due at time of service.
              </p>
            </div>
            <div className="card p-6">
              <HelpCircle className="w-8 h-8 text-brand-600 mb-4" />
              <h4 className="font-display text-lg mb-2">Benefits Coverage</h4>
              <p className="text-sm text-navy-600">
                Many employer plans cover dietitian, CDE, and respiratory therapy 
                services. We recommend verifying coverage with your benefits provider 
                before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Questions About Fees?</h2>
          <p className="mt-4">
            Our team can help you understand your coverage options and what to expect.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/for-patients" className="btn-secondary">Patient Info</Link>
          </div>
        </div>
      </section>
    </>
  );
}
