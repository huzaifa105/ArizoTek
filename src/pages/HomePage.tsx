import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  HOW_WE_WORK_STEPS,
  SERVICES_DATA,
  WHY_CHOOSE_FEATURES,
} from '../data/servicesData';
import { DesertHorizonBackdrop } from '../components/DesertHorizonBackdrop';
import {
  AboutOperationsVisual,
  HeroWorkflowVisual,
} from '../components/AutomationDiagram';
import { FeatureIcon, ServiceIcon } from '../components/ServiceIcon';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* B. Hero Section */}
      <section className="relative bg-white overflow-hidden border-b border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm font-semibold text-[#D66A25]">
                IT Automation for Small to Mid-Size Businesses
              </p>
              <h1 className="text-[clamp(2.25rem,4vw,3.45rem)] font-extrabold tracking-tight leading-[1.12] text-[#402015] [text-wrap:balance]">
                Work Smarter. Automate Faster. Grow Without Limits.
              </h1>
              <p className="text-base md:text-lg text-[#626262] leading-relaxed max-w-xl">
                ArizoTek helps small and mid-sized businesses simplify operations
                through intelligent AI automation and custom IT solutions. We
                turn repetitive tasks into efficient automated workflows so you
                can focus on growing your business.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D66A25] hover:bg-[#BF5919] text-white text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 shadow-xs"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white hover:bg-[#FAF8F6] text-[#402015] border border-[#E8E1DB] hover:border-[#D66A25] text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150"
                >
                  Let’s Automate Your Business
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeroWorkflowVisual />
            </div>
          </div>
        </div>

        {/* Subtle geometric desert/mountain horizon anchored at bottom of hero */}
        <div className="absolute inset-x-0 bottom-0 h-36 md:h-48 pointer-events-none">
          <DesertHorizonBackdrop variant="hero" className="w-full h-full" />
        </div>
      </section>

      {/* C. Services Overview */}
      <section className="bg-[#FAF8F6] py-16 md:py-24 border-b border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#D66A25]">Core Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#402015] mt-2 [text-wrap:balance]">
              Automation Solutions That Move Your Business Forward
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-[#E8E1DB] rounded-2xl p-7 md:p-8 flex flex-col justify-between transition-all duration-150 hover:border-[#E9A04A] hover:shadow-[0_10px_30px_-15px_rgba(64,32,21,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] flex items-center justify-center text-[#D66A25]">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold tabular-nums text-[#626262]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#402015]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] text-[#626262] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E8E1DB]">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D66A25] hover:text-[#BF5919] transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* D. About Us Section */}
      <section className="bg-white py-16 md:py-24 border-b border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm font-semibold text-[#D66A25]">About ArizoTek</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#402015] [text-wrap:balance]">
                Helping Businesses Work Smarter Through Automation
              </h2>
              <p className="text-base text-[#626262] leading-relaxed">
                At ArizoTek, we believe technology should make business
                operations simpler, not more complicated. We help small and
                mid-sized businesses identify repetitive tasks, improve
                workflows, and implement practical automation solutions that
                save time and reduce manual effort.
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#402015] hover:text-[#D66A25] transition-colors"
                >
                  <span>See how our automation solutions work</span>
                  <ArrowRight className="w-4 h-4 text-[#D66A25]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AboutOperationsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* E. Why Choose ArizoTek */}
      <section className="bg-[#FAF8F6] py-16 md:py-24 border-b border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#D66A25]">
              Why Choose ArizoTek
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#402015] mt-2 [text-wrap:balance]">
              Built for Reliability, Clarity, and Everyday Operations
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-[#E8E1DB] rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] flex items-center justify-center text-[#D66A25] mb-5">
                  <FeatureIcon name={feature.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#402015]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#626262] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. How We Work */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#D66A25]">How We Work</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#402015] mt-2 [text-wrap:balance]">
              A Structured Four-Step Process From Audit to Rollout
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_WORK_STEPS.map((step, index) => (
              <div
                key={step.stepNumber}
                className="relative bg-[#FAF8F6] border border-[#E8E1DB] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-2xl font-extrabold tabular-nums text-[#D66A25]">
                      {step.stepNumber}
                    </span>
                    {index < HOW_WE_WORK_STEPS.length - 1 && (
                      <ArrowRight
                        className="hidden lg:block w-4 h-4 text-[#E9A04A]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#402015]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#626262] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mountain Divider into Final CTA */}
      <DesertHorizonBackdrop variant="divider" />

      {/* G. Final CTA Section */}
      <section className="bg-[#FAF8F6] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-[#E8E1DB] rounded-3xl px-6 py-12 sm:px-12 sm:py-16 shadow-[0_14px_40px_-20px_rgba(64,32,21,0.12)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#402015] [text-wrap:balance]">
              Ready to Simplify Your Business Operations?
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#626262] leading-relaxed max-w-2xl mx-auto">
              Let’s identify the repetitive tasks slowing your business down and
              turn them into smarter automated workflows.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D66A25] hover:bg-[#BF5919] text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150 shadow-xs"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
