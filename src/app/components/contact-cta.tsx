"use client";

import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import Reveal from "./reveal";
import Magnetic from "./magnetic";

/**
 * Closing call-to-action banner for the homepage — links to /contact
 * instead of embedding the whole contact page.
 */
export default function ContactCta() {
  return (
    <div className="bg-background py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="gradient-border rounded-3xl">
            <div className="glass rounded-3xl px-8 py-14 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                Let&apos;s Build Something Great
              </h2>
              <p className="text-textMuted max-w-xl mx-auto mb-8 text-lg">
                Have a project in mind — a web app, an Android app, or an AI
                integration? I&apos;m available for freelance and full-time
                opportunities.
              </p>
              <Magnetic strength={8} className="mx-auto">
                <Link href="/contact">
                  <button className="px-10 py-4 bg-primary text-background rounded-full font-semibold text-lg hover:bg-primaryHover hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center gap-3 mx-auto">
                    <FaEnvelope /> Start a Conversation <FaArrowRight />
                  </button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
