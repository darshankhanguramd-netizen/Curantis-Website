import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, Lightbulb, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Curantis Specialty Care is a virtual clinic improving access to diabetes, endocrinology, and respirology care across Ontario.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>
              Better Access to{' '}
              <span className="text-brand-600">Better Care</span>
            </h1>
            <p className="mt-6 text-xl text-navy-600">
              Curantis Specialty Care was founded on a simple premise: geography should
              not determine the quality of specialist care you receive. We use virtual
              delivery to connect Ontario patients with experienced subspecialists —
              faster and closer to home.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-50 shadow-soft-lg">
            <Image
              src="/images/about-hero.png"
              alt="Medical office with stethoscope and virtual care portal"
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
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-brand-600" />
                <h3 className="text-2xl">Our Mission</h3>
              </div>
              <p>
                To improve access to high-quality specialist care — particularly in diabetes,
                endocrinology, and metabolic health — by removing the barriers of distance,
                wait times, and fragmented communication between providers.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-brand-600" />
                <h3 className="text-2xl">Our Vision</h3>
              </div>
              <p>
                A healthcare system where every Ontarian — whether in downtown Toronto or
                rural Northern Ontario — can access timely, coordinated, specialist-led care
                without unnecessary travel or delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-wide">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Patient-Centered',
                description: 'Every decision starts with what is best for the patient.',
              },
              {
                icon: CheckCircle2,
                title: 'Evidence-Based',
                description: 'We follow current clinical guidelines and best practices.',
              },
              {
                icon: Target,
                title: 'Accessible',
                description: 'Virtual-first design removes barriers to specialist care.',
              },
              {
                icon: Lightbulb,
                title: 'Efficient',
                description: 'Streamlined referral and consultation workflows respect everyone\'s time.',
              },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h4 className="font-display text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-navy-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl mx-auto space-y-16">
          <div>
            <h2 className="mb-8">About Dr. Khangura</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="relative aspect-[3/4] w-full max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden bg-navy-100 shadow-soft">
                <Image
                  src="/images/team/dr-khangura.png"
                  alt="Dr. Darshan Singh Khangura"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <p>
                  Dr. Darshan Singh Khangura is a co-founder of Curantis Specialty Care and a
                  specialist in Internal Medicine, Endocrinology &amp; Metabolism, and Obesity
                  Medicine, registered with the College of Physicians and Surgeons of Ontario
                  (CPSO# 124706). He completed his medical training at the University of
                  Missouri-Columbia.
                </p>
                <p>
                  Together with Dr. Ghatehorde, he built Curantis to address chronic access gaps
                  in Ontario&rsquo;s specialist care landscape — particularly for patients managing
                  complex diabetes and metabolic conditions who face long waits and long drives for
                  appointments.
                </p>
                <p>
                  Through Curantis, he combines clinical expertise with virtual care delivery to
                  serve patients across the province, with a particular commitment to underserved
                  and rural communities.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-navy-100">
            <h2 className="mb-8">About Dr. Ghatehorde</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="relative aspect-[3/4] w-full max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden bg-navy-100 shadow-soft">
                <Image
                  src="/images/team/dr-ghatehorde.png"
                  alt="Dr. Namratta Kaur Ghatehorde"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <p>
                  Dr. Namratta Kaur Ghatehorde is a co-founder of Curantis Specialty Care and a
                  respirologist with certification in Internal Medicine and Respirology (CPSO#
                  124983). She completed her medical training at the University of
                  Missouri-Columbia.
                </p>
                <p>
                  She leads the clinic&rsquo;s respiratory medicine program, providing virtual
                  assessment and management of conditions such as asthma, COPD, chronic cough,
                  and related disorders — with the same focus on timely, clear handoffs to
                  referring physicians.
                </p>
                <p>
                  Dr. Ghatehorde offers consultations in English and Punjabi. Her public
                  register profile is available through the{' '}
                  <a
                    href="https://register.cpso.on.ca/physician-info/?cpsonum=124983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-800 font-medium"
                  >
                    College of Physicians and Surgeons of Ontario
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/team" className="btn-primary">
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
