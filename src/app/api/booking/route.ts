import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration from environment variables
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'mail.smtp2go.com',
  port: Number(process.env.SMTP_PORT) || 2525,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
};

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  venueType: string;
  location: string;
  balloonType: string;
  additionalInfo: string;
  attachment?: File;
}

function createBookingEmail(data: BookingFormData): string {
  const eventTypeMap: Record<string, string> = {
    'birthday': 'Birthday Party',
    'wedding': 'Wedding',
    'baby-shower': 'Baby Shower',
    'corporate': 'Corporate Event',
    'graduation': 'Graduation',
    'anniversary': 'Anniversary',
    'holiday': 'Holiday Party',
    'other': 'Other Event'
  };

  const venueTypeMap: Record<string, string> = {
    'indoor': 'Indoor',
    'outdoor': 'Outdoor'
  };

  const balloonTypeMap: Record<string, string> = {
    'arch': 'Balloon Arch',
    'backdrop': 'Photo Backdrop',
    'centerpieces': 'Centerpieces',
    'garland': 'Balloon Garland',
    'numbers': 'Number/Letter Balloons',
    'sculpture': 'Custom Sculpture',
    'custom': 'Custom Design'
  };

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Inquiry - Infl8</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 20px;
      background-color: #f8f8ff;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #78396D 0%, #D96E95 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-family: Georgia, serif;
    }
    .content {
      padding: 30px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      color: #78396D;
      font-size: 18px;
      margin-bottom: 15px;
      border-bottom: 2px solid #FFD6E0;
      padding-bottom: 10px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    .info-item {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 4px;
    }
    .info-label {
      font-weight: bold;
      color: #D96E95;
      margin-bottom: 5px;
      display: block;
    }
    .footer {
      background: #FFD6E0;
      padding: 20px;
      text-align: center;
      color: #78396D;
    }
    @media (max-width: 600px) {
      .container {
        margin: 0;
        border-radius: 0;
        box-shadow: none;
      }
      .content {
        padding: 20px;
      }
      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎈 New Booking Inquiry</h1>
    </div>
    <div class="content">
      <div class="section">
        <h2>Personal Information</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Name:</span>
            ${data.firstName} ${data.lastName}
          </div>
          <div class="info-item">
            <span class="info-label">Email:</span>
            ${data.email}
          </div>
          <div class="info-item">
            <span class="info-label">Phone:</span>
            ${data.phone}
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Event Details</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Event Type:</span>
            ${eventTypeMap[data.eventType] || data.eventType}
          </div>
          <div class="info-item">
            <span class="info-label">Event Date:</span>
            ${data.eventDate}
          </div>
          <div class="info-item">
            <span class="info-label">Event Time:</span>
            ${data.eventTime}
          </div>
          <div class="info-item">
            <span class="info-label">Venue Type:</span>
            ${venueTypeMap[data.venueType] || data.venueType}
          </div>
          <div class="info-item">
            <span class="info-label">Location:</span>
            ${data.location}
          </div>
          <div class="info-item">
            <span class="info-label">Balloon Type:</span>
            ${balloonTypeMap[data.balloonType] || data.balloonType}
          </div>
        </div>
      </div>

      ${data.additionalInfo ? `
      <div class="section">
        <h2>Additional Information</h2>
        <div class="info-item">
          <p>${data.additionalInfo.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      ` : ''}
    </div>
  </div>
  <div class="footer">
    <p>We will contact you within 24 hours to confirm your booking!</p>
    <p><strong>Infl8 Balloon Decorations</strong> | Terre Haute, IN</p>
    <p>Phone: 812-240-6242 | Email: info@infl8.net</p>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const eventType = formData.get('eventType') as string;
    const eventDate = formData.get('eventDate') as string;
    const eventTime = formData.get('eventTime') as string;
    const venueType = formData.get('venueType') as string;
    const location = formData.get('location') as string;
    const balloonType = formData.get('balloonType') as string;
    const additionalInfo = formData.get('additionalInfo') as string;
    const attachment = formData.get('attachment');

    const bookingData: BookingFormData = {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      phone: phone || '',
      eventType: eventType || '',
      eventDate: eventDate || '',
      eventTime: eventTime || '',
      venueType: venueType || '',
      location: location || '',
      balloonType: balloonType || '',
      additionalInfo: additionalInfo || '',
      attachment: attachment instanceof File ? attachment : undefined
    };

    // Validate required fields
    if (!bookingData.firstName || !bookingData.lastName || !bookingData.email || 
        !bookingData.phone || !bookingData.eventType || !bookingData.eventDate || 
        !bookingData.eventTime || !bookingData.venueType || !bookingData.location || !bookingData.balloonType) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (!SMTP_CONFIG.auth.user || !SMTP_CONFIG.auth.pass) {
      console.error('SMTP configuration error: Missing SMTP_USER or SMTP_PASS environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Send email using nodemailer
    let emailSent = false;
    let emailError: string | null = null;
    try {
      console.log('Creating SMTP transporter...');
      console.log('SMTP Config:', {
        host: SMTP_CONFIG.host,
        port: SMTP_CONFIG.port,
        secure: SMTP_CONFIG.secure,
        hasUser: !!SMTP_CONFIG.auth.user,
        hasPass: !!SMTP_CONFIG.auth.pass
      });

      const transporter = nodemailer.createTransport({
        host: SMTP_CONFIG.host,
        port: SMTP_CONFIG.port,
        secure: SMTP_CONFIG.secure,
        auth: {
          user: SMTP_CONFIG.auth.user,
          pass: SMTP_CONFIG.auth.pass
        }
      });

      const fromEmail = process.env.FROM_EMAIL || 'info@infl8.net';
      const toEmail = process.env.NOTIFICATION_EMAIL || 'info@infl8.net';
      const fromName = process.env.FROM_NAME || 'Infl8';

      console.log('Email configuration:', {
        from: `${fromName} <${fromEmail}>`,
        to: toEmail,
        hasFromEmail: !!process.env.FROM_EMAIL,
        hasNotificationEmail: !!process.env.NOTIFICATION_EMAIL
      });

      const mailOptions: {
        from: string;
        to: string;
        subject: string;
        html: string;
        attachments?: Array<{ filename: string; content: Buffer }>;
      } = {
        from: `${fromName} <${fromEmail}>`,
        to: toEmail,
        subject: `New Booking Inquiry - ${bookingData.firstName} ${bookingData.lastName}`,
        html: createBookingEmail(bookingData)
      };

      // Add attachment if provided
      if (bookingData.attachment) {
        console.log('Attachment detected:', bookingData.attachment.name);
        console.log('Size:', `${(bookingData.attachment.size / 1024).toFixed(2)} KB`);
        console.log('Type:', bookingData.attachment.type);

        try {
          // Convert ArrayBuffer to Buffer for nodemailer compatibility
          const arrayBuffer = await bookingData.attachment.arrayBuffer();
          const fileBuffer = Buffer.from(arrayBuffer);
          const fileName = bookingData.attachment.name;
          
          mailOptions.attachments = [{
            filename: fileName,
            content: fileBuffer
          }];

          console.log('Attachment processed successfully');
        } catch (attachmentError) {
          console.error('Error processing attachment:', attachmentError);
          // Continue sending email without attachment if there's an error
          emailError = `Attachment processing error: ${attachmentError instanceof Error ? attachmentError.message : String(attachmentError)}`;
        }
      }

      console.log('Sending email...');
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      emailSent = true;
    } catch (err) {
      emailError = err instanceof Error ? err.message : String(err);
      console.error('Email sending error:', err);
      console.error('Error details:', {
        message: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined
      });

      return NextResponse.json(
        {
          error: 'Failed to send email',
          emailError: process.env.NODE_ENV === 'development' ? emailError : 'Email service error. Please try again or contact us directly.'
        },
        { status: 500 }
      );
    }

    // Only return success if email was actually sent
    if (!emailSent) {
      return NextResponse.json(
        { error: 'Email was not sent - unknown error' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Booking inquiry received successfully! We will contact you within 24 hours.',
        data: bookingData,
        emailSent,
        emailError: emailError || undefined
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error in booking API:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your booking. Please try again.',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
      },
      { status: 500 }
    );
  }
}
