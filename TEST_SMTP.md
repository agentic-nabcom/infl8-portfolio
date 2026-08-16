# SMTP Test Instructions

## Quick Start

### Step 1: Install Dependencies

```bash
# Using Bun (recommended, per project setup)
bun install

# OR using npm
npm install
```

### Step 2: Run SMTP Test

```bash
# Using Bun
bun run test-smtp-simple.mjs

# OR using Node
node test-smtp-simple.mjs
```

## What the Test Does

The test script will:

1. **Connect to SMTP server** (mail.smtp2go.com:587)
2. **Verify credentials** using `Infl8` / `riVUKDArhmCbTMZC`
3. **Send test email** with sample booking data
4. **Report success or failure** with detailed information

## Sample Test Data

The test sends this booking inquiry:

```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "phone": "812-240-6242",
  "eventType": "birthday",
  "eventDate": "2026-02-14",
  "eventTime": "14:00",
  "location": "123 Main St, Terre Haute, IN",
  "guestCount": "50",
  "balloonType": "arch",
  "additionalInfo": "This is a test booking from SMTP verification script. Please ignore!"
}
```

## Expected Output

### ✅ Success

```
============================================================
🚀 SMTP TEST - Infl8 Booking System
============================================================

📋 SMTP Configuration:
   Host: mail.smtp2go.com
   Port: 587
   Secure (SSL/TLS): No (STARTTLS)
   Username: Infl8
   Password: ***ZC

📨 Sample Booking Data:
   Name: Test User
   Email: test@example.com
   Phone: 812-240-6242
   Event Type: Birthday Party (birthday)
   Event Date: 2026-02-14
   Event Time: 14:00
   Location: 123 Main St, Terre Haute, IN
   Guest Count: 50
   Balloon Type: Balloon Arch (arch)

🔧 Creating SMTP transporter...
🔍 Verifying SMTP connection...
✅ SMTP connection verified successfully!

📤 Sending test email...
   From: Infl8 <infl8@nabcom.net>
   To: infl8@nabcom.net
   Subject: [SMTP TEST] New Booking Inquiry - Test User

🎉 SUCCESS! Email sent successfully!

📊 Email Delivery Details:
   Message ID: <message-id@smtp2go.com>
   Response: 250 OK
   Accepted Recipients: 1 (infl8@nabcom.net)
   Rejected Recipients: 0 (None)

============================================================
✅ SMTP TEST COMPLETED SUCCESSFULLY!
============================================================

📧 Check your inbox at: infl8@nabcom.net
💡 The test email should arrive within 1-2 minutes
```

### ❌ Failure - Invalid Credentials

```
============================================================
❌ SMTP TEST FAILED
============================================================

📝 Error Details:
   Message: Invalid login
   Code: EAUTH
   Command: AUTH PLAIN

💡 Troubleshooting Suggestions:
   1. Verify SMTP credentials are correct (check .env.example)
   2. Ensure SMTP2GO account is active and not suspended
   3. Check if port 587 is blocked by firewall/network
   4. Verify email address infl8@nabcom.net can receive mail
   5. Check SMTP2GO account quota and sending limits
   6. Try resetting SMTP password in SMTP2GO dashboard

📚 Resources:
   - SMTP2GO Support: https://support.smtp2go.com
   - Nodemailer Docs: https://nodemailer.com/
```

### ❌ Failure - Connection Refused

```
============================================================
❌ SMTP TEST FAILED
============================================================

📝 Error Details:
   Message: connect ECONNREFUSED
   Code: ECONNREFUSED
   Command: CONNECT

💡 Troubleshooting Suggestions:
   1. Verify SMTP credentials are correct (check .env.example)
   2. Ensure SMTP2GO account is active and not suspended
   3. Check if port 587 is blocked by firewall/network
   ...
```

## Troubleshooting Guide

### Issue 1: Dependencies Not Found

**Error**: `Error: Cannot find package 'nodemailer'`

**Solution**:
```bash
bun install
# OR
npm install
```

### Issue 2: Invalid Login

**Error**: `Invalid login` or `Authentication failed`

**Causes**:
- Username or password is incorrect
- SMTP2GO account is suspended
- Password was recently changed

