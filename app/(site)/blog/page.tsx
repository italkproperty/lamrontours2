import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Lamron Tours - Insights & Market Study',
  description: 'Market insights, travel tips, and featured tour highlights from Lamron Tours & Safaris.',
}

export default function BlogPage() {
  return (
    <main className="section-container py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Insights & Market Study</h1>
        <p className="text-gray-600 mt-2">Analysis, recommendations, and highlights from our market study.</p>
      </header>

      <section className="max-w-4xl mx-auto grid gap-8">
        <article className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-2">Market Study Summary</h2>
          <p className="text-gray-700 mb-4">We analyzed consumer demand, distribution channels, and competitor positioning across Namibia. Key findings: increased demand for curated, culturally immersive tours, strong interest from European and North American markets, and a willingness to pay premium prices for authentic experiences and small-group safaris.</p>
          <Link href="/blog/market-study"><a className="text-amber-600 font-semibold">Read the full market study →</a></Link>
        </article>

        <article className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-2">Tour Packages Insights</h2>
          <p className="text-gray-700 mb-4">Our package analysis shows best sellers include Sossusvlei Dune trips and Etosha safaris. Opportunities: family packages, coastal adventure bundling, and luxury wellness retreats.</p>
          <Link href="/blog/packages-insights"><a className="text-amber-600 font-semibold">Explore package insights →</a></Link>
        </article>

        <article className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-2">SEO & Content Tips</h2>
          <p className="text-gray-700 mb-4">We recommend publishing 1-2 long-form blog posts per month, optimizing titles for target keywords (eg. 'Namibia safari tours', 'Sossusvlei day trips'), and adding structured data for tours.</p>
          <Link href="/blog/seo-tips"><a className="text-amber-600 font-semibold">Get SEO tips →</a></Link>
        </article>
      </section>
    </main>
  )
}
