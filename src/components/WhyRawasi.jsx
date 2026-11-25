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

export default function WhyRawasi() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameId = null;

    const updateReveal = () => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();

        const distance = section.offsetHeight - window.innerHeight;

        const progress = Math.min(1, Math.max(0, -rect.top / distance));

        /*
          المرحلة الأولى:
          انتشار الدائرة والتوهج.
        */
        const revealProgress = Math.min(
          1,
          Math.max(0, (progress - 0.08) / 0.65),
        );

        /*
          المرحلة الثانية:
          اختفاء عنوان WHY RAWASI.
        */
        const introOpacity = Math.max(0, 1 - revealProgress * 1.8);

        /*
          المرحلة الثالثة:
          ظهور محتوى القسم الكريمي.
        */
        const contentProgress = Math.min(
          1,
          Math.max(0, (revealProgress - 0.48) / 0.42),
        );

        section.style.setProperty("--reveal-progress", revealProgress);

        section.style.setProperty("--intro-opacity", introOpacity);

        section.style.setProperty("--content-progress", contentProgress);
      });
    };

    window.addEventListener("scroll", updateReveal, {
      passive: true,
    });

    window.addEventListener("resize", updateReveal);

    updateReveal();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);

      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
    };
  }, []);

  return (
    <section ref={sectionRef} className="why-section" id="why-rawasi" dir="rtl">
      <div className="why-sticky">
        {/* الخلفية الكحلية */}
        <div className="why-navy-background"></div>

        {/* عنوان البداية */}
        <div className="why-intro font-arabic">
          <span>لماذا رواسي؟</span>
        </div>

        {/* الدائرة الكريمية والتوهج */}
        <div className="why-reveal-wrapper">
          <div className="why-reveal-circle"></div>
        </div>

        {/* المحتوى الذي يظهر بعد انتشار الدائرة */}
        <div className="why-content">
          <header className="why-heading">
            <span className="why-label mb-6 font-heading text-3xl font-bold tracking-wide leading-[1.7] sm:text-4xl md:text-5xl text-gold">
              لماذا تختار رواسي؟
            </span>

            {/* <h2 className="font-arabic text-cream">
              لماذا <span className="text-gold">رواسي؟</span>
            </h2> */}

            <p className="text-slate font-arabic font-medium">
              لأننا نؤمن أن العقار ليس مجرد مكان، بل قيمة راسخة ومستقبل يُبنى
              بثقة.
            </p>
          </header>

          <div className="why-cards font-arabic">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article className="why-card" key={item.number}>
                  <div className="why-card-top">
                    <span className="why-card-number font-english">
                      {item.number}
                    </span>

                    <div className="why-icon">
                      <Icon size={25} strokeWidth={1.4} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="why-card-line"></span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
