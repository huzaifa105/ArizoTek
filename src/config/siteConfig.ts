/**
 * ArizoTek Site Configuration
 *
 * Replace the editable placeholder values below with your live business details
 * and static form endpoint before deploying to production.
 */

export const LOGO_PATH = `${import.meta.env.BASE_URL}assets/aistudio/image_d534bb24.png`;

/**
 * Formspree Static Form Integration
 *
 * To activate the Contact Us form on GitHub Pages:
 * 1. Create a form at https://formspree.io/
 * 2. Paste your endpoint URL below, e.g. "https://formspree.io/f/your_form_id"
 *
 * Leave empty ("") while unconfigured. When empty, the form validates user input
 * and displays an honest configuration notice instead of faking submission.
 */
export const FORMSPREE_ENDPOINT = '';

export interface ContactInfoConfig {
  emailPlaceholder: string;
  emailNote: string;
  phonePlaceholder: string;
  phoneNote: string;
  locationPlaceholder: string;
  locationNote: string;
}

export const CONTACT_INFO: ContactInfoConfig = {
  emailPlaceholder: '[Your Business Email — e.g., hello@arizotek.example]',
  emailNote: 'Editable placeholder in src/config/siteConfig.ts',
  phonePlaceholder: '[Your Business Phone — e.g., +1 (000) 000-0000]',
  phoneNote: 'Editable placeholder in src/config/siteConfig.ts',
  locationPlaceholder: '[Your Business Location — e.g., Phoenix, AZ]',
  locationNote: 'Editable placeholder in src/config/siteConfig.ts',
};

export interface SocialLinkConfig {
  id: string;
  label: string;
  href: string;
  isConfigured: boolean;
}

export const SOCIAL_LINKS: SocialLinkConfig[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '',
    isConfigured: false,
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    href: '',
    isConfigured: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: '',
    isConfigured: false,
  },
];
