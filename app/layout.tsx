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
    'obesity medicine Ontario',
    'weight management specialist Ontario',
    'virtual clinic Ontario',
  ],
  authors: [{ name: 'Curantis Specialty Care' }],
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Ontario, Canada',
    'geo.position': '43.6532;-79.3832',
    'ICBM': '43.6532, -79.3832',
  },
  icons: {
    icon: [{ url: '/images/brand/curantis-logo.jpg', type: 'image/png' }],
    apple: '/images/brand/curantis-logo.jpg',
  },
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
        url: '/images/hero/home-hero.png',
        width: 860,
        height: 587,
        alt: 'Patient during a virtual specialist visit from home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curantis Specialty Care',
    description:
      'Virtual specialist care for Ontario patients. Diabetes, endocrinology, and respirology.',
    images: ['/images/hero/home-hero.jpg'],
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
              logo: 'https://curantiscare.ca/images/brand/curantis-logo.png',
              image: 'https://curantiscare.ca/images/brand/curantis-logo.png',
              url: 'https://curantiscare.ca',
              telephone: '+1-289-295-3831',
              faxNumber: '+1-905-555-0124',
              email: 'info@curantiscare.ca',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'ON',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.6532,
                longitude: -79.3832,
              },
              areaServed: {
                '@type': 'State',
                name: 'Ontario',
                containedInPlace: {
                  '@type': 'Country',
                  name: 'Canada',
                },
              },
              medicalSpecialty: [
                'Endocrinology',
                'InternalMedicine',
                'RespiratoryTherapy',
                'ObesityMedicine',
              ],
              availableService: [
                {
                  '@type': 'MedicalProcedure',
                  name: 'Virtual Endocrinology Consultation',
                },
                {
                  '@type': 'MedicalProcedure',
                  name: 'Virtual Diabetes Consultation',
                },
                {
                  '@type': 'MedicalProcedure',
                  name: 'Virtual Respirology Consultation',
                },
                {
                  '@type': 'MedicalProcedure',
                  name: 'Obesity Medicine Consultation',
                },
                {
                  '@type': 'MedicalProcedure',
                  name: 'Weight Management Consultation',
                },
              ],
              physician: [
                {
                  '@type': 'Physician',
                  name: 'Dr. Darshan Singh Khangura',
                  medicalSpecialty: ['Endocrinology', 'InternalMedicine'],
                  knowsAbout: 'Obesity medicine',
                  identifier: {
                    '@type': 'PropertyValue',
                    name: 'CPSO',
                    value: '124706',
                  },
                },
                {
                  '@type': 'Physician',
                  name: 'Dr. Namratta Kaur Ghatehorde',
                  medicalSpecialty: ['InternalMedicine', 'RespiratoryTherapy'],
                  identifier: {
                    '@type': 'PropertyValue',
                    name: 'CPSO',
                    value: '124983',
                  },
                },
              ],
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
