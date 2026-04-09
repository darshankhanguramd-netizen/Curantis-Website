import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: 'article',
      publishedTime: post.meta.date,
      authors: [post.meta.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-narrow">
            <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm text-brand-600 hover:text-brand-800 mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            {post.meta.category}
          </div>
          <h1 className="text-3xl md:text-4xl">{post.meta.title}</h1>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-navy-500">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {post.meta.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.meta.date).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.meta.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-narrow">
          {/* 
            In production, use next-mdx-remote to render the MDX content.
            For now, we render the raw markdown content as a placeholder.
            
            TODO in Cursor:
            import { MDXRemote } from 'next-mdx-remote/rsc';
            <MDXRemote source={post.content} />
          */}
          <div className="prose-curantis">
            <div className="bg-navy-50 rounded-xl p-8 text-center">
              <p className="text-navy-500 text-sm">
                MDX content renders here. Connect <code>next-mdx-remote</code> in Cursor to render 
                the full article from <code>content/blog/{params.slug}.mdx</code>
              </p>
            </div>
          </div>

          {/* Post footer */}
          <div className="mt-12 pt-8 border-t border-navy-100">
            <p className="text-sm text-navy-500 italic">
              This article is for educational purposes and does not replace individual medical advice. 
              If you have questions about your health, speak with your physician or specialist.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/resources" className="btn-secondary text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> All resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
