'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';

interface TourDetails {
  id: number;
  slug: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
  description: string;
  itinerary: Array<{ day: number; title: string; description: string }>;
  highlights: string[];
}

const mockTours: Record<string, TourDetails> = {
  'dune-desert-adventure': {
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
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Scenic Drive',
        description: 'Arrive in Windhoek and drive to the Namib Desert. Settle into your luxury camp and enjoy dinner under the stars.',
      },
      {
        day: 2,
        title: 'Dune Exploration',
        description: 'Wake up early for sunrise at Sossusvlei. Explore the iconic red dunes and visit Deadvlei.',
      },
      {
        day: 3,
        title: 'Desert Culture',
        description: 'Visit San Bushmen community, learn about their traditions, and enjoy a traditional meal.',
      },
    ],
    highlights: ['Sossusvlei Dunes', 'Deadvlei', 'San Culture', 'Stargazing'],
  },
  'etosha-wildlife-safari': {
    id: 2,
    slug: 'etosha-wildlife-safari',
    name: 'Etosha Wildlife Safari',
    location: 'Etosha National Park',
    price: 1599,
    rating: 4.9,
    reviews: 156,
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
    description: 'Witness the incredible wildlife of Etosha with game drives and professional wildlife photographers.',
    itinerary: [
      {
        day: 1,
        title: 'Park Entry & First Game Drive',
        description: 'Enter Etosha and head to your safari lodge. Afternoon game drive to spot wildlife.',
      },
      {
        day: 2,
        title: 'Full Day Safari',
        description: 'Morning and afternoon game drives. Watch elephants, lions, and zebras at the waterholes.',
      },
      {
        day: 3,
        title: 'Specialist Game Drive',
        description: 'Join expert guides for advanced wildlife photography and rare animal spotting.',
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Morning game drive and return journey to Windhoek.',
      },
    ],
    highlights: ['Big Five', 'Waterholes', 'Photography', 'Expert Guides'],
  },
  'skeleton-coast-expedition': {
    id: 3,
    slug: 'skeleton-coast-expedition',
    name: 'Skeleton Coast Expedition',
    location: 'Skeleton Coast',
    price: 1899,
    rating: 4.7,
    reviews: 89,
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    description: 'Explore the wild and remote Skeleton Coast with dramatic landscapes and shipwrecks.',
    itinerary: [
      {
        day: 1,
        title: 'Coastal Discovery',
        description: 'Drive to the Skeleton Coast and explore the dramatic shoreline.',
      },
      {
        day: 2,
        title: 'Shipwreck Tours',
        description: 'Visit historic shipwrecks and learn maritime history.',
      },
      {
        day: 3,
        title: 'Wildlife & Nature',
        description: 'Spot desert elephants and other wildlife adapted to harsh conditions.',
      },
      {
        day: 4,
        title: 'Return Journey',
        description: 'Scenic drive back with stops at key viewpoints.',
      },
    ],
    highlights: ['Shipwrecks', 'Desert Elephants', 'Dramatic Landscapes', 'Unique Ecosystem'],
  },
  'fish-river-canyon-hike': {
    id: 4,
    slug: 'fish-river-canyon-hike',
    name: 'Fish River Canyon Hiking',
    location: 'Fish River Canyon',
    price: 899,
    rating: 4.6,
    reviews: 112,
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1433086720051-e42de3b3e012?w=800&h=600&fit=crop',
    description: 'Hike through Africa\'s largest canyon with stunning vistas and geological formations.',
    itinerary: [
      {
        day: 1,
        title: 'Canyon Exploration',
        description: 'Guided hike through the Fish River Canyon with expert geological commentary.',
      },
      {
        day: 2,
        title: 'Scenic Trail',
        description: 'Complete the canyon trail with opportunities for photography and wildlife spotting.',
      },
    ],
    highlights: ['Geological Formations', 'Photography', 'Hiking', 'Scenic Views'],
  },
  'damaraland-cultural-tour': {
    id: 5,
    slug: 'damaraland-cultural-tour',
    name: 'Damaraland Cultural Tour',
    location: 'Damaraland',
    price: 799,
    rating: 4.5,
    reviews: 78,
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    description: 'Immerse yourself in Damara culture and visit Twyfelfontein ancient rock engravings.',
    itinerary: [
      {
        day: 1,
        title: 'Cultural Meeting',
        description: 'Meet with Damara communities and learn about their traditions and crafts.',
      },
      {
        day: 2,
        title: 'Twyfelfontein',
        description: 'Visit UNESCO site with ancient rock engravings and learn about prehistoric art.',
      },
    ],
    highlights: ['Cultural Exchange', 'Rock Engravings', 'Crafts', 'History'],
  },
  'swakopmund-adventure': {
    id: 6,
    slug: 'swakopmund-adventure',
    name: 'Swakopmund Adventure',
    location: 'Swakopmund',
    price: 649,
    rating: 4.4,
    reviews: 134,
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    description: 'Experience beach activities, desert adventures, and colonial charm in Swakopmund.',
    itinerary: [
      {
        day: 1,
        title: 'Beach & Adventure',
        description: 'Sandboarding, quad biking, and beach exploration.',
      },
      {
        day: 2,
        title: 'Colonial Town',
        description: 'Explore colonial architecture, local markets, and seafood restaurants.',
      },
    ],
    highlights: ['Sandboarding', 'Quad Biking', 'Beach', 'Local Culture'],
  },
};

