import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the physicians at Curantis Specialty Care — Dr. Darshan Singh Khangura (Internal Medicine & Endocrinology) and Dr. Namratta Kaur Ghatehorde (Internal Medicine & Respirology).',
};

const team = [
  {
    name: 'Dr. Darshan Singh Khangura',
    title: 'Medical Director & Lead Physician',
    credentials: 'MD — Internal Medicine, Endocrinology & Metabolism',
    cpso: '124706',
    bio: 'Dr. Khangura is a specialist in Internal Medicine and Endocrinology & Metabolism, registered with the College of Physicians and Surgeons of Ontario. He completed his medical degree at Saba University School of Medicine and holds CPSO certifications in both Internal Medicine (2025) and Endocrinology & Metabolism (2021). Dr. Khangura founded Curantis Specialty Care to address chronic access gaps in Ontario\'s specialist care system — particularly for patients in underserved and rural communities managing complex diabetes and metabolic conditions. He brings a patient-centered approach to virtual care, combining clinical expertise with technology to deliver efficient, high-quality consultations.',
    image: null,
  },
  {
    name: 'Dr. Namratta Kaur Ghatehorde',
    title: 'Specialist Physician — Respirology',
    credentials: 'MD — Internal Medicine, Respirology',
    cpso: '124983',
    bio: 'Dr. Ghatehorde is a specialist in Internal Medicine and Respirology, registered with the College of Physicians and Surgeons of Ontario (CPSO). She earned her medical degree from Saba University School of Medicine (2013). She provides assessment and management of chronic respiratory conditions — including asthma, COPD, chronic cough, and related disorders — within a virtual care model that emphasizes clear communication with patients and referring physicians. Dr. Ghatehorde offers consultations in English and Punjabi. Current registration and practice details are available on the CPSO physician register.',
    image: null,
  },
];

const alliedHealth = [
  {
    role: 'Registered Dietitian',
    description: 'Individualized nutrition counseling for diabetes and related metabolic concerns.',
    status: 'Accepting patients',
  },
  {
    role: 'Certified Diabetes Educator (CDE)',
    description: 'Self-management education, insulin training, CGM onboarding, and diabetes care skills.',
    status: 'Accepting patients',
  },
  {
    role: 'Registered Respiratory Therapist (RRT)',
    description: 'Inhaler technique, pulmonary rehabilitation, and COPD self-management education.',
    status: 'Coming soon',
  },
  {
    role: 'Behavioural Health Coach',
    description: 'Motivational interviewing, habit formation, and behaviour change support for chronic disease.',
    status: 'Coming soon',
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>Our <span className="text-brand-600">Team</span></h1>
          <p className="mt-6 text-xl text-navy-600">
            Our physicians are CPSO-registered specialists in endocrinology, diabetes, and
            respirology — supported by a growing allied health team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          {team.map((member, i) => (
            <div
              key={member.cpso}
              className={`grid md:grid-cols-3 gap-8 lg:gap-12 ${
                i > 0 ? 'mt-14 pt-14 md:mt-16 md:pt-16 border-t border-navy-100' : ''
              }`}
            >
              <div className="md:col-span-1">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-navy-100 to-brand-50 flex items-center justify-center">
                  <p className="text-navy-400 text-sm text-center px-4">[Professional headshot]</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl">{member.name}</h2>
                <p className="text-brand-600 font-medium mt-1">{member.title}</p>
                <p className="text-sm text-navy-500 mt-1">{member.credentials}</p>
                <a
                  href={`https://register.cpso.on.ca/physician-info/?cpsonum=${member.cpso}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-800 mt-2"
                >
                  View CPSO register (CPSO# {member.cpso}) <ExternalLink className="w-3 h-3" />
                </a>
                <p className="mt-6 text-navy-700 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-wide max-w-4xl">
          <h2 className="mb-8">Allied Health Team</h2>
          <p className="text-navy-600 mb-8">
            Our allied health professionals provide private-pay services (HSA and benefits 
            eligible) to complement physician-led specialist care.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {alliedHealth.map((member, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="font-display text-lg">{member.role}</h4>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${
                    member.status === 'Accepting patients'
                      ? 'bg-brand-50 text-brand-700'
                      : 'bg-navy-100 text-navy-500'
                  }`}>
                    {member.status}
                  </span>
                </div>
                <p className="text-sm text-navy-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Join Our Team</h2>
          <p className="mt-4">
            We&rsquo;re growing. If you&rsquo;re a specialist physician or allied health 
            professional interested in virtual care delivery, we&rsquo;d like to hear from you.
          </p>
          <Link href="/contact" className="btn-primary mt-8">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
