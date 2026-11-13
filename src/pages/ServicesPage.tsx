import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { DesertHorizonBackdrop } from '../components/DesertHorizonBackdrop';
import { ServiceDetailVisual } from '../components/AutomationDiagram';
import { ServiceIcon } from '../components/ServiceIcon';

export const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* A. Page Hero */}
      <section className="relative bg-white border-b border-[#E8E1DB] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 relative z-10">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold text-[#D66A25]">Our Services</p>
            <h1 className="text-[clamp(2.1rem,3.8vw,3.25rem)] font-extrabold tracking-tight leading-[1.14] text-[#402015] [text-wrap:balance]">
              Intelligent Automation Solutions for Modern Businesses
            </h1>
            <p className="text-base md:text-lg text-[#626262] leading-relaxed">
              From AI-powered assistants to connected business workflows,
              ArizoTek helps businesses eliminate repetitive tasks and operate
              more efficiently.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 md:h-36 pointer-events-none">
          <DesertHorizonBackdrop variant="hero" className="w-full h-full" />
        </div>
      </section>

      {/* B. Detailed Services */}
      <section className="bg-[#FAF8F6] py-16 md:py-24 border-b border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 bg-white border border-[#E8E1DB] rounded-3xl p-6 sm:p-8 md:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text & Capabilities */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] flex items-center justify-center text-[#D66A25] shrink-0">
                        <ServiceIcon name={service.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold tabular-nums text-[#626262]">
                        {service.number} · Service Overview
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#402015]">
                      {service.servicePageTitle}
                    </h2>

                    <p className="text-base text-[#626262] leading-relaxed">
                      {service.introduction}
                    </p>

                    <div className="pt-2">
                      <h3 className="text-xs font-semibold tracking-wide text-[#402015] mb-3">
                        Key Capabilities
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-start gap-2.5 text-sm text-[#626262]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        to={`/contact?service=${encodeURIComponent(
                          service.dropdownOption
                        )}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#D66A25] hover:bg-[#BF5919] text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150 shadow-xs"
                      >
                        <span>Discuss This Solution</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Schematic Visual */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <ServiceDetailVisual serviceId={service.id} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* C. Our Approach */}
      <section className="bg-white py-16 md:py-20 border-b border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F6] border border-[#E8E1DB] rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#D66A25]">
                <Compass className="w-4 h-4" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#402015] [text-wrap:balance]">
                Requirements First. Practical Automation Second.
              </h2>
              <p className="text-base text-[#626262] leading-relaxed">
                Every business operates differently. Before recommending a tool
                or building an integration, ArizoTek takes the time to map how
                your team currently handles data, requests, and handoffs. We
                focus on understanding your business requirements first so the
                automation we implement fits cleanly into your daily operations
                without unnecessary complexity.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 bg-white border border-[#E8E1DB] rounded-2xl p-6">
              <p className="text-sm font-bold text-[#402015]">
                What Guides Every Build
              </p>
              <ul className="space-y-2.5 text-sm text-[#626262]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                  <span>Clear operational goals before selecting software</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                  <span>Compatibility with your existing tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                  <span>Maintainable workflows your team can trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* D. CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#402015] [text-wrap:balance]">
            Let’s Find the Right Automation Solution for Your Business.
          </h2>
          <p className="mt-4 text-base text-[#626262] max-w-xl mx-auto">
            Share the workflows or manual tasks taking up your team’s time, and
            we will help identify practical next steps.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D66A25] hover:bg-[#BF5919] text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150 shadow-xs"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
