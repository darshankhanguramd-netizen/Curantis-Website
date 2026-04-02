import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, Heart, Lightbulb, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Curantis Specialty Care is a virtual multi-specialty clinic improving access to diabetes, endocrinology, respirology, and lifestyle medicine care across Ontario.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide">
          <div className="max-w-3xl">
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
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="mb-8">About Dr. Khangura</h2>
          <p className="mb-4">
            Dr. Darshan Singh Khangura is a specialist in Internal Medicine and 
            Endocrinology &amp; Metabolism, registered with the College of Physicians 
            and Surgeons of Ontario (CPSO# 124706). He completed his medical training 
            at Saba University School of Medicine and holds certifications from the CPSO 
            in both Internal Medicine and Endocrinology.
          </p>
          <p className="mb-4">
            Dr. Khangura founded Curantis Specialty Care to address the chronic access 
            gaps he observed in Ontario&rsquo;s specialist care landscape — particularly 
            for patients managing complex diabetes and metabolic conditions who face long 
            waits and long drives for appointments.
          </p>
          <p>
            Through Curantis, he combines clinical expertise with virtual care delivery 
            to serve patients across the province, with a particular commitment to 
            underserved and rural communities.
          </p>
          <div className="mt-8">
            <Link href="/team" className="btn-primary">
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
