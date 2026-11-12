import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 text-on-surface" id="contact">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-outline-variant/20">
          {/* Left: Logo & Social */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <Image
                alt="Dental Artistry Chandigarh"
                className="h-10 w-10 object-contain rounded-lg border border-outline-variant/30"
                src="/images/logo.png"
                width={40}
                height={40}
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="font-serif text-[22px] leading-[30px] font-medium text-on-surface">
                  Dental Artistry
                </span>
                <span className="font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-secondary">
                  Aesthetic &amp; Microscopic Dentistry
                </span>
              </div>
            </div>
            <p className="font-sans text-[15px] leading-[24px] text-on-surface-variant max-w-sm">
              Chandigarh&apos;s dedicated center for clinical artistry, digital smile design, and
              serene restorative treatment.
            </p>
            <div className="flex items-center space-x-3 text-primary">
              <a
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
              </a>
              <a
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
                href="https://wa.me/919876754000?text=Hello%20Dr.%20Piyush%20%26%20Dental%20Artistry%2C%20I%20would%20like%20to%20book%20an%20appointment"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          {/* Center: Hours */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-[22px] leading-[30px] font-medium text-on-surface">
              Clinic Hours
            </h4>
            <ul className="space-y-2.5 font-sans text-[15px] leading-[24px] text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/15 pb-2">
                <span>Schedule</span>
                <span className="font-semibold text-primary">Open 24 Hours</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/15 pb-2">
                <span>Monday – Sunday</span>
                <span className="font-medium text-on-surface">Round-the-clock</span>
              </li>
              <li className="flex items-center gap-2 pt-2 text-primary font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em]">
                <span className="material-symbols-outlined text-[18px]">emergency</span>
                <span>24/7 Dental Emergency &amp; Appointments</span>
              </li>
            </ul>
          </div>

          {/* Right: Address */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-[22px] leading-[30px] font-medium text-on-surface">
              Find Our Practice
            </h4>
            <div className="space-y-2 font-sans text-[15px] leading-[24px] text-on-surface-variant">
              <p className="flex items-start gap-2 font-semibold text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  pin_drop
                </span>
                <span>House 3161, Sector 27D, Sector 27, Chandigarh, 160019</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  call
                </span>
                <a className="hover:text-primary transition-colors" href="tel:+919876754000">
                  098767 54000
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  mail
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="mailto:care@dentalartistrychd.com"
                >
                  care@dentalartistrychd.com
                </a>
              </p>
            </div>
            <div className="p-3 bg-surface-container rounded-xl border border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">map</span>
                </div>
                <div className="leading-tight">
                  <p className="font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] text-on-surface">
                    House 3161, Sector 27D
                  </p>
                  <p className="font-sans text-[11px] leading-[14px] font-medium tracking-[0.08em] text-tertiary">
                    Easy parking · Open 24 Hours
                  </p>
                </div>
              </div>
              <a
                className="px-3 py-1.5 bg-surface border border-outline-variant/40 hover:border-primary text-primary rounded font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] transition-colors"
                href="https://maps.google.com/?q=House+3161+Sector+27D+Chandigarh"
                rel="noopener noreferrer"
                target="_blank"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[13px] leading-[20px] tracking-[0.01em] text-on-surface-variant">
          <p>&copy; {new Date().getFullYear()} Dental Artistry, Chandigarh. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["Treatments", "The Clinic", "Specialists", "Contact"].map((label) => (
              <a
                key={label}
                className="hover:text-primary transition-colors py-1"
                href={`#${label === "The Clinic" ? "clinic" : label.toLowerCase()}`}
              >
                {label}
              </a>
            ))}
            <a className="hover:text-primary transition-colors py-1" href="tel:+919876754000">
              Call 24/7
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
