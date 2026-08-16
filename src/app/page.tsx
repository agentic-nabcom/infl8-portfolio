"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "I can't recommend Rania enough! She made the balloon decorations for my baby shower, and they were absolutely amazing—so beautiful, creative, and perfectly set up. I've attended several events where she's done the balloons, and every single time, her work is flawless. She truly has a talent for making every celebration feel magical.",
    author: "Rand K"
  },
  {
    quote: "Loved by families, trusted for life's sweetest celebrations",
    author: "Fatima, IN"
  },
  {
    quote: "Absolutely amazing balloon decorations! They made my daughter's birthday party so special and magical.",
    author: "Sarah M."
  },
  {
    quote: "Professional, creative, and easy to work with. The balloon arch was the highlight of our baby shower!",
    author: "Jennifer K."
  },
  {
    quote: "I've used their services multiple times and they never disappoint. Highly recommend for any event!",
    author: "Rachel T."
  },
  {
    quote: "The attention to detail is incredible. My wedding reception looked like a dream come true!",
    author: "Amanda L."
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-3 py-8 md:py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-1">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 md:items-center">
            {/* Left Column: Title and Text */}
            <div className="text-center md:text-left">
              <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-dancing-script">
                Welcome to Your Celebration Destination!
              </h1>
              <p className="mb-6 md:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-black">
                We specialize in creating stunning and unique balloon arrangements for all, ensuring your events are filled with joy and color. Let us help you bring your vision to life with our creative designs and service!
              </p>
              {/* Button - Hidden on mobile, shown on desktop */}
              <div className="hidden md:flex justify-start">
                <Button href="/book-online" className="px-6 py-2 md:px-8 md:py-3 text-base md:text-lg">Book Now</Button>
              </div>
            </div>
            
            {/* Right Column: Image */}
            <div className="mb-6 md:mb-0">
              <Image
                src="https://static.wixstatic.com/media/0d2447_d5d89d3ccc5c49d78e2af017e6b90403~mv2.jpg/v1/fill/w_640,h_636,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d2447_d5d89d3ccc5c49d78e2af017e6b90403~mv2.jpg"
                alt="Birthday party balloon decorations"
                width={640}
                height={636}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Button - Shown on mobile, hidden on desktop */}
            <div className="md:hidden flex justify-center">
              <Button href="/book-online" className="w-full px-6 py-2 text-base">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FFD6E0] px-3 py-8 md:py-12 lg:py-20">
        <div className="mx-auto max-w-5xl px-1">
          <h2 className="mb-4 md:mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#78396D] font-dancing-script">
            How It Works
          </h2>
          
          {/* Decorative flourish */}
          <div className="mb-8 md:mb-12 flex justify-center">
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-32">
              <path d="M10 10 Q30 5, 50 10 T90 10" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M20 15 Q40 10, 60 15 T100 15" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="text-center flex-1 max-w-xs">
              <div className="mb-4 md:mb-6 relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                {/* Blob background with exact SVG from source */}
                <svg className="absolute inset-0 w-full h-full" height="100%" width="100%">
                  <defs>
                    <filter x="-6" y="-6" width="217" height="217" filterUnits="userSpaceOnUse" id="blob-shadow-1" colorInterpolationFilters="sRGB">
                      <feComponentTransfer result="srcRGB"/>
                      <feGaussianBlur stdDeviation="2" in="SourceAlpha"/>
                      <feOffset dx="1" dy="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.7490196078431373&#xA;0 0 0 0 0.7490196078431373&#xA;0 0 0 0 0.7490196078431373&#xA;0 0 0 0.6 0"/>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                      <feComponentTransfer/>
                    </filter>
                  </defs>
                  <g filter="url(#blob-shadow-1)">
                    <svg preserveAspectRatio="none" data-bbox="33.241 32.739 134.519 134.522" xmlns="http://www.w3.org/2000/svg" viewBox="33.241 32.739 134.519 134.522" role="presentation" aria-hidden="true" aria-label="">
                      <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="white" d="M162.989 102.465l1.721-2.77c5.894-9.482 2.985-21.947-6.497-27.842l-2.769-1.721a20.218 20.218 0 0 1-9.015-12.576l-.741-3.176c-2.537-10.873-13.408-17.631-24.282-15.094l-3.175.741a20.218 20.218 0 0 1-15.267-2.518l-2.769-1.721c-9.483-5.894-21.948-2.986-27.842 6.497l-1.721 2.769a20.218 20.218 0 0 1-12.576 9.015l-3.175.741c-10.872 2.538-17.63 13.41-15.093 24.283l.741 3.175a20.218 20.218 0 0 1-2.518 15.267l-1.721 2.769c-5.894 9.482-2.986 21.948 6.497 27.842l2.769 1.721a20.218 20.218 0 0 1 9.015 12.576l.741 3.175c2.537 10.873 13.408 17.631 24.282 15.094l3.174-.741a20.218 20.218 0 0 1 15.267 2.518l2.77 1.722c9.483 5.894 21.948 2.985 27.842-6.497l1.721-2.769a20.214 20.214 0 0 1 12.576-9.015l3.175-.741c10.873-2.537 17.631-13.408 15.094-24.282l-.741-3.175a20.217 20.217 0 0 1 2.517-15.267z"/>
                      </g>
                    </svg>
                  </g>
                </svg>
                {/* Speech bubble with heart icon - exact SVG from source */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg preserveAspectRatio="none" data-bbox="36 36 128 128" viewBox="36 36 128 128" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                    <g>
                      <path fill="#78396D" stroke="#5a2a52" strokeWidth="2.5" d="M146.667 36H53.333C43.775 36 36 43.776 36 53.333V160a4 4 0 0 0 6.828 2.829l25.496-25.495h78.343c9.558 0 17.333-7.776 17.333-17.333V53.333C164 43.776 156.225 36 146.667 36zM156 120c0 5.146-4.187 9.333-9.333 9.333h-80a3.999 3.999 0 0 0-2.828 1.171L44 150.343v-97.01C44 48.187 48.187 44 53.333 44h93.334c5.146 0 9.333 4.187 9.333 9.333V120z"/>
                    </g>
                  </svg>
                  <svg preserveAspectRatio="none" data-bbox="0 0 337.772 303.508" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.772 303.508" role="presentation" aria-hidden="true" aria-label="" className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <g>
                      <path fill="#78396D" d="M310.485 21.159C290.731 4.583 271.484-.029 245.926 0c-27.13 2.348-50.615 15.589-77.041 49.05C142.46 15.589 118.975 2.348 91.845 0 66.287-.029 47.038 4.583 27.284 21.159 14.511 31.878 0 60.341 0 87.465c.339 54.573 38.391 136.609 163.485 212.905l5.165 3.138.236-.141.236.141 5.165-3.138c125.094-76.296 163.146-158.332 163.485-212.905-.001-27.124-14.514-55.587-27.287-66.306z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 md:mb-3 text-base md:text-xl lg:text-2xl font-bold text-[#78396D]">Inquire</h3>
              <p className="text-sm md:text-base lg:text-lg text-black/80">
                Tell us about your<br />event and ideas.
              </p>
            </div>

            {/* Chevron Arrow - exact SVG from source, rotated to point right */}
            <div className="hidden md:flex items-center justify-center text-[#78396D]">
              <svg preserveAspectRatio="none" data-bbox="20.5 40.5 159 119" viewBox="20.5 40.5 159 119" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="" className="w-10 h-10 md:w-12 md:h-12 transform rotate-90">
                <g>
                  <path fill="currentColor" d="M100 74.5l-5.678 5.667-56.786 56.666 5.678 5.667L100 85.578l56.786 56.922 5.678-5.667-56.786-56.666L100 74.5z"/>
                  <path fill="currentColor" d="M100 108.5l-5.678 5.667-39.75 39.667 5.678 5.666L100 119.833l39.749 39.667 5.679-5.666-39.75-39.667L100 108.5z"/>
                  <path fill="currentColor" d="M105.678 46.166L100 40.5l-5.678 5.666L20.5 119.833l5.678 5.667L100 51.877l73.822 73.623 5.678-5.667-73.822-73.667z"/>
                </g>
              </svg>
            </div>

            {/* Step 2 */}
            <div className="text-center flex-1 max-w-xs">
              <div className="mb-4 md:mb-6 relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                {/* Blob background with exact SVG from source */}
                <svg className="absolute inset-0 w-full h-full" height="100%" width="100%">
                  <defs>
                    <filter x="-6" y="-6" width="217" height="217" filterUnits="userSpaceOnUse" id="blob-shadow-2" colorInterpolationFilters="sRGB">
                      <feComponentTransfer result="srcRGB"/>
                      <feGaussianBlur stdDeviation="2" in="SourceAlpha"/>
                      <feOffset dx="1" dy="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.7490196078431373&#xA;0 0 0 0 0.7490196078431373&#xA;0 0 0 0 0.7490196078431373&#xA;0 0 0 0.6 0"/>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                      <feComponentTransfer/>
                    </filter>
                  </defs>
                  <g filter="url(#blob-shadow-2)">
                    <svg preserveAspectRatio="none" data-bbox="33.241 32.739 134.519 134.522" xmlns="http://www.w3.org/2000/svg" viewBox="33.241 32.739 134.519 134.522" role="presentation" aria-hidden="true" aria-label="">
                      <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="white" d="M162.989 102.465l1.721-2.77c5.894-9.482 2.985-21.947-6.497-27.842l-2.769-1.721a20.218 20.218 0 0 1-9.015-12.576l-.741-3.176c-2.537-10.873-13.408-17.631-24.282-15.094l-3.175.741a20.218 20.218 0 0 1-15.267-2.518l-2.769-1.721c-9.483-5.894-21.948-2.986-27.842 6.497l-1.721 2.769a20.218 20.218 0 0 1-12.576 9.015l-3.175.741c-10.872 2.538-17.63 13.41-15.093 24.283l.741 3.175a20.218 20.218 0 0 1-2.518 15.267l-1.721 2.769c-5.894 9.482-2.986 21.948 6.497 27.842l2.769 1.721a20.218 20.218 0 0 1 9.015 12.576l.741 3.175c2.537 10.873 13.408 17.631 24.282 15.094l3.174-.741a20.218 20.218 0 0 1 15.267 2.518l2.77 1.722c9.483 5.894 21.948 2.985 27.842-6.497l1.721-2.769a20.214 20.214 0 0 1 12.576-9.015l3.175-.741c10.873-2.537 17.631-13.408 15.094-24.282l-.741-3.175a20.217 20.217 0 0 1 2.517-15.267z"/>
                      </g>
                    </svg>
                  </g>
                </svg>
                {/* Document with pen and sparkles - exact SVG from source */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="52.5 61.51 127.572 93.99" viewBox="52.5 61.51 127.572 93.99" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                    <g>
                      <path d="M174.674 72.469l-2.952-5.398-2.953 5.398-5.398 2.952 5.398 2.953 2.953 5.398 2.952-5.398 5.398-2.953-5.398-2.952z" fill="#78396D"/>
                      <path d="M155.351 88.898l-2.953 5.398L147 97.249l5.398 2.952 2.953 5.398 2.953-5.398 5.398-2.952-5.398-2.953-2.953-5.398z" fill="#78396D"/>
                      <path d="M128.522 102.13a2.5 2.5 0 0 0-2.5 2.5v45.87H57.5V74.239h59.413a2.5 2.5 0 1 0 0-5H55a2.5 2.5 0 0 0-2.5 2.5V153a2.5 2.5 0 0 0 2.5 2.5h73.522a2.5 2.5 0 0 0 2.5-2.5v-48.37a2.5 2.5 0 0 0-2.5-2.5z" fill="#78396D" stroke="#5a2a52" strokeWidth="2.5"/>
                      <path d="M135.571 63.421l-36.938 36.938c-.19.19-.348.409-.469.65l-5.472 10.945a2.5 2.5 0 0 0 3.355 3.354l10.945-5.474c.24-.12.459-.278.649-.468l31.462-31.462.003-.002.002-.003 5.472-5.472c2.912-2.912 2.163-6.803-.021-8.986-2.184-2.183-6.076-2.932-8.988-.02zm-31.178 42.123l-3.875 1.938 1.937-3.874 29.412-29.413 1.937 1.938-29.411 29.411zm36.651-36.651l-3.705 3.705-1.937-1.938 3.703-3.704c.826-.824 1.557-.34 1.917.021.363.361.846 1.091.022 1.916z" fill="#78396D"/>
                      <path d="M112.5 123h-40a2.5 2.5 0 1 0 0 5h40a2.5 2.5 0 1 0 0-5z" fill="#78396D"/>
                      <path d="M112.5 135h-40a2.5 2.5 0 1 0 0 5h40a2.5 2.5 0 1 0 0-5z" fill="#78396D"/>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 md:mb-3 text-base md:text-xl lg:text-2xl font-bold text-[#78396D]">Design</h3>
              <p className="text-sm md:text-base lg:text-lg text-black/80">
                We craft a custom<br />balloon look.
              </p>
            </div>

            {/* Chevron Arrow - exact SVG from source, rotated to point right */}
            <div className="hidden md:flex items-center justify-center text-[#78396D]">
              <svg preserveAspectRatio="none" data-bbox="20.5 40.5 159 119" viewBox="20.5 40.5 159 119" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="" className="w-10 h-10 md:w-12 md:h-12 transform rotate-90">
                <g>
                  <path fill="currentColor" d="M100 74.5l-5.678 5.667-56.786 56.666 5.678 5.667L100 85.578l56.786 56.922 5.678-5.667-56.786-56.666L100 74.5z"/>
                  <path fill="currentColor" d="M100 108.5l-5.678 5.667-39.75 39.667 5.678 5.666L100 119.833l39.749 39.667 5.679-5.666-39.75-39.667L100 108.5z"/>
                  <path fill="currentColor" d="M105.678 46.166L100 40.5l-5.678 5.666L20.5 119.833l5.678 5.667L100 51.877l73.822 73.623 5.678-5.667-73.822-73.667z"/>
                </g>
              </svg>
            </div>

            {/* Step 3 */}
            <div className="text-center flex-1 max-w-xs">
              <div className="mb-4 md:mb-6 relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                {/* Blob background with exact SVG from source */}
                <svg className="absolute inset-0 w-full h-full" height="100%" width="100%">
                  <defs>
                    <filter x="-6" y="-6" width="217" height="217" filterUnits="userSpaceOnUse" id="blob-shadow-3" colorInterpolationFilters="sRGB">
                      <feComponentTransfer result="srcRGB"/>
                      <feGaussianBlur stdDeviation="2" in="SourceAlpha"/>
                      <feOffset dx="1" dy="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.7490196078431373&#xA;0 0 0 0 0.7490196078431373&#xA;0 0 0 0 0.7490196078431373&#xA;0 0 0 0.6 0"/>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                      <feComponentTransfer/>
                    </filter>
                  </defs>
                  <g filter="url(#blob-shadow-3)">
                    <svg preserveAspectRatio="none" data-bbox="33.241 32.739 134.519 134.522" xmlns="http://www.w3.org/2000/svg" viewBox="33.241 32.739 134.519 134.522" role="presentation" aria-hidden="true" aria-label="">
                      <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="white" d="M162.989 102.465l1.721-2.77c5.894-9.482 2.985-21.947-6.497-27.842l-2.769-1.721a20.218 20.218 0 0 1-9.015-12.576l-.741-3.176c-2.537-10.873-13.408-17.631-24.282-15.094l-3.175.741a20.218 20.218 0 0 1-15.267-2.518l-2.769-1.721c-9.483-5.894-21.948-2.986-27.842 6.497l-1.721 2.769a20.218 20.218 0 0 1-12.576 9.015l-3.175.741c-10.872 2.538-17.63 13.41-15.093 24.283l.741 3.175a20.218 20.218 0 0 1-2.518 15.267l-1.721 2.769c-5.894 9.482-2.986 21.948 6.497 27.842l2.769 1.721a20.218 20.218 0 0 1 9.015 12.576l.741 3.175c2.537 10.873 13.408 17.631 24.282 15.094l3.174-.741a20.218 20.218 0 0 1 15.267 2.518l2.77 1.722c9.483 5.894 21.948 2.985 27.842-6.497l1.721-2.769a20.214 20.214 0 0 1 12.576-9.015l3.175-.741c10.873-2.537 17.631-13.408 15.094-24.282l-.741-3.175a20.217 20.217 0 0 1 2.517-15.267z"/>
                      </g>
                    </svg>
                  </g>
                </svg>
                {/* Three balloons - exact SVG from source */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="48.001 31.5 103.999 137" viewBox="48.001 31.5 103.999 137" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                    <g>
                      <path d="M113.584 145.146c-1.345 0-2.595-.182-3.696-.592-9.207-3.421-19.508-28.709-13.312-45.459 3.055-8.256 8.618-14.987 15.666-18.951 7.178-4.041 15.085-4.789 22.263-2.122 14.851 5.52 21.462 23.419 15.052 40.755-2.814 7.604-9.611 15.061-18.65 20.456-5.004 2.99-11.932 5.913-17.323 5.913zm12.215-62.86c-3.588 0-7.244.987-10.707 2.935-5.845 3.287-10.483 8.935-13.058 15.9-5.484 14.822 4.464 35.963 9.879 37.974 2.355.873 8.764-.535 16.014-4.863 7.919-4.727 13.814-11.097 16.173-17.478 5.192-14.034-.021-28.959-11.621-33.27a19.07 19.07 0 0 0-6.68-1.198z" fill="#78396D" stroke="#5a2a52" strokeWidth="2.5"/>
                      <path d="M124.27 73.728l-5.568-1.689c.821-2.71 1.237-5.255 1.237-7.568 0-14.97-10.064-27.147-22.433-27.147-11.149 0-20.46 9.646-22.139 22.939l-5.773-.734C71.647 43.288 83.386 31.5 97.506 31.5c15.842 0 28.251 14.484 28.251 32.972.001 2.886-.499 6-1.487 9.256z" fill="#78396D" stroke="#5a2a52" strokeWidth="2.5"/>
                      <path d="M102.617 168.5c-.058-1.308-.604-2.813-1.131-4.269-.852-2.352-1.817-5.017-.957-7.664.831-2.554 3.041-3.58 4.817-4.408 1.862-.867 2.649-1.328 2.939-2.406 1.082-4.021.884-8.54.881-8.583l5.812-.279c.01.222.241 5.483-1.074 10.374-1.024 3.808-4.081 5.23-6.105 6.174-.626.29-1.575.734-1.764.987-.214.685.389 2.352.922 3.819.643 1.78 1.375 3.797 1.473 5.992l-5.813.263z" fill="#78396D" stroke="#5a2a52" strokeWidth="2.5"/>
                      <path d="M82.947 163.119l-4.94-3.077c.322-.518.737-1.149 1.199-1.851 1.089-1.655 3.879-5.895 4.223-7.582-.442-.483-1.523-1.283-2.273-1.834-2.571-1.897-5.77-4.257-5.77-7.872 0-4.63 5.298-11.72 6.359-13.093l4.602 3.563c-2.484 3.219-5.143 7.818-5.143 9.53.068.722 2.405 2.446 3.403 3.182 2.283 1.684 4.437 3.273 4.653 5.784.257 2.969-2.095 6.811-5.196 11.523-.43.658-.818 1.244-1.117 1.727z" fill="#78396D" stroke="#5a2a52" strokeWidth="2.5"/>
                      <path d="M83.413 133.114c-5.582 0-12.952-4.052-18.025-7.92-8.374-6.382-14.288-14.561-16.227-22.435-4.422-17.948 4.163-34.985 19.543-38.79 13.966-3.461 28.69 5.821 34.219 21.593l-5.489 1.928C92.901 74.57 81.15 66.886 70.099 69.622c-12.011 2.972-18.869 17.211-15.291 31.743 1.628 6.606 6.768 13.602 14.105 19.196 6.719 5.125 12.942 7.24 15.364 6.64 1.166-.287 3.342-1.84 5.957-5.332l4.656 3.492c-2.187 2.921-5.561 6.589-9.217 7.494a9.378 9.378 0 0 1-2.26.259z" fill="#78396D" stroke="#5a2a52" strokeWidth="2.5"/>
                      <path d="M59.81 99.229c-2.922-11.862 2.817-23.14 13.064-25.677l1.398 5.654c-6.964 1.723-10.919 10.081-8.814 18.63l-5.648 1.393z" fill="#78396D" stroke="#5a2a52" strokeWidth="2"/>
                      <path d="M106.204 110.17c-.175-12.217 7.956-21.912 18.513-22.068l.085 5.824c-7.173.105-12.906 7.357-12.78 16.159l-5.818.085z" fill="#78396D" stroke="#5a2a52" strokeWidth="2"/>
                      <path d="M85.786 60.809l-5.716-1.086c1.584-8.344 7.295-14.819 14.551-16.5l1.312 5.676c-5.01 1.16-8.993 5.835-10.147 11.91z" fill="#78396D" stroke="#5a2a52" strokeWidth="2"/>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 md:mb-3 text-base md:text-xl lg:text-2xl font-bold text-[#78396D]">Celebrate</h3>
              <p className="text-sm md:text-base lg:text-lg text-black/80">
                We set up and style<br />your space.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 lg:mt-16 text-center">
            <Button href="/book-online" className="w-full md:w-auto px-6 py-2 md:px-8 md:py-3 text-base md:text-lg">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-3 py-8 md:py-12 lg:py-20">
        {/* Pink gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-50"></div>
        <div className="relative mx-auto max-w-4xl px-1">
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#78396D] font-dancing-script text-center">
            Testimonials
          </h2>
          <p className="mb-8 md:mb-12 text-center text-sm md:text-base md:text-lg">
            See what our happy customers have to say about their balloon decor experience.
          </p>

          {/* Testimonial Slider */}
          <div className="mb-8 md:mb-12 lg:mb-16 rounded-lg bg-white/80 p-4 md:p-6 lg:p-8 shadow-md">
            {/* Testimonial content */}
            <div className="relative">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 p-2 rounded-full bg-[#D96E95] text-white hover:bg-[#D96E95]/80 transition-all z-10"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="px-8 md:px-12">
                <p className="mb-3 md:mb-4 text-center text-sm md:text-base md:text-lg italic text-gray-700">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
                <p className="text-center text-xs md:text-sm md:text-base font-semibold text-[#D96E95]">
                  — {testimonials[currentTestimonial].author}
                </p>
              </div>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 p-2 rounded-full bg-[#D96E95] text-white hover:bg-[#D96E95]/80 transition-all z-10"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-[#D96E95] w-6"
                      : "bg-[#D96E95]/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#78396D] to-[#D96E95] px-3 py-8 md:py-12 lg:py-20 text-center">
        <div className="mx-auto max-w-3xl md:max-w-4xl px-1">
          <h2 className="mb-4 md:mb-6 lg:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="mb-6 md:mb-8 text-sm md:text-base md:text-lg text-white/90">
            Let us help you create beautiful balloon arrangements that will make your celebration truly special.
          </p>
          <Button href="/book-online" className="px-6 py-2 md:px-8 md:py-3 text-base md:text-lg">
            Book Your Balloon Decor Today
          </Button>
        </div>
      </section>
    </>
  );
}
