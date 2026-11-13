import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { CONTACT_INFO, FORMSPREE_ENDPOINT } from '../config/siteConfig';
import { CONTACT_SERVICE_OPTIONS } from '../data/servicesData';
import { DesertHorizonBackdrop } from '../components/DesertHorizonBackdrop';

interface FormValues {
  fullName: string;
  businessEmail: string;
  companyName: string;
  serviceOfInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  serviceOfInterest?: string;
  message?: string;
}

type SubmissionStatus =
  | { type: 'idle' }
  | { type: 'submitting' }
  | { type: 'success'; message: string }
  | { type: 'unconfigured'; message: string }
  | { type: 'error'; message: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') ?? '';

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    serviceOfInterest: CONTACT_SERVICE_OPTIONS.includes(
      preselectedService as (typeof CONTACT_SERVICE_OPTIONS)[number]
    )
      ? preselectedService
      : 'AI Automation',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>({ type: 'idle' });

  useEffect(() => {
    if (
      preselectedService &&
      CONTACT_SERVICE_OPTIONS.includes(
        preselectedService as (typeof CONTACT_SERVICE_OPTIONS)[number]
      )
    ) {
      setValues((prev) => ({
        ...prev,
        serviceOfInterest: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!values.businessEmail.trim()) {
      nextErrors.businessEmail = 'Please enter your business email address.';
    } else if (!EMAIL_REGEX.test(values.businessEmail.trim())) {
      nextErrors.businessEmail =
        'Please enter a valid email address (for example, name@company.com).';
    }

    if (!values.serviceOfInterest.trim()) {
      nextErrors.serviceOfInterest = 'Please select a service of interest.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please tell us briefly about your project or workflow.';
    } else if (values.message.trim().length < 15) {
      nextErrors.message =
        'Please include at least 15 characters describing your automation needs.';
    }

    return nextErrors;
  };

  const handleFieldChange = (
    field: keyof FormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status.type !== 'idle' && status.type !== 'submitting') {
      setStatus({ type: 'idle' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus({ type: 'submitting' });

    const endpoint = FORMSPREE_ENDPOINT.trim();

    if (!endpoint) {
      setStatus({
        type: 'unconfigured',
        message:
          'Your inquiry passed validation, but this static site does not yet have a Formspree endpoint configured. To enable live submissions on GitHub Pages, add your Formspree URL to FORMSPREE_ENDPOINT in src/config/siteConfig.ts.',
      });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.businessEmail.trim(),
          companyName: values.companyName.trim() || 'Not provided',
          serviceOfInterest: values.serviceOfInterest,
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        let detail = 'Unable to send your inquiry right now. Please try again.';
        try {
          const data = await response.json();
          if (data?.errors && Array.isArray(data.errors) && data.errors[0]?.message) {
            detail = data.errors[0].message;
          }
        } catch {
          // Keep generic message
        }
        setStatus({ type: 'error', message: detail });
        return;
      }

      setStatus({
        type: 'success',
        message:
          'Thank you for reaching out. Your inquiry has been submitted and our team will review your details shortly.',
      });
      setValues({
        fullName: '',
        businessEmail: '',
        companyName: '',
        serviceOfInterest: 'AI Automation',
        message: '',
      });
    } catch {
      setStatus({
        type: 'error',
        message:
          'A network error occurred while submitting the form. Please check your connection and try again.',
      });
    }
  };

  return (
    <div>
      {/* A. Hero Section */}
      <section className="relative bg-white border-b border-[#E8E1DB] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-20 relative z-10">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold text-[#D66A25]">Contact Us</p>
            <h1 className="text-[clamp(2.1rem,3.8vw,3.25rem)] font-extrabold tracking-tight leading-[1.14] text-[#402015] [text-wrap:balance]">
              Let’s Talk About Your Automation Needs
            </h1>
            <p className="text-base md:text-lg text-[#626262] leading-relaxed">
              Have repetitive tasks or business processes you’d like to
              automate? Tell us about your challenges, and let’s explore how
              ArizoTek can help.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 md:h-36 pointer-events-none">
          <DesertHorizonBackdrop variant="hero" className="w-full h-full" />
        </div>
      </section>

      {/* B. Contact Info & C. Contact Form */}
      <section className="bg-[#FAF8F6] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* B. Contact Information Placeholders */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h2 className="text-xl font-bold text-[#402015]">
                  Direct Contact Details
                </h2>
                <p className="text-sm text-[#626262] mt-1.5 leading-relaxed">
                  Replace the editable placeholders below in{' '}
                  <code className="text-xs font-mono bg-white border border-[#E8E1DB] px-1.5 py-0.5 rounded">
                    src/config/siteConfig.ts
                  </code>{' '}
                  with your official business contact details before going live.
                </p>
              </div>

              <div className="bg-white border border-[#E8E1DB] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] flex items-center justify-center text-[#D66A25] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#402015]">
                    Email Address
                  </h3>
                  <p className="text-sm text-[#402015] font-medium mt-1 break-words">
                    {CONTACT_INFO.emailPlaceholder}
                  </p>
                  <p className="text-xs text-[#626262] mt-1">
                    {CONTACT_INFO.emailNote}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E8E1DB] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] flex items-center justify-center text-[#D66A25] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#402015]">
                    Phone Number
                  </h3>
                  <p className="text-sm text-[#402015] font-medium mt-1">
                    {CONTACT_INFO.phonePlaceholder}
                  </p>
                  <p className="text-xs text-[#626262] mt-1">
                    {CONTACT_INFO.phoneNote}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E8E1DB] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] flex items-center justify-center text-[#D66A25] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#402015]">
                    Business Location
                  </h3>
                  <p className="text-sm text-[#402015] font-medium mt-1">
                    {CONTACT_INFO.locationPlaceholder}
                  </p>
                  <p className="text-xs text-[#626262] mt-1">
                    {CONTACT_INFO.locationNote}
                  </p>
                </div>
              </div>
            </div>

            {/* C. Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E8E1DB] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_-20px_rgba(64,32,21,0.1)]">
                <div className="pb-6 border-b border-[#E8E1DB]">
                  <h2 className="text-2xl font-bold text-[#402015]">
                    Send an Inquiry
                  </h2>
                  <p className="text-sm text-[#626262] mt-1.5">
                    Fields marked with <span className="text-[#D66A25]">*</span>{' '}
                    are required.
                  </p>
                </div>

                {/* Endpoint Status Helper when Formspree is not yet configured */}
                {!FORMSPREE_ENDPOINT.trim() && status.type === 'idle' && (
                  <div className="mt-6 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] p-4 flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
                    <p className="text-xs text-[#626262] leading-relaxed">
                      <span className="font-semibold text-[#402015]">
                        Static Form Ready for Connection:
                      </span>{' '}
                      Configure{' '}
                      <code className="font-mono bg-white px-1 py-0.5 rounded border border-[#E8E1DB]">
                        FORMSPREE_ENDPOINT
                      </code>{' '}
                      in{' '}
                      <code className="font-mono bg-white px-1 py-0.5 rounded border border-[#E8E1DB]">
                        src/config/siteConfig.ts
                      </code>{' '}
                      to route submissions on GitHub Pages.
                    </p>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-[#402015] mb-1.5"
                      >
                        Full Name <span className="text-[#D66A25]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.fullName}
                        onChange={(e) =>
                          handleFieldChange('fullName', e.target.value)
                        }
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? 'fullName-error' : undefined
                        }
                        placeholder="Jane Doe"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#402015] placeholder:text-[#626262]/60 bg-white transition-colors ${
                          errors.fullName
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#E8E1DB] focus:border-[#D66A25]'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="fullName-error"
                          className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label
                        htmlFor="businessEmail"
                        className="block text-sm font-semibold text-[#402015] mb-1.5"
                      >
                        Business Email <span className="text-[#D66A25]">*</span>
                      </label>
                      <input
                        id="businessEmail"
                        name="businessEmail"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.businessEmail}
                        onChange={(e) =>
                          handleFieldChange('businessEmail', e.target.value)
                        }
                        aria-invalid={Boolean(errors.businessEmail)}
                        aria-describedby={
                          errors.businessEmail
                            ? 'businessEmail-error'
                            : undefined
                        }
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#402015] placeholder:text-[#626262]/60 bg-white transition-colors ${
                          errors.businessEmail
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#E8E1DB] focus:border-[#D66A25]'
                        }`}
                      />
                      {errors.businessEmail && (
                        <p
                          id="businessEmail-error"
                          className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.businessEmail}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-semibold text-[#402015] mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={values.companyName}
                        onChange={(e) =>
                          handleFieldChange('companyName', e.target.value)
                        }
                        placeholder="Your Company LLC"
                        className="w-full px-4 py-3 rounded-lg border border-[#E8E1DB] focus:border-[#D66A25] text-sm text-[#402015] placeholder:text-[#626262]/60 bg-white transition-colors"
                      />
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <label
                        htmlFor="serviceOfInterest"
                        className="block text-sm font-semibold text-[#402015] mb-1.5"
                      >
                        Service of Interest{' '}
                        <span className="text-[#D66A25]">*</span>
                      </label>
                      <select
                        id="serviceOfInterest"
                        name="serviceOfInterest"
                        required
                        value={values.serviceOfInterest}
                        onChange={(e) =>
                          handleFieldChange('serviceOfInterest', e.target.value)
                        }
                        aria-invalid={Boolean(errors.serviceOfInterest)}
                        className="w-full px-4 py-3 rounded-lg border border-[#E8E1DB] focus:border-[#D66A25] text-sm text-[#402015] bg-white transition-colors"
                      >
                        {CONTACT_SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.serviceOfInterest && (
                        <p className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.serviceOfInterest}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Details / Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#402015] mb-1.5"
                    >
                      Project Details / Message{' '}
                      <span className="text-[#D66A25]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={(e) =>
                        handleFieldChange('message', e.target.value)
                      }
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'message-error' : undefined
                      }
                      placeholder="Describe the repetitive tasks, tools, or workflows you would like to automate..."
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#402015] placeholder:text-[#626262]/60 bg-white transition-colors resize-y ${
                        errors.message
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-[#E8E1DB] focus:border-[#D66A25]'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Feedback Banners */}
                  {status.type === 'success' && (
                    <div
                      role="status"
                      className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3 text-emerald-900"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold">Inquiry Submitted</p>
                        <p className="text-sm mt-0.5">{status.message}</p>
                      </div>
                    </div>
                  )}

                  {status.type === 'unconfigured' && (
                    <div
                      role="alert"
                      className="rounded-xl bg-[#FAF8F6] border border-[#E9A04A] p-4 flex items-start gap-3 text-[#402015]"
                    >
                      <Info className="w-5 h-5 text-[#D66A25] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold">
                          Form Endpoint Not Yet Configured
                        </p>
                        <p className="text-sm text-[#626262] mt-1 leading-relaxed">
                          {status.message}
                        </p>
                      </div>
                    </div>
                  )}

                  {status.type === 'error' && (
                    <div
                      role="alert"
                      className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-start gap-3 text-red-900"
                    >
                      <AlertCircle className="w-5 h-5 text-red-700 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold">Submission Failed</p>
                        <p className="text-sm mt-0.5">{status.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status.type === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D66A25] hover:bg-[#BF5919] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150 shadow-xs cursor-pointer"
                    >
                      {status.type === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
