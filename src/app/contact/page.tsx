import React from 'react'
import Link from 'next/link';
import { Metadata } from "next";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Syed Shurem Ali Portfolio",
  description: "Get in touch with Syed Shurem Ali, Frontend Developer.",
  openGraph: {
    title: "Contact - Syed Shurem Ali Portfolio",
    description: "Get in touch with Syed Shurem Ali, Frontend Developer.",
    type: "website",
    url: "https://syed-shurem-ali.vercel.app/contact",
  },
};

export default function Contact() {
  return (
    <section className="bg-background py-12 text-textMuted relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/4 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-4 right-1/4 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 neon-text">
            Get In Touch
          </h1>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-4 left-4 sparkle" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-primary mb-6 neon-text">Contact Information</h2>

                <div className="space-y-5">
                  <Link href="mailto:shuremsyed41@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaEnvelope className="text-primary text-xl group-hover:text-background transition-colors" />
                    </div>
                    <div>
                      <p className="text-textMuted text-sm">Email</p>
                      <p className="text-textMain font-medium group-hover:text-primary transition-colors">shuremsyed41@gmail.com</p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-textMuted text-sm">Location</p>
                      <p className="text-textMain font-medium">Pakistan</p>
                    </div>
                  </div>

                  <Link href="https://linkedin.com/in/syed-shurem-ali-5a55852a0" target="_blank" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaLinkedin className="text-primary text-xl group-hover:text-background transition-colors" />
                    </div>
                    <div>
                      <p className="text-textMuted text-sm">LinkedIn</p>
                      <p className="text-textMain font-medium group-hover:text-primary transition-colors">Syed Shurem Ali</p>
                    </div>
                  </Link>

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
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Send me a message</h3>
              <ContactForm />
            </div>

            <div className="space-y-4">
              <Link href="mailto:shuremsyed41@gmail.com">
                <div className="bg-surface border border-border rounded-2xl p-5 shadow-lg hover:border-primary transition-all group cursor-pointer card-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-2 right-2 sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: '0s' }} />
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-background text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Email</h3>
                      <p className="text-textMuted text-sm">shuremsyed41@gmail.com</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/cv/Syed-Shurem-Ali-CV.pdf" target="_blank" download="Syed-Shurem-Ali-CV.pdf">
                <div className="bg-surface border border-border rounded-2xl p-5 shadow-lg hover:border-primary transition-all group cursor-pointer card-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primaryHover/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-2 right-2 sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.25s' }} />
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 bg-primaryHover rounded-xl flex items-center justify-center">
                      <FaFileAlt className="text-background text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Resume</h3>
                      <p className="text-textMuted text-sm">Download CV</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="bg-gradient-to-r from-primary/10 to-primaryHover/10 border border-primary/30 rounded-2xl p-5 card-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primaryHover/5 animate-pulse" />
                <div className="absolute top-2 right-2 sparkle" style={{ animationDelay: '0s' }} />
                <div className="absolute bottom-2 left-2 sparkle" style={{ animationDelay: '0.5s' }} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-primary font-semibold neon-text">Available for Work</span>
                  </div>
                  <p className="text-textMuted text-sm">
                    Open to freelance projects and full-time opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center relative">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <p className="text-textMuted mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4 mb-8">
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

          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
            <Link href="#top">
              <button className="relative px-8 py-4 bg-gradient-to-r from-primary to-primaryHover text-background rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all ai-glow">
                Let&apos;s Work Together →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
