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
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title || document.title,
    });
  }
};

/**
 * Track generic analytics event
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
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
