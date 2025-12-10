'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('An error occurred while sending your message. Please try again.');
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
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-amber-50">We'd love to hear from you. Send us a message anytime.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+264611234567" className="text-gray-700 hover:text-amber-600 transition">
                    +264 61 123 4567
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@lamrontours.com" className="text-gray-700 hover:text-amber-600 transition">
                    info@lamrontours.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">
                    Windhoek, Khomas Region<br />
                    Namibia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-amber-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Monday - Friday:</strong> 08:00 - 18:00</li>
                <li><strong>Saturday:</strong> 09:00 - 14:00</li>
                <li><strong>Sunday:</strong> Closed</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">
                *All times in Central Africa Time (CAT)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              {error && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {submitted && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6">
                  <p className="text-green-700">✓ Message sent successfully! We'll get back to you soon.</p>
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
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: 'How do I book a tour?',
                answer: 'Simply visit our Tours page, select your preferred tour, and click "Book Now". Fill in your details on the booking form and we\'ll confirm your reservation within 24 hours.',
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'We offer free cancellations up to 30 days before your tour. Cancellations within 30 days may incur a fee. For details, please contact our team.',
              },
              {
                question: 'Are your tours suitable for families?',
                answer: 'Yes! Many of our tours are family-friendly. We recommend checking individual tour details or contacting us for recommendations based on your family\'s needs.',
              },
              {
                question: 'What is included in the tour price?',
                answer: 'Our tour prices include accommodation, all meals, transportation within the tour area, entrance fees, and an expert guide. Flights to/from Namibia are not included.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition"
              >
                <summary className="font-bold text-gray-900 text-lg flex items-center justify-between">
                  {faq.question}
                  <span className="text-amber-600">+</span>
                </summary>
                <p className="text-gray-700 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
