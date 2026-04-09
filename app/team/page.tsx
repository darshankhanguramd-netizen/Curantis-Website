import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the physicians at Curantis Specialty Care — co-founders Dr. Darshan Singh Khangura (Internal Medicine, Endocrinology & Metabolism, Obesity Medicine) and Dr. Namratta Kaur Ghatehorde (Respirology).',
};

const team = [
  {
    name: 'Dr. Darshan Singh Khangura',
    title: 'Co-Founder, Medical Director & Lead Physician',
    credentials: 'MD — Internal Medicine, Endocrinology & Metabolism, Obesity Medicine',
    cpso: '124706',
    imageSrc: '/images/team/dr-khangura.png',
    bio: 'Dr. Khangura co-founded Curantis Specialty Care with Dr. Namratta Kaur Ghatehorde to address chronic access gaps in Ontario\'s specialist care system — particularly for patients in underserved and rural communities managing complex diabetes and metabolic conditions. He is a specialist in Internal Medicine, Endocrinology & Metabolism, and Obesity Medicine, registered with the College of Physicians and Surgeons of Ontario, and completed his medical training at the University of Missouri-Columbia. Dr. Khangura brings a patient-centered approach to virtual care, combining clinical expertise with technology to deliver efficient, high-quality consultations.',
  },
  {
    name: 'Dr. Namratta Kaur Ghatehorde',
    title: 'Co-Founder & Respirologist',
    credentials: 'MD — Internal Medicine, Respirology',
    cpso: '124983',
    imageSrc: '/images/team/dr-ghatehorde.png',
    bio: 'Dr. Ghatehorde is a co-founder of Curantis Specialty Care and leads the clinic\'s respirology program. She is a specialist in Internal Medicine and Respirology, registered with the College of Physicians and Surgeons of Ontario, and completed her medical training at the University of Missouri-Columbia. Through virtual care, she provides assessment and management of chronic respiratory conditions — including asthma, COPD, chronic cough, and related disorders — with clear, timely communication to patients and referring physicians. Dr. Ghatehorde offers consultations in English and Punjabi.',
  },
];

const alliedHealth = [
  {
    role: 'Registered Dietitian',
    description: 'Individualized nutrition counseling for diabetes and related metabolic concerns.',
    status: 'Coming soon',
  },
  {
    role: 'Certified Diabetes Educator (CDE)',
    description: 'Self-management education, insulin training, CGM onboarding, and diabetes care skills.',
    status: 'Coming soon',
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
            Curantis was co-founded by two CPSO-registered specialists — focused on diabetes,
            endocrinology, and respirology. Allied health services will be available soon.
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
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden bg-navy-100 shadow-soft">
                  <Image
                    src={member.imageSrc}
                    alt={`Professional headshot of ${member.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority={i === 0}
                  />
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
            Allied health roles below are planned for the clinic; availability and booking will be
            announced when each service launches. They will be offered as private-pay services (HSA
            and benefits eligible) alongside physician-led care.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {alliedHealth.map((member, j) => (
              <div key={j} className="card p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="font-display text-lg">{member.role}</h4>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${
                      member.status === 'Accepting patients'
                        ? 'bg-brand-50 text-brand-700'
                        : 'bg-navy-100 text-navy-500'
                    }`}
                  >
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
          <Link href="/contact" className="btn-primary mt-8">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
