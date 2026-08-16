# Vercel Deployment Troubleshooting Guide

## Booking Form 500 Error

If you're getting a 500 Internal Server Error when submitting the booking form, follow these steps:

### Step 1: Check Environment Variables in Vercel

The most common cause is missing or incorrect environment variables. In your Vercel dashboard:

1. Go to **Project Settings** → **Environment Variables**
2. Verify ALL of these variables are set for **Production**, **Preview**, and **Development**:

#### Required Variables:

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `SMTP_HOST` | `mail.smtp2go.com` | Your SMTP server hostname |
| `SMTP_PORT` | `587` or `2525` | SMTP port (587 for STARTTLS, 2525 for SMTP2GO) |
| `SMTP_SECURE` | `false` | `true` for SSL (port 465), `false` for STARTTLS (port 587) |
| `SMTP_USER` | `your-username` | Your SMTP username |
| `SMTP_PASS` | `your-password` | Your SMTP password |
| `NOTIFICATION_EMAIL` | `infl8@nabcom.net` | Email to receive booking notifications |
| `FROM_EMAIL` | `infl8@nabcom.net` | Email address to send from |
| `FROM_NAME` | `Infl8` | Display name for sender (optional) |

### Step 2: Check Vercel Function Logs

1. Go to your Vercel Dashboard
2. Click on your project
3. Go to **Deployments** tab
4. Click on the latest deployment
5. Click **Functions** tab
6. Click on `/api/booking`
7. Check the **Logs** tab for error messages

The improved error logging will show:
- Whether SMTP credentials are missing
- SMTP connection errors
- Email sending errors
- Any other unexpected errors

### Step 3: Common Issues and Solutions

#### Issue: "Email service is not configured"
**Solution**: Set `SMTP_USER` and `SMTP_PASS` environment variables in Vercel

#### Issue: "Failed to send email" with authentication error
**Solution**: 
- Verify `SMTP_USER` and `SMTP_PASS` are correct
- Check if your SMTP provider requires a specific username format
- Ensure credentials haven't expired

#### Issue: Connection timeout
**Solution**:
- Verify `SMTP_HOST` is correct
- Check `SMTP_PORT` matches your provider's requirements
- For SMTP2GO: Use port `2525` or `587` with `SMTP_SECURE: false`
- Some providers block connections from Vercel - check your SMTP provider's IP allowlist

#### Issue: "Invalid login" or "Authentication failed"
**Solution**:
- Double-check username and password (no extra spaces)
- Some providers require the full email as username
- Verify your SMTP account is active and not suspended

### Step 4: Test SMTP Configuration

You can test your SMTP configuration locally using the test scripts:

```bash
# Test with simple script
node test-smtp-simple.mjs

# Or use the full test script
node test-smtp.mjs
```

Make sure your `.env` file has the same values you're using in Vercel.

### Step 5: Redeploy After Changes

**Important**: After adding or changing environment variables in Vercel:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete
5. Test the booking form again

### Step 6: Verify Email Delivery

After a successful form submission:
1. Check the email inbox for `NOTIFICATION_EMAIL`
2. Check spam/junk folder
3. Verify the sender email (`FROM_EMAIL`) is not blocked

### Debugging Tips

1. **Check Logs First**: Always check Vercel function logs - they now include detailed error information
2. **Test Locally**: Test with the same environment variables locally before deploying
3. **SMTP Provider Dashboard**: Check your SMTP provider's dashboard for:
   - Failed delivery attempts
   - Account status
   - Rate limits
   - IP restrictions

### SMTP Provider Specific Notes

#### SMTP2GO
- **Port**: `2525` or `587`
- **Secure**: `false` (STARTTLS)
- **Host**: `mail.smtp2go.com`
- Free tier: 1,000 emails/month

#### SendGrid
- **Port**: `587` (STARTTLS) or `465` (SSL)
- **Secure**: `false` for 587, `true` for 465
- **Host**: `smtp.sendgrid.net`
- Username is usually `apikey`, password is your API key

#### Mailgun
- **Port**: `587` or `465`
- **Host**: `smtp.mailgun.org`
- Check Mailgun dashboard for sending domain status

### Still Having Issues?

1. Check Vercel function logs for the exact error message
2. Verify all environment variables are set correctly
3. Test SMTP credentials with a simple Node.js script
4. Contact your SMTP provider support if authentication keeps failing
5. Consider using a different SMTP provider if current one has restrictions

### Security Note

Never commit `.env` files or expose SMTP credentials in:
- Git commits
- Public repositories
- Client-side code
- Error messages shown to users

The code now hides sensitive error details in production while showing them in development for easier debugging.
