import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface TourCardProps {
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

export default function TourCard({
  slug,
  name,
  location,
  price,
  rating,
  reviews,
  image,
  duration,
  description,
}: TourCardProps) {
  return (
    <Link href={`/tours/${slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer h-full">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm font-bold text-amber-600">
            ${price}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">📍 {location}</p>
          <p className="text-sm text-gray-600 mb-3">⏱️ {duration}</p>
          <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-gray-900">{rating}</span>
              <span className="text-xs text-gray-600">({reviews})</span>
            </div>
            <button className="text-amber-600 font-semibold hover:text-amber-700 transition">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
