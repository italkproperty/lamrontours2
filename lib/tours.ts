import tours from '@/data/tours.json';
import { Tour } from './types';

export function getAllTours(): Tour[] {
  return tours as Tour[];
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour: Tour) => tour.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.slice(0, 3) as Tour[];
}
