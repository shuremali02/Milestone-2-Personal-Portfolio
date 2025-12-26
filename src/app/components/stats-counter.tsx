"use client";
import { useState, useEffect, useRef } from "react";
import { FaProjectDiagram, FaClock, FaCode, FaTrophy } from "react-icons/fa";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: FaClock, value: 2.5, suffix: "+", label: "Years Experience" },
  { icon: FaProjectDiagram, value: 15, suffix: "+", label: "Projects Completed" },
  { icon: FaCode, value: 14, suffix: "+", label: "Technologies" },
  { icon: FaTrophy, value: 5, suffix: "+", label: "Hackathons" },
];

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
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} className="bg-surface border-y border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, isVisible, delay }: { stat: Stat; isVisible: boolean; delay: number }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountUp(stat.value, 2000, shouldAnimate);

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
        {stat.value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
        <span className="text-primaryHover">{stat.suffix}</span>
      </div>
      <p className="text-textMuted text-sm">{stat.label}</p>
    </div>
  );
}