export default function TourDetailsPage({ params }: { params: { slug: string } }) {
  const [tour, setTour] = useState<TourDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load tour details
    const tour = mockTours[params.slug];
    if (tour) {
      setTour(tour);
    }
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
          <p className="mt-4 text-gray-600">Loading tour details...</p>
        </div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <Link href="/tours" className="btn-primary inline-block">
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-96 w-full">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Tour Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{tour.name}</h1>
            
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="text-lg text-gray-700">{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="text-lg text-gray-700">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="text-lg font-bold text-gray-900">{tour.rating}</span>
                <span className="text-gray-600">({tour.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-12">{tour.description}</p>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="bg-amber-50 rounded-lg p-4 text-center">
                    <p className="font-semibold text-gray-900">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-amber-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900">Day {day.day}: {day.title}</h3>
                    <p className="text-gray-700 mt-2">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Guest Reviews</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="font-semibold">Amazing experience!</span>
                    </div>
                    <p className="text-gray-600">
                      "Lamron Tours provided an unforgettable experience. The guides were knowledgeable, accommodations were comfortable, and the landscapes were breathtaking."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- John Doe</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-8 sticky top-24">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                ${tour.price}
              </div>
              <p className="text-gray-600 mb-6">Per person</p>

              <Link
                href={`/bookings?tour=${tour.id}`}
                className="btn-primary block w-full text-center mb-4"
              >
                Book This Tour
              </Link>

              <button className="btn-secondary block w-full mb-6">
                Request More Info
              </button>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✓ Accommodation</li>
                  <li>✓ All meals</li>
                  <li>✓ Expert guide</li>
                  <li>✓ Transportation</li>
                  <li>✓ Park entrance fees</li>
                  <li>✓ Equipment</li>
                </ul>
              </div>

              <div className="border-t mt-6 pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help you plan the perfect tour.
                </p>
                <Link href="/contact" className="text-amber-600 font-semibold hover:text-amber-700">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="bg-gray-50 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Other Popular Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(mockTours)
              .filter((t) => t.id !== tour.id)
              .slice(0, 3)
              .map((relatedTour) => (
                <Link key={relatedTour.id} href={`/tours/${relatedTour.slug}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedTour.image}
                        alt={relatedTour.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{relatedTour.name}</h3>
                      <p className="text-amber-600 font-bold">${relatedTour.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
