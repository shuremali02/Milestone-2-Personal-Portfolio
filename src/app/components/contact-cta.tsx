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
          <div className="gradient-border rounded-xl">
            <div className="glass rounded-xl px-8 py-14 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-textMain">
                Let&apos;s Build Something <span className="text-primary">Great</span>
              </h2>
              <p className="text-textMuted max-w-xl mx-auto mb-8 text-lg">
                Have something to build — a web app, a mobile app, or an AI
                feature? I take projects from idea to live URL, and I&apos;m open
                to freelance &amp; contract work.
              </p>
              <Magnetic strength={8} className="mx-auto">
                <Link href="/contact">
                  <button className="px-10 py-4 bg-primary text-background rounded-lg font-semibold text-lg hover:bg-primaryHover hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center gap-3 mx-auto">
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
