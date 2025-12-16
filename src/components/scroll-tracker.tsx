'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackSectionView } from '@/lib/analytics';

const SCROLL_THRESHOLDS = [25, 50, 75, 100];
const SECTION_IDS = ['tickets', 'lineup', 'location'];

export function ScrollTracker() {
  const trackedDepths = useRef<Set<number>>(new Set());
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((window.scrollY / scrollHeight) * 100);

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (scrollPercentage >= threshold && !trackedDepths.current.has(threshold)) {
          trackedDepths.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });

      SECTION_IDS.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && !trackedSections.current.has(sectionId)) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            trackedSections.current.add(sectionId);
            trackSectionView(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
