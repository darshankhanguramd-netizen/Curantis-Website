'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', type: 'general', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', form);
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>Contact <span className="text-brand-600">Us</span></h1>
          <p className="mt-4 text-lg text-navy-600">
            Questions about our services, referrals, or fees? We&rsquo;re here to help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-brand-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Phone</p>
                    <a href="tel:+12896707727" className="text-navy-600 hover:text-brand-600 text-sm">(289) 670-7727</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-brand-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Email</p>
                    <a href="mailto:info@curantiscare.ca" className="text-navy-600 hover:text-brand-600 text-sm">info@curantiscare.ca</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Send className="w-5 h-5 text-brand-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Fax</p>
                    <p className="text-navy-600 text-sm">(289) 644-0454</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Location</p>
                    <p className="text-navy-600 text-sm">Virtual clinic — Ontario, Canada</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-brand-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Hours</p>
                    <p className="text-navy-600 text-sm">Monday – Friday: 8:30 AM – 4:30 PM ET</p>
                    <p className="text-navy-500 text-xs">Closed weekends and Ontario statutory holidays</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-brand-50 rounded-xl">
                <p className="text-sm font-medium text-brand-800 mb-2">Looking to refer a patient?</p>
                <p className="text-sm text-brand-700 mb-3">
                  Use our dedicated referral form instead — it captures the clinical 
                  details we need.
                </p>
                <Link href="/refer" className="text-brand-600 hover:text-brand-800 text-sm font-medium">
                  Go to Referral Form →
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2">Message Received</h3>
                  <p className="text-navy-600">We&rsquo;ll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <div className="card p-8">
                  <h3 className="text-xl mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">Name *</label>
                        <input type="text" id="name" name="name" required value={form.name} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-navy-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">Email *</label>
                        <input type="email" id="email" name="email" required value={form.email} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-navy-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">Phone</label>
                        <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-navy-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
                      </div>
                      <div>
                        <label htmlFor="type" className="block text-sm font-medium text-navy-700 mb-1.5">Inquiry Type</label>
                        <select id="type" name="type" value={form.type} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-navy-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 cursor-pointer">
                          <option value="general">General Inquiry</option>
                          <option value="patient">Patient Question</option>
                          <option value="provider">Provider / Referral Question</option>
                          <option value="billing">Billing / Fees</option>
                          <option value="careers">Careers / Join Our Team</option>
                          <option value="privacy">Privacy Concern</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">Message *</label>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-navy-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-y" />
                    </div>
                    <p className="text-xs text-navy-500">
                      Please do not include sensitive personal health information in this form. 
                      For clinical matters, use the <Link href="/refer" className="text-brand-600 underline">referral form</Link> or 
                      contact us by phone.
                    </p>
                    <button type="submit" className="btn-primary">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
