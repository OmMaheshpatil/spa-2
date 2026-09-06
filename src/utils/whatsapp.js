import { SITE_CONFIG } from '../config/siteConfig';

/**
 * Returns pre-filled WhatsApp URL
 */
export const getWhatsAppLink = (customText = null) => {
  const number = SITE_CONFIG.whatsappNumber;
  const brand = SITE_CONFIG.businessName;

  let text = customText || `Hello ${brand}, I am visiting your website and would like to know more about your spa services, packages, and today's availability.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

/**
 * Opens WhatsApp link in new window
 */
export const openWhatsApp = (customText = null) => {
  window.open(getWhatsAppLink(customText), '_blank', 'noopener,noreferrer');
};

/**
 * Returns direct telephone URL
 */
export const getPhoneLink = () => {
  return `tel:${SITE_CONFIG.phone}`;
};
