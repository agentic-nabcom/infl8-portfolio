import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFF5F9] border-t border-gray-300">
      <div className="mx-auto w-full px-3 py-6 md:px-8 md:py-8 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-[980px] grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Contact Info Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#78396D] font-kodchasan mb-3 md:mb-4">
              Contact Us
            </h3>
            <p className="text-sm md:text-base text-black mb-2 md:mb-3">812-240-6242</p>
            <a
              href="mailto:info@infl8.net"
              className="text-sm md:text-base text-black hover:underline mb-2 md:mb-3 block"
            >
              info@infl8.net
            </a>
            <p className="text-sm md:text-base text-black">Terre Haute, IN, USA</p>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#78396D] font-kodchasan mb-3 md:mb-4">
              Stay Connected!
            </h3>
            <form className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 text-xs md:text-sm">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-xs md:text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                  placeholder="Your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D96E95] px-4 py-2 md:px-6 md:py-3 font-bold text-white hover:bg-black transition-colors font-kodchasan text-sm md:text-base"
              >
                Submit
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-4 md:mt-6 flex gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/infl8_llc/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="text-black hover:opacity-75"
              >
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1K4nbFHz9S/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="text-black hover:opacity-75"
              >
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mx-auto max-w-[980px] mt-6 md:mt-8 border-t border-gray-300 pt-4 text-center">
          <div className="mb-3 md:mb-4 flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:underline">
              Accessibility Statement
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/faqs" className="hover:underline">
              FAQs
            </Link>
          </div>
          <p className="text-[10px] md:text-xs text-gray-600">
            © {new Date().getFullYear()} by Infl8. Powered by NABCOM
          </p>
        </div>
      </div>
    </footer>
  );
}
