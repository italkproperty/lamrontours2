import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Tour Packages Insights — Lamron Tours',
  description: 'In-depth analysis of tour packages, pricing and product opportunities.',
};

export default function PackagesInsightsPage() {
  const p = path.join(process.cwd(), 'data', 'parsed', 'Packages  2.json');
  let blocks = [];
  try {
    blocks = JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    blocks = [{ title: null, content: ['Error reading parsed packages'] }];
  }

  // Group packages by detected title lines — simple heuristic: title entries followed by Duration/Accommodation
  const packages = [];
  let current = null;
  for (const b of blocks) {
    if (b.title && !b.title.toLowerCase().includes('duration') && !b.title.toLowerCase().includes('accommodation') && !b.title.toLowerCase().includes('activities')) {
      if (current) packages.push(current);
      current = { name: b.title, details: [] };
    } else if (current) {
      current.details.push(...(b.content || []));
    }
  }
  if (current) packages.push(current);

  return (
    <main className="section-container py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Package Insights</h1>
        <p className="text-gray-600 mt-2">Key takeaways from your package list and suggested optimizations.</p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-6">
        {packages.slice(0, 12).map((pkg, idx) => (
          <article key={idx} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
            <p className="text-gray-700 mb-2">{pkg.details.slice(0,3).join(' • ')}</p>
            <p className="text-sm text-gray-500">Suggested action: add high-quality hero image, fill itinerary with day-by-day activities, and include user reviews.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
