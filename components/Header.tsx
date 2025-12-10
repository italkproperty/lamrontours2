import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div>
            <div className="font-bold text-gray-900">Lamron Tours</div>
            <div className="text-xs text-amber-600">Safaris & Adventures</div>
          </div>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/tours" className="text-gray-700 hover:text-amber-600 transition font-medium">
            Tours
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition font-medium">
            Contact
          </Link>
        </div>

        <Link
          href="/bookings"
          className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}
