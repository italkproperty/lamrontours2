'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function BookingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourId: '',
    tourName: '',
    date: '',
    guests: '1',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const tours = [
    { id: '1', name: 'Dune Desert Adventure' },
    { id: '2', name: 'Etosha Wildlife Safari' },
    { id: '3', name: 'Skeleton Coast Expedition' },
    { id: '4', name: 'Fish River Canyon Hiking' },
    { id: '5', name: 'Damaraland Cultural Tour' },
    { id: '6', name: 'Swakopmund Adventure' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'tourId' && {
        tourName: tours.find((t) => t.id === value)?.name || '',
      }),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        tourId: '',
        tourName: '',
        date: '',
        guests: '1',
        specialRequests: '',
      });

      // Scroll to success message
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      setError('An error occurred while submitting your booking. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Book Your Adventure</h1>
          <p className="text-xl text-amber-50">Secure your spot on the tour of a lifetime</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-12 text-center" ref={successRef}>
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Booking Submitted!</h2>
            <p className="text-xl text-gray-700 mb-8">
              Thank you for booking with Lamron Tours. We'll contact you shortly to confirm your booking and answer any questions.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary inline-block mb-4"
            >
              Make Another Booking
            </button>
            <p className="text-gray-600">or</p>
            <Link href="/tours" className="text-amber-600 font-semibold hover:text-amber-700 mt-4 inline-block">
              Browse More Tours →
            </Link>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Booking Details</h2>

            {error && (
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Tour Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Tour *</label>
                <select
                  name="tourId"
                  value={formData.tourId}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                >
                  <option value="">Choose a tour...</option>
                  {tours.map((tour) => (
                    <option key={tour.id} value={tour.id}>
                      {tour.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Travel Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Guests *</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="20"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                placeholder="Any dietary requirements, accessibility needs, or special requests..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Complete Booking'}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              We'll contact you within 24 hours to confirm your booking
            </p>
          </form>
        )}

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-amber-50 rounded-lg p-6">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Flexible Dates</h3>
            <p className="text-gray-700">Available year-round. We can accommodate custom dates.</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Transparent Pricing</h3>
            <p className="text-gray-700">All prices include accommodation, meals, and transportation.</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-6">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-700">
              <Link href="/contact" className="text-amber-600 font-semibold hover:text-amber-700">
                Contact our team →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
