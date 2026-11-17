/**
 * Google Analytics 4 (GA4) measurement utilities
 * Measurement ID: G-LC8JSPYPBH
 */

export const GA_MEASUREMENT_ID = 'G-LC8JSPYPBH';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track client-side pageviews on route change in Single Page App (SPA)
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined') {
    const currentTitle = title || document.title;
    const currentUrl = window.location.href;

    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
        page_title: currentTitle,
        page_location: currentUrl,
      });
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: currentTitle,
        page_location: currentUrl,
      });
    } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: path,
        page_title: currentTitle,
        page_location: currentUrl,
      });
    }
  }
};

/**
 * Track generic analytics event
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  }
};

/**
 * Track lead submission event (form submissions)
 */
export const trackLead = (formName: string, extraParams?: Record<string, any>) => {
  trackEvent('generate_lead', {
    form_name: formName,
    ...extraParams,
  });
};

/**
 * Track clicks to WhatsApp contact route
 */
export const trackWhatsAppClick = (sourceLocation: string) => {
  trackEvent('click_whatsapp', {
    event_category: 'contact',
    event_label: sourceLocation,
  });
};

/**
 * Track clicks to direct phone call route
 */
export const trackPhoneClick = (sourceLocation: string) => {
  trackEvent('click_phone', {
    event_category: 'contact',
    event_label: sourceLocation,
  });
};

/**
 * Track voice sample audio plays in Voice Directory & Calling Agent
 */
export const trackVoiceSamplePlay = (
  voiceName: string,
  extra?: { language?: string; category?: string; page?: string }
) => {
  trackEvent('voice_sample_play', {
    voice_name: voiceName,
    language: extra?.language || 'Unknown',
    category: extra?.category || 'General',
    page_location: extra?.page || (typeof window !== 'undefined' ? window.location.pathname : ''),
  });
};

/**
 * Track primary high-intent Call-To-Action (CTA) clicks
 */
export const trackCTA = (ctaName: string, destination?: string) => {
  trackEvent('click_cta', {
    cta_name: ctaName,
    destination: destination || '',
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

/**
 * Track resource downloads (PDF, Whitepaper, Ebook)
 */
export const trackDownload = (resourceName: string, resourceType: string = 'pdf') => {
  trackEvent('file_download', {
    file_name: resourceName,
    file_extension: resourceType,
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};
