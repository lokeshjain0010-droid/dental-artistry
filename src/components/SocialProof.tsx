export default function SocialProof() {
  const stats = [
    { value: "10,000+", label: "Patients Trusted" },
    { value: "Advanced 3D", label: "Intraoral Scanning & CBCT" },
    { value: "Award-Winning", label: "Board-Certified Specialists" },
    { value: "Sector 27 D", label: "Chandigarh Prime Location" },
  ];

  return (
    <section className="border-y border-outline-variant/20 bg-surface-container-low/60 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 md:divide-x divide-outline-variant/30 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-2 sm:px-4 py-2 flex flex-col items-center justify-center ${
                i >= 2 ? "pt-4 sm:pt-2" : ""
              }`}
            >
              <span className="font-sans text-[14px] leading-[20px] font-bold tracking-[0.02em] sm:text-lg text-on-surface">
                {stat.value}
              </span>
              <span className="font-sans text-[13px] leading-[20px] tracking-[0.01em] text-tertiary">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
