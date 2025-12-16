'use client';

import { useEffect, useRef } from 'react';
import {
  trackIdleTime,
  trackExitIntent,
  trackCtaVisibility,
  trackSectionTime,
} from '@/lib/analytics';

const IDLE_INTERVALS = [30, 60, 120, 300];
const CTA_SELECTORS = ['#tickets', '[href*="jetronticket"]'];
const SECTION_IDS = ['tickets', 'lineup', 'location'];

export function EngagementTracker() {
  const startTime = useRef(Date.now());
  const trackedIdleTimes = useRef<Set<number>>(new Set());
  const exitIntentTracked = useRef(false);
  const trackedCtas = useRef<Set<string>>(new Set());
  const sectionEntryTimes = useRef<Map<string, number>>(new Map());
  const sectionTimesTracked = useRef<Set<string>>(new Set());

  useEffect(() => {
    const idleTimer = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);
      
      IDLE_INTERVALS.forEach((threshold) => {
        if (elapsedSeconds >= threshold && !trackedIdleTimes.current.has(threshold)) {
          trackedIdleTimes.current.add(threshold);
          trackIdleTime(threshold);
        }
      });
    }, 5000);

    return () => clearInterval(idleTimer);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTracked.current) {
        exitIntentTracked.current = true;
        trackExitIntent();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id || entry.target.getAttribute('href') || 'unknown';
        
        if (entry.isIntersecting && !trackedCtas.current.has(id)) {
          trackedCtas.current.add(id);
          trackCtaVisibility(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    CTA_SELECTORS.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        
        if (entry.isIntersecting) {
          if (!sectionEntryTimes.current.has(sectionId)) {
            sectionEntryTimes.current.set(sectionId, Date.now());
          }
        } else {
          const entryTime = sectionEntryTimes.current.get(sectionId);
          if (entryTime && !sectionTimesTracked.current.has(sectionId)) {
            const timeSpent = Math.floor((Date.now() - entryTime) / 1000);
            if (timeSpent >= 3) {
              sectionTimesTracked.current.add(sectionId);
              trackSectionTime(sectionId, timeSpent);
            }
          }
          sectionEntryTimes.current.delete(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const handleBeforeUnload = () => {
      sectionEntryTimes.current.forEach((entryTime, sectionId) => {
        if (!sectionTimesTracked.current.has(sectionId)) {
          const timeSpent = Math.floor((Date.now() - entryTime) / 1000);
          if (timeSpent >= 3) {
            trackSectionTime(sectionId, timeSpent);
          }
        }
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      observer.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}