**Solutions**:
1. Verify username is exactly `Infl8` (case-sensitive)
2. Verify password is `riVUKDArhmCbTMZC`
3. Check SMTP2GO dashboard at https://app.smtp2go.com
4. Reset SMTP password if needed

### Issue 3: Connection Refused

**Error**: `connect ECONNREFUSED` or `Connection refused`

**Causes**:
- Port 587 blocked by firewall
- Network restrictions
- SMTP server down

**Solutions**:
1. Check firewall settings allow port 587
2. Try using port 465 with `secure: true`
3. Verify network allows outbound SMTP connections
4. Check if SMTP2GO service is operational (https://status.smtp2go.com)

### Issue 4: TLS/SSL Errors

**Error**: `Self-signed certificate` or `TLS handshake failed`

**Solutions**:
1. The current config uses STARTTLS on port 587 (recommended)
2. If SSL is required, change to port 465 and `secure: true`
3. Contact SMTP2GO support for TLS requirements

### Issue 5: Email Not Received

**Error**: Test says success but no email arrives

**Solutions**:
1. Check spam/junk folder at `infl8@nabcom.net`
2. Verify SMTP2GO account has sufficient quota
3. Check SMTP2GO logs for bounced/rejected emails
4. Verify recipient email address is correct and active
5. Wait 5-10 minutes - email may be delayed

### Issue 6: Quota Exceeded

**Error**: `Daily quota exceeded` or `Limit reached`

**Solutions**:
1. Check SMTP2GO dashboard for current usage
2. Wait for quota to reset (usually daily/monthly)
3. Upgrade SMTP2GO plan if needed
4. Use different SMTP provider for testing

## Security Reminder

**IMPORTANT**: `.env.example` contains real SMTP credentials!

After successful testing:

1. **For Production**: Use values from `.env.example` in Vercel Environment Variables
2. **Before Pushing**: Replace credentials with placeholders if committing to public repo
3. **Already Protected**: `.gitignore` excludes `.env*` files

## Next Steps After Successful Test

### 1. Verify Email Received

Check `infl8@nabcom.net` inbox for test email containing:
- Booking details (name, email, phone)
- Event information (type, date, time, location)
- Email formatted with HTML (styled with pink/purple theme)

### 2. Deploy to Vercel

If test succeeds, SMTP is ready for production:

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard:
   - `SMTP_HOST=mail.smtp2go.com`
   - `SMTP_PORT=2525`
   - `SMTP_SECURE=false`
   - `SMTP_USER=Infl8`
   - `SMTP_PASS=riVUKDArhmCbTMZC`
   - `NOTIFICATION_EMAIL=infl8@nabcom.net`
   - `FROM_EMAIL=infl8@nabcom.net`
   - `FROM_NAME=Infl8`
4. Deploy and test booking form

### 3. Test Booking Form on Deployed Site

After Vercel deployment:
1. Navigate to your Vercel URL
2. Go to "Book Online" page
3. Submit a test booking
4. Verify email is received at `infl8@nabcom.net`

## Alternative SMTP Providers

If SMTP2GO doesn't work, consider:

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=2525
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxx
```

### Resend
```env
SMTP_HOST=smtp.resend.com
SMTP_PORT=2525
SMTP_SECURE=false
SMTP_USER=resend
SMTP_PASS=re_xxxxxx
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=2525
SMTP_SECURE=false
SMTP_USER=postmaster@yourdomain.com
SMTP_PASS=your-api-key
```

## Support Resources

- **SMTP2GO Support**: https://support.smtp2go.com
- **SMTP2GO Status**: https://status.smtp2go.com
- **Nodemailer Docs**: https://nodemailer.com/
- **Vercel Deployment**: See `VERCEL_DEPLOYMENT.md`

## Quick Reference

| Item | Value |
|-------|--------|
| SMTP Host | mail.smtp2go.com |
| SMTP Port | 587 (STARTTLS) |
| SMTP User | Infl8 |
| SMTP Password | riVUKDArhmCbTMZC |
| Recipient Email | infl8@nabcom.net |
| From Email | infl8@nabcom.net |
| From Name | Infl8 |

## Summary

This test verifies that:
- ✅ SMTP credentials are correct
- ✅ SMTP server is reachable
- ✅ Email can be sent successfully
- ✅ Email template renders correctly
- ✅ Recipient receives the booking email

Once test passes, you're ready to deploy to Vercel! 🚀
