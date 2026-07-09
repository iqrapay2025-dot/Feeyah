import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FadeUp } from "../FadeUp";
import { X } from "lucide-react";

const P = "#3D1470";
const A = "#C9A227";

const allPhotos = [
  { src: "https://images.unsplash.com/photo-1638262697399-4d6991e21c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Frosted cake on gold plate", category: "cakes" },
  { src: "https://images.unsplash.com/photo-1641293281401-9e9de3430861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Three tiered white wedding cake with flowers", category: "cakes" },
  { src: "https://images.unsplash.com/photo-1693059740560-21151639561f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "White cake with gold decorations", category: "cakes" },
  { src: "https://images.unsplash.com/photo-1780586376653-27217f29c329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Elegant white tiered cake with floral decorations", category: "cakes" },
  { src: "https://images.unsplash.com/photo-1735547928546-2be7e5616a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Wedding cake with pink roses", category: "cakes" },
  { src: "https://images.unsplash.com/photo-1525956570400-207225f50dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Three assorted cakes display", category: "cakes" },
  { src: "https://images.unsplash.com/photo-1759524322924-2024f209a011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Chocolate cupcakes with frosting", category: "pastries" },
  { src: "https://images.unsplash.com/photo-1760401697752-ab723885ff27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Three-tiered cake decorated with flowers and leaves", category: "cakes" },
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Assorted small chops platter", category: "small-chops" },
  { src: "https://images.unsplash.com/photo-1672826979217-7156a305acf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Party pastries and snacks tray", category: "small-chops" },
  { src: "https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Food catering spread on table", category: "events" },
  { src: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Pastry bowl", category: "pastries" },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Cakes", value: "cakes" },
  { label: "Small Chops", value: "small-chops" },
  { label: "Pastries", value: "pastries" },
  { label: "Events", value: "events" },
];

// Infinite marquee row component
function MarqueeRow({ photos, reverse = false, speed = 35 }: { photos: typeof allPhotos; reverse?: boolean; speed?: number }) {
  const doubled = [...photos, ...photos];
  return (
    <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {doubled.map((photo, i) => (
          <div key={i} className="shrink-0 w-64 h-48 rounded-xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(61,20,112,0.12)" }}>
            <ImageWithFallback src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeTab === "all" ? allPhotos : allPhotos.filter((p) => p.category === activeTab);
  const row1 = allPhotos.filter((_, i) => i % 2 === 0);
  const row2 = allPhotos.filter((_, i) => i % 2 === 1);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 text-center relative overflow-hidden" style={{ background: P }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 50% 80%, ${A} 0%, transparent 50%)` }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
            Our Work
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            The <span style={{ fontFamily: "'Dancing Script', cursive", color: A }}>Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/75" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem" }}>
            A glimpse into our world of beautiful bakes.
          </motion.p>
        </div>
      </section>

      {/* Auto-scroll marquee */}
      <section className="py-10 overflow-hidden" style={{ background: "#F0EBFF" }}>
        <div className="flex flex-col gap-4">
          <MarqueeRow photos={row1} reverse={false} speed={32} />
          <MarqueeRow photos={row2} reverse={true} speed={38} />
        </div>
      </section>

      {/* Filterable grid */}
      <section className="py-16 px-4" style={{ background: "#F5F0FF" }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: A, fontFamily: "Inter, sans-serif" }}>Browse by Category</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.75rem", fontWeight: 700 }}>Explore the Collection</h2>
          </FadeUp>

          {/* Tabs */}
          <FadeUp className="flex flex-wrap gap-3 justify-center mb-10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer"
                style={{
                  background: activeTab === tab.value ? P : "#fff",
                  color: activeTab === tab.value ? "#fff" : "#6b5c8a",
                  border: activeTab === tab.value ? `2px solid ${P}` : "2px solid rgba(61,20,112,0.12)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {tab.label}
              </motion.button>
            ))}
          </FadeUp>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.button
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  style={{ height: 220 }}
                  onClick={() => setLightbox(photo.src)}
                >
                  <ImageWithFallback src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                    style={{ background: "linear-gradient(to top, rgba(61,20,112,0.85) 0%, transparent 60%)" }}>
                    <p className="text-white text-xs font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{photo.alt}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(10,5,30,0.95)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-2 rounded-full cursor-pointer"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              onClick={() => setLightbox(null)}
            >
              <X size={22} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
