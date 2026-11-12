import Image from "next/image";

const treatments = [
  {
    badge: "Aesthetic Perfection",
    icon: "auto_awesome",
    image: "/images/cosmetic-veneers.jpg",
    imageAlt: "Cosmetic Dentistry Veneers",
    title: "Cosmetic Dentistry",
    description:
      "Digital Smile Design, hand-layered porcelain veneers, and microscopic enamel contouring formulated to harmonize naturally with facial contours.",
  },
  {
    badge: "Discreet Orthodontics",
    icon: "dentistry",
    image: "/images/aligners.jpg",
    imageAlt: "Clear orthodontic aligners",
    title: "Invisible Aligners",
    description:
      "Next-generation clear aligner therapy, zero-discomfort digital planning, and real-time 3D intraoral simulation for uncompromised alignment.",
  },
  {
    badge: "Permanent Restoration",
    icon: "precision_manufacturing",
    image: "/images/implants.jpg",
    imageAlt: "Titanium implant fixture and restorative ceramic crown",
    title: "Painless Implants",
    description:
      "Computer-guided titanium and zirconia implants with same-day restoration protocols, offering lifelong stability and native bite sensation.",
    extraClass: "md:col-span-2 lg:col-span-1",
  },
];

export default function Treatments() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface" id="treatments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] uppercase text-primary">
            Our Clinical Focus
          </p>
          <h2 className="font-serif text-[28px] leading-[36px] tracking-[-0.01em] sm:text-3xl lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.015em] text-on-surface">
            The Artistry Approach
          </h2>
          <p className="font-sans text-[15px] leading-[24px] text-on-surface-variant max-w-xl mx-auto">
            Bespoke oral therapies executed through minimally invasive techniques, biomimetic
            materials, and meticulous precision.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatments.map((t) => (
            <div
              key={t.title}
              className={`bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-6 sm:p-8 flex flex-col justify-between sanctuary-card-shadow hover:border-primary/40 transition-all duration-300 group ${
                t.extraClass ?? ""
              }`}
            >
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] uppercase border border-primary/10">
                    {t.badge}
                  </span>
                  <span className="material-symbols-outlined text-primary text-[28px] group-hover:rotate-6 transition-transform duration-300">
                    {t.icon}
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 bg-surface-container">
                  <Image
                    alt={t.imageAlt}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    src={t.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-[22px] leading-[30px] font-medium text-on-surface mb-2">
                    {t.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-[24px] text-on-surface-variant">
                    {t.description}
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/15">
                <a
                  className="inline-flex items-center gap-1.5 min-h-[44px] font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] text-primary group-hover:translate-x-1 transition-transform duration-200"
                  href="#booking"
                >
                  <span>Explore Treatment</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
