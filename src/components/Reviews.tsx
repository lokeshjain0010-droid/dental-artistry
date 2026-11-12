const reviews = [
  {
    tag: "Braces Treatment",
    quote: "\u201cI highly recommend Dr Piyush for the high quality braces treatment.\u201d",
    initial: "V",
    name: "Verified Patient",
    source: "Google Review · Chandigarh",
  },
  {
    tag: "Clinic Hygiene",
    quote: "\u201cThe staff and equipment were well kept and extremely clean.\u201d",
    initial: "C",
    name: "Clinic Visitor",
    source: "Google Review · Sector 27D",
  },
  {
    tag: "Value & Materials",
    quote: "\u201cPrices are also reasonable accordingly with good material and brands.\u201d",
    initial: "R",
    name: "Dental Patient",
    source: "Google Review · Chandigarh",
    extraClass: "md:col-span-2 lg:col-span-1",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface border-t border-outline-variant/20" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] uppercase">
              <span className="material-symbols-outlined text-[16px] text-secondary fill-icon">
                grade
              </span>
              <span>Verified Patient Experience</span>
            </div>
            <h2 className="font-serif text-[28px] leading-[36px] tracking-[-0.01em] sm:text-3xl lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.015em] text-on-surface">
              What Our Patients Say on Google
            </h2>
            <p className="font-sans text-[15px] leading-[24px] text-on-surface-variant max-w-xl">
              Real reviews from patients treated by Dr. Piyush and our clinical team in Sector 27D,
              Chandigarh.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 sanctuary-card-shadow self-start md:self-auto">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-secondary">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined fill-icon text-[20px]">
                    star
                  </span>
                ))}
              </div>
              <span className="font-serif text-[22px] leading-[30px] font-bold text-on-surface mt-0.5">
                5.0 / 5.0
              </span>
            </div>
            <div className="border-l border-outline-variant/30 pl-4">
              <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface">
                Google Verified Rating
              </p>
              <p className="font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-tertiary">
                100% Recommended Practice
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r) => (
            <div
              key={r.initial}
              className={`bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-6 sm:p-8 flex flex-col justify-between sanctuary-card-shadow hover:border-primary/40 transition-all duration-300 ${
                r.extraClass ?? ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-secondary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="material-symbols-outlined fill-icon text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-primary bg-surface-container px-2 py-0.5 rounded">
                    {r.tag}
                  </span>
                </div>
                <p className="font-sans text-[15px] leading-[24px] text-on-surface italic">
                  {r.quote}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-outline-variant/15 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {r.initial}
                </div>
                <div>
                  <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface">
                    {r.name}
                  </p>
                  <p className="font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-tertiary">
                    {r.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
