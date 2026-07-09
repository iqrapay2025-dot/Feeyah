import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { MenuPage } from "./components/pages/MenuPage";
import { GalleryPage } from "./components/pages/GalleryPage";
import { ContactPage } from "./components/pages/ContactPage";
import { PrivacyPage } from "./components/pages/PrivacyPage";

export type Page = "home" | "about" | "menu" | "gallery" | "contact" | "privacy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":    return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":   return <AboutPage />;
      case "menu":    return <MenuPage setCurrentPage={setCurrentPage} />;
      case "gallery": return <GalleryPage />;
      case "contact": return <ContactPage setCurrentPage={setCurrentPage} />;
      case "privacy": return <PrivacyPage setCurrentPage={setCurrentPage} />;
      default:        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
      <FloatingButtons />
    </div>
  );
}
