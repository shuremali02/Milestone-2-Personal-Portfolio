"use client";

import { useState, useEffect, useRef } from "react";
import { FaClock, FaProjectDiagram, FaCode, FaTrophy, FaGithub, FaDownload } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import ExperienceCounter from "./experience-counter";
import CVModal from "./cv-modal";
import TiltCard from "./tilt-card";
import Reveal from "./reveal";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  iconBg: string;
  iconText: string;
}

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(easeOutQuart * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

export default function BentoStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGithubStats] = useState({
    experience: 2.5,
    projects: 15,
    technologies: 14,
    hackathons: 5,
    stars: 50,
    followers: 100,
  });
  const [loading, setLoading] = useState(true);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch("https://api.github.com/users/shuremali02");
        const data = await response.json();

        if (data.created_at) {
          const createdDate = new Date(data.created_at);
          const now = new Date();
          const diffTime = Math.abs(now.getTime() - createdDate.getTime());
          const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
          setGithubStats((prev) => ({ ...prev, experience: parseFloat(diffYears.toFixed(1)) }));
        }

        setGithubStats((prev) => ({
          ...prev,
          projects: data.public_repos || 15,
          followers: data.followers || 100,
        }));
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: Stat[] = [
    {
      icon: FaClock,
      value: githubStats.experience,
      suffix: "+",
      label: "Years Building",
      iconBg: "bg-cyan-500/15",
      iconText: "text-cyan-400",
    },
    {
      icon: FaProjectDiagram,
      value: githubStats.projects,
      suffix: "+",
      label: "Projects",
      iconBg: "bg-violet-500/15",
      iconText: "text-violet-400",
    },
    {
      icon: FaCode,
      value: githubStats.technologies,
      suffix: "+",
      label: "Technologies",
      iconBg: "bg-emerald-500/15",
      iconText: "text-emerald-400",
    },
    {
      icon: FaTrophy,
      value: githubStats.hackathons,
      suffix: "+",
      label: "Hackathons",
      iconBg: "bg-amber-500/15",
      iconText: "text-amber-400",
    },
  ];

  return (
    <div ref={ref} className="bg-background py-16 relative overflow-hidden">
      {/* Animated Background */}
      
      {/* Floating Particles */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Neon Effect */}
        <Reveal className="text-center mb-12 relative">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Stats <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-textMain">
            By The <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            A quick snapshot of my journey and achievements
          </p>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          
          {/* Main Stats - 4 cards */}
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
              loading={loading}
            />
          ))}

          {/* GitHub Stats - 2x1 with AI Effects */}
          <div className="lg:col-span-2 rounded-xl bg-surface border border-border p-4 sm:p-6 flex items-center gap-4 sm:gap-6 relative overflow-hidden group shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            {/* Subtle brand mark */}
            <div className="absolute inset-0 opacity-[0.06]">
              <FaGithub className="absolute -right-8 -bottom-8 text-8xl sm:text-9xl text-textMain" />
            </div>

            <div className="relative z-10 flex items-center gap-4 sm:gap-6 flex-1 flex-wrap">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-textMain/5 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <FaGithub className="text-textMain text-3xl sm:text-4xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-textMain mb-1">GitHub</h3>
                <p className="text-textMuted text-xs sm:text-sm">@shuremali02</p>
              </div>
            </div>

            <div className="relative z-10 flex gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold font-heading text-textMain">
                  {loading ? "-" : githubStats.projects}+
                </p>
                <p className="text-textMuted text-xs">Repos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold font-heading text-textMain">
                  {loading ? "-" : githubStats.stars}+
                </p>
                <p className="text-textMuted text-xs">Stars</p>
              </div>
            </div>
          </div>

          {/* Social Stats - 2x1 with AI Effects */}
          <div className="lg:col-span-2 rounded-xl bg-surface border border-border p-4 sm:p-6 flex items-center gap-4 sm:gap-6 relative overflow-hidden group shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            {/* Subtle brand mark */}
            <div className="absolute inset-0 opacity-[0.06]">
              <SiLinkedin className="absolute -right-8 -bottom-8 text-8xl sm:text-9xl text-blue-500" />
            </div>

            <div className="relative z-10 flex items-center gap-4 sm:gap-6 flex-1 flex-wrap">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-blue-500/15 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <SiLinkedin className="text-blue-400 text-3xl sm:text-4xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-textMain mb-1">LinkedIn</h3>
                <p className="text-textMuted text-xs sm:text-sm">Professional Network</p>
              </div>
            </div>

            <div className="relative z-10">
              <a
                href="https://linkedin.com/in/syed-shurem-ali-5a55852a0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors"
              >
                <SiLinkedin /> <span className="hidden sm:inline">Connect</span>
              </a>
            </div>
          </div>

          {/* Resume Download - 2x1 with Sparkles */}
          <div className="lg:col-span-2 rounded-xl bg-primary/[0.07] border border-primary/20 p-4 sm:p-6 flex flex-col justify-center items-center text-center group relative overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/15 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
              <FaDownload className="text-primary text-2xl sm:text-3xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-textMain mb-2">Download Resume</h3>
            <p className="text-textMuted text-xs sm:text-sm mb-3 sm:mb-4">Get my full CV in PDF format</p>
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-background rounded-lg text-sm sm:text-base font-medium hover:bg-primaryHover transition-colors shadow-md shadow-primary/20"
            >
              <FaDownload /> <span className="hidden sm:inline">View CV</span>
              <span className="sm:hidden">CV</span>
            </button>

            <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
          </div>

          {/* Availability - 2x1 with Pulse Effect */}
          <div className="lg:col-span-2 rounded-xl bg-green-500/[0.07] border border-green-500/20 p-4 sm:p-6 flex items-center gap-4 sm:gap-6 relative overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-green-500/15 flex items-center justify-center">
                {/* Multiple Pulsing Dots */}
                <div className="relative">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute -inset-2 w-8 h-8 sm:w-10 sm:h-10 border-2 border-green-500 rounded-full animate-pulse opacity-30"></div>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-base sm:text-xl font-bold text-green-400 mb-1 sm:mb-2">Open for Projects</h3>
              <p className="text-textMuted text-xs sm:text-sm">
                Available for freelance &amp; contract work — idea to live URL.
              </p>
            </div>
            <a
              href="/contact"
              className="relative z-10 flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-green-700 transition-colors shadow-md shadow-green-600/20 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Hire Me</span>
              <span className="sm:hidden">Hire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, isVisible, delay, loading }: { stat: Stat; isVisible: boolean; delay: number; loading: boolean }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountUp(stat.value, 2000, shouldAnimate && !loading);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const Icon = stat.icon;

  return (
    <TiltCard className="rounded-xl h-full">
    <div className="rounded-xl bg-surface border border-border p-6 h-full flex flex-col justify-center items-center text-center group hover:-translate-y-1 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      <div className={`relative w-14 h-14 rounded-lg ${stat.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
        <Icon className={`${stat.iconText} text-2xl`} />
      </div>
      <div className={`relative text-4xl md:text-5xl font-bold font-heading ${stat.iconText} mb-1`}>
        {loading ? (
          <div className="h-12 w-20 bg-border rounded animate-pulse"></div>
        ) : stat.icon === FaClock ? (
          <ExperienceCounter />
        ) : stat.value % 1 !== 0 ? (
          <>{count.toFixed(1)}{stat.suffix}</>
        ) : (
          <>{Math.floor(count)}{stat.suffix}</>
        )}
      </div>
      <p className="relative text-textMuted text-sm">{stat.label}</p>
    </div>
    </TiltCard>
  );
}
