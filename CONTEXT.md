# Infl8 - Balloon Decoration Services Website

## Project Purpose

Infl8 is a professional balloon decoration service website cloned from a Wix site at https://mslababidi6.wixsite.com/mysite-1. The website showcases balloon decoration services for various events including birthdays, weddings, corporate events, and special celebrations. Based in Terre Haute, Indiana, Infl8 provides custom balloon arrangements, arches, centerpieces, and complete event styling services.

## Key Features

### Pages
- **Home** - Landing page with hero section, testimonials, and "How It Works" process
- **About** - Company story, mission, and value proposition
- **Balloon Menu** - Catalog of balloon decoration options with pricing
- **Book Online** - Comprehensive booking form for event inquiries
- **FAQs** - Common questions about services, pricing, and policies
- **Privacy Policy** - Data collection and privacy practices
- **Accessibility Statement** - Commitment to web accessibility
- **Terms & Conditions** - Service terms, booking policies, and legal information

### Components
- **Header** - Sticky navigation with active state highlighting
- **Footer** - Contact information, newsletter signup, social media links
- **Button** - Reusable button component with primary and secondary variants

### Key Features
- Responsive design using Tailwind CSS v4
- Server-side rendering with Next.js 15
- TypeScript for type safety
- Custom font integration (Syne, Kodchasan, Dancing Script)
- Form handling for booking inquiries
- Color scheme matching original site (pink: #FFD6E0, #D96E95, purple: #78396D)

## Architectural Decisions

### Technology Stack
- **Framework**: Next.js 15.5.9 with App Router
- **React**: Version 19.2.1 (latest)
- **Styling**: Tailwind CSS v4 with custom theme colors
- **TypeScript**: Version 5.9.3
- **Fonts**: Google Fonts (Syne, Kodchasan, Dancing Script)
- **Package Manager**: Bun (as per project requirements)

### Project Structure
```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css           # Tailwind CSS with custom fonts and theme
│   ├── layout.tsx            # Root layout with fonts and metadata
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx         # About page
│   ├── balloon-menu/page.tsx   # Balloon Menu catalog
│   ├── book-online/page.tsx    # Booking form (client component)
│   ├── faqs/page.tsx          # FAQ page
│   ├── privacy/page.tsx        # Privacy policy
│   ├── accessibility/page.tsx   # Accessibility statement
│   └── terms/page.tsx         # Terms and conditions
├── components/
│   ├── Header.tsx              # Navigation header (client component)
│   ├── Footer.tsx              # Footer with contact and newsletter
│   └── Button.tsx             # Reusable button component
```

### Design Decisions
- **Color Palette**: Pink (#FFD6E0 background, #D96E95 accent) and purple (#78396D) as primary colors
- **Typography**: Kodchasan for body text, Syne for headings, Dancing Script for decorative elements
- **Layout**: Centered max-width (980px) for main content area
- **Responsive**: Mobile-first approach with breakpoints (sm, md, lg)

### Component Patterns
- **Server Components by default**: Only Book Online page uses `"use client"` directive for form state management
- **Props Interface**: TypeScript interfaces for all component props
- **Tailwind Utility Classes**: Consistent use of Tailwind for styling
- **Accessibility**: Semantic HTML, alt text, keyboard navigation, and proper ARIA labels

## Major Changes

### Initial Implementation (January 2026)
- Created complete website clone from Wix site
- Implemented all 8 pages from original site
- Added responsive design for mobile, tablet, and desktop
- Integrated custom fonts matching original design
- Created reusable components (Header, Footer, Button)
- Set up Tailwind CSS v4 with custom theme colors
- Configured TypeScript and Next.js 15 App Router

### Content Adaptation
- Adapted original Wix content to Next.js structure
- Maintained original branding, color scheme, and messaging
- Added comprehensive FAQ section
- Created detailed booking form with validation
- Implemented legal pages (Privacy, Accessibility, Terms)

## Development Notes

### Environment Variables Setup

This project requires environment variables for email functionality. For local development:

1. Copy `.env.example` to `.env.local`
2. Fill in your SMTP credentials
3. For Vercel deployment, set these in Project Settings > Environment Variables

**Required Environment Variables:**

```env
# SMTP Configuration
SMTP_HOST=mail.smtp2go.com          # Your SMTP server hostname
SMTP_PORT=2525                        # SMTP port (2525 for TLS)
SMTP_SECURE=false                       # true for SSL, false for TLS
SMTP_USER=your_username                # SMTP username
SMTP_PASS=your_password                # SMTP password

# Email Configuration
NOTIFICATION_EMAIL=infl8@nabcom.net    # Email to receive booking notifications
FROM_EMAIL=infl8@nabcom.net         # Email address to send from
FROM_NAME=Infl8                       # Display name for sender

# Application Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com # Your production URL
```

**Vercel Deployment Instructions:**

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add each variable from the list above
   - Select appropriate environments (Production, Preview, Development)
4. Deploy

**Note:** Never commit `.env.local` or `.env` files to version control. They are listed in `.gitignore`.

### Build Commands
- `bun install` - Install dependencies
- `bun build` - Build production app
- `bun lint` - Check code quality
- `bun typecheck` - Type checking

### Best Practices Applied
- Server Components by default for optimal performance
- `"use client"` only when necessary (form state management)
- Semantic HTML5 elements
- Proper TypeScript typing
- Tailwind CSS v4 with theme tokens
- Responsive design with mobile-first approach

## Contact Information
- **Phone**: 812-240-6242
- **Email**: info@infl8.net
- **Location**: Terre Haute, IN, USA
- **Social**: Instagram and Facebook linked in footer

## Future Enhancements (Potential)
- Backend database for booking management
- Email integration for form submissions
- Image gallery for past work
- Payment processing integration
- Admin dashboard for managing bookings
- Blog section for decoration tips and ideas
