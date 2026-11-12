import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-14 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 text-primary text-xs sm:text-sm">
              <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0">
                location_on
              </span>
              <span className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] uppercase">
                House 3161, Sector 27D, Chandigarh · Open 24 Hours
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[36px] leading-[44px] tracking-[-0.01em] sm:text-4xl lg:text-[56px] lg:leading-[68px] lg:tracking-[-0.02em] text-on-surface">
              Where Science Meets the{" "}
              <span className="italic font-normal text-primary">Art of Your Smile.</span>
            </h1>

            {/* Subtext */}
            <p className="font-sans text-[15px] leading-[24px] sm:text-[18px] sm:leading-[28px] sm:tracking-[-0.01em] text-on-surface-variant max-w-2xl">
              Experience precision aesthetic, restorative, and advanced general dentistry in a calm,
              architectural sanctuary crafted for your ultimate comfort.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                className="inline-flex items-center justify-center min-h-[48px] bg-primary text-on-primary hover:bg-primary-container px-8 py-3.5 rounded-lg font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] transition-all duration-200 shadow-sm hover:shadow-md"
                href="#booking"
              >
                Book Consultation
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-transparent border border-outline-variant/60 hover:border-primary text-on-surface hover:text-primary px-7 py-3.5 rounded-lg font-sans text-[14px] leading-[20px] font-medium transition-all duration-200"
                href="#clinic"
              >
                <span>View Clinic</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Trust Stats */}
            <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center gap-y-3 gap-x-6 text-on-surface-variant font-sans text-[13px] leading-[20px] tracking-[0.01em]">
              <div className="flex items-center gap-2">
                <span className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined fill-icon text-[18px]">
                      star
                    </span>
                  ))}
                </span>
                <span className="font-semibold text-on-surface">4.9/5 Rating</span>
                <span className="text-tertiary">from 1,200+ Reviews</span>
              </div>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-outline" />
              <div className="flex items-center gap-1.5 font-medium text-primary">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>NABH Accredited Facility</span>
              </div>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden sanctuary-card-shadow border border-outline-variant/20 bg-surface-container-low group w-full h-80 sm:h-96 lg:h-[500px]">
              <Image
                alt="Architectural dental treatment suite at Dental Artistry Chandigarh"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                src="/images/hero.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              {/* Glassmorphism Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-surface/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
                </div>
                <div>
                  <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface">
                    3D Guided Implantology &amp; Digital Smile Design
                  </p>
                  <p className="font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-tertiary">
                    Sub-millimeter accuracy · Scandinavian ergonomic design
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Accent */}
            <div className="hidden sm:block absolute -top-4 -right-4 -z-10 w-full h-full rounded-2xl border border-secondary/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
