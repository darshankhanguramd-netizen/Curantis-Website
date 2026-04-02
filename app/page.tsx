import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  Stethoscope,
  Activity,
  Scale,
  Heart,
  CheckCircle2,
  Users,
  FileText,
  Phone,
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-b from-brand-50/50 to-white section-padding overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                OHIP-Covered Specialist Care
              </div>
              <h1 className="text-balance">
                Specialist Care.{' '}
                <span className="text-brand-600">Without the Wait.</span>{' '}
                Without the Travel.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-navy-600 leading-relaxed">
                A virtual multi-specialty clinic providing expert diabetes, endocrinology, 
                respirology, and lifestyle medicine care to patients across Ontario.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/refer" className="btn-primary text-base">
                  Refer a Patient
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/how-it-works" className="btn-secondary text-base">
                  How It Works
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-navy-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-500" />
                  Shorter wait times
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  No travel required
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-brand-500" />
                  OHIP covered
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-100 to-sage-100 flex items-center justify-center">
                <p className="text-navy-400 text-sm">[Hero image: Patient in comfortable home setting on virtual consultation]</p>
              </div>
              {/* Trust badge overlay */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-soft-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">CPSO Registered</p>
                  <p className="text-xs text-navy-500">Board-certified specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Our Clinic ─── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2>
              Access to specialist care shouldn&rsquo;t depend on{' '}
              <span className="text-brand-600">where you live</span>
            </h2>
            <p className="mt-4">
              Long wait times, geographic barriers, and limited access to subspecialists 
              leave too many Ontarians without the care they need. Curantis was built to 
              change that through a physician-led virtual model.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Reduced Wait Times',
                description:
                  'Virtual delivery means faster access to specialist consultations — weeks, not months.',
              },
              {
                icon: MapPin,
                title: 'No Travel Required',
                description:
                  'Whether you\'re in Kenora or Kitchener, your consultation happens from home.',
              },
              {
                icon: Users,
                title: 'Coordinated Care',
                description:
                  'Your referring physician receives clear consult notes and care plans. No communication gaps.',
              },
            ].map((item, i) => (
              <div key={i} className="card p-8">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="font-display text-xl mb-3">{item.title}</h4>
                <p className="text-navy-600 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="section-padding bg-navy-50/50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2>Our Services</h2>
              <p className="mt-3 max-w-xl">
                OHIP-covered specialist consultations and private allied health services — 
                all delivered virtually.
              </p>
            </div>
            <Link href="/services" className="btn-outline text-sm shrink-0">
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: 'Diabetes Care',
                href: '/services/diabetes',
                description: 'Type 1, Type 2, insulin management, complex diabetes, and glucose optimization.',
                tag: 'OHIP Covered',
              },
              {
                icon: Stethoscope,
                title: 'Respirology',
                href: '/services/respirology',
                description: 'Asthma, COPD, interstitial lung disease, and chronic cough assessment.',
                tag: 'OHIP Covered',
              },
              {
                icon: Scale,
                title: 'Weight Management',
                href: '/services/weight-management',
                description: 'Medical weight management with dietitian support, pharmacotherapy, and lifestyle coaching.',
                tag: 'Private / HSA',
              },
              {
                icon: Heart,
                title: 'Lifestyle Medicine',
                href: '/services/lifestyle-medicine',
                description: 'Evidence-based programs for metabolic health, nutrition counseling, and chronic disease prevention.',
                tag: 'Private / HSA',
              },
            ].map((service, i) => (
              <Link key={i} href={service.href} className="card-elevated p-6 group cursor-pointer">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <service.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div className="inline-block bg-brand-50 text-brand-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                  {service.tag}
                </div>
                <h4 className="font-display text-lg mb-2 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-navy-600">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700">
                  Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2>How Virtual Care Works</h2>
            <p className="mt-4">
              From referral to ongoing management — a clear, simple process.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Physician Referral',
                description: 'Your family doctor or NP sends a referral via our online form or fax.',
              },
              {
                step: '02',
                title: 'Intake & Review',
                description: 'We collect relevant history, lab work, and glucose/respiratory data before your visit.',
              },
              {
                step: '03',
                title: 'Virtual Consultation',
                description: 'Meet with your specialist by secure video. Discuss your health, review data, build a plan.',
              },
              {
                step: '04',
                title: 'Care Plan & Follow-Up',
                description: 'Your referring physician receives a detailed consult note. Ongoing virtual follow-ups as needed.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-display text-brand-100 mb-4">{item.step}</div>
                <h4 className="font-display text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-navy-600">{item.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-8">
                    <ArrowRight className="w-5 h-5 text-brand-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/how-it-works" className="btn-primary">
              Learn More About the Process
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Who We Serve ─── */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-wide">
          <h2 className="text-white text-center mb-16">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Rural & Northern Ontario',
                description:
                  'Patients in underserved communities who face long drives and longer waits for specialist care.',
                cta: { label: 'Patient Info', href: '/for-patients' },
              },
              {
                icon: Users,
                title: 'Greater Toronto Area',
                description:
                  'Urban patients looking for faster access to specialist consultations without time off work.',
                cta: { label: 'Patient Info', href: '/for-patients' },
              },
              {
                icon: FileText,
                title: 'Referring Physicians',
                description:
                  'Family doctors and NPs seeking timely subspecialist support with clear communication loops.',
                cta: { label: 'Provider Info', href: '/for-providers' },
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-800 rounded-2xl p-8 border border-navy-700">
                <item.icon className="w-8 h-8 text-brand-400 mb-4" />
                <h4 className="text-white font-display text-xl mb-3">{item.title}</h4>
                <p className="text-navy-300 mb-6">{item.description}</p>
                <Link href={item.cta.href} className="text-brand-400 hover:text-brand-300 text-sm font-medium inline-flex items-center gap-1">
                  {item.cta.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust / Credentials ─── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2>
                Trusted, Regulated,{' '}
                <span className="text-brand-600">Evidence-Based</span>
              </h2>
              <p className="mt-4">
                Curantis Specialty Care is led by Dr. Darshan Singh Khangura, a board-certified 
                specialist in Internal Medicine and Endocrinology &amp; Metabolism, registered with 
                the College of Physicians and Surgeons of Ontario.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'CPSO-registered and regulated physician',
                  'OHIP-billed specialist consultations — no cost to patients',
                  'PHIPA-compliant virtual care platform',
                  'Clear consult notes back to referring physicians',
                  'Evidence-based, guideline-driven care',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/team" className="btn-secondary">
                  Meet Dr. Khangura
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy-50 to-brand-50 flex items-center justify-center">
              <p className="text-navy-400 text-sm">[Image: Professional headshot or clinical environment]</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="section-padding bg-brand-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2>Have Questions?</h2>
          <p className="mt-4">
            We&rsquo;re here to help patients and referring physicians. Reach out any time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a href="tel:+19055550123" className="btn-secondary">
              <Phone className="w-4 h-4 mr-2" />
              (905) 555-0123
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
