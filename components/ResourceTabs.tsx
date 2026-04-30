'use client';

import { useState } from 'react';
import { ExternalLink, Download } from 'lucide-react';

type Resource = {
  title: string;
  description: string;
  href: string;
  type: 'external' | 'download';
};

type Section = {
  category: string;
  resources: Resource[];
};

const sections: Section[] = [
  {
    category: 'Diabetes',
    resources: [
      {
        title: 'Diabetes Canada — The Glycemic Index Guide',
        description: 'A practical guide to understanding the glycemic index and making informed food choices for blood sugar management.',
        href: 'https://www.diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/glycemic-index-food-guide.pdf?ext=.pdf',
        type: 'external',
      },
      {
        title: 'Low Carbohydrate Snacks',
        description: 'A curated list of low carbohydrate snack options to support blood sugar control.',
        href: '/documents/low-carb-snacks.docx',
        type: 'download',
      },
      {
        title: 'Diabetes Canada Tools and Resources',
        description: 'Comprehensive diabetes resources, tools, and information from Diabetes Canada.',
        href: 'https://www.diabetes.ca/resources',
        type: 'external',
      },
    ],
  },
  {
    category: 'Weight Management',
    resources: [
      {
        title: 'Diabetes Canada — The Glycemic Index Guide',
        description: 'A practical guide to understanding the glycemic index and making informed food choices for weight management.',
        href: 'https://www.diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/glycemic-index-food-guide.pdf?ext=.pdf',
        type: 'external',
      },
      {
        title: 'Low Carbohydrate Snacks',
        description: 'A curated list of low carbohydrate snack options to support your weight management goals.',
        href: '/documents/low-carb-snacks.docx',
        type: 'download',
      },
      {
        title: 'Obesity Canada — Managing Obesity',
        description: 'Evidence-based information on obesity management strategies from Obesity Canada.',
        href: 'https://obesitycanada.ca/understanding-obesity/management/',
        type: 'external',
      },
      {
        title: 'The Obesity Society - Bariatric Surgery',
        description: 'Patient information on bariatric surgery from The Obesity Society.',
        href: '/documents/the-obesity-society-bariatric-surgery.pdf',
        type: 'download',
      },
      {
        title: 'The Obesity Society - How Much Weight',
        description: 'Guidance on expected weight loss outcomes from The Obesity Society.',
        href: '/documents/the-obesity-society-how-much-weight.pdf',
        type: 'download',
      },
      {
        title: 'The Obesity Society - How Much Weight During Pregnancy',
        description: 'Information on healthy weight management during pregnancy from The Obesity Society.',
        href: '/documents/the-obesity-society-how-much-weight-during-pregnancy.pdf',
        type: 'download',
      },
      {
        title: 'The Obesity Society - Smart Strategies',
        description: 'Smart strategies for weight management from The Obesity Society.',
        href: '/documents/the-obesity-society-smart-strategies.pdf',
        type: 'download',
      },
      {
        title: 'The Obesity Society - Supplements',
        description: 'Information on supplements and weight management from The Obesity Society.',
        href: '/documents/the-obesity-society-supplements.pdf',
        type: 'download',
      },
      {
        title: 'The Obesity Society - Weight Management: 10 Keys to Success',
        description: 'Ten evidence-based keys to successful weight management from The Obesity Society.',
        href: '/documents/the-obesity-society-weight-management-10-keys-to-success.pdf',
        type: 'download',
      },
    ],
  },
  {
    category: 'Respirology',
    resources: [
      {
        title: 'Canadian Lung Association — How to Use Your Inhaler',
        description: 'Step-by-step guidance on proper inhaler technique to ensure your medication reaches your lungs effectively.',
        href: 'https://www.lung.ca/inhaler-how-to',
        type: 'external',
      },
    ],
  },
];

const categories = ['All', 'Diabetes', 'Weight Management', 'Respirology'];

export default function ResourceTabs() {
  const [active, setActive] = useState('All');

  const visibleSections = sections.filter(
    (s) => active === 'All' || s.category === active
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                active === cat
                  ? 'bg-navy-900 text-white'
                  : 'bg-navy-50 text-navy-600 hover:bg-brand-50 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource sections */}
        <div className="space-y-12">
          {visibleSections.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl mb-6">{section.category}</h2>
              {section.resources.length === 0 ? (
                <p className="text-navy-400 text-sm py-6">
                  Content coming soon — check back for health education and handouts.
                </p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {section.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.href}
                      target={resource.type === 'external' ? '_blank' : undefined}
                      rel={resource.type === 'external' ? 'noopener noreferrer' : undefined}
                      download={resource.type === 'download' ? true : undefined}
                      className="card p-6 flex items-start gap-4 hover:border-brand-300 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                        {resource.type === 'external' ? (
                          <ExternalLink className="w-5 h-5 text-brand-600" />
                        ) : (
                          <Download className="w-5 h-5 text-brand-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-navy-900 group-hover:text-brand-600 transition-colors">
                          {resource.title}
                        </p>
                        <p className="text-sm text-navy-500 mt-1">{resource.description}</p>
                        <p className="text-xs text-brand-600 mt-2 font-medium">
                          {resource.type === 'external' ? 'Open link →' : 'Download →'}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
