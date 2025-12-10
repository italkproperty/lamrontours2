export const metadata = {
  title: 'SEO Tips for Tour Operators — Lamron Tours',
  description: 'Actionable SEO and content recommendations for growing organic traffic.',
};

export default function SeoTipsPage() {
  return (
    <main className="section-container py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">SEO & Content Strategy</h1>
        <p className="text-gray-600 mt-2">Practical SEO steps to increase visibility and bookings.</p>
      </header>

      <section className="max-w-4xl mx-auto space-y-6">
        <article className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-3">Content Priorities</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Publish long-form guides (1,500–2,500 words) for high-value keywords like "Namibia safari tours".</li>
            <li>Create location pages for each major destination (Sossusvlei, Etosha, Swakopmund) with local keywords.</li>
            <li>Use structured data (Tour schema) for each tour page to improve SERP appearance.</li>
          </ul>
        </article>

        <article className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-3">Technical Checklist</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Ensure fast Core Web Vitals: compress images, enable CDN caching (Vercel already provides CDN).</li>
            <li>Use canonical URLs and generate sitemap.xml (already present).</li>
            <li>Implement meta titles & descriptions per page and Open Graph tags.</li>
          </ul>
        </article>

        <article className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-3">Distribution & Promotion</h2>
          <p className="text-gray-700">Repurpose long-form posts into social posts and newsletters. Build partner relationships with local lodges and tourism boards to drive referral traffic.</p>
        </article>
      </section>
    </main>
  );
}
