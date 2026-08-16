# SMTP Testing Guide

This script tests the SMTP configuration with sample booking data before deploying to Vercel.

## Prerequisites

Ensure you have dependencies installed:
```bash
bun install
```

## Running the Test

Execute the test script:
```bash
node test-smtp.mjs
```

Or with Bun:
```bash
bun run test-smtp.mjs
```

## What the Test Does

1. **Connects to SMTP server** - Verifies authentication and connection
2. **Sends test email** - With sample booking form data
3. **Reports results** - Shows success or detailed error information

## Sample Booking Data Sent

The test sends the following sample booking data:

- **Name**: Test User
- **Email**: test@example.com
- **Phone**: 812-240-6242
- **Event Type**: Birthday Party
- **Event Date**: 2026-02-14
- **Event Time**: 14:00
- **Location**: 123 Main St, Terre Haute, IN
- **Guest Count**: 50
- **Balloon Type**: Balloon Arch
- **Additional Info**: This is a test booking from the SMTP verification script

## Expected Output

### ✅ Success
```
🚀 Starting SMTP Test...

📋 Configuration:
   Host: mail.smtp2go.com
   Port: 587
   Secure: false
   User: Infl8

📨 Sample Booking Data:
   Name: Test User
   Email: test@example.com
   Phone: 812-240-6242
   Event: Birthday Party on 2026-02-14 at 14:00
   Location: 123 Main St, Terre Haute, IN
   Guests: 50
   Balloon Type: Balloon Arch

🔧 Creating SMTP transporter...
🔍 Verifying SMTP connection...
✅ SMTP connection verified successfully!

📤 Sending test email...
   From: Infl8 <infl8@nabcom.net>
   To: infl8@nabcom.net
   Subject: [SMTP TEST] New Booking Inquiry - Test User

🎉 SUCCESS! Email sent successfully!

📊 Email Details:
   Message ID: <message-id@smtp2go.com>
   Response: 250 OK
   Accepted: infl8@nabcom.net
   Rejected: None

✅ SMTP test completed successfully!
📧 Check your inbox at infl8@nabcom.net for test email.
```

### ❌ Failure
If the test fails, you'll see:
```
❌ ERROR: Failed to send email!

Error Details:
   Message: [error message]
   Code: [error code]
   Command: [command]
   Response: [server response]

💡 Troubleshooting Tips:
   1. Verify SMTP credentials in .env.example
   2. Check if SMTP service (SMTP2GO) is operational
   3. Ensure port 587 is not blocked by firewall
   4. Verify email address (infl8@nabcom.net) can receive emails
   5. Check SMTP2GO account quota and status
```

## Troubleshooting

### Error: Invalid Login

**Cause**: Username or password is incorrect

**Solution**:
1. Check SMTP credentials in `.env.example`
2. Verify SMTP2GO account is active
3. Reset SMTP password if needed

### Error: Connection Refused

**Cause**: Port 587 is blocked or wrong port

**Solution**:
1. Check firewall settings
2. Try port 465 with `secure: true`
3. Contact network administrator

### Error: Authentication Failed

**Cause**: Credentials or authentication method issue

**Solution**:
1. Verify username is `Infl8`
2. Verify password is correct
3. Check SMTP2GO account status

### Error: No Recipient Found

**Cause**: Email address doesn't exist or can't receive

**Solution**:
1. Verify `infl8@nabcom.net` exists
2. Check email inbox capacity
3. Verify email is not disabled

## After Successful Test

Once the test passes successfully:

1. **Check your inbox** at `infl8@nabcom.net`
2. **Verify email content** - Should show booking details
3. **Confirm HTML renders** - Email should display formatted HTML
4. **Ready for deployment** - SMTP configuration is working!

## Security Note

**IMPORTANT**: After successful testing, the SMTP credentials are already saved in `.env.example`. Do NOT commit this file to a public repository. The `.gitignore` file already protects this file.

For Vercel deployment:
1. Copy values from `.env.example`
2. Paste into Vercel Environment Variables settings
3. Delete `.env.example` or replace with placeholder values before pushing to public repo

## Next Steps

After successful SMTP test:

1. ✅ Deploy to Vercel following `VERCEL_DEPLOYMENT.md`
2. ✅ Set environment variables in Vercel dashboard
3. ✅ Test booking form on deployed site
4. ✅ Monitor email notifications

## Support

If you encounter issues not covered here:
- Check [SMTP2GO documentation](https://support.smtp2go.com)
- Review [Nodemailer documentation](https://nodemailer.com/)
- Contact SMTP2GO support for account-specific issues
