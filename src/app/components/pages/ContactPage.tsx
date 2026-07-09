import { useState } from "react";
import { Send, CheckCircle2, ChevronLeft, ChevronRight, Star, Phone, Mail, Instagram, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ScrollFade } from "../ScrollFade";

const P = "#3D1470";
const A = "#C9A227";

const ITEM_OPTIONS = ["Cake", "Cupcakes", "Small Chops", "Chin Chin", "Meat Pie", "Food Tray", "Other"];

const testimonials = [
  {
    quote: "It's so nice, I enjoyed it so much. The best I have tasted so far!",
    author: "Minaj Amal",
    role: "Verified Customer",
  },
  {
    quote: "Everyone I gave the cake, I've been talking about how moist, fluffy and delicious it is... You really delivered, thank you.",
    author: "Satisfied Customer",
    role: "Verified Customer",
  },
  {
    quote: "I just ate it and it's amazing, will definitely be getting more someday.",
    author: "Callmhe Deosky",
    role: "Verified Customer",
  },
  {
    quote: "It was so nice, frrrr! Absolutely love this bakery.",
    author: "Yazz",
    role: "Verified Customer",
  },
];

const sideImages = [
  "https://images.unsplash.com/photo-1638262697399-4d6991e21c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
  "https://images.unsplash.com/photo-1641293281401-9e9de3430861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
  "https://images.unsplash.com/photo-1780586376653-27217f29c329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
  "https://images.unsplash.com/photo-1735547928546-2be7e5616a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
];

const inputBase: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  background: "#F5F0FF",
  border: "1.5px solid rgba(61,20,112,0.14)",
  borderRadius: "0.6rem",
  padding: "0.65rem 0.85rem",
  color: P,
  fontSize: "0.875rem",
  width: "100%",
  outline: "none",
};

type Page = "home" | "about" | "menu" | "gallery" | "contact" | "privacy";

interface ContactPageProps {
  setCurrentPage: (page: Page) => void;
}

