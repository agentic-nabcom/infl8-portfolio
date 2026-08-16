# File Attachment Debugging

## Summary

Enhanced the booking API route with comprehensive logging to help diagnose file attachment issues.

## Changes Made

### 1. Added Detailed Console Logging

The API route now logs:

1. **Booking Request Data** - Shows all form fields and file attachment info
2. **Attachment Detection** - Logs when a file is detected with name, size, and type
3. **File Processing** - Logs successful file conversion to Buffer
4. **SMTP Transporter Creation** - Confirms transporter is being created
5. **Attachment Processing** - Shows if attachment was successfully added to mail options
6. **Error Handling** - Catches and logs attachment-specific errors separately
7. **Email Status** - Clearly shows if email was sent with or without attachment

### 2. Improved Error Messages

Separate error handling for attachment issues:
- If file processing fails → Shows "Attachment error: [details]"
- If email sending fails → Shows "Failed to send email" with attachment error details
- Attachment errors don't prevent email from sending (it continues without attachment)

## Debug Logs Explained

When you submit a booking form with a file, you'll see:

### Success (File Sent)
```
=== Booking Request Received ===
Booking Data: {
  name: Test User,
  email: test@example.com,
  ...
  hasAttachment: true,
  attachmentName: test-file.pdf,
  attachmentSize: 15.50 KB,
  attachmentType: application/pdf
}
========================================
Creating SMTP transporter...
Attachment detected: test-file.pdf
Size: 15.50 KB
Type: application/pdf
Attachment processed successfully
Email sent successfully!

✅ EMAIL SENT SUCCESSFULLY!
```

### Success (File Processing Failed)
```
=== Booking Request Received ===
Attachment detected: test-file.pdf
Size: 15.50 KB
Type: application/pdf
Error processing attachment: [error details]
Attachment processing error: [error details]

✅ EMAIL SENT SUCCESSFULLY! (without attachment)
```

**Note**: The email still sends successfully even if the file fails to process. The attachment error is included in the error message.

### Error (SMTP Failed)
```
=== Booking Request Received ===
Creating SMTP transporter...
Error creating transporter: [error details]
Failed to send email
```

## Common Issues & Solutions

### Issue 1: File Not Sent

**Symptoms:**
- Log shows "Attachment detected: [filename]"
- Log shows "Attachment processed successfully"
- Email sent successfully
- No attachment received in email

**Possible Causes:**
1. File too large (SMTP2GO limit is typically 25MB)
2. File type rejected (some servers block certain file types)
3. Nodemailer attachment formatting issue

**Solutions:**
1. Check email spam/junk folder
2. Try a smaller file
3. Try a different file type (image instead of PDF)
4. Check SMTP2GO account for email bounce notifications

### Issue 2: Email Not Sent

**Symptoms:**
- Log shows "Failed to send email"
- Browser shows "An error occurred while processing"

**Possible Causes:**
1. SMTP credentials incorrect
2. SMTP server down
3. Network connection issue
4. SMTP account quota exceeded

**Solutions:**
1. Check environment variables in Vercel dashboard
2. Verify port 2525 is accessible
3. Check SMTP2GO account status
4. Try sending test email manually using test script

### Issue 3: Attachment Processing Error

**Symptoms:**
- Log shows "Error processing attachment: ..."
- Email may or may not send

**Possible Causes:**
1. File is corrupted
2. File size exceeds email server limit
3. Nodemailer buffer conversion failed
4. File system permission issue

**Solutions:**
1. Try a different file
2. Check file size (keep under 5MB for testing)
3. Verify file is not corrupted
4. Check server logs in Vercel dashboard

## How to Test

### Step 1: Submit Booking with File
1. Navigate to `http://localhost:3000/book-online`
2. Fill out the form
3. Select a file (image, PDF, or document)
4. Submit the form

### Step 2: Check Browser Console

Open browser developer console (F12):
1. Look for "=== Booking Request Received ==="
2. Check all the logged data
3. See if attachment was detected
4. See if there were any errors

### Step 3: Check Server Terminal

Look at the terminal where dev server is running:
1. Check for server logs
2. Look for the detailed output
3. See if any errors occurred

### Step 4: Check Email

1. Open your email at `infl8@nabcom.net`
2. Look for the test booking email
3. Verify if the file is attached
4. Check file size and type in email

## What Logs Tell You

The logs will help identify:

### ✅ Attachment Working Correctly:
```
Attachment detected: myfile.pdf
Size: 123.45 KB
Type: application/pdf
Attachment processed successfully
Email sent successfully!
```
→ File should be attached to email

### ⚠️ Attachment Processing Failed:
```
Attachment detected: myfile.pdf
Size: 123.45 KB
Type: application/pdf
Error processing attachment: File is too large
Attachment processing error: File is too large

Email sent successfully!
```
→ Email was sent WITHOUT the file. Check spam folder or email size.

### 🔴 Email Sending Failed:
```
Error creating transporter: Connection refused
Failed to send email
```
→ SMTP connection issue. Check credentials and port.

## Next Steps

1. **Restart dev server** - To load new logging code
2. **Submit test booking** with a small file attachment
3. **Check browser console** - For detailed request data
4. **Check server terminal** - For server-side processing logs
5. **Check email inbox** - To verify if file was attached
6. **Review logs** - Compare browser console vs server terminal

## Troubleshooting Checklist

- [ ] Dev server restarted after code changes?
- [ ] File selected is valid type (image, PDF, DOC, DOCX)?
- [ ] File size is reasonable (<5MB)?
- [ ] Attachment appears in browser console?
- [ ] Email received at `infl8@nabcom.net`?
- [ ] File appears attached in email?
- [ ] Any error messages in browser console?
- [ ] Any error messages in server terminal?

## Contact Information

If issues persist:
- **Email**: infl8@nabcom.net
- **SMS/Phone**: 812-240-6242
- **SMTP2GO Support**: https://support.smtp2go.com

## Summary

The enhanced logging will help us quickly identify:
1. Whether file attachments are being received by the API
2. If files are being processed correctly
3. If there are SMTP issues
4. If there are Nodemailer compatibility issues
5. Exact errors occurring during file processing

Submit a test booking and share the logs from both browser console and server terminal! 🔍
