/** Waitlist, Typeform, Stripe checkout, or mailto — set in `.env` as VITE_WAITLIST_URL */
export const JOIN_HREF =
  (import.meta.env.VITE_WAITLIST_URL || "").trim() || "#join";

export function joinLinkProps() {
  const href = JOIN_HREF;
  const isHttp = /^https?:\/\//i.test(href);
  return {
    href,
    ...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };
}
