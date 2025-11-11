import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    // Validate required fields
    if (!firstName) {
      return NextResponse.json(
        { error: 'First name is required' },
        { status: 400 }
      );
    }

    if (!lastName) {
      return NextResponse.json(
        { error: 'Last name is required' },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get Airtable credentials from environment variables
    const airtableToken = process.env.AIRTABLE_TOKEN;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME;

    if (!airtableToken || !airtableBaseId || !airtableTableName) {
      console.error('Airtable credentials not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare Airtable record
    const recordData = {
      records: [
        {
          fields: {
            'First Name': firstName,
            'Last Name': lastName,
            'E-mail': email,
            ...(phone && { 'Phone': phone }),
          }
        }
      ]
    };

    // Submit to Airtable API
    const response = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${airtableToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recordData),
      }
    );

    const responseText = await response.text();

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      data = { rawResponse: responseText };
    }

    if (!response.ok) {
      console.error('=== Airtable API Error ===');
      console.error('Status:', response.status);
      console.error('Response:', data);
      return NextResponse.json(
        { error: 'Failed to submit form', details: data.error || data },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
      recordId: data.records?.[0]?.id
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
