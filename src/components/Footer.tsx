import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, LOGO_PATH, SOCIAL_LINKS } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E8E1DB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus-visible:rounded-md" aria-label="ArizoTek Home">
              <img
                src={LOGO_PATH}
                alt="ArizoTek — IT Automation for Small to Mid-Size Businesses"
                className="h-11 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-sm text-[#626262] leading-relaxed max-w-sm">
              ArizoTek helps small and mid-sized businesses simplify daily operations
              through practical AI automation, connected workflows, and dependable
              IT solutions.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[#402015] mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#626262] hover:text-[#D66A25] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#626262] hover:text-[#D66A25] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#626262] hover:text-[#D66A25] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#626262] hover:text-[#D66A25] transition-colors"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-[#402015] mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-[#626262] hover:text-[#D66A25] transition-colors"
                  >
                    {service.servicePageTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders & Social Placeholders */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[#402015] mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-[#626262]">
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                  <span className="break-words">{CONTACT_INFO.emailPlaceholder}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                  <span>{CONTACT_INFO.phonePlaceholder}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                  <span>{CONTACT_INFO.locationPlaceholder}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#402015] mb-2.5">
                Social Channels
              </h4>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                {SOCIAL_LINKS.map((social) =>
                  social.isConfigured && social.href ? (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#402015] font-medium hover:text-[#D66A25] underline underline-offset-4 transition-colors"
                    >
                      {social.label}
                    </a>
                  ) : (
                    <span
                      key={social.id}
                      title="Configure this link in src/config/siteConfig.ts"
                      className="text-[#626262]/80 cursor-default"
                    >
                      {social.label} (Placeholder)
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#FAF8F6] border-t border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#626262]">
          <p>© 2026 ArizoTek. All Rights Reserved.</p>
          <p>IT Automation for Small to Mid-Size Businesses</p>
        </div>
      </div>
    </footer>
  );
};
