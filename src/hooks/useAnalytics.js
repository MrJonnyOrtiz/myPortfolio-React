import { useEffect } from 'react';

export function useAnalytics(eventName) {
  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', eventName);
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, [eventName]); // re-run if eventName changes (though for homepage it won't)
}
