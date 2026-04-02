import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerNav = {
  services: [
    { name: 'Diabetes Care', href: '/services/diabetes' },
    { name: 'Respirology', href: '/services/respirology' },
    { name: 'Weight Management', href: '/services/weight-management' },
    { name: 'Lifestyle Medicine', href: '/services/lifestyle-medicine' },
    { name: 'Fee Schedule', href: '/fees' },
  ],
  patients: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Patients', href: '/for-patients' },
    { name: 'For Providers', href: '/for-providers' },
    { name: 'Blog & Resources', href: '/blog' },
  ],
  clinic: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Refer a Patient', href: '/refer' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/terms#accessibility' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      {/* CTA Banner */}
      <div className="bg-brand-600">
        <div className="container-wide py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl md:text-3xl">
              Ready to refer a patient?
            </h3>
            <p className="text-brand-100 mt-2 text-lg">
              Online referral form or downloadable PDF — your choice.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/refer" className="bg-white text-brand-700 font-medium px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
              Refer Online
            </Link>
            <Link href="/refer#download" className="border-2 border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors">
              Download Form
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-display text-xl">C</span>
              </div>
              <div>
                <p className="font-display text-xl leading-none">Curantis</p>
                <p className="text-2xs uppercase tracking-[0.2em] text-brand-400 font-medium">
                  Specialty Care
                </p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Virtual specialist care for diabetes, endocrinology, respirology, 
              weight management, and lifestyle medicine — serving Ontario OHIP patients.
            </p>
            <div className="space-y-2 text-sm text-navy-300">
              <a href="tel:+19055550123" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-400" />
                (905) 555-0123
              </a>
              <a href="mailto:info@curantiscare.ca" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-400" />
                info@curantiscare.ca
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400" />
                Ontario, Canada (Virtual)
              </p>
            </div>
          </div>

          {/* Nav columns */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-navy-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerNav.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-navy-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-navy-400 mb-4">
              Patients & Providers
            </h4>
            <ul className="space-y-2.5">
              {footerNav.patients.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-navy-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-navy-400 mb-4">
              Clinic
            </h4>
            <ul className="space-y-2.5">
              {footerNav.clinic.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-navy-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-navy-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerNav.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-navy-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CPSO + Legal bottom bar */}
        <div className="mt-16 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-navy-400 space-y-1">
              <p>
                © {currentYear} Darshan Khangura Medicine Professional Corporation, operating as Curantis Specialty Care.
              </p>
              <p>
                Dr. Darshan Singh Khangura, MD — Internal Medicine, Endocrinology &amp; Metabolism |{' '}
                <a
                  href="https://register.cpso.on.ca/physician-info/?cpsonum=124706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-400 hover:text-brand-300 transition-colors"
                >
                  CPSO# 124706
                </a>
              </p>
              <p>
                Regulated by the College of Physicians and Surgeons of Ontario.
              </p>
            </div>
            <div className="text-xs text-navy-500">
              <p>Fax: (905) 555-0124</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
