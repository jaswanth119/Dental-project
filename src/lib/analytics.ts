import { analytics } from './firebase';
import { logEvent, Analytics } from 'firebase/analytics';

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics !== null) {
    logEvent(analytics as Analytics, eventName, eventParams);
  }
};

// Predefined events
export const Events = {
  APPOINTMENT_BOOKED: 'appointment_booked',
  APPOINTMENT_FAILED: 'appointment_failed',
  SERVICE_VIEWED: 'service_viewed',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  PAGE_VIEW: 'page_view',
} as const;
