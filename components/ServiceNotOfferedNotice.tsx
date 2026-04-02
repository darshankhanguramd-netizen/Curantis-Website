import Link from 'next/link';

export default function ServiceNotOfferedNotice({ title }: { title: string }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow max-w-xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        <p className="mt-4 text-navy-600">
          Curantis is currently focused on <strong>diabetes</strong> and{' '}
          <strong>respirology</strong> specialist care. This program is not offered at this
          time.
        </p>
        <Link href="/services" className="btn-primary mt-8 inline-flex">
          View our services
        </Link>
      </div>
    </section>
  );
}