export function ContactPage({ setCurrentPage }: ContactPageProps) {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", item: "",
    quantity: "", date: "", delivery: "", notes: "", agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [tIdx, setTIdx] = useState(0);

  const prevT = () => setTIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextT = () => setTIdx((i) => (i + 1) % testimonials.length);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*New Order from Feeyah's Website*\n\n` +
      `*Name:* ${form.firstName} ${form.lastName}\n*Phone:* ${form.phone}\n*Item:* ${form.item}\n` +
      `*Quantity/Size:* ${form.quantity}\n*Date Needed:* ${form.date}\n` +
      `*Delivery/Pickup:* ${form.delivery}\n*Notes:* ${form.notes || "None"}`
    );
    window.open(`https://wa.me/2347026864771?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#F5F0FF" }}>
      {/* Hero */}
      <section className="pt-32 pb-14 px-4 text-center relative overflow-hidden" style={{ background: P }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 60% 30%, ${A} 0%, transparent 50%)` }} />
        <div className="relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
            Reach Out
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700 }}>
            Place Your <span style={{ fontFamily: "'Dancing Script', cursive", color: A }}>Order</span>
          </motion.h1>
        </div>
      </section>

      {/* Card */}
      <ScrollFade className="py-14 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-[1fr_1fr]"
          style={{ boxShadow: "0 24px 80px rgba(61,20,112,0.18)" }}>

          {/* LEFT — Form */}
          <div className="bg-white px-8 sm:px-10 py-10 flex flex-col justify-center">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <CheckCircle2 size={56} className="mx-auto mb-4" style={{ color: A }} />
                <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.6rem", fontWeight: 700 }}>
                  Order Sent!
                </h2>
                <p className="mb-7" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem" }}>
                  Your order was sent to WhatsApp. We'll be in touch shortly!
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="px-7 py-3 rounded-full text-sm font-semibold cursor-pointer"
                  style={{ background: P, color: "#fff", fontFamily: "Inter, sans-serif" }}>
                  Place Another Order
                </button>
              </motion.div>
            ) : (
              <>
                {/* Brand mark */}
                <div className="flex items-center gap-2.5 mb-7">
                  <div className="w-5 h-5 rounded-full" style={{ background: P }} />
                  <span className="text-sm font-semibold" style={{ color: P, fontFamily: "Inter, sans-serif" }}>
                    Feeyah's Signature Bites
                  </span>
                </div>

                <h2 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.6rem", fontWeight: 700 }}>
                  We'd love to help
                </h2>
                <p className="mb-7" style={{ fontFamily: "Inter, sans-serif", color: "#6b5c8a", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  We're a premium bakery crafting beautiful, delicious treats. Fill in your details and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>First name</label>
                      <input name="firstName" type="text" required placeholder="First name" value={form.firstName} onChange={handleChange} style={inputBase} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Last name</label>
                      <input name="lastName" type="text" required placeholder="Last name" value={form.lastName} onChange={handleChange} style={inputBase} />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Phone number</label>
                    <input name="phone" type="tel" required placeholder="0802 000 0000" value={form.phone} onChange={handleChange} style={inputBase} />
                  </div>

                  {/* Item */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Item wanted</label>
                      <select name="item" required value={form.item} onChange={handleChange} style={{ ...inputBase, cursor: "pointer" }}>
                        <option value="">Select…</option>
                        {ITEM_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Quantity / Size</label>
                      <input name="quantity" type="text" placeholder="e.g. 2 kg, 50 pcs" value={form.quantity} onChange={handleChange} style={inputBase} />
                    </div>
                  </div>

                  {/* Date + Delivery */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Date needed</label>
                      <input name="date" type="date" required value={form.date} onChange={handleChange} style={inputBase} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Delivery or Pickup</label>
                      <select name="delivery" required value={form.delivery} onChange={handleChange} style={{ ...inputBase, cursor: "pointer" }}>
                        <option value="">Choose…</option>
                        <option value="Delivery">Delivery</option>
                        <option value="Pickup">Pickup</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>Message / Notes</label>
                    <textarea name="notes" rows={3} placeholder="Flavour, design, occasion details…" value={form.notes} onChange={handleChange}
                      style={{ ...inputBase, resize: "vertical" }} />
                  </div>

                  {/* Privacy */}
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" name="agree" required checked={form.agree} onChange={handleChange} className="mt-0.5 cursor-pointer" style={{ accentColor: P }} />
                    <span className="text-xs leading-relaxed" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>
                      You agree to our friendly{" "}
                      <button type="button" onClick={() => setCurrentPage("privacy")}
                        className="underline cursor-pointer" style={{ color: P, background: "none", border: "none", padding: 0, fontFamily: "Inter, sans-serif", fontSize: "inherit" }}>
                        privacy policy
                      </button>.
                    </span>
                  </label>

                  {/* Submit */}
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold cursor-pointer"
                    style={{ background: P, color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", boxShadow: `0 6px 22px rgba(61,20,112,0.28)` }}>
                    <Send size={16} />
                    Send Order via WhatsApp
                  </motion.button>
                </form>

                {/* Quick contact */}
                <div className="mt-7 pt-6 flex flex-wrap gap-4" style={{ borderTop: "1px solid rgba(61,20,112,0.09)" }}>
                  {[
                    { icon: <Phone size={13} />, text: "0702 686 4771", href: "tel:07026864771" },
                    { icon: <Mail size={13} />, text: "muhammedrofiat09@gmail.com", href: "mailto:muhammedrofiat09@gmail.com" },
                    { icon: <Instagram size={13} />, text: "@feeyahs_signature_bite", href: "https://instagram.com/feeyahs_signature_bite" },
                    { icon: <MapPin size={13} />, text: "Asadam, Ilorin" },
                  ].map((item) =>
                    item.href ? (
                      <a key={item.text} href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-1.5 text-xs hover:opacity-70 transition-opacity"
                        style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>
                        <span style={{ color: A }}>{item.icon}</span>{item.text}
                      </a>
                    ) : (
                      <span key={item.text} className="flex items-center gap-1.5 text-xs"
                        style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>
                        <span style={{ color: A }}>{item.icon}</span>{item.text}
                      </span>
                    )
                  )}
                </div>
              </>
            )}
          </div>

          {/* RIGHT — Image + Testimonial */}
          <div className="relative overflow-hidden hidden lg:block" style={{ minHeight: 620 }}>
            <AnimatePresence mode="wait">
              <motion.div key={tIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }} className="absolute inset-0">
                <ImageWithFallback
                  src={sideImages[tIdx % sideImages.length]}
                  alt="Feeyah's cake creation"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,5,50,0.95) 0%, rgba(20,5,50,0.4) 50%, rgba(20,5,50,0.05) 100%)" }} />

            {/* Testimonial at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill={A} style={{ color: A }} />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={tIdx}
                  initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  <p className="text-white/90 mb-5 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", lineHeight: 1.75 }}>
                    "{testimonials[tIdx].quote}"
                  </p>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    — {testimonials[tIdx].author}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
                    {testimonials[tIdx].role}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <div className="flex gap-3 mt-6">
                <button onClick={prevT}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/25"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <ChevronLeft size={18} />
                </button>
                <button onClick={nextT}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/25"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
}
