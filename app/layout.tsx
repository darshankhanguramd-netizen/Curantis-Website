import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://curantiscare.ca'),
  title: {
    default: 'Curantis Specialty Care — Virtual Specialist Care in Ontario',
    template: '%s | Curantis Specialty Care',
  },
  description:
    'Virtual specialist care for diabetes, endocrinology, and respirology. Serving Ontario OHIP patients with shorter wait times and no travel.',
  keywords: [
    'virtual specialist care Ontario',
    'diabetes specialist Ontario',
    'endocrinologist virtual care',
    'respirology virtual consultation',
    'OHIP specialist referral',
    'virtual endocrinology Ontario',
    'telemedicine specialist Ontario',
    'diabetes care Ontario',
  ],
  authors: [{ name: 'Curantis Specialty Care' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://curantiscare.ca',
    siteName: 'Curantis Specialty Care',
    title: 'Curantis Specialty Care — Virtual Specialist Care in Ontario',
    description:
      'Expert diabetes, endocrinology, and respirology care delivered virtually across Ontario.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Curantis Specialty Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curantis Specialty Care',
    description:
      'Virtual specialist care for Ontario patients. Diabetes, endocrinology, and respirology.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'Curantis Specialty Care',
              description:
                'Virtual clinic providing diabetes, endocrinology, and respirology care to Ontario OHIP patients.',
              url: 'https://curantiscare.ca',
              telephone: '+1-905-555-0123',
              faxNumber: '+1-905-555-0124',
              email: 'info@curantiscare.ca',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'ON',
                addressCountry: 'CA',
              },
              medicalSpecialty: [
                'Endocrinology',
                'InternalMedicine',
                'RespiratoryTherapy',
              ],
              availableService: [
                {
                  '@type': 'MedicalProcedure',
                  name: 'Virtual Diabetes Consultation',
                },
                {
                  '@type': 'MedicalProcedure',
                  name: 'Virtual Respirology Consultation',
                },
              ],
              physician: {
                '@type': 'Physician',
                name: 'Dr. Darshan Singh Khangura',
                medicalSpecialty: [
                  'Endocrinology',
                  'InternalMedicine',
                ],
                identifier: {
                  '@type': 'PropertyValue',
                  name: 'CPSO',
                  value: '124706',
                },
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
