import { NextRequest, NextResponse } from 'next/server';

const tours = [
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

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(tours, { status: 200 });
  } catch (error) {
    console.error('Error fetching tours:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tours' },
      { status: 500 }
    );
  }
}
