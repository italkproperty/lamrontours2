import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for bookings (in production, use a database)
let bookings: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, tourId, date, guests, phone } = body;
    if (!name || !email || !tourId || !date || !guests || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create booking object
    const booking = {
      id: `BOOK-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);

    // In production, save to database
    console.log('New booking:', booking);

    return NextResponse.json(
      {
        message: 'Booking submitted successfully!',
        bookingId: booking.id,
        data: booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      {
        message: 'Bookings API',
        totalBookings: bookings.length,
        bookings: bookings,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
