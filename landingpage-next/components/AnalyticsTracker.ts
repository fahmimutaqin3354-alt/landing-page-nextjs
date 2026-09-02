// Analytics event logging utility (Frontend-ready tracking preparation)
export type AnalyticsEvent =
  | "event_navbar_demo_click"
  | "event_hero_demo_click"
  | "event_cta_bottom_demo_click"
  | "event_form_demo_submit"
  | "event_feature_card_click"
  | "event_contact_whatsapp_click"
  | "event_how_it_works_step_click"
  | "event_solution_tab_click";

export function trackEvent(
  eventName: AnalyticsEvent,
  metadata?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined") {
    // In production, forward to window.gtag, mixpanel, or datalayer
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Analytics Event] ${eventName}:`, metadata || {});
    }

    // Trigger custom event for external listeners
    window.dispatchEvent(
      new CustomEvent("cpc_analytics", {
        detail: { event: eventName, ...metadata, timestamp: new Date().toISOString() },
      })
    );
  }
}
