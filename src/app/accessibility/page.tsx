export default function AccessibilityStatementPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-5xl font-bold text-[#78396D] font-dancing-script sm:text-6xl">
          Accessibility Statement
        </h1>
        <p className="mb-8 text-base text-gray-500">
          Last Updated: January 2026
        </p>

        <div className="space-y-8">
          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Our Commitment to Accessibility
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              At Infl8, we are committed to ensuring that our website and services are accessible to all users, including those with disabilities. We believe that everyone should have equal access to information and services online, regardless of their abilities.
            </p>
          </section>

          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Measures We Take
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              We have implemented the following measures to improve accessibility:
            </p>
            <ul className="ml-6 space-y-2 list-disc text-base text-gray-700">
              <li><strong>Alt Text:</strong> All images on our website include descriptive alt text for screen readers.</li>
              <li><strong>Keyboard Navigation:</strong> Our website can be navigated using keyboard-only commands.</li>
              <li><strong>Color Contrast:</strong> We maintain sufficient color contrast ratios to ensure text readability.</li>
              <li><strong>Responsive Design:</strong> Our site is mobile-friendly and adapts to different screen sizes.</li>
              <li><strong>Clear Typography:</strong> We use readable fonts and appropriate text sizes.</li>
              <li><strong>Forms:</strong> Our forms include clear labels and error messages for assistive technologies.</li>
            </ul>
          </section>

          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Web Content Accessibility Guidelines (WCAG)
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement, photosensitivity, and combinations of these.
            </p>
          </section>

          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Known Accessibility Limitations
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              While we strive for full accessibility, some limitations may exist:
            </p>
            <ul className="ml-6 space-y-2 list-disc text-base text-gray-700">
              <li>Some third-party content or services integrated into our site may not be fully accessible</li>
              <li>Certain interactive elements may require screen reader updates</li>
              <li>PDF documents may not be fully optimized for screen readers</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              We are actively working to address these limitations and welcome feedback to help us improve.
            </p>
          </section>

          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Accessibility in Our Services
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              Our commitment to accessibility extends beyond our website to our balloon decoration services:
            </p>
            <ul className="ml-6 space-y-2 list-disc text-base text-gray-700">
              <li>We can discuss accessibility needs for your event venue during consultations</li>
              <li>We aim to accommodate various requirements for setup and design</li>
              <li>Our team is trained to provide excellent service to all customers</li>
            </ul>
          </section>

          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Feedback and Assistance
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              We welcome your feedback on the accessibility of our website and services. If you encounter any barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="mt-4 space-y-2 text-base text-gray-700">
              <p><strong>Email:</strong> info@infl8.net</p>
              <p><strong>Phone:</strong> 812-240-6242</p>
            </div>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              We will respond to your accessibility inquiries promptly and work with you to provide the information or service you need.
            </p>
          </section>

          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Ongoing Efforts
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Accessibility is an ongoing priority for Infl8. We regularly review our website and services to identify and address accessibility issues. As technology and guidelines evolve, we will continue to improve our accessibility efforts to ensure equal access for all users.
            </p>
          </section>

          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Third-Party Content
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Our website may include links to third-party websites or embed third-party content (such as social media feeds, videos, or booking systems). We are not responsible for the accessibility practices of these third parties. We encourage users to contact those third parties directly regarding their accessibility policies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
