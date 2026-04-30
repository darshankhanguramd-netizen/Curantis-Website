import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Curantis Specialty Care collects, uses, protects, and discloses your personal health information under Ontario\'s PHIPA.',
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <h1 className="text-3xl md:text-4xl mb-2">Privacy Policy</h1>
        <p className="text-sm text-navy-500 mb-12">
          Last updated: April 2026 &middot; Effective: April 2026
        </p>

        <div className="prose-curantis space-y-8">
          <div>
            <h2 className="text-2xl mb-4">1. Introduction</h2>
            <p>
              Curantis Specialty Care, operated by Darshan Khangura Medicine Professional 
              Corporation (&ldquo;Curantis,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; 
              or &ldquo;us&rdquo;), is committed to protecting the privacy and confidentiality 
              of your personal health information (&ldquo;PHI&rdquo;). This Privacy Policy 
              explains how we collect, use, disclose, retain, and safeguard your information in 
              accordance with Ontario&rsquo;s <em>Personal Health Information Protection Act, 
              2004</em> (PHIPA), the <em>Personal Information Protection and Electronic Documents 
              Act</em> (PIPEDA), and all applicable provincial and federal privacy legislation.
            </p>
            <p>
              Dr. Darshan Singh Khangura (CPSO# 124706) is the designated Contact Person 
              responsible for ensuring compliance with PHIPA and responding to privacy-related 
              inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">2. Definitions</h2>
            <p>
              <strong>Personal Health Information (PHI)</strong> includes any identifying 
              information about an individual that relates to their physical or mental health, 
              health care history, plan of service, eligibility for health care coverage, health 
              number, identity of health care provider, or any payment or billing information 
              related to their health care services, as defined under PHIPA.
            </p>
            <p>
              <strong>Health Information Custodian (HIC)</strong> refers to Curantis Specialty 
              Care and its physicians, who are responsible for the custody and control of PHI 
              collected in the course of providing health care.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">3. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <p>
              <strong>Personal Health Information:</strong> Name, date of birth, Ontario Health 
              Insurance Plan (OHIP) number, medical history, diagnoses, medications, lab results, 
              glucose monitoring data, pulmonary function tests, imaging results, referral 
              documentation, consultation notes, care plans, and any information provided during 
              virtual consultations.
            </p>
            <p>
              <strong>Contact Information:</strong> Address, phone number, email address, and 
              emergency contact details.
            </p>
            <p>
              <strong>Referring Physician Information:</strong> Physician name, CPSO number, 
              OHIP billing number, clinic address, phone, fax, and email.
            </p>
            <p>
              <strong>Technical Information:</strong> When you use our website, we may collect 
              IP addresses, browser type, device information, and usage analytics through cookies 
              and similar technologies. This information is not linked to your PHI.
            </p>
            <p>
              <strong>Billing Information:</strong> For private-pay allied health services, we may
              collect payment card details, Health Spending Account (HSA) information, or extended
              health benefits details. Payment processing is handled by PCI-DSS compliant third-party
              processors — we do not store full payment card numbers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">4. How We Use Your Information</h2>
            <p>Under PHIPA, we use your PHI for the following purposes:</p>
            <p>
              <strong>Providing Health Care:</strong> To assess, diagnose, treat, and manage 
              your health conditions through virtual consultations and follow-up care, and to 
              coordinate care with your referring physician.
            </p>
            <p>
              <strong>Administration:</strong> To schedule appointments, process referrals, 
              manage billing (OHIP and private), communicate with patients and referring 
              providers, and operate the clinic.
            </p>
            <p>
              <strong>Quality Improvement:</strong> To monitor and improve the quality of care 
              and services we provide, including internal clinical audits and practice evaluation.
            </p>
            <p>
              <strong>Legal and Regulatory Compliance:</strong> To comply with legal obligations, 
              including reporting to the College of Physicians and Surgeons of Ontario, Ontario 
              Health, the Ministry of Health, and other regulatory bodies as required by law.
            </p>
            <p>
              <strong>Research and Education:</strong> With your implied consent as described 
              in Section 5 below, anonymized and de-identified data derived from your clinical 
              encounter may be used for medical research, clinical training, and quality 
              improvement purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">5. Research and Training Use of Anonymized Data</h2>
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 my-6">
              <p className="font-medium text-navy-900 mb-3">Important Notice</p>
              <p className="text-navy-700">
                By using the services of Curantis Specialty Care, you acknowledge and agree 
                that anonymized and de-identified information from your medical encounters may 
                be used for medical research, academic publication, clinical education, and 
                training purposes. All such data will be stripped of any identifying information 
                — including name, date of birth, OHIP number, address, and any other identifiers 
                — so that it cannot reasonably be used to identify you.
              </p>
            </div>
            <p>
              This use is consistent with Section 44(1) of PHIPA, which permits a health 
              information custodian to use PHI for research purposes where the information 
              has been de-identified. If you wish to opt out of the use of your anonymized 
              data for research purposes, you may do so by contacting our Privacy Contact 
              Person in writing. Opting out will not affect your access to clinical care.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">6. Disclosure of Your Information</h2>
            <p>We may disclose your PHI in the following circumstances:</p>
            <p>
              <strong>To Your Referring Physician:</strong> Consultation notes, care plans, 
              and clinical recommendations are shared with the physician who referred you. 
              This is a core part of the referral-consultation model and is necessary to ensure 
              continuity of care.
            </p>
            <p>
              <strong>To Other Health Care Providers:</strong> Where necessary for your care 
              and with your consent (express or implied), we may share information with other 
              specialists, allied health professionals, pharmacists, or hospital services 
              involved in your treatment.
            </p>
            <p>
              <strong>As Required by Law:</strong> We may disclose PHI without consent where 
              required by law, including to the CPSO, public health authorities, the Ontario 
              Information and Privacy Commissioner, or in response to a court order or subpoena.
            </p>
            <p>
              <strong>Service Providers:</strong> We use third-party service providers for EMR 
              hosting (Accuro by QHR Technologies), virtual care delivery, and practice 
              administration. All service providers are contractually bound to comply with 
              PHIPA and maintain appropriate safeguards for PHI.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">7. Consent</h2>
            <p>
              Under PHIPA, your consent to the collection, use, and disclosure of PHI for 
              health care purposes may be express or implied. When you are referred to our 
              clinic and attend a virtual consultation, your consent to collect and use your 
              PHI for health care purposes is implied. For uses beyond direct health care 
              (other than those permitted by law), we will seek your express consent.
            </p>
            <p>
              You may withdraw or modify your consent at any time by contacting our Privacy 
              Contact Person. Withdrawal of consent may limit our ability to provide certain 
              services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">8. Data Security and Safeguards</h2>
            <p>
              We implement administrative, technical, and physical safeguards to protect your 
              PHI against unauthorized access, disclosure, copying, use, or modification. These 
              safeguards include:
            </p>
            <p>
              Encrypted virtual care sessions and secure electronic medical records; role-based 
              access controls limiting PHI access to authorized personnel; regular security 
              assessments and staff privacy training; secure data storage within Canada on 
              PHIPA-compliant infrastructure; and audit logging of all access to electronic 
              health records.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">9. Retention of Records</h2>
            <p>
              Medical records are retained for a minimum of 10 years from the date of the last 
              entry, or 10 years after the patient reaches the age of 18 (for minors), in 
              accordance with the CPSO&rsquo;s medical records retention requirements and 
              PHIPA. Records may be retained longer where required by law or for ongoing clinical 
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">10. Your Rights Under PHIPA</h2>
            <p>As a patient, you have the right to:</p>
            <p>
              <strong>Access:</strong> Request access to your PHI held by Curantis Specialty 
              Care. We will respond within 30 days of receiving your written request.
            </p>
            <p>
              <strong>Correction:</strong> Request correction of your PHI if you believe it 
              contains an error or omission.
            </p>
            <p>
              <strong>Withdraw Consent:</strong> Withdraw or limit your consent for collection, 
              use, or disclosure of your PHI, subject to legal and regulatory requirements.
            </p>
            <p>
              <strong>Complaint:</strong> File a complaint with the Information and Privacy 
              Commissioner of Ontario if you believe your privacy rights have been violated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">11. Website and Cookies</h2>
            <p>
              Our website (curantiscare.ca) uses cookies and analytics tools to understand site 
              usage and improve our online experience. These tools collect non-identifiable 
              technical data (browser type, pages visited, time on site) and are not linked 
              to your PHI or medical records. You may disable cookies in your browser settings 
              at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our 
              practices or applicable law. Material changes will be posted to our website with 
              an updated effective date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">13. Contact Us</h2>
            <p>
              For questions, concerns, or requests regarding your personal health information 
              or this Privacy Policy, please contact:
            </p>
            <div className="bg-navy-50 rounded-xl p-6 mt-4">
              <p className="font-medium text-navy-900">Privacy Contact Person</p>
              <p className="text-navy-700 mt-2">
                Dr. Darshan Singh Khangura<br />
                Curantis Specialty Care<br />
                Email: privacy@curantiscare.ca<br />
                Phone: (289) 670-7727<br />
                Fax: (905) 555-0124
              </p>
              <p className="text-navy-600 mt-4 text-sm">
                If you are not satisfied with our response, you may contact the 
                Information and Privacy Commissioner of Ontario at 1-800-387-0073 
                or visit <a href="https://www.ipc.on.ca" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800">www.ipc.on.ca</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
