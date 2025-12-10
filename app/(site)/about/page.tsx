import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Lamron Tours</h1>
          <p className="text-xl text-amber-50">Your trusted partner for unforgettable Namibia adventures</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Founded in 2009, Lamron Tours & Safaris began with a simple vision: to share the breathtaking beauty of Namibia with travelers from around the world.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              What started as a small family business has grown into one of Namibia's most respected tour operators, known for authentic experiences, expert guides, and sustainable tourism practices.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              We believe that travel is more than just seeing new places—it's about connecting with nature, learning from diverse cultures, and creating memories that last a lifetime.
            </p>
            <Link href="/tours" className="btn-primary inline-block">
              Explore Our Tours
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=500&fit=crop"
              alt="Namibia Landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Sustainability',
                description: 'We are committed to protecting Namibia\'s natural environment for future generations through eco-friendly practices.',
              },
              {
                icon: '✨',
                title: 'Quality',
                description: 'Every detail matters. We maintain the highest standards in accommodation, guiding, and service.',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'Transparent pricing, honest communication, and fair treatment of our team and partners.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We continuously improve our offerings to provide the best possible travel experiences.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'David Kamba',
              role: 'Founder & CEO',
              bio: 'Born and raised in Namibia with 20+ years of tourism experience.',
            },
            {
              name: 'Sarah Moyo',
              role: 'Head Guide',
              bio: 'Expert wildlife guide with certification from the Namibia Wildlife Institute.',
            },
            {
              name: 'James Okereke',
              role: 'Operations Manager',
              bio: 'Ensures smooth operations and exceptional guest experiences on every tour.',
            },
            {
              name: 'Amara Dlamini',
              role: 'Cultural Liaison',
              bio: 'Bridges tourism and local communities for authentic cultural exchanges.',
            },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-48 w-full bg-gradient-to-r from-amber-400 to-orange-400"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">1000+</div>
              <p className="text-lg">Happy Travelers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">25+</div>
              <p className="text-lg">Unique Tours</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">4.8★</div>
              <p className="text-lg">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Awards & Recognition</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              award: 'Best Safari Operator 2023',
              issuer: 'Namibia Tourism Board',
            },
            {
              award: 'Sustainable Tourism Award',
              issuer: 'African Safari Association',
            },
            {
              award: 'Top Rated on TripAdvisor',
              issuer: 'Traveler Reviews (4.8/5)',
            },
          ].map((cert, index) => (
            <div key={index} className="bg-amber-50 border-2 border-amber-200 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{cert.award}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Lamron Tours</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Local Guides',
                description: 'Our guides are born and raised in Namibia with deep knowledge of the land, wildlife, and culture.',
              },
              {
                title: 'Personalized Experiences',
                description: 'Small group sizes and flexible itineraries ensure your tour is tailored to your interests.',
              },
              {
                title: 'Sustainable Practices',
                description: 'We are committed to minimizing our environmental impact and supporting local communities.',
              },
              {
                title: '24/7 Support',
                description: 'Our team is available around the clock to ensure your comfort and safety.',
              },
              {
                title: 'Competitive Pricing',
                description: 'Best value for money without compromising on quality or experiences.',
              },
              {
                title: 'Proven Track Record',
                description: 'Over 1000 satisfied customers and countless 5-star reviews speak to our excellence.',
              },
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Namibia?</h2>
          <p className="text-xl mb-8 text-amber-50">
            Join thousands of satisfied travelers who have discovered the magic of Namibia with Lamron Tours
          </p>
          <Link href="/tours" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
            Explore Tours Now
          </Link>
        </div>
      </section>
    </>
  );
}
