"use client";

import { useState, useEffect, useRef } from "react";
import { FaClock, FaProjectDiagram, FaCode, FaTrophy, FaGithub, FaUsers, FaStar, FaDownload } from "react-icons/fa";
import { SiVercel, SiLinkedin } from "react-icons/si";
import ExperienceCounter from "./experience-counter";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  gradient: string;
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
      label: "Years Experience",
      color: "text-cyan-400",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: FaProjectDiagram,
      value: githubStats.projects,
      suffix: "+",
      label: "Projects",
      color: "text-purple-400",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaCode,
      value: githubStats.technologies,
      suffix: "+",
      label: "Technologies",
      color: "text-green-400",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaTrophy,
      value: githubStats.hackathons,
      suffix: "+",
      label: "Hackathons",
      color: "text-yellow-400",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div ref={ref} className="bg-background py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-5" />
      
      {/* Floating Particles */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Neon Effect */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/4 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-4 right-1/4 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3 neon-text">
            By The Numbers
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            A quick snapshot of my journey and achievements
          </p>
        </div>

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
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-4 sm:p-6 flex items-center gap-4 sm:gap-6 relative overflow-hidden group card-glow">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <FaGithub className="absolute -right-8 -bottom-8 text-8xl sm:text-9xl text-white float" />
            </div>

            {/* Data Stream Lines */}
            <div className="absolute top-0 left-1/4 w-1 h-24 data-stream opacity-30"></div>
            <div className="absolute top-0 right-1/4 w-1 h-24 data-stream opacity-30" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 flex items-center gap-4 sm:gap-6 flex-1 flex-wrap">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-700/50 flex items-center justify-center group-hover:scale-110 transition-transform ai-glow flex-shrink-0">
                <FaGithub className="text-white text-3xl sm:text-4xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 neon-text">GitHub</h3>
                <p className="text-gray-400 text-xs sm:text-sm">@shuremali02</p>
              </div>
            </div>

            <div className="relative z-10 flex gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {loading ? "-" : githubStats.projects}+
                </p>
                <p className="text-gray-400 text-xs">Repos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {loading ? "-" : githubStats.stars}+
                </p>
                <p className="text-gray-400 text-xs">Stars</p>
              </div>
            </div>
          </div>

          {/* Social Stats - 2x1 with AI Effects */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 p-4 sm:p-6 flex items-center gap-4 sm:gap-6 relative overflow-hidden group card-glow">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <SiLinkedin className="absolute -right-8 -bottom-8 text-8xl sm:text-9xl text-blue-400 float" />
            </div>

            {/* Data Stream Lines */}
            <div className="absolute top-0 left-1/3 w-1 h-24 data-stream opacity-30" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-0 right-1/3 w-1 h-24 data-stream opacity-30" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative z-10 flex items-center gap-4 sm:gap-6 flex-1 flex-wrap">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform ai-glow flex-shrink-0">
                <SiLinkedin className="text-blue-400 text-3xl sm:text-4xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-1 neon-text">LinkedIn</h3>
                <p className="text-blue-300/70 text-xs sm:text-sm">Professional Network</p>
              </div>
            </div>

            <div className="relative z-10">
              <a
                href="https://linkedin.com/in/syed-shurem-ali-5a55852a0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-full text-sm sm:text-base font-medium hover:bg-blue-600 transition-colors ai-glow"
              >
                <SiLinkedin /> <span className="hidden sm:inline">Connect</span>
              </a>
            </div>
          </div>

          {/* Resume Download - 2x1 with Sparkles */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primaryHover/20 border border-primary/30 p-4 sm:p-6 flex flex-col justify-center items-center text-center group card-glow relative overflow-hidden">
            {/* Floating Sparkles */}
            <div className="absolute top-4 left-4 sparkle" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-4 right-4 sparkle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-4 sparkle" style={{ animationDelay: '1s' }}></div>

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform ai-glow">
              <FaDownload className="text-primary text-2xl sm:text-3xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 neon-text">Download Resume</h3>
            <p className="text-textMuted text-xs sm:text-sm mb-3 sm:mb-4">Get my full CV in PDF format</p>
            <a
              href="https://drive.google.com/uc?export=download&id=1wi8TLqxmGrDWF0xYxoqccFE62MnFdv13"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-background rounded-full text-sm sm:text-base font-medium hover:bg-primaryHover transition-colors ai-glow"
            >
              <FaDownload /> <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </a>
          </div>

          {/* Availability - 2x1 with Pulse Effect */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 p-4 sm:p-6 flex items-center gap-4 sm:gap-6 card-glow relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 animate-pulse"></div>

            <div className="relative z-10 flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-500/20 flex items-center justify-center ai-glow">
                {/* Multiple Pulsing Dots */}
                <div className="relative">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute -inset-2 w-8 h-8 sm:w-10 sm:h-10 border-2 border-green-500 rounded-full animate-pulse opacity-30"></div>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-base sm:text-xl font-bold text-green-400 mb-1 sm:mb-2 neon-text">Available for Work</h3>
              <p className="text-textMuted text-xs sm:text-sm">
                Open to freelance projects and full-time opportunities.
              </p>
            </div>
            <a
              href="/contact"
              className="relative z-10 flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-full text-sm sm:text-base font-medium hover:bg-green-600 transition-colors ai-glow whitespace-nowrap"
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
    <div className="rounded-3xl bg-gradient-to-br from-surface to-surface/50 border border-border p-6 flex flex-col justify-center items-center text-center group hover:border-primary/50 transition-colors card-glow relative overflow-hidden">
  {/* Animated Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
  {/* Floating Sparkles */}
      <div className="absolute top-2 right-2 sparkle" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-2 left-2 sparkle" style={{ animationDelay: '0.5s' }}></div>
      
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ai-glow`}>
        <Icon className="text-white text-2xl" />
      </div>
      <div className="relative text-4xl md:text-5xl font-bold text-primary mb-1">
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
  );
}
