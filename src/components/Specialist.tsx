import Image from "next/image";

export default function Specialist() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 bg-surface-container-low border-y border-outline-variant/20"
      id="specialists"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 sanctuary-card-shadow overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Portrait */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] bg-surface-container flex items-center justify-center">
              <Image
                alt="Dr. Piyush - Clinical Director & Lead Orthodontist at Dental Artistry Chandigarh"
                className="object-cover object-top"
                src="/images/dr-piyush.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden text-white">
                <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] uppercase text-primary-fixed">
                  Clinical Director
                </p>
                <p className="font-serif text-[22px] leading-[30px] text-white font-medium">
                  Dr. Piyush
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 space-y-6 flex flex-col justify-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] uppercase">
                  <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                  <span>Clinical Director &amp; Lead Orthodontist</span>
                </div>
                <h2 className="font-serif text-[28px] leading-[36px] tracking-[-0.01em] sm:text-3xl lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.015em] text-on-surface">
                  Dr. Piyush
                </h2>
                <p className="font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] text-secondary">
                  Specialist in Braces, Clear Aligners &amp; Microscopic Restorative Dentistry
                </p>
              </div>

              <p className="font-sans text-[15px] leading-[24px] text-on-surface-variant">
                Widely commended across Chandigarh for exceptional orthodontic and braces treatments,
                Dr. Piyush pairs gentle precision with state-of-the-art dental technology. From modern
                ceramic braces and invisible aligners to complex microscopic endodontics, his philosophy
                centers on pristine hygiene, transparent care, and natural, enduring smile
                transformations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-lg bg-surface border border-outline-variant/20 space-y-1">
                  <div className="flex items-center gap-2 text-primary font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em]">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    <span>Acclaimed Braces Craft</span>
                  </div>
                  <p className="font-sans text-[13px] leading-[20px] tracking-[0.01em] text-tertiary">
                    Highly recommended by patients for gentle, high-precision orthodontic care.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-surface border border-outline-variant/20 space-y-1">
                  <div className="flex items-center gap-2 text-primary font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em]">
                    <span className="material-symbols-outlined text-[18px]">cleaning_services</span>
                    <span>Impeccable Sterilization</span>
                  </div>
                  <p className="font-sans text-[13px] leading-[20px] tracking-[0.01em] text-tertiary">
                    Recognized for extremely clean, well-kept equipment and premium materials.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  className="inline-flex items-center justify-center min-h-[48px] bg-primary hover:bg-primary-container text-on-primary px-7 py-3 rounded-lg font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] transition-colors duration-150"
                  href="#booking"
                >
                  Book Consultation with Dr. Piyush
                </a>
                <span className="font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-tertiary uppercase sm:max-w-[200px]">
                  House 3161, Sector 27D · Chandigarh · Open 24 Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
