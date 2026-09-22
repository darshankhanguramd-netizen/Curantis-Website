import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Phone, FileText, Car, Accessibility, UserCheck, ClipboardList, Stethoscope, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fees & Payments',
  description: 'Private pay fees for medical forms, notes, and consultations at Curantis Specialty Care.',
};

const feeItems = [
  {
    icon: Stethoscope,
    title: 'Private Pay New Consultation',
    description: 'Initial specialist consultation for non-OHIP or uninsured services.',
    price: 200,
  },
  {
    icon: Stethoscope,
    title: 'Private Pay Follow-Up Appointment',
    description: 'Follow-up specialist visit for non-OHIP or uninsured services.',
    price: 125,
  },
  {
    icon: ClipboardList,
    title: 'Prior Authorization Form',
    description: 'Completion of insurance or drug plan prior authorization paperwork.',
    price: 50,
  },
  {
    icon: FileText,
    title: 'Doctor Note',
    description: 'Physician note for work, school, or other purposes.',
    price: 30,
  },
  {
    icon: Car,
    title: 'Drivers Medical Form',
    description: 'Completion of a Ministry of Transportation drivers medical form.',
    price: 75,
  },
  {
    icon: UserCheck,
    title: 'Attending Physician Statement',
    description: 'Completion of an attending physician statement for insurance purposes.',
    price: 125,
  },
  {
    icon: Accessibility,
    title: 'Disability Tax Credit Form',
    description: 'Completion of the CRA Disability Tax Credit Certificate (T2201).',
    price: 125,
  },
  {
    icon: AlertCircle,
    title: 'Missed Appointment Fee',
    description: 'Fee applied when an appointment is missed without 24 hours notice.',
    price: 100,
  },
];

export default function PaymentsPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>Fees &amp; <span className="text-brand-600">Payments</span></h1>
          <p className="mt-4 text-lg text-navy-600">
            Private pay fees for medical forms, notes, and uninsured services.
            OHIP-covered specialist consultations remain at no cost to eligible Ontario patients.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="container-wide py-4 flex items-start gap-3">
          <Clock className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-800">Online payments coming soon</p>
            <p className="text-sm text-amber-700 mt-0.5">
              Our secure online payment portal is being set up. In the meantime, please contact our
              office to arrange payment by phone or e-transfer.
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">

          {/* Fee cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {feeItems.map((item, i) => (
              <div key={i} className="card p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base text-navy-900">{item.title}</h3>
                    <span className="text-lg font-semibold text-brand-600 shrink-0">${item.price}</span>
                  </div>
                  <p className="text-sm text-navy-500 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment methods / contact */}
          <div className="bg-navy-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl mb-4">How to Pay</h2>
            <p className="text-navy-600 text-sm mb-6">
              While our online payment portal is being finalized, we accept the following:
            </p>
            <ul className="space-y-2 text-sm text-navy-700">
              {[
                'E-transfer to payments@curantiscare.ca',
                'Debit or credit card via secure link or via the website',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 mb-8">
            <p className="text-sm font-medium text-brand-800 mb-2">Please note</p>
            <ul className="space-y-1.5 text-sm text-brand-700">
              <li>• Missed appointment fees apply when cancellation is not received at least 24 hours in advance.</li>
              <li>• Form completion fees apply regardless of the outcome of the assessment.</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-navy-600 mb-4">Questions about fees or payment? We&rsquo;re happy to help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <a href="tel:+12892953831" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2" /> (289) 295-3831
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
