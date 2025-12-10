import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Lamron Tours & Safaris | Namibia Adventures',
    template: '%s | Lamron Tours',
  },
  description: 'Discover unforgettable safaris and adventures in Namibia. Expert guides, luxury camping, and authentic experiences.',
  keywords: ['Namibia', 'tours', 'safaris', 'adventure', 'travel', 'Etosha', 'Sossusvlei'],
  openGraph: {
    title: 'Lamron Tours & Safaris',
    description: 'Discover unforgettable safaris and adventures in Namibia',
    url: 'https://lamrontours.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
