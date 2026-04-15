import Link from 'next/link';
import { FileText, Download, AlertCircle } from 'lucide-react';

export default function ReferPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>
            Refer a <span className="text-brand-600">Patient</span>
          </h1>
          <p className="mt-4 text-lg text-navy-600">
            Curantis Specialty Care accepts referrals from Ontario-licensed physicians and nurse
            practitioners. Download our referral form, complete it, and fax it to the number below.
          </p>
          <div className="mt-6">
            <a href="#download" className="btn-primary text-sm inline-flex">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section id="download" className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="bg-warm-50 border border-warm-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-warm-600 mt-0.5 shrink-0" />
            <div className="text-sm text-warm-800">
              <p className="font-medium">For referring physicians only</p>
              <p className="mt-1">
                Referrals must come from a licensed Ontario physician or nurse practitioner. Patients
                cannot self-refer. If you are a patient, please ask your family doctor to submit a
                referral on your behalf.
              </p>
            </div>
          </div>

          <div className="card p-8 md:p-12 text-center">
            <FileText className="w-12 h-12 text-brand-600 mx-auto mb-4" />
            <h2 className="font-display text-2xl text-navy-900">Download &amp; fax</h2>
            <p className="mt-4 max-w-lg mx-auto text-navy-600">
              Download our referral form, complete it, and fax to{' '}
              <strong>(289) 644-0454</strong>. Referrals are typically processed within 2–3 business
              days.
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
              PDF format — print, complete, sign, and fax to (289) 644-0454
            </p>
          </div>

          <p className="mt-10 text-center text-sm text-navy-500">
            Questions?{' '}
            <Link href="/contact" className="text-brand-600 hover:text-brand-800 font-medium">
              Contact us
            </Link>
            {' · '}
            <Link href="/for-providers" className="text-brand-600 hover:text-brand-800 font-medium">
              Information for providers
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
