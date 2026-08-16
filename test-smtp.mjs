import nodemailer from 'nodemailer';

// SMTP Configuration (same as in .env.example)
const SMTP_CONFIG = {
  host: 'mail.smtp2go.com',
  port: 587,
  secure: false,
  auth: {
    user: 'Infl8',
    pass: 'riVUKDArhmCbTMZC'
  }
};

// Sample booking data matching what the form would send
const sampleBookingData = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  phone: '812-240-6242',
  eventType: 'birthday',
  eventDate: '2026-02-14',
  eventTime: '14:00',
  location: '123 Main St, Terre Haute, IN',
  guestCount: '50',
  balloonType: 'arch',
  additionalInfo: 'This is a test booking from the SMTP verification script. Please ignore!'
};

const eventTypeMap = {
  'birthday': 'Birthday Party',
  'wedding': 'Wedding',
  'baby-shower': 'Baby Shower',
  'corporate': 'Corporate Event',
  'graduation': 'Graduation',
  'anniversary': 'Anniversary',
  'holiday': 'Holiday Party',
  'other': 'Other Event'
};

const balloonTypeMap = {
  'arch': 'Balloon Arch',
  'backdrop': 'Photo Backdrop',
  'centerpieces': 'Centerpieces',
  'garland': 'Balloon Garland',
  'numbers': 'Number/Letter Balloons',
  'sculpture': 'Custom Sculpture',
  'package': 'Full Package',
  'custom': 'Custom Design'
};

function createBookingEmail(data) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Inquiry - Infl8 (TEST)</title>
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
      <h1>🎈 New Booking Inquiry (TEST)</h1>
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
            <span class="info-label">Guest Count:</span>
            ${data.guestCount}
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
    <p>Phone: 812-240-6242 | Email: infl8@nabcom.net</p>
  </div>
</body>
</html>
  `.trim();
}

async function testSMTP() {
  console.log('🚀 Starting SMTP Test...\n');

  console.log('📋 Configuration:');
  console.log(`   Host: ${SMTP_CONFIG.host}`);
  console.log(`   Port: ${SMTP_CONFIG.port}`);
  console.log(`   Secure: ${SMTP_CONFIG.secure}`);
  console.log(`   User: ${SMTP_CONFIG.auth.user}\n`);

  console.log('📨 Sample Booking Data:');
  console.log(`   Name: ${sampleBookingData.firstName} ${sampleBookingData.lastName}`);
  console.log(`   Email: ${sampleBookingData.email}`);
  console.log(`   Phone: ${sampleBookingData.phone}`);
  console.log(`   Event: ${eventTypeMap[sampleBookingData.eventType]} on ${sampleBookingData.eventDate} at ${sampleBookingData.eventTime}`);
  console.log(`   Location: ${sampleBookingData.location}`);
  console.log(`   Guests: ${sampleBookingData.guestCount}`);
  console.log(`   Balloon Type: ${balloonTypeMap[sampleBookingData.balloonType]}\n`);

  try {
    // Create transporter
    console.log('🔧 Creating SMTP transporter...');
    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: SMTP_CONFIG.secure,
      auth: {
        user: SMTP_CONFIG.auth.user,
        pass: SMTP_CONFIG.auth.pass
      }
    });

    // Verify connection
    console.log('🔍 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!\n');

    // Prepare email
    const mailOptions = {
      from: 'Infl8 <infl8@nabcom.net>',
      to: 'infl8@nabcom.net',
      subject: `[SMTP TEST] New Booking Inquiry - ${sampleBookingData.firstName} ${sampleBookingData.lastName}`,
      html: createBookingEmail(sampleBookingData)
    };

    console.log('📤 Sending test email...');
    console.log(`   From: ${mailOptions.from}`);
    console.log(`   To: ${mailOptions.to}`);
    console.log(`   Subject: ${mailOptions.subject}\n`);

    // Send email
    const result = await transporter.sendMail(mailOptions);

    console.log('🎉 SUCCESS! Email sent successfully!\n');
    console.log('📊 Email Details:');
    console.log(`   Message ID: ${result.messageId}`);
    console.log(`   Response: ${result.response}`);
    console.log(`   Accepted: ${result.accepted.join(', ')}`);
    console.log(`   Rejected: ${result.rejected.length > 0 ? result.rejected.join(', ') : 'None'}\n`);

    console.log('✅ SMTP test completed successfully!');
    console.log('📧 Check your inbox at infl8@nabcom.net for the test email.\n');

  } catch (error) {
    console.error('❌ ERROR: Failed to send email!\n');
    console.error('Error Details:');
    console.error(`   Message: ${error.message}`);
    console.error(`   Code: ${error.code || 'N/A'}`);
    console.error(`   Command: ${error.command || 'N/A'}`);
    console.error(`   Response: ${error.response || 'N/A'}`);

    console.error('\n💡 Troubleshooting Tips:');
    console.error('   1. Verify SMTP credentials in .env.example');
    console.error('   2. Check if SMTP service (SMTP2GO) is operational');
    console.error('   3. Ensure port 587 is not blocked by firewall');
    console.error('   4. Verify email address (infl8@nabcom.net) can receive emails');
    console.error('   5. Check SMTP2GO account quota and status\n');

    process.exit(1);
  }
}

// Run the test
testSMTP();
