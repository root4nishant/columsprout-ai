// src/lib/gtag.ts
export const GA_TRACKING_ID = "G-5TQ8QFNQB5"; // Replace with your GA4 Measurement ID

declare global {
    interface Window {
      gtag: (
        command: "config" | "event",
        trackingIdOrEventName: string,
        params?: Record<string, any>
      ) => void;
    }
  }
// Function to send pageviews
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to log events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
