import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FadeUp } from "../FadeUp";
import { MessageCircle } from "lucide-react";

type Page = "home" | "about" | "menu" | "gallery" | "contact";

interface MenuPageProps {
  setCurrentPage: (page: Page) => void;
}

const P = "#3D1470";
const A = "#C9A227";

function waLink(msg: string) {
  return `https://wa.me/2347026864771?text=${encodeURIComponent(msg)}`;
}

const menuCategories = [
  {
    id: "cakes",
    name: "Plain & Decorated Cakes",
    description: "Custom cakes for birthdays, weddings, anniversaries and more — designed to match your theme and taste.",
    img: "https://images.unsplash.com/photo-1638262697399-4d6991e21c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    items: [
      { name: "Birthday Cake", desc: "Custom flavours, designs, and sizes for your special day." },
      { name: "Wedding Cake", desc: "Multi-tiered, elegantly decorated for your big day." },
      { name: "Anniversary Cake", desc: "Romantic designs to celebrate your love story." },
      { name: "Occasion Cake", desc: "Graduation, baby shower, naming ceremonies & more." },
    ],
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Beautifully finished cupcakes in a variety of toppings — sprinkles, Oreo, gold pearls, and more.",
    img: "https://images.unsplash.com/photo-1759524322924-2024f209a011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    items: [
      { name: "Classic Cupcakes", desc: "Vanilla, chocolate, and red velvet options." },
      { name: "Oreo Cupcakes", desc: "Rich cream with crushed Oreo topping." },
      { name: "Gold Pearl Cupcakes", desc: "Elegant gold-decorated luxury finish." },
      { name: "Custom Cupcake Boxes", desc: "Perfect for gifting and events." },
    ],
  },
  {
    id: "small-chops",
    name: "Small Chops",
    description: "A delicious assorted mix perfect for parties and events — crowd-pleasing bites, freshly made.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    items: [
      { name: "Assorted Small Chops Tray", desc: "A curated mix of our best bites." },
      { name: "Small Chops Cups", desc: "Individual portions, perfect for guests." },
      { name: "Event Platter", desc: "Catering-ready large-quantity trays." },
    ],
  },
  {
    id: "chin-chin",
    name: "Chin Chin",
    description: "Crunchy, sweet, and a party favourite — made fresh in generous batches.",
    img: "https://images.unsplash.com/photo-1672826979217-7156a305acf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    items: [
      { name: "Classic Chin Chin", desc: "The traditional sweet, crunchy snack everyone loves." },
      { name: "Party Packs", desc: "Bagged and ready for gifting at events." },
    ],
  },
  {
    id: "meat-pie",
    name: "Meat Pie",
    description: "Flaky, golden, and packed with flavour — a crowd favourite at any gathering.",
    img: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    items: [
      { name: "Classic Meat Pie", desc: "Seasoned minced meat in a buttery pastry shell." },
      { name: "Bulk Orders", desc: "Perfect for events and corporate functions." },
    ],
  },
  {
    id: "food-trays",
    name: "Food Trays",
    description: "Perfect for weddings, corporate events, and large gatherings — beautiful assortments, delivered.",
    img: "https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    items: [
      { name: "Wedding Food Tray", desc: "Elegant arrangement for your reception guests." },
      { name: "Birthday Spread", desc: "Colourful assorted tray for parties." },
      { name: "Corporate Tray", desc: "Professional presentation for office events." },
    ],
  },
];

export function MenuPage({ setCurrentPage }: MenuPageProps) {
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 px-4 text-center relative overflow-hidden" style={{ background: P }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 70% 40%, ${A} 0%, transparent 50%)` }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
            Our Offerings
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            The <span style={{ fontFamily: "'Dancing Script', cursive", color: A }}>Menu</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/75" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem" }}>
            Every item freshly made and beautifully presented.
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 px-4" style={{ background: "#F5F0FF" }}>
        <div className="max-w-7xl mx-auto space-y-24">
          {menuCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={idx % 2 === 1 ? { direction: "rtl" } : {}}
            >
              <FadeUp delay={0} style={{ direction: "ltr" }}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 24 }}
                  className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(61,20,112,0.14)" }}>
                  <ImageWithFallback src={cat.img} alt={cat.name} className="w-full h-80 object-cover" />
                </motion.div>
              </FadeUp>

              <FadeUp delay={0.12} style={{ direction: "ltr" }}>
                <div className="w-10 h-0.5 mb-6" style={{ background: A }} />
                <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.75rem", fontWeight: 700 }}>
                  {cat.name}
                </h2>
                <p className="mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6b5c8a", fontSize: "0.9375rem" }}>
                  {cat.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4 pb-4"
                      style={{ borderBottom: "1px solid rgba(61,20,112,0.08)" }}>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold mb-1" style={{ fontFamily: "Inter, sans-serif", color: P, fontSize: "0.9375rem" }}>
                          {item.name}
                        </p>
                        <p className="text-sm" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>
                          {item.desc}
                        </p>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={waLink(`Hi! I'd like to inquire about *${item.name}* from Feeyah's Signature Bites. Could you please share pricing and availability?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full whitespace-nowrap cursor-pointer"
                        style={{ background: "#25D366", color: "#fff", fontFamily: "Inter, sans-serif" }}
                      >
                        <MessageCircle size={13} />
                        Inquire
                      </motion.a>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={waLink(`Hi! I'd like to place an order for *${cat.name}* from Feeyah's Signature Bites. Please let me know pricing and availability. Thank you!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm cursor-pointer"
                  style={{ background: A, color: "#fff", fontFamily: "Inter, sans-serif" }}
                >
                  <MessageCircle size={16} />
                  Order This on WhatsApp
                </motion.a>
              </FadeUp>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <FadeUp>
        <section className="py-16 px-4 text-center" style={{ background: "#F0EBFF" }}>
          <div className="max-w-xl mx-auto">
            <p className="mb-2 text-sm" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Can't find what you're looking for?</p>
            <h3 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.5rem", fontWeight: 700 }}>
              We take custom orders!
            </h3>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("contact")}
              className="px-8 py-4 rounded-full font-semibold cursor-pointer"
              style={{ background: P, color: "#fff", fontFamily: "Inter, sans-serif" }}>
              Get In Touch
            </motion.button>
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
