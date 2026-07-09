import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/photo_2026-07-09_08-01-33-removebg-preview-2.png";

type Page = "home" | "about" | "menu" | "gallery" | "contact";

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Menu", page: "menu" },
  { label: "Gallery", page: "gallery" },
  { label: "Contact", page: "contact" },
];

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ background: "#3D1470" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => navigate("home")} className="flex items-center gap-3 cursor-pointer">
            <img
              src={logoImg}
              alt="Feeyah's Signature Bites"
              className="h-14 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 pb-1 cursor-pointer ${
                  currentPage === page
                    ? "border-b-2"
                    : "opacity-70 hover:opacity-100"
                }`}
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: currentPage === page ? "#C9A227" : "#F5F0FF",
                  borderColor: currentPage === page ? "#C9A227" : "transparent",
                }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ background: "#C9A227", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              Order Now
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 cursor-pointer" style={{ color: "#F5F0FF" }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: "#1a0d38", borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className="text-left text-sm font-medium py-2 px-3 rounded-lg transition-all cursor-pointer"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: currentPage === page ? "#C9A227" : "rgba(251,245,238,0.75)",
                  background: currentPage === page ? "rgba(201,162,39,0.12)" : "transparent",
                }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white cursor-pointer"
              style={{ background: "#C9A227" }}
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
