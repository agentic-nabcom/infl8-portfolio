import Image from "next/image";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <div className="px-3 py-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-1">
        <h1 className="mb-6 md:mb-8 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#78396D] font-dancing-script">
          About Infl8
        </h1>

        {/* Profile Image - Circular and appropriately sized */}
        <div className="mb-8 md:mb-12 flex flex-col items-center">
          <div className="relative mb-4">
            <Image
              src="https://static.wixstatic.com/media/0d2447_8422e2d1e9134843b74fb7530ebaaa9d~mv2.jpeg/v1/crop/x_0,y_30,w_1024,h_996/fill/w_886,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-01-17%20at%2011_40_05%20PM.jpeg"
              alt="Infl8 business owner"
              width={300}
              height={300}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-[#FFD6E0]"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#78396D] mb-1">Rania El Lababidi</h2>
            <p className="text-base md:text-lg text-gray-600">Founder & CEO</p>
          </div>
        </div>

        <section className="mb-12 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-black">Our Story</h2>
          <div className="rounded-lg bg-white p-3 md:p-6 lg:p-8 shadow-md">
            <p className="mb-3 md:mb-4 text-sm md:text-base md:text-lg leading-relaxed text-gray-700">
              What started as a simple love for decorating quickly became something more.
            </p>
            <p className="mb-3 md:mb-4 text-sm md:text-base md:text-lg leading-relaxed text-gray-700">
              I found myself counting down to birthdays and special moments—not just to celebrate, but to create. Decorating became a passion I genuinely looked forward to, a creative outlet where I could bring joy, beauty, and meaning into each space. Every balloon, color choice, and detail felt like a way to turn moments into memories.
            </p>
            <p className="mb-3 md:mb-4 text-sm md:text-base md:text-lg leading-relaxed text-gray-700">
              This year, I decided to make it official.
            </p>
            <p className="mb-3 md:mb-4 text-sm md:text-base md:text-lg leading-relaxed text-gray-700">
              What began as decorating for loved ones grew into a dream of becoming a source of happiness for others during life&apos;s most special occasions. From baby showers to birthdays and milestone moments, each design is created with care, intention, and heart.
            </p>
            <p className="text-sm md:text-base md:text-lg leading-relaxed text-gray-700">
              Because celebrations aren&apos;t just events—they&apos;re memories in the making, and I&apos;m honored to be part of them.
            </p>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-black">Our Mission</h2>
          <div className="rounded-lg bg-[#FFD6E0] p-3 md:p-6 lg:p-8">
            <p className="text-sm md:text-base md:text-lg leading-relaxed text-black">
              Our mission is simple: to fill your events with joy and color through creative, high-quality balloon decorations. We are committed to:
            </p>
            <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-sm md:text-base md:text-lg text-black">
              <li className="flex items-start gap-1 md:gap-3">
                <span className="text-[#D96E95]">✓</span>
                <span>Creating unique, personalized designs for each client</span>
              </li>
              <li className="flex items-start gap-1 md:gap-3">
                <span className="text-[#D96E95]">✓</span>
                <span>Using premium quality balloons for long-lasting arrangements</span>
              </li>
              <li className="flex items-start gap-1 md:gap-3">
                <span className="text-[#D96E95]">✓</span>
                <span>Providing professional setup and styling services</span>
              </li>
              <li className="flex items-start gap-1 md:gap-3">
                <span className="text-[#D96E95]">✓</span>
                <span>Ensuring your complete satisfaction with every event</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-black">Why Choose Us?</h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-3 md:p-6 shadow-md text-center">
              <div className="mb-3 md:mb-4 text-4xl md:text-5xl">🎈</div>
              <h3 className="mb-2 text-base md:text-xl font-bold text-black">Custom Designs</h3>
              <p className="text-sm md:text-base text-gray-600">
                Every balloon arrangement is uniquely crafted to match your theme and vision.
              </p>
            </div>
            <div className="rounded-lg bg-white p-3 md:p-6 shadow-md text-center">
              <div className="mb-3 md:mb-4 text-4xl md:text-5xl">💎</div>
              <h3 className="mb-2 text-base md:text-xl font-bold text-black">Premium Quality</h3>
              <p className="text-sm md:text-base text-gray-600">
                We use only the highest quality balloons for durability and vibrant colors.
              </p>
            </div>
            <div className="rounded-lg bg-white p-3 md:p-6 shadow-md text-center">
              <div className="mb-3 md:mb-4 text-4xl md:text-5xl">⭐</div>
              <h3 className="mb-2 text-base md:text-xl font-bold text-black">Trusted Service</h3>
              <p className="text-sm md:text-base text-gray-600">
                Loved by families, trusted for life&apos;s sweetest celebrations.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-black">Let&apos;s Celebrate Together!</h2>
          <p className="mb-6 md:mb-8 text-sm md:text-base md:text-lg text-gray-700">
            Ready to make your next event unforgettable? Contact us today to discuss your balloon decoration needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button href="/book-online" className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base">Book Online</Button>
            <Button href="/balloon-menu" variant="secondary" className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base">View Balloon Menu</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
