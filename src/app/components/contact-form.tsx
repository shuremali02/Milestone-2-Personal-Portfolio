"use client";

import { useState } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; message?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs: { email?: string; message?: string } = {};
    if (!EMAIL_RE.test(formData.email)) errs.email = "Please enter a valid email address.";
    if (formData.message.trim().length < 10) errs.message = "Message should be at least 10 characters.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;

    if (!ACCESS_KEY) {
      setSubmitError("The form isn't configured yet — please email me directly at shuremsyed41@gmail.com.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: "Portfolio Contact Form",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New portfolio message from ${formData.name}`,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFieldErrors({});
        setTimeout(() => setSubmitSuccess(false), 6000);
      } else {
        setSubmitError(data.message || "Couldn't send your message. Please try again or email me directly.");
      }
    } catch {
      setSubmitError("Couldn't send your message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-background border border-border rounded-lg text-textMain placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors";

  return (
    <>
      {submitSuccess && (
        <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500 text-sm">
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}
      {submitError && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot — hidden from users, catches bots */}
        <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-1">Name</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required
            className={inputClass} placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-1">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
            aria-invalid={!!fieldErrors.email}
            className={`${inputClass} ${fieldErrors.email ? "border-red-500/60 focus:ring-red-500/40" : ""}`}
            placeholder="your.email@example.com" />
          {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-textMuted mb-1">Subject</label>
          <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange}
            className={inputClass} placeholder="What's this regarding?" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-1">Message</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required
            aria-invalid={!!fieldErrors.message}
            className={`${inputClass} resize-none ${fieldErrors.message ? "border-red-500/60 focus:ring-red-500/40" : ""}`}
            placeholder="Tell me about your project..." />
          {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-background transition-all ${
            isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]'
          }`}
        >
          {isSubmitting ? (<><FaSpinner className="animate-spin" /> Sending...</>) : (<><FaPaperPlane /> Send Message</>)}
        </button>
      </form>
    </>
  );
}
