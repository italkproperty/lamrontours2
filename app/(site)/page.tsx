import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

const featuredTours = [
  {
    id: 1,
    slug: 'dune-desert-adventure',
    name: 'Dune Desert Adventure',
    location: 'Sossusvlei, Namib Desert',
    price: 1299,
    rating: 4.8,
    reviews: 127,
    duration: '3 days',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Experience the majestic red dunes of Sossusvlei with expert guides and luxury camping.',
  },
  {
    id: 2,
    slug: 'etosha-wildlife-safari',
    name: 'Etosha Wildlife Safari',
    location: 'Etosha National Park',
    price: 1599,
    rating: 4.9,
    reviews: 156,
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
    description: 'Witness the incredible wildlife of Etosha with game drives and professional guides.',
  },
  {
    id: 3,
    slug: 'skeleton-coast-expedition',
    name: 'Skeleton Coast Expedition',
    location: 'Skeleton Coast',
    price: 1899,
    rating: 4.7,
    reviews: 89,
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    description: 'Explore the wild and remote Skeleton Coast with dramatic landscapes.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop"
          alt="Namibia Desert"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Magic of Namibia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Unforgettable safaris, stunning landscapes, and authentic cultural experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary inline-block">
              Explore Tours
            </Link>
            <Link href="/contact" className="btn-secondary inline-block">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="section-container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated experiences across Namibia's most breathtaking destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.slug}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm font-bold text-amber-600">
                    ${tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{tour.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">📍 {tour.location}</p>
                  <p className="text-sm text-gray-600 mb-3">⏱️ {tour.duration}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{tour.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-gray-900">{tour.rating}</span>
                      <span className="text-xs text-gray-600">({tour.reviews})</span>
                    </div>
                    <button className="text-amber-600 font-semibold hover:text-amber-700 transition">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tours" className="btn-primary inline-block">
            View All Tours
          </Link>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-lg">Happy Travelers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <p className="text-lg">Unique Tours</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Why Choose Lamron Tours
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Expert Guides',
              description: 'Certified and experienced guides with deep knowledge of Namibia',
              icon: '🎯',
            },
            {
              title: 'Luxury Camping',
              description: 'Comfortable accommodation under the African stars',
              icon: '🏕️',
            },
            {
              title: 'Small Groups',
              description: 'Intimate group sizes for personalized experiences',
              icon: '👥',
            },
            {
              title: 'Sustainable Tourism',
              description: 'Eco-friendly practices that protect Namibia\'s nature',
              icon: '🌍',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for an Adventure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start planning your dream Namibia adventure today
          </p>
          <Link href="/bookings" className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
            Book Your Tour Now
          </Link>
        </div>
      </section>
    </>
  );
}
