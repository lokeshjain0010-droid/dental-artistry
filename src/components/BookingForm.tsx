"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export default function BookingForm() {
  const [toastVisible, setToastVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismissToast = useCallback(() => {
    setToastVisible(false);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const name = (form.elements.namedItem("patient-name") as HTMLInputElement)?.value?.trim();
      const phone = (form.elements.namedItem("patient-phone") as HTMLInputElement)?.value?.trim();
      if (!name || !phone) {
        alert("Please fill out your name and phone number.");
        return;
      }

      setSubmitting(true);
      setTimeout(() => {
        setToastVisible(true);
        formRef.current?.reset();
        setSubmitting(false);
        toastTimerRef.current = setTimeout(dismissToast, 5000);
      }, 400);
    },
    [dismissToast]
  );

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed top-6 right-6 z-50 max-w-sm w-[calc(100%-3rem)] bg-surface-container-lowest border border-primary/30 shadow-2xl rounded-xl p-4 flex items-start gap-3 transition-all duration-300 ${
          toastVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-[150%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
        </div>
        <div className="flex-1">
          <h4 className="font-sans text-[14px] leading-[20px] font-bold tracking-[0.02em] text-on-surface">
            Consultation Requested!
          </h4>
          <p className="font-sans text-[13px] leading-[20px] tracking-[0.01em] text-on-surface-variant mt-0.5">
            Thank you! Our coordinator will contact you shortly to confirm your time slot.
          </p>
        </div>
        <button
          aria-label="Dismiss notification"
          className="text-tertiary hover:text-on-surface p-1 rounded-md transition-colors"
          onClick={dismissToast}
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>

      {/* Booking Section */}
      <section className="py-14 sm:py-20 bg-surface-container-low border-t border-outline-variant/20" id="booking">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-surface-container-lowest p-6 sm:p-10 lg:p-12 rounded-2xl border border-outline-variant/30 sanctuary-card-shadow space-y-8">
            <div className="text-center space-y-2">
              <span className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-primary uppercase">
                Priority Reservation
              </span>
              <h3 className="font-serif text-2xl sm:text-[28px] sm:leading-[36px] sm:tracking-[-0.01em] text-on-surface">
                Request a Consultation with Our Specialists
              </h3>
              <p className="font-sans text-[15px] leading-[24px] text-on-surface-variant max-w-lg mx-auto">
                Our clinical coordinator will contact you within 2 hours to confirm your preferred
                time slot.
              </p>
            </div>

            <form
              ref={formRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface mb-1.5"
                  htmlFor="patient-name"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant/40 rounded-lg px-4 py-3 font-sans text-[15px] leading-[24px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  id="patient-name"
                  name="patient-name"
                  placeholder="e.g. Jasleen Kaur"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface mb-1.5"
                  htmlFor="patient-phone"
                >
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant/40 rounded-lg px-4 py-3 font-sans text-[15px] leading-[24px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  id="patient-phone"
                  name="patient-phone"
                  placeholder="+91 98XXX XXXXX"
                  required
                  type="tel"
                />
              </div>
              <div>
                <label
                  className="block font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface mb-1.5"
                  htmlFor="treatment-choice"
                >
                  Treatment of Interest
                </label>
                <select
                  className="w-full bg-surface border border-outline-variant/40 rounded-lg px-4 py-3 font-sans text-[15px] leading-[24px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                  id="treatment-choice"
                  name="treatment-choice"
                >
                  <option>Comprehensive Smile Makeover</option>
                  <option>Invisible Aligners / Orthodontics</option>
                  <option>Dental Implants &amp; Guided Surgery</option>
                  <option>Microscopic Root Canal Therapy</option>
                  <option>General Diagnostic Consultation</option>
                </select>
              </div>
              <div>
                <label
                  className="block font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface mb-1.5"
                  htmlFor="preferred-date"
                >
                  Preferred Date
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant/40 rounded-lg px-4 py-3 font-sans text-[15px] leading-[24px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                  id="preferred-date"
                  name="preferred-date"
                  type="date"
                />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button
                  className="w-full min-h-[48px] bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-lg font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] transition-colors duration-200 shadow-xs hover:shadow-md cursor-pointer disabled:opacity-60"
                  disabled={submitting}
                  type="submit"
                >
                  {submitting ? "Confirming..." : "Confirm Consultation Request"}
                </button>
                <p className="text-center font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-tertiary mt-3">
                  Confidential healthcare record · House 3161, Sector 27D, Chandigarh · Open 24
                  Hours · Hotline: 098767 54000
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
