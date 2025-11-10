import { NextRequest, NextResponse } from 'next/server';

const WIX_SITE_ID = 'b3193f81-d796-471e-8ff6-f4d438fd3b6e';
const WIX_FORM_ID = 'fc2c4d73-1102-499d-9b84-536690e72cbc';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get API key from environment variable
    const apiKey = process.env.WIX_API_KEY;
    
    if (!apiKey) {
      console.error('WIX_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Construct the full name if both first and last names are provided
    const fullName = [firstName, lastName].filter(Boolean).join(' ');

    // Prepare submission data for Wix
    // Note: Field keys may need to be adjusted based on your actual Wix form configuration
    const submissionData = {
      formId: WIX_FORM_ID,
      submission: {
        submissions: {
          ...(fullName && { 'name': fullName }), // Adjust field key as needed
          ...(email && { 'email': email }),
          ...(phone && { 'phone': phone }),
        }
      },
      status: 'CONFIRMED'
    };

    // Submit to Wix Forms API
    const response = await fetch(
      'https://www.wixapis.com/form-submission-service/v4/submissions',
      {
        method: 'POST',
        headers: {
          'Authorization': apiKey,
          'Content-Type': 'application/json',
          'wix-site-id': WIX_SITE_ID,
        },
        body: JSON.stringify(submissionData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Wix API error:', data);
      return NextResponse.json(
        { error: 'Failed to submit form', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed!',
      submissionId: data.submission?.id
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
