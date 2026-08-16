import { getGalleryImages } from '@/lib/getGalleryImages';
import GalleryGrid from '@/components/GalleryGrid';

export const revalidate = 60; // Revalidate every 60 seconds to fetch new images

export const metadata = {
  title: 'Gallery - Infl8',
  description: 'Browse our stunning collection of balloon decorations and event designs. See how we bring celebrations to life with creative balloon arrangements.',
};

export default async function GalleryPage() {
  // Fetch images from Cloudinary folder - change 'gallery' to your folder name
  const images = await getGalleryImages('gallery');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFD6E0] to-white px-3 py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-1">
          <h1 className="mb-4 md:mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#78396D] font-dancing-script">
            Our Gallery
          </h1>
          
          {/* Decorative flourish */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-32">
              <path d="M10 10 Q30 5, 50 10 T90 10" stroke="#78396D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M20 15 Q40 10, 60 15 T100 15" stroke="#78396D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="mb-6 md:mb-8 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black/80 max-w-3xl mx-auto">
            Explore our portfolio of beautiful balloon decorations. From intimate gatherings to grand celebrations, see how we transform spaces with creativity and color.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="px-3 py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-1">
          <GalleryGrid images={images} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#78396D] to-[#D96E95] px-3 py-8 md:py-12 lg:py-16 text-center">
        <div className="mx-auto max-w-3xl px-1">
          <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Love What You See?
          </h2>
          <p className="mb-6 md:mb-8 text-sm md:text-base md:text-lg text-white/90">
            Let&apos;s create something beautiful for your celebration!
          </p>
          <a
            href="/book-online"
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-[#78396D] bg-white rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Event
          </a>
        </div>
      </section>
    </div>
  );
}
