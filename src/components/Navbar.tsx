import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LOGO_PATH } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
      isActive
        ? 'text-[#D66A25]'
        : 'text-[#402015] hover:text-[#D66A25]'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#E8E1DB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Original ArizoTek Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0 focus-visible:rounded-md"
          aria-label="ArizoTek Home"
        >
          <img
            src={LOGO_PATH}
            alt="ArizoTek — IT Automation for Small to Mid-Size Businesses"
            className="h-10 sm:h-11 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary Navigation"
        >
          <NavLink to="/" end className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>Home</span>
                <span
                  className={`mt-0.5 h-0.5 w-full rounded-full transition-opacity duration-150 ${
                    isActive ? 'bg-[#D66A25] opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </span>
            )}
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>Services</span>
                <span
                  className={`mt-0.5 h-0.5 w-full rounded-full transition-opacity duration-150 ${
                    isActive ? 'bg-[#D66A25] opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </span>
            )}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>Contact Us</span>
                <span
                  className={`mt-0.5 h-0.5 w-full rounded-full transition-opacity duration-150 ${
                    isActive ? 'bg-[#D66A25] opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </span>
            )}
          </NavLink>
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#D66A25] hover:bg-[#BF5919] text-white text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 shadow-xs"
          >
            Book a Consultation
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E8E1DB] text-[#402015] hover:bg-[#FAF8F6] transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-t border-[#E8E1DB] px-4 py-5 space-y-2"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#FAF8F6] text-[#D66A25]'
                    : 'text-[#402015] hover:bg-[#FAF8F6]'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#FAF8F6] text-[#D66A25]'
                    : 'text-[#402015] hover:bg-[#FAF8F6]'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#FAF8F6] text-[#D66A25]'
                    : 'text-[#402015] hover:bg-[#FAF8F6]'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="pt-3 border-t border-[#E8E1DB]">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#D66A25] hover:bg-[#BF5919] text-white text-sm font-semibold transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
