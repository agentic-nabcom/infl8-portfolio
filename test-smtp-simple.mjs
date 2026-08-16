#!/usr/bin/env node
/**
 * Simple SMTP Test Script
 * Tests SMTP connection with sample booking data
 * Run with: node test-smtp-simple.mjs
 */

import nodemailer from 'nodemailer';

// SMTP Configuration (from .env.example)
const SMTP_CONFIG = {
  host: 'mail.smtp2go.com',
  port: 2525,
  secure: false,
  auth: {
    user: 'Infl8',
    pass: 'riVUKDArhmCbTMZC'
  }
};

// Sample booking data (what the form would send)
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
  additionalInfo: 'This is a test booking from SMTP verification script. Please ignore!'
};

function createBookingEmail(data) {
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

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Inquiry - Infl8 (TEST)</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f8f8ff;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background: linear-gradient(135deg, #78396D 0%, #D96E95 100%); color: white; padding: 30px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; font-family: Georgia, serif;">🎈 New Booking Inquiry (TEST)</h1>
    </div>
    <div style="padding: 30px;">
      <div style="margin-bottom: 30px;">
        <h2 style="color: #78396D; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #FFD6E0; padding-bottom: 10px;">Personal Information</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="color: #78396D; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #FFD6E0; padding-bottom: 10px;">Event Details</h2>
        <p><strong>Event Type:</strong> ${eventTypeMap[data.eventType] || data.eventType}</p>
        <p><strong>Event Date:</strong> ${data.eventDate}</p>
        <p><strong>Event Time:</strong> ${data.eventTime}</p>
        <p><strong>Guest Count:</strong> ${data.guestCount}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Balloon Type:</strong> ${balloonTypeMap[data.balloonType] || data.balloonType}</p>
      </div>

      ${data.additionalInfo ? `
      <div style="margin-bottom: 30px;">
        <h2 style="color: #78396D; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #FFD6E0; padding-bottom: 10px;">Additional Information</h2>
        <p>${data.additionalInfo.replace(/\n/g, '<br>')}</p>
      </div>
      ` : ''}
    </div>
  </div>
  <div style="background: #FFD6E0; padding: 20px; text-align: center; color: #78396D;">
    <p>We will contact you within 24 hours to confirm your booking!</p>
    <p><strong>Infl8 Balloon Decorations</strong> | Terre Haute, IN</p>
    <p>Phone: 812-240-6242 | Email: infl8@nabcom.net</p>
  </div>
</body>
</html>`;
}

async function testSMTP() {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 SMTP TEST - Infl8 Booking System');
  console.log('='.repeat(60) + '\n');

  // Display configuration
  console.log('📋 SMTP Configuration:');
  console.log(`   Host: ${SMTP_CONFIG.host}`);
  console.log(`   Port: ${SMTP_CONFIG.port}`);
  console.log(`   Secure (SSL/TLS): ${SMTP_CONFIG.secure ? 'Yes' : 'No (STARTTLS)'}`);
  console.log(`   Username: ${SMTP_CONFIG.auth.user}`);
  console.log(`   Password: ${SMTP_CONFIG.auth.pass ? '***' + SMTP_CONFIG.auth.pass.slice(-3) : 'Not Set'}\n`);

  // Display sample booking data
  console.log('📨 Sample Booking Data:');
  console.log(`   Name: ${sampleBookingData.firstName} ${sampleBookingData.lastName}`);
  console.log(`   Email: ${sampleBookingData.email}`);
  console.log(`   Phone: ${sampleBookingData.phone}`);
  console.log(`   Event Type: Birthday Party (${sampleBookingData.eventType})`);
  console.log(`   Event Date: ${sampleBookingData.eventDate}`);
  console.log(`   Event Time: ${sampleBookingData.eventTime}`);
  console.log(`   Location: ${sampleBookingData.location}`);
  console.log(`   Guest Count: ${sampleBookingData.guestCount}`);
  console.log(`   Balloon Type: Balloon Arch (${sampleBookingData.balloonType})\n`);

  try {
    // Create and verify connection
    console.log('🔧 Creating SMTP transporter...');
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

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
    console.log('📊 Email Delivery Details:');
    console.log(`   Message ID: ${result.messageId}`);
    console.log(`   Response: ${result.response}`);
    console.log(`   Accepted Recipients: ${result.accepted.length} (${result.accepted.join(', ')})`);
    console.log(`   Rejected Recipients: ${result.rejected.length > 0 ? result.rejected.length + ' (' + result.rejected.join(', ') + ')' : '0 (None)'}\n`);

    console.log('=' .repeat(60));
    console.log('✅ SMTP TEST COMPLETED SUCCESSFULLY!');
    console.log('='.repeat(60) + '\n');
    console.log('📧 Check your inbox at: infl8@nabcom.net');
    console.log('💡 The test email should arrive within 1-2 minutes\n');

  } catch (error) {
    console.error('\n' + '='.repeat(60));
    console.error('❌ SMTP TEST FAILED');
    console.error('='.repeat(60) + '\n');
    console.error('📝 Error Details:');
    console.error(`   Message: ${error.message}`);
    console.error(`   Code: ${error.code || 'N/A'}`);
    console.error(`   Command: ${error.command || 'N/A'}`);
    if (error.response) {
      console.error(`   Server Response: ${error.response}`);
    }
    if (error.responseCode) {
      console.error(`   Response Code: ${error.responseCode}`);
    }

    console.error('\n💡 Troubleshooting Suggestions:');
    console.error('   1. Verify SMTP credentials are correct (check .env.example)');
    console.error('   2. Ensure SMTP2GO account is active and not suspended');
    console.error('   3. Check if port 587 is blocked by firewall/network');
    console.error('   4. Verify email address infl8@nabcom.net can receive mail');
    console.error('   5. Check SMTP2GO account quota and sending limits');
    console.error('   6. Try resetting SMTP password in SMTP2GO dashboard');
    console.error('\n📚 Resources:');
    console.error('   - SMTP2GO Support: https://support.smtp2go.com');
    console.error('   - Nodemailer Docs: https://nodemailer.com/\n');

    process.exit(1);
  }
}

// Run the test
testSMTP();
