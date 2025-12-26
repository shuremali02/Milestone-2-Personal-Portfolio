import React from 'react'
import Link from 'next/link';
import { Metadata } from "next";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact - Syed Shurem Ali Portfolio",
  description: "Get in touch with Syed Shurem Ali, Frontend Developer. Contact me for collaborations, projects, or inquiries about my work in React, Next.js, TypeScript, and Agentic AI.",
  openGraph: {
    title: "Contact - Syed Shurem Ali Portfolio",
    description: "Get in touch with Syed Shurem Ali, Frontend Developer. Contact me for collaborations, projects, or inquiries about my work in React, Next.js, TypeScript, and Agentic AI.",
    type: "website",
    url: "https://your-portfolio-url.com/contact",
  },
};

export default function Contact() {
  return (
    <section className="bg-background py-12 text-textMuted">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>

              <div className="space-y-5">
                {/* Email */}
                <Link href="mailto:shuremsyed41@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FaEnvelope className="text-primary text-xl group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <p className="text-textMuted text-sm">Email</p>
                    <p className="text-textMain font-medium group-hover:text-primary transition-colors">shuremsyed41@gmail.com</p>
                  </div>
                </Link>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-textMuted text-sm">Location</p>
                    <p className="text-textMain font-medium">Pakistan</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <Link href="https://linkedin.com/in/syed-shurem-ali-5a55852a0" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FaLinkedin className="text-primary text-xl group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <p className="text-textMuted text-sm">LinkedIn</p>
                    <p className="text-textMain font-medium group-hover:text-primary transition-colors">Syed Shurem Ali</p>
                  </div>
                </Link>

                {/* GitHub */}
                <Link href="https://github.com/shuremali02" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FaGithub className="text-primary text-xl group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <p className="text-textMuted text-sm">GitHub</p>
                    <p className="text-textMain font-medium group-hover:text-primary transition-colors">shuremali02</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Cards */}
          <div className="space-y-6">
            {/* Send Email Card */}
            <Link href="mailto:shuremsyed41@gmail.com">
              <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg hover:border-primary transition-all group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <FaEnvelope className="text-background text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Send me an Email</h3>
                    <p className="text-textMuted text-sm">I will respond within 24 hours</p>
                  </div>
                </div>
                <p className="text-textMain">
                  Drop me an email for project inquiries, collaborations, or just to say hello!
                </p>
                <div className="mt-4 text-primary font-medium group-hover:underline">
                  shuremsyed41@gmail.com →
                </div>
              </div>
            </Link>

            {/* View Resume Card */}
            <Link href="https://docs.google.com/document/d/19yPE2EWRe6PUPX9WkA1m3r6wkthM2jRL/edit?usp=sharing&ouid=107599650906310040146&rtpof=true&sd=true" target="_blank">
              <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg hover:border-primary transition-all group cursor-pointer mt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primaryHover rounded-xl flex items-center justify-center">
                    <FaFileAlt className="text-background text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">View My Resume</h3>
                    <p className="text-textMuted text-sm">Check out my detailed CV</p>
                  </div>
                </div>
                <p className="text-textMain">
                  Download or view my complete resume with work experience, skills, and education details.
                </p>
                <div className="mt-4 text-primary font-medium group-hover:underline">
                  Open Resume →
                </div>
              </div>
            </Link>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-primary/10 to-primaryHover/10 border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold">Currently Available</span>
              </div>
              <p className="text-textMain">
                I am open to freelance projects and full-time opportunities. Let&apos;s build something amazing together!
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-textMuted mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <Link href="https://linkedin.com/in/syed-shurem-ali-5a55852a0" target="_blank" className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <FaLinkedin className="text-primary text-xl group-hover:text-background" />
            </Link>
            <Link href="https://github.com/shuremali02" target="_blank" className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <FaGithub className="text-primary text-xl group-hover:text-background" />
            </Link>
            <Link href="mailto:shuremsyed41@gmail.com" className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <FaEnvelope className="text-primary text-xl group-hover:text-background" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
