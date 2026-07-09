import { MapPin, Phone, Mail, Instagram } from "lucide-react";

type Page = "home" | "about" | "menu" | "gallery" | "contact" | "privacy";

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#1a0d38", color: "#E5E0F0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: "#C9A227" }}>
              Feeyah's Signature Bites
            </h3>
            <p className="text-sm leading-relaxed opacity-70 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Luxury in Every Bite — Handcrafted cakes, pastries & treats for every celebration, freshly made and beautifully presented.
            </p>
            <a
              href="https://instagram.com/feeyahs_signature_bite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#C9A227]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Instagram size={16} />
              @feeyahs_signature_bite
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 opacity-50" style={{ fontFamily: "Inter, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {(
                [["Home", "home"], ["About Us", "about"], ["Menu", "menu"], ["Gallery", "gallery"], ["Contact", "contact"], ["Privacy Policy", "privacy"]] as [string, Page][]
              ).map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#C9A227] transition-all text-left cursor-pointer"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 opacity-50" style={{ fontFamily: "Inter, sans-serif" }}>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm opacity-70">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#C9A227" }} />
                <span style={{ fontFamily: "Inter, sans-serif" }}>Asadam, Ilorin, Kwara State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Phone size={16} className="shrink-0" style={{ color: "#C9A227" }} />
                <a href="tel:07026864771" className="hover:opacity-100 hover:text-[#C9A227] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  0702 686 4771
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Mail size={16} className="shrink-0" style={{ color: "#C9A227" }} />
                <a href="mailto:muhammedrofiat09@gmail.com" className="hover:opacity-100 hover:text-[#C9A227] transition-colors break-all" style={{ fontFamily: "Inter, sans-serif" }}>
                  muhammedrofiat09@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-40"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", fontFamily: "Inter, sans-serif" }}
        >
          <p>© {new Date().getFullYear()} Feeyah's Signature Bites. All rights reserved.</p>
          <p style={{ color: "#C9A227", opacity: 1 }}>Luxury in Every Bite</p>
        </div>
      </div>
    </footer>
  );
}
