import "./signatureCTA.css";
import { ArrowLeft } from "lucide-react";

export default function SignatureCTA() {
  return (
    <section className="signature-cta" dir="rtl">
      {/* صورة الخلفية */}
      <div className="signature-cta-background" />

      {/* طبقة التعتيم */}
      <div className="signature-cta-overlay" />

      {/* الموجة العلوية */}
      <svg
        className="signature-wave signature-wave-top"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0H1440V48C1260 105 1110 18 930 53C750 90 620 112 440 60C260 8 145 100 0 48V0Z" />
      </svg>

      {/* النص */}
      <div className="container-main signature-cta-content">
        <div className="signature-cta-text">
          <span className="font-arabic signature-cta-label">
            رواسي للعقارات
          </span>

          <h2 >
            من أرض الخليج...
            <span> تبدأ حكاية عنوانك.</span>
          </h2>

          <p className="font-arabic">
            وجهات استثنائية، وقيمة تدوم.
          </p>

          <a href="#contact" className="signature-cta-button font-arabic">
            اكتشف عالم رواسي
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>

      {/* الموجة السفلية */}
      <svg
        className="signature-wave signature-wave-bottom"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 65C170 10 300 105 480 65C660 25 790 5 970 58C1150 110 1280 18 1440 65V120H0Z" />
      </svg>
    </section>
  );
}