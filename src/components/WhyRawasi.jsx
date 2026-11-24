import { useEffect, useRef } from "react";
import { ShieldCheck, Mountain, Gem, Handshake } from "lucide-react";

import "./whyRawasi.css";

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "الثقة والشفافية",
    description: "علاقة واضحة وموثوقة في كل خطوة من رحلتك العقارية.",
  },
  {
    icon: Mountain,
    number: "02",
    title: "ثبات واستقرار",
    description: "رؤية طويلة الأمد تستند إلى أسس راسخة في عالم العقارات.",
  },
  {
    icon: Gem,
    number: "03",
    title: "جودة الاختيار",
    description: "نحرص على تقديم خيارات عقارية ترتقي بتطلعات عملائنا.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "شراكة مستدامة",
    description: "نبني علاقات تتجاوز الصفقة نحو قيمة تدوم.",
  },
];

export default function WhyRawasi() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameId;

    const updateReveal = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollDistance = section.offsetHeight - window.innerHeight;

        const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));

        const scale = 0.8 + progress * 9.2;

        section.style.setProperty("--reveal-scale", scale);
        section.style.setProperty("--reveal-progress", progress);
      });
    };

    window.addEventListener("scroll", updateReveal, { passive: true });
    window.addEventListener("resize", updateReveal);

    updateReveal();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
    };
  }, []);

  return (
    <section className="why-rawasi-wrapper" ref={sectionRef} id="why-rawasi">
      <div className="why-rawasi-sticky">
        {/* الخلفية الكحلية */}
        <div className="why-rawasi-dark-bg">
          <span className="why-rawasi-background-text font-english ">
            WHY RAWASI?
          </span>
        </div>

        {/* الدائرة الكريمية المتوسعة */}
        <div className="why-rawasi-reveal">
          <div className="why-rawasi-circle" />
        </div>

        {/* محتوى القسم */}
        <div className="why-rawasi-content" dir="rtl">
          <div className="why-rawasi-heading">
            <span className="why-rawasi-label font-heading font-semibold text-gold mt-20">
              <span />
              لماذا رواسي؟
              <span />
            </span>

            <h2 className="section-title ">
              لأن اختيارك يستحق
              <br />
              <strong className="text-gold">أساساً راسخاً.</strong>
            </h2>

            <p className="font-arabic text-slate">
              نؤمن أن العقار أكثر من مجرد مكان، إنه قرار يصنع قيمة للمستقبل.
            </p>
          </div>

          <div className="why-rawasi-values">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="why-rawasi-card" key={value.number}>
                  <span className="why-rawasi-number">{value.number}</span>

                  <Icon className="why-rawasi-icon" strokeWidth={1.3} />

                  <h3 className="font-heading">{value.title}</h3>

                  <p className="font-arabic">{value.description}</p>
                </article>
              );
            })}
          </div>

          <div className="why-rawasi-footer">
            <span className="font-arabic">ثبات في الرؤية، وقيمة تدوم.</span>
            <span className="font-english">RAWASI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
