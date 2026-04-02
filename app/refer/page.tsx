'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Send, Download, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ReferPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Referring physician
    physicianName: '',
    cpsoNumber: '',
    ohipBillingNumber: '',
    clinicName: '',
    clinicPhone: '',
    clinicFax: '',
    physicianEmail: '',
    // Patient
    patientName: '',
    patientDOB: '',
    patientOHIP: '',
    patientPhone: '',
    patientEmail: '',
    patientAddress: '',
    // Referral details
    referralReason: '',
    serviceRequested: '',
    urgency: 'routine',
    clinicalHistory: '',
    currentMedications: '',
    relevantLabs: '',
    additionalNotes: '',
    // Consent
    consentConfirmed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to API endpoint
    console.log('Referral submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-white">
        <div className="container-wide max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-3xl">Referral Received</h1>
          <p className="mt-4 text-navy-600">
            Thank you. We have received your referral and will process it within 
            2–3 business days. A confirmation will be sent to the referring physician&rsquo;s 
            email address provided.
          </p>
          <p className="mt-4 text-sm text-navy-500">
            If the referral is marked urgent, our team will prioritize review within 24 hours.
          </p>
          <Link href="/" className="btn-primary mt-8">Return Home</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>Refer a <span className="text-brand-600">Patient</span></h1>
          <p className="mt-4 text-lg text-navy-600">
            Curantis Specialty Care accepts referrals from Ontario-licensed physicians and 
            nurse practitioners. Complete the online form below or download our referral 
            form for faxing.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#online-form" className="btn-primary text-sm">
              <Send className="w-4 h-4 mr-2" /> Submit Online
            </a>
            <a href="#download" className="btn-outline text-sm">
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Online Referral Form */}
      <section id="online-form" className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="bg-warm-50 border border-warm-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-warm-600 mt-0.5 shrink-0" />
            <div className="text-sm text-warm-800">
              <p className="font-medium">For referring physicians only</p>
              <p className="mt-1">
                This form is intended for licensed Ontario physicians and nurse practitioners. 
                Patients cannot self-refer. If you are a patient seeking care, please ask your 
                family doctor to submit a referral on your behalf.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Referring Physician */}
            <fieldset>
              <legend className="font-display text-2xl text-navy-900 mb-6">
                Referring Physician Information
              </legend>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="physicianName" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Physician Name *
                  </label>
                  <input type="text" id="physicianName" name="physicianName" required
                    value={formData.physicianName} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="cpsoNumber" className="block text-sm font-medium text-navy-700 mb-1.5">
                    CPSO Number *
                  </label>
                  <input type="text" id="cpsoNumber" name="cpsoNumber" required
                    placeholder="e.g. 123456"
                    value={formData.cpsoNumber} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="ohipBillingNumber" className="block text-sm font-medium text-navy-700 mb-1.5">
                    OHIP Billing Number *
                  </label>
                  <input type="text" id="ohipBillingNumber" name="ohipBillingNumber" required
                    value={formData.ohipBillingNumber} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="clinicName" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Clinic / Practice Name
                  </label>
                  <input type="text" id="clinicName" name="clinicName"
                    value={formData.clinicName} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="clinicPhone" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Phone *
                  </label>
                  <input type="tel" id="clinicPhone" name="clinicPhone" required
                    value={formData.clinicPhone} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="clinicFax" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Fax *
                  </label>
                  <input type="tel" id="clinicFax" name="clinicFax" required
                    value={formData.clinicFax} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="physicianEmail" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Email
                  </label>
                  <input type="email" id="physicianEmail" name="physicianEmail"
                    value={formData.physicianEmail} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
              </div>
            </fieldset>

            {/* Patient Information */}
            <fieldset>
              <legend className="font-display text-2xl text-navy-900 mb-6">
                Patient Information
              </legend>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Patient Full Name *
                  </label>
                  <input type="text" id="patientName" name="patientName" required
                    value={formData.patientName} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="patientDOB" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Date of Birth *
                  </label>
                  <input type="date" id="patientDOB" name="patientDOB" required
                    value={formData.patientDOB} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="patientOHIP" className="block text-sm font-medium text-navy-700 mb-1.5">
                    OHIP Number *
                  </label>
                  <input type="text" id="patientOHIP" name="patientOHIP" required
                    placeholder="1234-567-890-XX"
                    value={formData.patientOHIP} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="patientPhone" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Patient Phone *
                  </label>
                  <input type="tel" id="patientPhone" name="patientPhone" required
                    value={formData.patientPhone} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="patientEmail" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Patient Email
                  </label>
                  <input type="email" id="patientEmail" name="patientEmail"
                    value={formData.patientEmail} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" />
                </div>
              </div>
            </fieldset>

            {/* Referral Details */}
            <fieldset>
              <legend className="font-display text-2xl text-navy-900 mb-6">
                Referral Details
              </legend>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceRequested" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Service Requested *
                    </label>
                    <select id="serviceRequested" name="serviceRequested" required
                      value={formData.serviceRequested} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors cursor-pointer">
                      <option value="">Select a service</option>
                      <option value="diabetes">Diabetes Care (OHIP)</option>
                      <option value="endocrinology">Endocrinology (OHIP)</option>
                      <option value="respirology">Respirology (OHIP)</option>
                      <option value="weight-management">Weight Management (Private)</option>
                      <option value="lifestyle-medicine">Lifestyle Medicine (Private)</option>
                      <option value="internal-medicine">Internal Medicine (OHIP)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Urgency
                    </label>
                    <select id="urgency" name="urgency"
                      value={formData.urgency} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors cursor-pointer">
                      <option value="routine">Routine</option>
                      <option value="semi-urgent">Semi-Urgent (within 2 weeks)</option>
                      <option value="urgent">Urgent (within 48 hours)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="referralReason" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Reason for Referral *
                  </label>
                  <textarea id="referralReason" name="referralReason" required rows={3}
                    value={formData.referralReason} onChange={handleChange}
                    placeholder="Brief clinical question or reason for consultation"
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-y" />
                </div>
                <div>
                  <label htmlFor="clinicalHistory" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Relevant Clinical History
                  </label>
                  <textarea id="clinicalHistory" name="clinicalHistory" rows={3}
                    value={formData.clinicalHistory} onChange={handleChange}
                    placeholder="Relevant diagnoses, complications, comorbidities"
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-y" />
                </div>
                <div>
                  <label htmlFor="currentMedications" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Current Medications
                  </label>
                  <textarea id="currentMedications" name="currentMedications" rows={2}
                    value={formData.currentMedications} onChange={handleChange}
                    placeholder="List current medications and doses"
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-y" />
                </div>
                <div>
                  <label htmlFor="relevantLabs" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Recent Lab Results
                  </label>
                  <textarea id="relevantLabs" name="relevantLabs" rows={2}
                    value={formData.relevantLabs} onChange={handleChange}
                    placeholder="A1C, fasting glucose, PFTs, eGFR, etc."
                    className="w-full px-4 py-2.5 border border-navy-200 rounded-xl text-navy-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-y" />
                </div>
              </div>
            </fieldset>

            {/* Consent */}
            <fieldset>
              <div className="bg-navy-50 rounded-xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consentConfirmed" required
                    checked={formData.consentConfirmed} onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-navy-300 text-brand-600 focus:ring-brand-500 cursor-pointer" />
                  <span className="text-sm text-navy-700">
                    I confirm that this referral is being submitted by a licensed Ontario physician or 
                    nurse practitioner, that the patient has been informed of and consents to this referral, 
                    and that the information provided is accurate to the best of my knowledge. I understand 
                    that Curantis Specialty Care may use anonymized clinical data for research and quality 
                    improvement purposes as outlined in their{' '}
                    <Link href="/privacy" className="text-brand-600 hover:text-brand-800 underline">Privacy Policy</Link>.
                  </span>
                </label>
              </div>
            </fieldset>

            <button type="submit" className="btn-primary text-base w-full md:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Submit Referral
            </button>
          </form>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="section-padding bg-navy-50/50">
        <div className="container-wide max-w-3xl">
          <div className="card p-8 md:p-12 text-center">
            <FileText className="w-12 h-12 text-brand-600 mx-auto mb-4" />
            <h2>Prefer to Fax?</h2>
            <p className="mt-4 max-w-lg mx-auto">
              Download our referral form, complete it, and fax to{' '}
              <strong>(905) 555-0124</strong>. Referrals are typically processed within 
              2–3 business days.
            </p>
            <a
              href="/documents/curantis-referral-form.pdf"
              download
              className="btn-primary mt-8 inline-flex"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Referral Form (PDF)
            </a>
            <p className="mt-4 text-xs text-navy-500">
              PDF format — print, complete, sign, and fax to (905) 555-0124
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
