# Gallery Page Setup Guide

## Overview
The Gallery page has been successfully integrated with Cloudinary for automatic image management. Images uploaded to your Cloudinary folder will automatically appear on the gallery page.

## Setup Instructions

### 1. Create Environment Variables File

Create a `.env.local` file in the project root with your Cloudinary credentials:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

**Where to find these values:**
1. Log into your Cloudinary dashboard at https://cloudinary.com/console
2. All three values are displayed on the dashboard homepage
3. Copy and paste them into your `.env.local` file

### 2. Create a Gallery Folder in Cloudinary

1. Log into your Cloudinary account
2. Go to Media Library
3. Create a new folder called `gallery` (or use any folder name you prefer)
4. Upload your balloon decoration images to this folder

**Note:** If you want to use a different folder name, update the folder path in:
- `src/app/gallery/page.tsx` (line 14): Change `getGalleryImages('gallery')` to `getGalleryImages('your-folder-name')`

### 3. Test the Gallery

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:3000/gallery

3. You should see:
   - If images exist in your Cloudinary folder: A beautiful grid of images
   - If no images exist: A "Gallery Coming Soon" message

## Features Implemented

### ✅ Automatic Image Fetching
- Images are automatically fetched from your Cloudinary folder
- New images appear within 60 seconds of upload (via ISR revalidation)
- No manual updates needed

### ✅ Image Optimization
- Automatic format selection (WebP, AVIF)
- Responsive image sizing
- Lazy loading
- Quality optimization
- Device pixel ratio optimization

### ✅ Beautiful Design
- Responsive grid layout (1-4 columns based on screen size)
- Hover effects with image overlay
- Consistent with site's color scheme (#78396D, #FFD6E0)
- Decorative flourish matching the site design
- CTA section at the bottom

### ✅ Navigation
- Gallery link added to header navigation (appears after "Home")
- Works on both desktop and mobile menus

## File Structure

```
src/
├── app/
│   └── gallery/
│       └── page.tsx          # Gallery page component
├── lib/
│   ├── cloudinary.ts         # Cloudinary SDK configuration
│   └── getGalleryImages.ts   # Image fetching functions
└── components/
    └── Header.tsx            # Updated with Gallery link
```

## Configuration Files Updated

### next.config.ts
Added Cloudinary domain to allowed image sources:
```typescript
{
  protocol: 'https',
  hostname: 'res.cloudinary.com',
}
```

### package.json
Added dependencies:
- `next-cloudinary`: Optimized React components for Cloudinary
- `cloudinary`: Node.js SDK for server-side API calls

## Advanced Options

### Change Folder Name
Edit `src/app/gallery/page.tsx` line 14:
```typescript
const images = await getGalleryImages('your-folder-name');
```

### Adjust Revalidation Time
Edit `src/app/gallery/page.tsx` line 4:
```typescript
export const revalidate = 60; // Change to desired seconds
```

### Enable Pagination
Use the `getGalleryImagesWithPagination` function from `src/lib/getGalleryImages.ts` for large galleries (30+ images)

### Add Lightbox/Modal
Refer to the Cloudinary implementation guide for adding click-to-enlarge functionality

## Troubleshooting

### Images Don't Load
1. Check that environment variables are set correctly in `.env.local`
2. Verify `res.cloudinary.com` is in `next.config.ts`
3. Restart your dev server after adding environment variables

### "Gallery Coming Soon" Message
1. Upload images to the `gallery` folder in Cloudinary
2. Verify the folder name matches the one in your code
3. Wait up to 60 seconds for ISR to fetch new images

### Build Errors
1. Make sure all dependencies are installed: `npm install`
2. Check that TypeScript has no errors: `npm run typecheck`

## Security Notes

- API Secret is only used server-side (never exposed to client)
- Environment variables are properly configured
- Image transformations are secure and optimized

## Resources

- Cloudinary Next.js Docs: https://next.cloudinary.dev
- Cloudinary Dashboard: https://cloudinary.com/console
- Implementation Guide: See `cloudinary-nextjs-gallery-implementation.md`
