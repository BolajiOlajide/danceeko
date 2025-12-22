export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackTicketClick = (tierName: string) => {
  trackEvent('click', 'ticket_purchase', tierName);
};

export const trackGetTicketsClick = (location: string) => {
  trackEvent('click', 'get_tickets', location);
};

export const trackWatchVideoClick = () => {
  trackEvent('click', 'watch_video', 'dance_eko_2024');
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', 'engagement', sectionName);
};

export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};

export const trackIdleTime = (seconds: number) => {
  trackEvent('idle_time', 'engagement', `${seconds}s`, seconds);
};

export const trackExitIntent = () => {
  trackEvent('exit_intent', 'engagement', 'mouse_leave');
};

export const trackArtistHover = (artistName: string) => {
  trackEvent('artist_hover', 'engagement', artistName);
};

export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', 'conversion', platform);
};

export const trackCtaVisibility = (ctaName: string) => {
  trackEvent('cta_visible', 'engagement', ctaName);
};

export const trackSectionTime = (sectionName: string, seconds: number) => {
  trackEvent('section_time', 'engagement', sectionName, seconds);
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', 'conversion', formName, success ? 1 : 0);
};

export const trackFormError = (formName: string, errorMessage: string) => {
  trackEvent('form_error', 'engagement', `${formName}: ${errorMessage}`);
};

export const trackFormView = (formName: string) => {
  trackEvent('view_form', 'engagement', formName);
};

export const trackAnotherRegistration = (formName: string) => {
  trackEvent('click', 'engagement', `register_another_${formName}`);
};
