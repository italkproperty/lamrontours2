import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Tour Packages Insights — Lamron Tours',
  description: 'In-depth analysis of tour packages, pricing and product opportunities.',
};

type ParsedBlock = {
  title?: string | null;
  content?: string[];
};

type PackageGroup = {
  name: string | null;
  details: string[];
};

export default function PackagesInsightsPage() {
  const p = path.join(process.cwd(), 'data', 'parsed', 'Packages  2.json');
  let blocks: ParsedBlock[] = [];
  try {
    blocks = JSON.parse(fs.readFileSync(p, 'utf8')) as ParsedBlock[];
  } catch (e) {
    blocks = [{ title: null, content: ['Error reading parsed packages'] }];
  }

  // Group packages by detected title lines — simple heuristic: title entries followed by Duration/Accommodation
  const packages: PackageGroup[] = [];
  let current: PackageGroup | null = null;
  for (const b of blocks) {
    const titleLower = (b.title || '').toLowerCase();
    if (b.title && !titleLower.includes('duration') && !titleLower.includes('accommodation') && !titleLower.includes('activities')) {
      if (current) packages.push(current);
      current = { name: b.title, details: [] };
    } else if (current) {
      // ensure content is an array of strings
      const items = Array.isArray(b.content) ? b.content.map(String) : [];
      current.details.push(...items);
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
            <p className="text-gray-700 mb-2">{(pkg.details || []).slice(0,3).join(' • ')}</p>
            <p className="text-sm text-gray-500">Suggested action: add high-quality hero image, fill itinerary with day-by-day activities, and include user reviews.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
