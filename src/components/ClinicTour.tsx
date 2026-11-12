import Image from "next/image";

const highlights = [
  {
    icon: "air",
    title: "Medical-Grade HEPA Air Purity",
    desc: "Continuous laminar positive air exchange ensuring zero clinical odor and maximum hygiene.",
  },
  {
    icon: "spa",
    title: "Zero-Anxiety Zen Lounge",
    desc: "Curated ambient acoustic soundscapes, ergonomic lounge seating, and artisanal herbal refreshments.",
  },
  {
    icon: "sanitizer",
    title: "Autoclave Class-B Sterilization",
    desc: "Hermetically sealed surgical cassettes tracked digitally to exceed global CDC disinfection protocols.",
  },
];

const gallery = [
  {
    src: "/images/reception.jpg",
    alt: "Modern aesthetic dental clinic reception lounge in Chandigarh",
    label: "Zen Reception & Patient Lounge",
    icon: "chair",
    tall: true,
  },
  {
    src: "/images/treatment-suite.jpg",
    alt: "State of the art treatment suite at Dental Artistry",
    label: "Treatment Suite 01",
    sub: "Ergonomic memory foam treatment chair",
  },
  {
    src: "/images/sterilization.jpg",
    alt: "Pristine modern sterilization bay with surgical instruments",
    label: "Sterilization Bay",
    sub: "Class-B multi-cycle vacuum autoclave",
  },
];

export default function ClinicTour() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface" id="clinic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:sticky lg:top-28">
            <div className="space-y-3">
              <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] uppercase text-primary">
                Architectural Sanctuary
              </p>
              <h2 className="font-serif text-[28px] leading-[36px] tracking-[-0.01em] sm:text-3xl lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.015em] text-on-surface">
                Experience State-of-the-Art Care
              </h2>
              <p className="font-sans text-[15px] leading-[24px] text-on-surface-variant">
                Step into a clinical environment intentionally conceived to eliminate anxiety. Inspired
                by Scandinavian warmth, organic fluted wood, soft natural sunlight, and hospital-grade
                air purification, your visit feels more like a private consultation retreat than a
                dental appointment.
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {highlights.map((h) => (
                <div key={h.icon} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">{h.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] leading-[20px] font-bold tracking-[0.02em] text-on-surface">
                      {h.title}
                    </h4>
                    <p className="font-sans text-[13px] leading-[20px] tracking-[0.01em] text-tertiary">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 min-h-[44px] text-primary font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] hover:underline"
                href="#booking"
              >
                <span>Schedule a Walkthrough</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right Gallery */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden sanctuary-card-shadow border border-outline-variant/20 bg-surface-container-low group w-full h-64 sm:h-80">
              <Image
                alt={gallery[0].alt}
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                src={gallery[0].src}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-outline-variant/30 flex items-center gap-2 z-10">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {gallery[0].icon}
                </span>
                <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface">
                  {gallery[0].label}
                </p>
              </div>
            </div>

            {/* Staggered Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gallery.slice(1).map((img) => (
                <div
                  key={img.label}
                  className="relative rounded-xl overflow-hidden sanctuary-card-shadow border border-outline-variant/20 bg-surface-container-low group w-full h-56 sm:h-64"
                >
                  <Image
                    alt={img.alt}
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    src={img.src}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-outline-variant/30 z-10">
                    <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface">
                      {img.label}
                    </p>
                    {img.sub && (
                      <p className="font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-tertiary">
                        {img.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
