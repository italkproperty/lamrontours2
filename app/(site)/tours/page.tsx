'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Tour {
  id: number;
  slug: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  duration: string;
  description: string;
}

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'rating'>('rating');

  useEffect(() => {
    // Load tours from JSON
    const loadTours = async () => {
      try {
        const response = await fetch('/api/tours');
        const data = await response.json();
        setTours(data);
        setFilteredTours(data);
      } catch (error) {
        console.error('Failed to load tours:', error);
        // Fallback with mock data
        setTours(mockTours);
        setFilteredTours(mockTours);
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, []);

  useEffect(() => {
    let sorted = [...tours];
    
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredTours(sorted);
  }, [sortBy, tours]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
          <p className="mt-4 text-gray-600">Loading tours...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Explore Our Tours</h1>
          <p className="text-xl text-amber-50">Discover Namibia's most incredible destinations</p>
        </div>
      </section>

      {/* Tours List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sorting Controls */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <p className="text-gray-600">Showing {filteredTours.length} tours</p>
          </div>
          <div>
            <label className="text-gray-700 mr-4">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
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
                    <span className="text-amber-600 font-semibold hover:text-amber-700 transition">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

// Mock data for fallback
const mockTours: Tour[] = [
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
  {
    id: 4,
    slug: 'fish-river-canyon-hike',
    name: 'Fish River Canyon Hiking',
    location: 'Fish River Canyon',
    price: 899,
    rating: 4.6,
    reviews: 112,
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1433086720051-e42de3b3e012?w=800&h=600&fit=crop',
    description: 'Hike through Africa\'s largest canyon with stunning vistas.',
  },
  {
    id: 5,
    slug: 'damaraland-cultural-tour',
    name: 'Damaraland Cultural Tour',
    location: 'Damaraland',
    price: 799,
    rating: 4.5,
    reviews: 78,
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    description: 'Immerse yourself in Damara culture and ancient rock engravings.',
  },
  {
    id: 6,
    slug: 'swakopmund-adventure',
    name: 'Swakopmund Adventure',
    location: 'Swakopmund',
    price: 649,
    rating: 4.4,
    reviews: 134,
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    description: 'Experience beach activities, desert adventures, and colonial charm.',
  },
];
