"use client";

import { useState } from "react";

export default function FAQsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 weeks in advance for best availability, especially during peak seasons (summer, holidays). For larger events or custom designs, 4-6 weeks advance notice is ideal. However, we can sometimes accommodate last-minute requests, so don't hesitate to reach out!"
    },
    {
      question: "What areas do you serve?",
      answer: "Based in Terre Haute, Indiana, we serve the Wabash Valley area and surrounding communities within a 50-mile radius. For events outside this area, additional travel fees may apply. Contact us to discuss your specific location."
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes! We offer complimentary consultations to discuss your vision, event details, and design preferences. This helps us create the perfect balloon arrangement tailored to your needs. Consultations can be done via phone, video call, or in person when possible."
    },
    {
      question: "What is included in your services?",
      answer: "Our services include design consultation, delivery to your event venue, and professional setup of all balloon arrangements. Clean up and break down is only included with a fee. Infl8 will only return to pick up rentals."
    },
    {
      question: "What happens if it's an outdoor event and it rains/windy?",
      answer: "For outdoor events, we use specialized balloons and anchoring techniques designed to withstand typical weather conditions. However, we monitor weather forecasts and will work with you on contingency plans for severe weather. In case of cancellation due to weather, we can reschedule without penalty."
    },
    {
      question: "How long do the balloons last?",
      answer: "Indoor balloon arrangements typically last 2-3 days, sometimes up to a week with proper care. Outdoor arrangements have a shorter lifespan due to weather exposure (typically 6-12 hours). For multi-day events, we can provide touch-up services or arrange for setup closer to the event time."
    },
    {
      question: "Can you accommodate special themes or color schemes?",
      answer: "Absolutely! We love working with custom themes and color schemes. Whether you have specific colors in mind, a particular theme (like princess, superhero, elegant, tropical), or inspirational photos, we can create a design that matches your vision perfectly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Credit Card, Debit Card, Amazon Pay, Apple Pay, Cash App Pay, and Link. A 50% deposit is required to secure your booking, with the remaining balance due 24 hours prior to your event setup."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel anytime but the deposit is non-refundable. You can reschedule 3 days prior to your event without losing the deposit."
    },
    {
      question: "Do you provide balloons for pick up?",
      answer: "Yes we do but we only offer balloon centerpieces and columns for pick up."
    }
  ];

  return (
    <div className="px-3 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-1">
        <h1 className="mb-4 md:mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#78396D] font-dancing-script">
          Frequently Asked Questions
        </h1>
        <p className="mb-12 md:mb-16 text-center text-sm sm:text-base md:text-lg text-gray-700">
          Find answers to common questions about our balloon decoration services.
        </p>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-white shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={expandedIndex === index}
              >
                <h2 className="text-base md:text-lg lg:text-xl font-bold text-black">
                  {faq.question}
                </h2>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7 7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 md:mt-16 rounded-lg bg-[#FFD6E0] p-4 md:p-6 lg:p-8 text-center">
          <h2 className="mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-black">
            Still Have Questions?
          </h2>
          <p className="mb-6 md:mb-8 text-sm sm:text-base md:text-lg text-black/80">
            We&apos;re here to help! Contact us directly for personalized assistance with your balloon decoration needs.
          </p>
          <div className="space-y-1 md:space-y-2 text-sm md:text-lg text-black/80">
            <p>
              <strong>Phone:</strong> 812-240-6242
            </p>
            <p>
              <strong>Email:</strong> info@infl8.net
            </p>
          </div>
        </section>

        <div className="mt-12 md:mt-16 text-center">
          <p className="mb-4 text-sm md:text-base md:text-lg text-gray-700">
            Ready to book your balloon decorations?
          </p>
          <a
            href="/book-online"
            className="inline-block bg-[#D96E95] px-6 py-2 md:px-8 md:py-3 md:py-4 font-bold text-white hover:bg-[#78396D] transition-colors font-kodchasan text-sm md:text-base"
          >
            Book Online
          </a>
        </div>
      </div>
    </div>
  );
}
