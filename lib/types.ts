export interface Tour {
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
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  highlights: string[];
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  tourId: number;
  tourName: string;
  date: string;
  guests: number;
  phone: string;
  specialRequests: string;
  createdAt: string;
}
