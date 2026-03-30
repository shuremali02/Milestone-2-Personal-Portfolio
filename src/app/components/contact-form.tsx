"use client";

import { useState } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // In a real application, you would send this data to your backend
      console.log('Form data:', formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or contact directly.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-primary mb-4">Send me a message</h3>

      {submitSuccess && (
        <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500">
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      {submitError && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textMain placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textMain placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-textMuted mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textMain placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="What's this regarding?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textMain placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isSubmitting
              ? 'bg-primary/70 cursor-not-allowed'
              : 'bg-gradient-to-r from-primary to-primaryHover hover:shadow-lg hover:scale-[1.02]'
          } text-background`}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              <FaPaperPlane /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}