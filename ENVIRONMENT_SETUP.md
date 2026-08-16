# Environment Variables Setup

## Required Environment Variables

To enable the Gallery feature, you need to set up Cloudinary credentials. Create a `.env.local` file in the root directory of the project with the following content:

```env
# Cloudinary Configuration
# Get these values from your Cloudinary dashboard: https://cloudinary.com/console

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

## How to Get Your Cloudinary Credentials

1. **Sign up or log in** to Cloudinary:
   - Go to https://cloudinary.com/
   - Create a free account or log in to your existing account

2. **Access your Dashboard**:
   - After logging in, you'll be on your dashboard
   - All three required values are displayed at the top of the dashboard:
     - **Cloud Name**: Your unique cloud name
     - **API Key**: Your API key (looks like a long number)
     - **API Secret**: Your API secret (click "Reveal" to see it)

3. **Copy the values**:
   - Copy each value from the dashboard
   - Paste them into your `.env.local` file (replacing the placeholder values)

## Example

Your `.env.local` file should look similar to this (with your actual values):

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dexamplecloud"
CLOUDINARY_API_KEY="123456789012345"
CLOUDINARY_API_SECRET="abcdefghijklmnopqrstuvwxyz123456"
```

## Important Notes

- ⚠️ **Never commit `.env.local` to git** - It's already in `.gitignore`
- 🔒 **Keep your API Secret secure** - Never share it publicly
- 🔄 **Restart your dev server** after creating or modifying `.env.local`
- 📁 The `.env.local` file should be in the root directory (same level as `package.json`)

## After Setting Up Environment Variables

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Create a `gallery` folder in your Cloudinary Media Library

3. Upload some images to the `gallery` folder

4. Visit http://localhost:3000/gallery to see your images

For more detailed instructions, see `GALLERY_SETUP.md`
