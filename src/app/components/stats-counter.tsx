"use client";

import { useState, useEffect, useRef } from "react";
import { FaClock, FaProjectDiagram, FaCode, FaTrophy } from "react-icons/fa";
import ExperienceCounter from "./experience-counter";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
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

      // Easing function for smooth animation
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

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGithubStats] = useState({
    experience: 0,
    projects: 15,
    technologies: 14,
    hackathons: 5
  });
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGithubStats = async () => {
      try {
        // Fetch GitHub user data
        const response = await fetch('https://api.github.com/users/shuremali02');
        const data = await response.json();

        if (data.created_at) {
          const createdDate = new Date(data.created_at);
          const now = new Date();
          const diffTime = Math.abs(now.getTime() - createdDate.getTime());
          const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

          setGithubStats(prev => ({
            ...prev,
            experience: parseFloat(diffYears.toFixed(1))
          }));
        }

        // Fetch repositories count
        setGithubStats(prev => ({
          ...prev,
          projects: data.public_repos || 15
        }));
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback to default values if API fails
        setGithubStats({
          experience: 2.5,
          projects: 15,
          technologies: 14,
          hackathons: 5
        });
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
      label: "Years Experience"
    },
    {
      icon: FaProjectDiagram,
      value: githubStats.projects,
      suffix: "+",
      label: "Projects Completed"
    },
    {
      icon: FaCode,
      value: githubStats.technologies,
      suffix: "+",
      label: "Technologies"
    },
    {
      icon: FaTrophy,
      value: githubStats.hackathons,
      suffix: "+",
      label: "Hackathons"
    },
  ];

  return (
    <div ref={ref} className="bg-surface border-y border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
              loading={loading}
            />
          ))}
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
    <div className="text-center group">
      <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
        <Icon className="text-2xl text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {loading ? (
          <div className="h-8 w-16 bg-border rounded animate-pulse mx-auto"></div>
        ) : stat.icon === FaClock ? (
          <ExperienceCounter />
        ) : stat.value % 1 !== 0 ? (
          `${count.toFixed(1)}${stat.suffix}`
        ) : (
          `${Math.floor(count)}${stat.suffix}`
        )}
      </div>
      <p className="text-textMuted text-sm">{stat.label}</p>
    </div>
  );
}