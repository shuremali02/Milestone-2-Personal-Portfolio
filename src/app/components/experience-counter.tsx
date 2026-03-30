"use client";

import { useState, useEffect } from 'react';

export default function ExperienceCounter() {
  const [experience, setExperience] = useState(2.5);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        // Using fetch with proper headers to avoid rate limiting
        const response = await fetch('https://api.github.com/users/shuremali02', {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-App'
          }
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.created_at) {
          const createdDate = new Date(data.created_at);
          const now = new Date();
          // Calculate difference in years
          const diffTime = Math.abs(now.getTime() - createdDate.getTime());
          const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

          const roundedExp = parseFloat(diffYears.toFixed(1));
          setExperience(roundedExp);
          setIsCalculated(true);

          // Update the experience years in the hero section
          const expElement = document.getElementById('experience-years');
          if (expElement) {
            expElement.textContent = `${roundedExp}+`;
          }
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Keep showing the fallback value if API fails
      }
    };

    // Only fetch once on component mount
    fetchExperience();
  }, []);

  // Only show calculated value if we successfully fetched it, otherwise keep showing fallback
  return (
    <>{isCalculated ? experience.toFixed(1) : '2.5'}+</>
  );
}