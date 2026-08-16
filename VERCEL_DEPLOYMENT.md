# Vercel Deployment Guide

This guide will help you deploy the Infl8 website to Vercel.

## Prerequisites

Before deploying to Vercel, you need:

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account** - Push your code to a GitHub repository
3. **SMTP Credentials** - From your email service provider (SMTP2GO, SendGrid, etc.)

## Deployment Steps

### 1. Prepare Your Code

Ensure your code is pushed to GitHub:

```bash
git add .
git commit -m "Security fixes: environment variables and clean up"
git push origin main
```

### 2. Import Project in Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your Infl8 repository from GitHub
5. Click **"Import"**

### 3. Configure Environment Variables

**CRITICAL**: These must be set before your first deployment!

In the Vercel project settings:

1. Go to **Project Settings** → **Environment Variables**
2. Add the following variables:

#### Required SMTP Configuration

| Variable | Value | Description |
|----------|--------|-------------|
| `SMTP_HOST` | `mail.smtp2go.com` | Your SMTP server hostname |
| `SMTP_PORT` | `587` | SMTP port (587 for STARTTLS, 465 for SSL) |
| `SMTP_SECURE` | `false` | Set to `true` for SSL, `false` for STARTTLS |
| `SMTP_USER` | Your SMTP username | Your email service username |
| `SMTP_PASS` | Your SMTP password | Your email service password |

#### Email Configuration

| Variable | Value | Description |
|----------|--------|-------------|
| `NOTIFICATION_EMAIL` | `infl8@nabcom.net` | Email to receive booking notifications |
| `FROM_EMAIL` | `infl8@nabcom.net` | Email address to send from |
| `FROM_NAME` | `Infl8` | Display name for sender |

#### Application Configuration

| Variable | Value | Description |
|----------|--------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL | Your website URL (e.g., `https://infl8.net`) |

3. **Important**: Set the environment for each variable:
   - ✅ **Production** (for live site)
   - ✅ **Preview** (for preview deployments)
   - ⚪ **Development** (optional, for local testing)

4. Click **"Save"** after adding each variable

### 4. Deploy

1. Click **"Deploy"** button
2. Vercel will build and deploy your Next.js app
3. Wait for deployment to complete (~2-5 minutes)
4. Your site will be live at: `https://your-project.vercel.app`

### 5. Configure Custom Domain (Optional)

If you have a custom domain:

1. In Vercel project, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `infl8.net`)
4. Follow Vercel's DNS configuration instructions
5. Update your DNS records at your domain registrar
6. Wait for DNS propagation (can take up to 48 hours)

## Testing Your Deployment

After deployment, test the booking form:

1. Navigate to your deployed site
2. Go to **"Book Online"** page
3. Fill out the booking form with test data
4. Submit the form
5. Check if you receive the email at your `NOTIFICATION_EMAIL` address

## Troubleshooting

### Booking Form Not Working

**Problem**: Booking form submits but you don't receive emails

**Solutions**:

1. **Check environment variables**:
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Verify all SMTP variables are set correctly
   - Redeploy after making changes

2. **Check Vercel logs**:
   - Go to **Deployments** → Click on latest deployment → **Functions**
   - Look for error messages in the `/api/booking` logs

3. **Verify SMTP credentials**:
   - Test your SMTP credentials with your email provider's testing tool
   - Ensure username and password are correct

4. **Check spam folder**:
   - Test emails might go to spam/junk folder
   - Add sender email to your contacts

### Build Errors

**Problem**: Build fails during deployment

**Solutions**:

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript errors: `bun typecheck` locally first

### Environment Variables Not Working

**Problem**: Changes to environment variables don't take effect

**Solutions**:

1. **Redeploy required**: Environment variable changes require a new deployment
   - Go to **Deployments** → Click **Redeploy**
   - Or push a new commit to trigger deployment

2. **Variable names must match exactly**:
   - Check case sensitivity
   - No extra spaces or typos
   - Use the exact names from this guide

## Security Best Practices

### 1. Never Commit .env Files

The `.gitignore` file already excludes environment files:
```
.env
.env.local
.env.production
```

**Never** commit these files to GitHub!

### 2. Use Different SMTP for Production

For production deployment:
- Use a dedicated SMTP account for production
- Consider using a transactional email service (SendGrid, Mailgun, AWS SES)
- Don't use personal email accounts for production

### 3. Monitor SMTP Usage

- Check your SMTP provider's dashboard regularly
- Monitor email deliverability rates
- Watch for spam complaints
- Set up alerts for quota limits

## SMTP Providers

Here are some popular SMTP providers compatible with Vercel:

### SMTP2GO
- **Website**: smtp2go.com
- **Free Tier**: 1,000 emails/month
- **Port 587** with STARTTLS
- Use the example configuration in `.env.example`

### SendGrid
- **Website**: sendgrid.com
- **Free Tier**: 100 emails/day
- Supports both SSL and STARTTLS
- **Host**: `smtp.sendgrid.net`

### Mailgun
- **Website**: mailgun.com
- **Free Tier**: 5,000 emails/month
- **Host**: `smtp.mailgun.org`

### Resend
- **Website**: resend.com
- **Free Tier**: 3,000 emails/month
- Modern developer-friendly interface
- **Host**: `smtp.resend.com`

## Updating Your Site

After making code changes:

```bash
# Commit and push changes
git add .
git commit -m "Your commit message"
git push origin main

# Vercel will automatically deploy
# Monitor deployment in Vercel dashboard
```

Vercel automatically deploys when you push to your connected GitHub repository.

## Monitoring & Logs

### View Deployment Logs

1. Go to Vercel Dashboard → Your Project
2. Click on **Deployments** tab
3. Click on a deployment to see details
4. Click **"View Function Logs"** to see API logs

### Real-time Logs

For live monitoring:
1. Go to **Logs** tab in Vercel Dashboard
2. Filter by function name: `/api/booking`
3. Set time range (last hour, day, etc.)

## Performance Optimization

Vercel automatically optimizes Next.js sites:

- ✅ Server-side rendering
- ✅ Automatic code splitting
- ✅ Edge caching
- ✅ Image optimization
- ✅ Automatic HTTPS

For additional performance:
- Use Vercel Analytics (free tier available)
- Monitor Web Vitals in Vercel dashboard
- Optimize images and fonts

## Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Vercel Community**: [vercel.com/community](https://vercel.com/community)

## Summary Checklist

Before deploying, verify:

- [ ] Code pushed to GitHub
- [ ] All environment variables set in Vercel
- [ ] SMTP credentials tested
- [ ] Custom domain configured (if applicable)
- [ ] Booking form tested on deployed site
- [ ] Email notifications received
- [ ] SSL/HTTPS enabled (automatic on Vercel)
- [ ] Analytics set up (optional but recommended)

Your Infl8 website is now ready for Vercel deployment! 🚀
