import { useState, useEffect } from "react";
import { CheckCircle2, Heart, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FadeUp } from "../FadeUp";

const P = "#3D1470";
const A = "#C9A227";

const creations = [
  {
    title: "Decorated Cakes",
    desc: "Stunning custom cakes for birthdays, weddings, anniversaries — designed to match your theme and taste perfectly.",
    img: "https://images.unsplash.com/photo-1638262697399-4d6991e21c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    title: "Cupcakes",
    desc: "Beautifully finished cupcakes with sprinkles, Oreo, gold pearls and more — perfect for gifting and events.",
    img: "https://images.unsplash.com/photo-1759524322924-2024f209a011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    title: "Small Chops",
    desc: "A crowd-pleasing assorted mix of small bites — freshly made and perfect for parties and gatherings.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    title: "Chin Chin & Meat Pie",
    desc: "Crunchy, sweet chin chin and flaky golden meat pies — a Nigerian classic loved at every celebration.",
    img: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    title: "Food Trays",
    desc: "Elegant catering trays for weddings, corporate events and large gatherings — beautifully packaged and delivered.",
    img: "https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
];

function CreationsSlider() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % creations.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: dir * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -100 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 16px 48px rgba(61,20,112,0.15)" }}
          >
            <div className="h-72 md:h-96">
              <ImageWithFallback
                src={creations[idx].img}
                alt={creations[idx].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10 flex flex-col justify-center" style={{ background: "#fff" }}>
              <div className="w-10 h-0.5 mb-6" style={{ background: A }} />
              <h3 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.75rem", fontWeight: 700 }}>
                {creations[idx].title}
              </h3>
              <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6b5c8a", fontSize: "1rem", lineHeight: 1.8 }}>
                {creations[idx].desc}
              </p>
              <div className="mt-8 flex items-center gap-1">
                {creations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="rounded-full transition-all cursor-pointer"
                    style={{ width: i === idx ? 24 : 8, height: 8, background: i === idx ? A : "#a890d4" }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => go((idx - 1 + creations.length) % creations.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer z-10 transition-all hover:scale-110"
        style={{ background: "#fff", color: P, boxShadow: "0 4px 16px rgba(61,20,112,0.15)" }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => { setDir(1); setIdx((i) => (i + 1) % creations.length); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer z-10 transition-all hover:scale-110"
        style={{ background: "#fff", color: P, boxShadow: "0 4px 16px rgba(61,20,112,0.15)" }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 px-4 text-center relative overflow-hidden" style={{ background: P }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 30% 60%, ${A} 0%, transparent 50%)` }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            Baked with{" "}
            <span style={{ fontFamily: "'Dancing Script', cursive", color: A }}>Love & Passion</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/80" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            A brand born from passion, grown through trust.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="w-12 h-0.5 mb-8" style={{ background: A }} />
            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "2rem", fontWeight: 700 }}>Our Story</h2>
            <p className="mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4A3426", fontSize: "1rem", lineHeight: 1.85 }}>
              Feeyah's Signature Bite began with a simple love for baking and a desire to bring joy to every celebration — big or small. What started as a passion for creating beautiful, delicious cakes has grown into a bakery brand trusted for quality, creativity, and care in every order.
            </p>
            <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4A3426", fontSize: "1rem", lineHeight: 1.85 }}>
              We believe that every celebration deserves a centrepiece that's as beautiful as it is delicious. From the first sketch of a design to the final decoration on your cake, every step is carried out with intention and love.
            </p>
          </FadeUp>
          <FadeUp delay={0.15} className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1780586376653-27217f29c329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800"
              alt="Elegant tiered cake with floral decorations"
              className="w-full h-96 object-cover rounded-2xl"
              style={{ boxShadow: "0 20px 60px rgba(61,20,112,0.18)" }}
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden hidden lg:block" style={{ boxShadow: "0 8px 24px rgba(61,20,112,0.2)" }}>
              <ImageWithFallback src="https://images.unsplash.com/photo-1693059740560-21151639561f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300" alt="White gold cake" className="w-full h-full object-cover" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4" style={{ background: "#F0EBFF" }}>
        <FadeUp className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: A, fontFamily: "Inter, sans-serif" }}>Our Mission</p>
          <h2 className="mb-8" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "2rem", fontWeight: 700 }}>Making Every Moment Sweeter</h2>
          <p className="leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif", color: "#4A3426", fontSize: "1.0625rem", lineHeight: 1.85 }}>
            We are committed to quality, creativity, and customer satisfaction, ensuring every order is freshly made and beautifully presented. Our goal is simple: to make your special moments sweeter with treats that taste as amazing as they look.
          </p>
          <div className="w-16 h-0.5 mx-auto mt-8" style={{ background: A }} />
        </FadeUp>
      </section>

      {/* Our Creations — auto-slide image cards */}
      <section className="py-24 px-4" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: A, fontFamily: "Inter, sans-serif" }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "2rem", fontWeight: 700 }}>Our Creations</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <CreationsSlider />
          </FadeUp>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4" style={{ background: P }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: A, fontFamily: "Inter, sans-serif" }}>Why Choose Us</p>
            <h2 className="text-white mb-10" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}>Our Promise to You</h2>
            <ul className="flex flex-col gap-6">
              {[
                { text: "Freshly baked, made to order — every single time.", icon: <CheckCircle2 size={22} /> },
                { text: "Elegant, custom designs crafted to match your vision.", icon: <CheckCircle2 size={22} /> },
                { text: "Reliable delivery across Ilorin and surrounding areas.", icon: <Truck size={22} /> },
                { text: "Trusted by happy customers — our reviews speak for us.", icon: <Heart size={22} /> },
              ].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4">
                  <span style={{ color: A, marginTop: 2 }}>{item.icon}</span>
                  <p className="text-white/85" style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.65 }}>{item.text}</p>
                </motion.li>
              ))}
            </ul>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 italic" style={{ fontFamily: "'Dancing Script', cursive", color: A, fontSize: "1.375rem" }}>
              "Luxury in every bite — that's our promise."
            </motion.p>
          </FadeUp>
          <FadeUp delay={0.2} className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1525956570400-207225f50dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800"
              alt="Three assorted cakes display"
              className="w-full h-[480px] object-cover"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
