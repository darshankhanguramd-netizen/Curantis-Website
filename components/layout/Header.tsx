'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Diabetes Care', href: '/services/diabetes' },
      { name: 'Respirology', href: '/services/respirology' },
    ],
  },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'For Patients', href: '/for-patients' },
  { name: 'For Providers', href: '/for-providers' },
  { name: 'Team', href: '/team' },
  { name: 'Resources', href: '/resources' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy-100">
      {/* Top bar */}
      <div className="bg-navy-900 text-white text-sm py-2">
        <div className="container-wide flex justify-between items-center">
          <p className="text-navy-200">
            Virtual Specialist Care for Ontario OHIP Patients
          </p>
          <a
            href="tel:+19055550123"
            className="hidden md:flex items-center gap-1.5 text-white hover:text-brand-300"
          >
            <Phone className="w-3.5 h-3.5" />
            (905) 555-0123
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide" aria-label="Primary navigation">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            <Image
              src="/images/brand/curantis-logo.jpg"
              alt="Curantis Specialty Care"
              width={270}
              height={108}
              className="h-22 w-auto lg:h-28 object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {servicesOpen && (
                    <div
                      className="absolute left-0 top-full z-50 w-56 pt-2 -mt-2 animate-fade-in"
                      role="menu"
                      aria-label={`${item.name} submenu`}
                    >
                      <div className="rounded-xl bg-white shadow-soft-lg border border-navy-100 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm text-navy-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/refer" className="btn-primary text-sm hidden md:inline-flex">
              Refer a Patient
            </Link>
            <Link href="/contact" className="btn-secondary text-sm hidden md:inline-flex">
              Contact
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 text-navy-700 hover:text-navy-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-navy-100 py-4 animate-fade-in">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-navy-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block pl-8 py-2.5 text-sm text-navy-500 hover:text-brand-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-4 px-4 flex flex-col gap-2">
              <Link href="/refer" className="btn-primary text-sm text-center" onClick={() => setMobileOpen(false)}>
                Refer a Patient
              </Link>
              <Link href="/contact" className="btn-secondary text-sm text-center" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
