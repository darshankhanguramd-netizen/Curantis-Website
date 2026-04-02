import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Resources',
  description: 'Health articles, patient education, and clinical insights from Curantis Specialty Care.',
};

// In production, this would come from MDX file frontmatter via fs/gray-matter
const posts = [
  {
    slug: 'understanding-a1c',
    title: 'Understanding Your A1C: What the Numbers Mean',
    excerpt: 'A1C is one of the most important markers in diabetes management. Here\'s what your number means, how often it should be checked, and what targets to aim for.',
    date: '2026-04-01',
    category: 'Diabetes',
    readTime: '5 min read',
  },
  {
    slug: 'virtual-care-what-to-expect',
    title: 'Your First Virtual Specialist Visit: What to Expect',
    excerpt: 'Nervous about seeing a specialist by video? Here\'s a step-by-step walkthrough of what happens before, during, and after your virtual consultation.',
    date: '2026-03-28',
    category: 'Patient Info',
    readTime: '4 min read',
  },
  {
    slug: 'inhaler-technique-matters',
    title: 'Why Inhaler Technique Matters More Than the Medication',
    excerpt: 'Up to 90% of patients use their inhaler incorrectly. Poor technique means the medication isn\'t reaching your lungs — here\'s how to fix it.',
    date: '2026-03-20',
    category: 'Respirology',
    readTime: '6 min read',
  },
  {
    slug: 'referring-physicians-guide',
    title: 'A Guide for Referring Physicians: Getting the Most from Your Referral',
    excerpt: 'Tips for Ontario family physicians and NPs on crafting effective specialist referrals — what to include, what to expect back, and how to streamline communication.',
    date: '2026-03-05',
    category: 'For Providers',
    readTime: '4 min read',
  },
];

const categories = ['All', 'Diabetes', 'Respirology', 'Patient Info', 'For Providers'];

export default function BlogPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide max-w-3xl">
          <h1>Blog &amp; <span className="text-brand-600">Resources</span></h1>
          <p className="mt-4 text-lg text-navy-600">
            Health education, clinical insights, and practical advice from our specialist team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Category filter (static for now — make interactive in Cursor) */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-brand-600 text-white'
                    : 'bg-navy-50 text-navy-600 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card-elevated overflow-hidden group">
                <div className="aspect-[16/9] bg-gradient-to-br from-brand-50 to-sage-50 flex items-center justify-center">
                  <p className="text-navy-400 text-xs">[Article image]</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-navy-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-navy-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-navy-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-brand-600 hover:text-brand-800 inline-flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
