"use client";

import { useState, FormEvent } from "react";

export default function BookOnlinePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    location: "",
    balloonType: "",
    additionalInfo: "",
    attachment: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle', message: '' });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('eventType', formData.eventType);
      formDataToSend.append('eventDate', formData.eventDate);
      formDataToSend.append('eventTime', formData.eventTime);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('balloonType', formData.balloonType);
      formDataToSend.append('additionalInfo', formData.additionalInfo);
      
      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment);
      }

      const response = await fetch('/api/booking', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        // Check if email was sent successfully
        if (result.emailError) {
          console.warn('Email sending failed:', result.emailError);
          setSubmitStatus({ type: 'success', message: 'Booking inquiry received! However, there was an issue sending the confirmation email. Please contact us directly.' });
        } else {
          setSubmitStatus({ type: 'success', message: result.message || 'Booking inquiry received successfully!' });
        }
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          eventTime: "",
          location: "",
          balloonType: "",
          additionalInfo: "",
          attachment: null,
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred while submitting your booking. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-3 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-1">
        <h1 className="mb-4 md:mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#78396D] font-dancing-script">
          Book Online
        </h1>
        <p className="mb-8 md:mb-12 text-center text-sm sm:text-base md:text-lg text-gray-700">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="rounded-lg bg-white p-4 md:p-6 lg:p-8 shadow-md">
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {/* Personal Information */}
            <div>
              <label htmlFor="firstName" className="mb-2 block text-xs md:text-sm font-semibold">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block text-xs md:text-sm font-semibold">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                placeholder="Your last name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs md:text-sm font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-xs md:text-sm font-semibold">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                placeholder="(812) 240-6242"
              />
            </div>
          </div>

          {/* Event Information */}
          <div className="mt-6 md:mt-8">
            <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-black">Event Details</h2>

            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="eventType" className="mb-2 block text-xs md:text-sm font-semibold">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="wedding">Wedding</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="graduation">Graduation</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="holiday">Holiday Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="eventDate" className="mb-2 block text-xs md:text-sm font-semibold">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                />
              </div>

              <div>
                <label htmlFor="eventTime" className="mb-2 block text-xs md:text-sm font-semibold">
                  Event Time *
                </label>
                <input
                  type="time"
                  id="eventTime"
                  name="eventTime"
                  required
                  value={formData.eventTime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                />
              </div>
            </div>

            <div className="mt-4 md:mt-6">
              <label htmlFor="location" className="mb-2 block text-xs md:text-sm font-semibold">
                Event Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                placeholder="Venue address or 'TBD'"
              />
            </div>

            <div className="mt-4 md:mt-6">
              <label htmlFor="balloonType" className="mb-2 block text-xs md:text-sm font-semibold">
                Interested In *
              </label>
              <select
                id="balloonType"
                name="balloonType"
                required
                value={formData.balloonType}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
              >
                <option value="">Select balloon type</option>
                <option value="arch">Balloon Arch</option>
                <option value="backdrop">Photo Backdrop</option>
                <option value="centerpieces">Centerpieces</option>
                <option value="garland">Balloon Garland</option>
                <option value="numbers">Number/Letter Balloons</option>
                <option value="custom">Custom Design</option>
              </select>
            </div>

            <div className="mt-4 md:mt-6">
              <label htmlFor="additionalInfo" className="mb-2 block text-xs md:text-sm font-semibold">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm"
                placeholder="Tell us about your vision, theme, colors, or any special requests..."
              />
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <label htmlFor="attachment" className="mb-2 block text-xs md:text-sm font-semibold">
              Attachment (optional)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                id="attachment"
                name="attachment"
                accept="image/*,.pdf,.doc,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setFormData(prev => ({ ...prev, attachment: file as File | null }));
                }}
                className="w-full border border-gray-300 bg-[#FFD6E0] p-2 md:p-3 text-black text-sm file:mr-2"
              />
              {formData.attachment && (
                <span className="text-xs md:text-sm text-[#D96E95] truncate max-w-[200px]">
                  {formData.attachment.name}
                </span>
              )}
            </div>
          </div>

          {/* Status Message */}
          {submitStatus.type !== 'idle' && (
            <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-lg text-center ${
              submitStatus.type === 'success' ? 'bg-green-100 text-green-800 border border-green-500' : 'bg-red-100 text-red-800 border border-red-500'
            }`}>
              <div className="text-2xl mb-2">
                {submitStatus.type === 'success' ? '✓' : '✕'}
              </div>
              <p className="text-base font-semibold">
                {submitStatus.type === 'success' ? 'Success!' : 'Error'}
              </p>
              <p className="text-sm">
                {submitStatus.message}
              </p>
            </div>
          )}

          <div className="mt-6 md:mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D96E95] px-6 py-3 md:px-8 md:py-4 font-bold text-white hover:bg-[#78396D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-kodchasan md:w-auto md:px-12 text-sm md:text-base"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </button>
          </div>

          <div className="mt-4 md:mt-6 rounded-lg bg-gray-50 p-3 md:p-4">
            <p className="text-xs md:text-sm text-gray-600">
              <strong>Important:</strong> Submitting this form sends a booking inquiry. We will contact you within 24 hours to confirm details and discuss pricing. Your booking is not confirmed until you receive confirmation from us.
            </p>
          </div>
        </form>

        <div className="mt-10 md:mt-16 rounded-lg bg-[#FFD6E0] p-4 md:p-6 lg:p-8 text-center">
          <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-black">
            Questions? Contact Us Directly
          </h2>
          <div className="space-y-1 md:space-y-2 text-sm md:text-lg text-black/80">
            <p>
              <strong>Phone:</strong> 812-240-6242
            </p>
            <p>
              <strong>Email:</strong> info@infl8.net
            </p>
            <p>
              <strong>Location:</strong> Terre Haute, IN, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
