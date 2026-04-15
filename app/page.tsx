import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  Stethoscope,
  Activity,
  CheckCircle2,
  Users,
  FileText,
  Phone,
  Printer,
  FileDown,
  ClipboardPenLine,
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-b from-brand-50/50 to-white overflow-hidden">
        <div className="border-b border-navy-100/80 bg-white/90 backdrop-blur-sm">
          <div className="container-wide py-3.5 md:py-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-500 shrink-0">
              For referring physicians
            </p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-8 sm:gap-y-2 text-sm text-navy-700">
              <li className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
                <span>
                  Fax:{' '}
                  <a
                    href="fax:+19055550124"
                    className="font-medium text-navy-900 hover:text-brand-700 underline-offset-2 hover:underline"
                  >
                    (905) 555-0124
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FileDown className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
                <a
                  href="/documents/curantis-referral-form.pdf"
                  download
                  className="font-medium text-brand-700 hover:text-brand-800 underline-offset-2 hover:underline"
                >
                  Download referral form (PDF)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ClipboardPenLine className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
                <Link
                  href="/refer#download"
                  className="font-medium text-brand-700 hover:text-brand-800 underline-offset-2 hover:underline"
                >
                  Referral form &amp; fax details
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-wide pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
          <div className="flex items-start gap-6 mb-8 min-h-[120px]">
            <div className="shrink-0 flex items-center justify-start h-[120px] mt-[-20px]">
              <Image
                src="/images/brand/logo-home.jpg"
                alt="Curantis Specialty Care logo"
                width={120}
                height={120}
                className="rounded-xl"
                priority
              />
            </div>
            <div className="flex items-center mt-[-10px]">
              <span className="text-2xl md:text-3xl font-bold text-brand-700 whitespace-nowrap">Curantis Specialty Care</span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <h1 className="text-balance text-4xl md:text-5xl font-display">
                Exceptional specialty care that meets you where you are.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-navy-600 leading-relaxed">
                A virtual clinic focused on expert diabetes and endocrinology care, plus
                respirology for patients across Ontario.
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
                  <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                  No travel required
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-brand-500" />
                  OHIP covered
                </span>
              </div>
            </div>
            <div>
              <p className="text-2xs uppercase tracking-[0.18em] text-navy-500 font-medium mb-3">
                Professional clinical workspace
              </p>
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-navy-100 shadow-soft-lg ring-1 ring-navy-100/80">
                <Image
                  src="/images/hero/home-hero.png"
                  alt="Patient smiling and waving during a secure video visit on a laptop from home"
                  fill
                  className="object-cover object-[center_22%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Our Clinic ─── */}
      <section className="bg-white pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-24 lg:pb-32">
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
                  'Virtual delivery means faster access to specialist consultations: weeks, not months.',
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
                OHIP-covered specialist consultations and private allied health services, all
                delivered virtually.
              </p>
            </div>
            <Link href="/services" className="btn-outline text-sm shrink-0">
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              From referral to ongoing management. A clear, simple process.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Physician Referral',
                description: 'Your family doctor or NP sends a referral by fax using our PDF form or their own referral with the required details.',
              },
              {
                step: '02',
                title: 'Scheduling & preparation',
                description:
                  'We schedule your visit and may remind you to have recent labs, imaging, or device data ready to review.',
              },
              {
                step: '03',
                title: 'Virtual Consultation',
                description: 'Meet with your specialist by secure video. Discuss your health, review data, build a plan.',
              },
              {
                step: '04',
                title: 'Care Plan & Follow-Up',
                description:
                  'Your referring physician receives a detailed consult note. When labs or imaging are ordered, requisitions are emailed to you. Ongoing virtual follow-ups as needed.',
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
              <p className="mt-4 text-navy-700">
                Dr. Darshan Singh Khangura co-founded Curantis Specialty Care. He is a
                board-certified specialist in Internal Medicine, Endocrinology and Metabolism,
                and Obesity Medicine, and he is registered with the College of Physicians and
                Surgeons of Ontario.
              </p>
              <p className="mt-4 text-navy-700">
                He wants the clinic to be accessible across Ontario, timely when waits elsewhere
                are long, and exceptional in how clearly it explains the plan. Patients and
                referring doctors should get practical guidance they can use, in plain language.
              </p>
              <p className="mt-4 text-navy-700">
                Virtual visits are how we deliver that: better reach, faster answers, and
                follow-up that fits real life.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'CPSO-registered specialist physicians',
                  'OHIP-billed specialist consultations at no cost to patients',
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
                  Meet our physicians
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-navy-100 shadow-soft-lg ring-1 ring-navy-100/80">
                <Image
                  src="/images/team/founder-home.png"
                  alt="Dr. Darshan Singh Khangura, co-founder and Medical Director"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                />
              </div>
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
