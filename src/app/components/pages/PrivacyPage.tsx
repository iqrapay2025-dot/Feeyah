import { ScrollFade } from "../ScrollFade";

const P = "#3D1470";
const A = "#C9A227";

type Page = "home" | "about" | "menu" | "gallery" | "contact" | "privacy";

interface PrivacyPageProps {
  setCurrentPage: (page: Page) => void;
}

export function PrivacyPage({ setCurrentPage }: PrivacyPageProps) {
  return (
    <div style={{ background: "#FDF9F3" }}>
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 text-center relative overflow-hidden" style={{ background: P }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 40% 60%, ${A} 0%, transparent 50%)` }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] mb-4" style={{ color: A, fontFamily: "Inter, sans-serif" }}>
            Legal
          </p>
          <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700 }}>
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-3 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Last updated: July 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <ScrollFade className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white p-10 sm:p-14 space-y-10" style={{ boxShadow: "0 8px 40px rgba(61,20,112,0.08)" }}>

            <Intro />

            <PolicySection title="1. Information We Collect">
              <p>When you place an order or contact us through our website, we may collect:</p>
              <ul>
                <li>Your <strong>full name</strong> and <strong>phone number</strong></li>
                <li>Your <strong>order details</strong> (items, quantity, preferred date, delivery preference)</li>
                <li>Any <strong>additional notes</strong> you provide (e.g. flavour preferences, event details)</li>
              </ul>
              <p>We do not collect payment information through this website. All payments are arranged directly with you.</p>
            </PolicySection>

            <PolicySection title="2. How We Use Your Information">
              <p>The information you provide is used solely to:</p>
              <ul>
                <li>Process and fulfil your bakery order</li>
                <li>Contact you to confirm order details, pricing, and delivery arrangements</li>
                <li>Send order updates via WhatsApp or phone</li>
              </ul>
              <p>We do not use your information for unsolicited marketing or share it with third parties for advertising.</p>
            </PolicySection>

            <PolicySection title="3. WhatsApp & Third-Party Services">
              <p>
                When you submit an order via our website, you are redirected to <strong>WhatsApp</strong> to complete the enquiry.
                WhatsApp is a third-party platform operated by Meta. Any communication that takes place on WhatsApp is subject to
                WhatsApp's own Privacy Policy. We encourage you to review it at{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                  style={{ color: P, textDecoration: "underline" }}>whatsapp.com/legal/privacy-policy</a>.
              </p>
            </PolicySection>

            <PolicySection title="4. Data Storage & Security">
              <p>
                We take reasonable steps to protect your personal information. Order details shared over WhatsApp are handled with care
                and only accessed by Feeyah's Signature Bites staff. We do not store your personal data in any external database.
              </p>
            </PolicySection>

            <PolicySection title="5. Sharing Your Information">
              <p>
                We will never sell, rent, or share your personal information with third parties for commercial purposes. Your details
                are only used internally to fulfil your order.
              </p>
            </PolicySection>

            <PolicySection title="6. Your Rights">
              <p>You have the right to:</p>
              <ul>
                <li>Request the deletion of any personal information we hold about you</li>
                <li>Ask how your data is being used</li>
                <li>Withdraw consent at any time by contacting us directly</li>
              </ul>
            </PolicySection>

            <PolicySection title="7. Cookies">
              <p>
                Our website does not currently use tracking cookies or analytics. We may update this in the future, and will notify
                users accordingly.
              </p>
            </PolicySection>

            <PolicySection title="8. Contact Us">
              <p>If you have any questions about this Privacy Policy, you can reach us at:</p>
              <ul>
                <li><strong>Email:</strong> muhammedrofiat09@gmail.com</li>
                <li><strong>Phone / WhatsApp:</strong> 0702 686 4771</li>
                <li><strong>Instagram:</strong>{" "}
                  <a href="https://instagram.com/feeyahs_signature_bite" target="_blank" rel="noopener noreferrer"
                    style={{ color: P, textDecoration: "underline" }}>@feeyahs_signature_bite</a>
                </li>
                <li><strong>Address:</strong> Asadam, Ilorin, Kwara State, Nigeria</li>
              </ul>
            </PolicySection>

            {/* Back button */}
            <div className="pt-4">
              <button onClick={() => setCurrentPage("contact")}
                className="px-6 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all hover:opacity-90"
                style={{ background: P, color: "#fff", fontFamily: "Inter, sans-serif" }}>
                ← Back to Contact
              </button>
            </div>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <p style={{ fontFamily: "Inter, sans-serif", color: "#4a4a6a", fontSize: "0.9375rem", lineHeight: 1.85 }}>
        At <strong style={{ color: P }}>Feeyah's Signature Bites</strong>, your privacy matters to us. This Privacy Policy explains
        what information we collect when you use our website, how we use it, and how we protect it. By using our website or submitting
        an order, you agree to the practices described here.
      </p>
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", color: P, fontSize: "1.2rem", fontWeight: 700 }}>
        {title}
      </h2>
      <div className="policy-section space-y-3"
        style={{ fontFamily: "Inter, sans-serif", color: "#4a4a6a", fontSize: "0.9375rem", lineHeight: 1.85 }}>
        {children}
      </div>
    </div>
  );
}
