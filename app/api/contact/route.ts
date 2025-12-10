import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for contact messages (in production, use a database or email service)
let contactMessages: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create message object
    const contactMessage = {
      id: `MSG-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
    };

    contactMessages.push(contactMessage);

    // In production, send email or save to database
    console.log('New contact message:', contactMessage);

    return NextResponse.json(
      {
        message: 'Message sent successfully! We will get back to you soon.',
        messageId: contactMessage.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      {
        message: 'Contact API',
        totalMessages: contactMessages.length,
        messages: contactMessages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
