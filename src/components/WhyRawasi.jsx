import { useEffect, useRef } from "react";
import { ShieldCheck, Mountain, Gem, Handshake } from "lucide-react";

import "./whyRawasi.css";

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "الثقة والشفافية",
    description:
      "نبني علاقاتنا على الوضوح والمصداقية، ونضع ثقة عملائنا في مقدمة أولوياتنا.",
  },
  {
    icon: Mountain,
    number: "02",
    title: "ثبات واستقرار",
    description:
      "نؤمن بأن الاستثمار العقاري الناجح يبدأ من قرارات مدروسة وأسس راسخة.",
  },
  {
    icon: Gem,
    number: "03",
    title: "جودة الاختيار",
    description:
      "ننتقي الفرص والعقارات بعناية لنقدم قيمة حقيقية تتجاوز التوقعات.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "شراكة مستدامة",
    description:
      "نرافق عملاءنا في رحلتهم العقارية بعلاقة قائمة على الاهتمام والاستمرارية.",
  },
];

/* ---------- Helpers ---------- */
const clamp01 = (v) => Math.min(1, Math.max(0, v));

// يحوّل قيمة من مجال [start, end] إلى [0, 1]
const range = (v, start, end) => clamp01((v - start) / (end - start));

// حركة ناعمة: بطيئة بالبداية والنهاية (مناسبة للشروق)
const smooth = (t) => t * t * (3 - 2 * t);

const MOBILE_QUERY = "(max-width: 900px)";

export default function WhyRawasi() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mobile = window.matchMedia(MOBILE_QUERY);
    let frameId = null;

    const apply = (sun, content, intro) => {
      section.style.setProperty("--sun", sun.toFixed(4));
      section.style.setProperty("--content", content.toFixed(4));
      section.style.setProperty("--intro", intro.toFixed(4));
    };

    const update = () => {
      frameId = null;

      // على الموبايل التصميم ثابت: الحالة النهائية مباشرة
      if (mobile.matches) {
        apply(1, 1, 0);
        return;
      }

      const scrollable = section.offsetHeight - window.innerHeight;

      if (scrollable <= 0) {
        apply(1, 1, 0);
        return;
      }

      const progress = clamp01(-section.getBoundingClientRect().top / scrollable);

      const sun = smooth(range(progress, 0.04, 0.5)); // الشروق
      const content = range(progress, 0.5, 0.88); // ظهور الكاردات
      const intro = 1 - range(progress, 0.04, 0.3); // اختفاء العنوان الكبير

      apply(sun, content, intro);
    };

    // نطلب frame واحد فقط لكل دورة رسم
    const onScroll = () => {
      if (frameId === null) frameId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mobile.addEventListener("change", onScroll);

    update();

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mobile.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="why-section"
      id="why-rawasi"
      dir="rtl"
      aria-labelledby="why-title"
    >
      <div className="why-sticky">
        {/* ضوء الفجر عند الأفق */}
        <div className="why-dawn" aria-hidden="true" />

        {/* الشمس + التوهج + الأشعة */}
        <div className="why-sunrise" aria-hidden="true">
          <div className="why-rays" />
          <div className="why-glow" />
          <div className="why-sun" />
        </div>

        {/* سلسلة الجبال */}
        <div className="why-ridge" aria-hidden="true">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              className="ridge-back"
              d="M0 320 V210 L120 150 L210 190 L340 90 L450 170 L560 120 L700 200 L820 110 L940 175 L1060 85 L1190 170 L1300 130 L1440 190 V320 Z"
            />
            <path
              className="ridge-front"
              d="M0 320 V260 L140 205 L260 250 L400 180 L520 245 L660 215 L800 262 L950 195 L1080 250 L1220 210 L1330 245 L1440 225 V320 Z"
            />
          </svg>
        </div>

        {/* عنوان البداية (زخرفي، العنوان الحقيقي هو h2) */}
        <div className="why-intro" aria-hidden="true">
          <span>لماذا رواسي؟</span>
        </div>

        <div className="why-content">
          <header className="why-heading">
            <span className="why-eyebrow">قيمنا</span>

            <h2 id="why-title">
              لماذا تختار <em>رواسي</em>؟
            </h2>

            <p>
              لأننا نؤمن أن العقار ليس مجرد مكان، بل قيمة راسخة ومستقبل يُبنى
              بثقة.
            </p>
          </header>

          <ul className="why-cards">
            {values.map(({ icon: Icon, number, title, description }, index) => (
              <li className="why-card" key={number} style={{ "--i": index }}>
                <div className="why-card-top">
                  <span className="why-card-number">{number}</span>

                  <span className="why-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <span className="why-card-line" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}