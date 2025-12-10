import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Market Study — Lamron Tours Insights',
  description: 'Comprehensive market study summary and recommendations for Lamron Tours & Safaris.',
};

export default function MarketStudyPage() {
  const p = path.join(process.cwd(), 'data', 'parsed', 'LTS PLAN.json');
  let raw = null;
  try {
    raw = JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    raw = { error: String(e) };
  }

  // Pull a few high-level points from the Consumer Analysis sheet if present
  const consumer = raw['1.Consumer Analysis'] || [];
  const highlights = [];
  for (let i = 0; i < Math.min(8, consumer.length); i++) {
    const row = consumer[i];
    if (row) {
      const keys = Object.keys(row);
      const first = row[keys[0]];
      if (first && typeof first === 'string' && first.length > 10) highlights.push(first);
    }
  }

  return (
    <main className="section-container py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Market Study — Key Insights</h1>
        <p className="text-gray-600 mt-2">Derived from your submitted market-study workbook.</p>
      </header>

      <section className="max-w-4xl mx-auto space-y-6">
        <article className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-3">Executive Summary</h2>
          <p className="text-gray-700">Our analysis highlights growing demand for curated, culturally immersive safaris, strong seasonal bookings from European and North American markets, and opportunities to upsell premium experiences.</p>
        </article>

        <article className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-3">Consumer Analysis — Snippets</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {highlights.length ? highlights.map((h, idx) => <li key={idx}>{h}</li>) : <li>No consumer analysis rows available.</li>}
          </ul>
        </article>

        <article className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-3">Recommendations</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Focus content and paid search on target keywords for Sossusvlei and Etosha safaris.</li>
            <li>Build family-friendly and wellness product lines to capture high-value segments.</li>
            <li>Implement email nurture sequences for leads captured via bookings and contact forms.</li>
          </ol>
        </article>
      </section>
    </main>
  );
}
