import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Lamron Tours</h3>
            <p className="text-gray-400 text-sm">Discover the wonders of Namibia with expert guides and unforgettable experiences.</p>
          </div>
          <div>
            <h4 className="font-bold text-amber-500 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/tours" className="hover:text-amber-500 transition">Tours</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-500 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +264 61 123 4567</li>
              <li>✉️ info@lamrontours.com</li>
              <li>📍 Windhoek, Namibia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-500 mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Lamron Tours & Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
