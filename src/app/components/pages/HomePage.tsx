import { useState, useEffect } from "react";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ScrollFade } from "../ScrollFade";
import { FadeUp } from "../FadeUp";

const P = "#3D1470";
const A = "#C9A227";

type Page = "home" | "about" | "menu" | "gallery" | "contact" | "privacy";

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const categories = [
  {
    name: "Plain & Decorated Cakes",
    description: "Custom cakes for every occasion — birthdays, weddings, anniversaries.",
    img: "https://images.unsplash.com/photo-1693059740560-21151639561f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    name: "Cupcakes",
    description: "Beautifully finished cupcakes with sprinkles, Oreo, gold pearls & more.",
    img: "https://images.unsplash.com/photo-1759524322924-2024f209a011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    name: "Small Chops",
    description: "A delicious assorted mix — perfect for parties and events.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    name: "Chin Chin & Meat Pie",
    description: "Crunchy chin chin and flaky, golden, flavor-packed meat pies.",
    img: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    name: "Food Trays",
    description: "Beautiful catering spreads for weddings, corporate events & gatherings.",
    img: "https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
];

const testimonials = [
  {
    quote: "It's so nice, I enjoyed it so much. The best I have tasted so far!",
    author: "Minaj Amal",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face&q=80",
  },
  {
    quote: "Everyone I gave the cake, I've been talking about how moist, fluffy and delicious it is... You really delivered, thank you.",
    author: "Satisfied Customer",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80",
  },
  {
    quote: "I just ate it and it's amazing, will definitely be getting more someday.",
    author: "Callmhe Deosky",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&q=80",
  },
  {
    quote: "It was so nice, frrrr! Absolutely love this bakery.",
    author: "Yazz",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&q=80",
  },
];

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };
  const prev = () => go((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => { setDir(1); setIdx((i) => (i + 1) % testimonials.length); };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="rounded-2xl overflow-hidden" style={{ minHeight: 280, background: "#F5F0FF", border: "1px solid rgba(201,162,39,0.18)" }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10"
          >
            <Quote size={28} className="mb-4" style={{ color: A, opacity: 0.7 }} />
            <p className="mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#1a1a2e", fontSize: "1rem", lineHeight: 1.8 }}>
              "{testimonials[idx].quote}"
            </p>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonials[idx].stars }).map((_, i) => (
                <Star key={i} size={14} fill={A} style={{ color: A }} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[idx].avatar}
                alt={testimonials[idx].author}
                className="w-10 h-10 rounded-full object-cover"
                style={{ border: `2px solid ${A}` }}
              />
              <p className="text-sm font-semibold" style={{ color: P, fontFamily: "Inter, sans-serif" }}>
                {testimonials[idx].author}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all cursor-pointer"
              style={{ width: i === idx ? 24 : 8, height: 8, background: i === idx ? A : "#a890d4" }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            style={{ background: P, color: "#fff" }}>
            <ChevronLeft size={16} />
          </button>
          <button onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            style={{ background: A, color: "#fff" }}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero — no scroll fade on hero, it's always visible on load */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638262697399-4d6991e21c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Luxury frosted cake on gold plate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(29,8,70,0.82) 0%, rgba(61,20,112,0.70) 50%, rgba(10,5,30,0.75) 100%)" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
            Premium Bakery · Ilorin, Nigeria
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Luxury in{" "}
            <span style={{ fontFamily: "'Dancing Script', cursive", color: A, fontSize: "1.15em" }}>Every Bite</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white/80 mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.125rem", lineHeight: 1.75 }}>
            Handcrafted cakes, pastries & treats for every celebration — freshly made, beautifully presented.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate("contact")}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
              style={{ background: A, color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", boxShadow: "0 8px 30px rgba(201,162,39,0.4)" }}>
              Order Now
            </button>
            <button onClick={() => navigate("menu")}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:bg-white hover:text-[#3D1470] cursor-pointer"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem" }}>
              View Menu
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
          <div className="w-px h-12 animate-pulse" style={{ background: A }} />
        </div>
      </section>

      {/* Intro Strip */}
      <ScrollFade style={{ background: P }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: A }} />
          <p className="text-white/90 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.125rem", lineHeight: 1.85 }}>
            Feeyah's Signature Bite is a bakery brand passionate about creating delicious cakes, pastries, and treats for all occasions.
            Every order is freshly made and beautifully presented — because your special moments deserve to taste as amazing as they look.
          </p>
          <div className="w-16 h-0.5 mx-auto mt-8" style={{ background: A }} />
        </div>
      </ScrollFade>

      {/* Featured Categories */}
      <ScrollFade className="py-24 px-4" style={{ background: "#FDF9F3" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: A, fontFamily: "Inter, sans-serif" }}>What We Offer</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "2.5rem", fontWeight: 700 }}>Our Specialties</h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((cat, i) => (
              <FadeUp key={cat.name} delay={i * 0.1}>
                <CategoryCard {...cat} onClick={() => navigate("menu")} />
              </FadeUp>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
            {categories.slice(3).map((cat, i) => (
              <FadeUp key={cat.name} delay={i * 0.1}>
                <CategoryCard {...cat} onClick={() => navigate("menu")} />
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate("menu")}
              className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3 cursor-pointer"
              style={{ color: P, fontFamily: "Inter, sans-serif" }}>
              See Full Menu <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </ScrollFade>

      {/* Testimonials */}
      <ScrollFade className="py-24 px-4" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: A, fontFamily: "Inter, sans-serif" }}>Happy Customers</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "2.5rem", fontWeight: 700 }}>What They're Saying</h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <TestimonialSlider />
          </FadeUp>
        </div>
      </ScrollFade>

      {/* Closing CTA */}
      <ScrollFade className="py-24 px-4 text-center relative overflow-hidden" style={{ background: P }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #C9A227 0%, transparent 60%), radial-gradient(circle at 80% 50%, #C9A227 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700 }}>
            Ready to make your moment <span style={{ color: A }}>sweeter?</span>
          </h2>
          <p className="text-white/75 mb-10" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem" }}>
            Every order is lovingly crafted fresh just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate("contact")}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              style={{ background: A, color: "#fff", fontFamily: "Inter, sans-serif", boxShadow: "0 8px 30px rgba(201,162,39,0.35)" }}>
              Order Now
            </button>
            <button onClick={() => navigate("contact")}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:bg-white/10 cursor-pointer"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}>
              Contact Us
            </button>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
}

function CategoryCard({ name, description, img, onClick }: { name: string; description: string; img: string; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="group rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer block w-full"
      style={{ boxShadow: "0 4px 24px rgba(61,20,112,0.1)" }}>
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(61,20,112,0.6) 0%, transparent 60%)" }} />
      </div>
      <div className="p-6 bg-white">
        <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.125rem", fontWeight: 600 }}>{name}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#6b5c8a", fontFamily: "Inter, sans-serif" }}>{description}</p>
        <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
          View Details <ChevronRight size={14} />
        </div>
      </div>
    </button>
  );
}
