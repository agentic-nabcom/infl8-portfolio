# Quick Start Guide - Gallery Setup

## 🚀 Get Your Gallery Running in 3 Steps

### Step 1: Environment Variables (2 minutes)

1. Go to https://cloudinary.com/console
2. Copy your credentials from the dashboard
3. Create `.env.local` in project root:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

### Step 2: Upload Images (1 minute)

1. In Cloudinary dashboard, go to **Media Library**
2. Create a folder named `gallery`
3. Upload your balloon decoration photos

### Step 3: Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000/gallery**

---

## ✅ What You'll See

- **With images**: Beautiful responsive grid of your photos
- **Without images**: "Gallery Coming Soon" placeholder

---

## 📱 Navigation

The Gallery link appears in your header navigation:
```
Home > Gallery > About > Balloon Menu > Book Online > FAQs
```

---

## 🎨 Features

- ✨ Automatic image optimization (WebP/AVIF)
- 📱 Fully responsive (mobile to desktop)
- 🖼️ Hover effects with image overlay
- 🔄 Auto-updates every 60 seconds
- 🚀 Production-ready

---

## 🌐 Deploy to Production

Add these environment variables to your hosting platform (Vercel, Netlify, etc.):

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

---

## 📚 Need More Help?

- **Full Setup Guide**: See `GALLERY_SETUP.md`
- **Environment Setup**: See `ENVIRONMENT_SETUP.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`

---

## 🆘 Troubleshooting

**Problem**: Images don't load  
**Solution**: Check environment variables are correct

**Problem**: "Gallery Coming Soon" appears  
**Solution**: Upload images to `gallery` folder in Cloudinary

**Problem**: Changes not appearing  
**Solution**: Wait 60 seconds (ISR revalidation) or restart dev server

---

**That's it! Your gallery is ready to go! 🎉**
