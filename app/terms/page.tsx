import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Curantis Specialty Care virtual health services in Ontario.',
};

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <h1 className="text-3xl md:text-4xl mb-2">Terms of Service</h1>
        <p className="text-sm text-navy-500 mb-12">
          Last updated: April 2026 &middot; Effective: April 2026
        </p>

        <div className="prose-curantis space-y-8">
          <div>
            <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the services 
              provided by Curantis Specialty Care, operated by Darshan Khangura Medicine 
              Professional Corporation (&ldquo;Curantis,&rdquo; &ldquo;we,&rdquo; 
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;), including our website 
              (curantiscare.ca), virtual consultation services, online referral system, and 
              any allied health services offered through the clinic. By accessing our services 
              or using our website, you agree to be bound by these Terms. If you do not agree, 
              please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">2. Description of Services</h2>
            <p>
              Curantis Specialty Care is a virtual multi-specialty clinic providing physician-led 
              specialist consultations and allied health services to patients in Ontario, Canada. 
              Our services include:
            </p>
            <p>
              <strong>OHIP-Insured Services:</strong> Specialist physician consultations in 
              Internal Medicine, Endocrinology &amp; Metabolism, Obesity Medicine, and Respirology. These services 
              are billed directly to the Ontario Health Insurance Plan and are provided at no 
              cost to eligible Ontario residents with valid OHIP coverage.
            </p>
            <p>
              <strong>Private-Pay Services:</strong> Allied health services including, but not
              limited to, Registered Dietitian consultations, Certified Diabetes Educator
              sessions, respiratory therapy, and nutrition counseling. These services are not
              covered by OHIP and are payable by the patient through personal payment, Health
              Spending Accounts (HSA), or extended health benefits plans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">3. Eligibility</h2>
            <p>
              OHIP-insured specialist consultations are available to individuals who hold a valid 
              Ontario Health Card and have been referred by an Ontario-licensed physician or nurse 
              practitioner. Patients must reside in Ontario at the time of service.
            </p>
            <p>
              Private-pay services are available to any individual in Ontario regardless of OHIP 
              status, subject to clinical appropriateness as determined by the treating provider.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">4. Referral Requirements</h2>
            <p>
              All OHIP-insured specialist consultations require a referral from a licensed 
              Ontario physician or nurse practitioner. Referrals must include the referring 
              provider&rsquo;s CPSO registration number and OHIP billing number. We do not 
              accept patient self-referrals for OHIP-insured services. Certain private-pay 
              allied health services may be accessed without a physician referral, as indicated 
              on our website or at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">5. Virtual Care</h2>
            <p>
              Our services are delivered primarily through secure virtual (video) consultations. 
              By participating in virtual care, you acknowledge and agree to the following:
            </p>
            <p>
              Virtual care has inherent limitations compared to in-person examinations. The 
              physician may not be able to perform a complete physical examination and may 
              recommend an in-person visit or referral for certain findings. You are responsible 
              for ensuring you have adequate internet connectivity, a private and quiet location, 
              and a device with camera and microphone capabilities. In the event of a medical 
              emergency, you should call 911 or proceed to the nearest emergency department. 
              Virtual care is not intended for emergency or life-threatening situations.
            </p>
            <p>
              Our virtual care platform uses encryption and security measures compliant with 
              Ontario&rsquo;s Personal Health Information Protection Act (PHIPA). However, no 
              electronic communication system is entirely secure. By consenting to virtual care, 
              you accept this inherent risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">6. Fees and Payment</h2>
            <p>
              <strong>OHIP-Insured Services:</strong> There is no fee to patients for 
              OHIP-insured specialist consultations. These services are billed directly to 
              OHIP by the attending physician. Patients are responsible for ensuring their 
              OHIP coverage is valid and active at the time of their appointment. If OHIP 
              coverage is found to be invalid, the patient may be responsible for the full 
              cost of the consultation.
            </p>
            <p>
              <strong>Private-Pay Services:</strong> When allied health services are offered, applicable fees will be
              communicated at booking and are subject to change with reasonable notice. Payment is
              due at the time of service unless alternative arrangements have been made. We accept
              credit card, debit, e-transfer, and direct billing to select Health Spending Account
              (HSA) providers.
            </p>
            <p>
              <strong>Missed Appointments and Cancellations:</strong> We require at least 
              24 hours&rsquo; notice for cancellation or rescheduling of any appointment. 
              Failure to attend a scheduled appointment without notice 
              (&ldquo;no-show&rdquo;) may result in a cancellation fee of $50 for 
              OHIP-insured services and the full service fee for private-pay services. 
              Repeated no-shows may result in discharge from the clinic.
            </p>
            <p>
              <strong>Receipts:</strong> Tax-eligible receipts are provided for all 
              private-pay services. Patients may submit these to their employer benefits 
              plan or HSA provider for reimbursement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">7. Research and Training Use</h2>
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 my-6">
              <p className="font-medium text-navy-900 mb-3">Consent by Use of Services</p>
              <p className="text-navy-700">
                By using the services of Curantis Specialty Care, you acknowledge and consent 
                to the use of anonymized and de-identified information derived from your medical 
                encounters for the purposes of medical research, clinical training, academic 
                publication, and quality improvement. All data used for these purposes is 
                stripped of personally identifying information in accordance with PHIPA 
                requirements for de-identification. You may opt out of this use at any time 
                by contacting our Privacy Contact Person in writing. Opting out will not 
                affect your access to or quality of clinical care.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-4">8. Patient Responsibilities</h2>
            <p>
              You agree to provide accurate and complete health information, including your 
              medical history, current medications, and any relevant test results. You are 
              responsible for following through on the care plan developed during your 
              consultation, including filling prescriptions, attending follow-up appointments, 
              and communicating changes in your health status to your care team. You agree to 
              treat all clinic staff with respect and professionalism.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">9. Scope of Care and Limitations</h2>
            <p>
              Curantis Specialty Care provides consultative specialist services. We work 
              collaboratively with your referring primary care provider, who remains responsible 
              for your overall health care coordination. Our specialists provide recommendations, 
              care plans, and, where appropriate, prescriptions — but we are not a replacement 
              for your family physician. We do not provide emergency care, walk-in services, 
              or after-hours urgent care.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">10. Discharge from Care</h2>
            <p>
              Patients may be discharged from Curantis Specialty Care upon completion of their 
              treatment plan, upon request by the patient, or at the discretion of the treating 
              physician where the physician-patient relationship can no longer be maintained 
              (including, but not limited to, cases of missed appointments, threatening 
              behaviour, or non-compliance with care plans). A discharge summary will be 
              provided to the referring physician.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">11. Privacy</h2>
            <p>
              Your privacy is important to us. Our collection, use, and disclosure of your 
              personal health information is governed by our{' '}
              <a href="/privacy" className="text-brand-600 hover:text-brand-800 underline">
                Privacy Policy
              </a>, which forms part of these Terms. By using our services, you consent to 
              the practices described in the Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">12. Intellectual Property</h2>
            <p>
              All content on the Curantis Specialty Care website — including text, graphics, 
              logos, design, and software — is the property of Darshan Khangura Medicine 
              Professional Corporation or its licensors and is protected by Canadian copyright 
              law. You may not reproduce, modify, distribute, or republish any content without 
              our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">13. Website Use and Disclaimer</h2>
            <p>
              The information on this website is provided for general informational purposes 
              only and does not constitute medical advice. Content on this site should not be 
              used as a substitute for professional medical consultation, diagnosis, or 
              treatment. Always seek the advice of your physician with any questions about a 
              medical condition.
            </p>
            <p>
              While we make reasonable efforts to ensure the accuracy of information on our 
              website, we do not warrant that the content is error-free, complete, or current. 
              The website is provided &ldquo;as is&rdquo; without warranties of any kind.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">14. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Ontario law, Curantis Specialty Care, its 
              physician(s), and staff shall not be liable for any indirect, incidental, special, 
              or consequential damages arising from the use of our website or services, 
              including but not limited to technical failures, interruptions in virtual care 
              sessions, or loss of data. This does not limit liability for medical negligence 
              or malpractice as governed by Ontario law and the Regulated Health Professions 
              Act, 1991.
            </p>
          </div>

          <div id="accessibility">
            <h2 className="text-2xl mb-4">15. Accessibility</h2>
            <p>
              Curantis Specialty Care is committed to providing accessible services in 
              compliance with the Accessibility for Ontarians with Disabilities Act, 2005 
              (AODA) and the Ontario Human Rights Code. If you require accommodations to 
              access our services, please contact us and we will work with you to identify 
              an appropriate solution.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">16. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the 
              Province of Ontario and the federal laws of Canada applicable therein. Any 
              disputes arising from these Terms or the use of our services shall be subject 
              to the exclusive jurisdiction of the courts of Ontario.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">17. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Material changes will 
              be posted to our website with an updated effective date. Your continued use of 
              our services after changes are posted constitutes your acceptance of the 
              revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">18. Contact</h2>
            <div className="bg-navy-50 rounded-xl p-6 mt-4">
              <p className="font-medium text-navy-900">Curantis Specialty Care</p>
              <p className="text-navy-700 mt-2">
                Darshan Khangura Medicine Professional Corporation<br />
                Email: info@curantiscare.ca<br />
                Phone: (000) 000-0000<br />
                Fax: (905) 555-0124<br />
                Web: curantiscare.ca
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
