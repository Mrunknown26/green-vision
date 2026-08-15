import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const STUDIO_PHONE = "+91 94845-25694";
export const STUDIO_PHONE_DIGITS = "919484525694";
export const STUDIO_EMAIL = "greenvisiondesignstudio@gmail.com";
export const STUDIO_LOCATIONS = "Rajkot / Surat, Gujarat, India";

/**
 * Builds a direct Gmail web compose link
 */
export function buildGmailUrl({ name, email, phone, service, budget, message }) {
  const subject = encodeURIComponent(`[Project Inquiry] ${service || "Design & Branding"} - ${name || "Client"}`);
  const bodyText = `Hi Green Vision Team,\n\nI would like to discuss a new design & branding project.\n\n` +
    `Client Name: ${name || "Not specified"}\n` +
    `Email: ${email || "Not specified"}\n` +
    `Phone / WhatsApp: ${phone || "Not specified"}\n` +
    `Service Required: ${service || "Branding & Design"}\n` +
    `Estimated Budget: ${budget || "To be discussed"}\n\n` +
    `Project Details & Scope:\n${message || "Looking for consultation and quote."}\n\n` +
    `Best regards,\n${name || "Client"}`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(STUDIO_EMAIL)}&su=${subject}&body=${encodeURIComponent(bodyText)}`;
}

/**
 * Builds a standard mailto: fallback URL
 */
export function buildMailtoUrl({ name, email, phone, service, budget, message }) {
  const subject = encodeURIComponent(`[Project Inquiry] ${service || "Design & Branding"} - ${name || "Client"}`);
  const bodyText = `Hi Green Vision Team,\n\nI would like to discuss a new design & branding project.\n\n` +
    `Client Name: ${name || "Not specified"}\n` +
    `Email: ${email || "Not specified"}\n` +
    `Phone / WhatsApp: ${phone || "Not specified"}\n` +
    `Service Required: ${service || "Branding & Design"}\n` +
    `Estimated Budget: ${budget || "To be discussed"}\n\n` +
    `Project Details & Scope:\n${message || "Looking for consultation and quote."}\n\n` +
    `Best regards,\n${name || "Client"}`;

  return `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

/**
 * Builds a direct WhatsApp chat URL with pre-filled message
 */
export function buildWhatsAppUrl(customMessage = "") {
  const defaultText = "Hi Green Vision Branding Studio! I'm interested in discussing a design & branding project.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${STUDIO_PHONE_DIGITS}?text=${text}`;
}
