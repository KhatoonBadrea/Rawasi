import { ArrowLeft, ShieldCheck, Gem, Building2 } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "الثقة والشفافية",
    description: "علاقات راسخة تقوم على الوضوح والمصداقية.",
  },
  {
    icon: Gem,
    title: "الجودة والتميز",
    description: "عقارات مختارة بعناية وفق أعلى معايير الجودة.",
  },
  {
    icon: Building2,
    title: "رؤية استثمارية",
    description: "فرص عقارية تجمع بين القيمة والاستقرار.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      dir="rtl"
      className="about-section relative overflow-hidden bg-cream py-24 lg:py-32 "
    >
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20   ">
          {/* الصورة على اليمين */}
          <div className="about-visual relative mx-auto w-full max-w-[570px] h-180 ">
            {/* <div className="about-circle" /> */}
            {/* <div className="about-circle-ring" /> */}

            {/* زخرفة مستوحاة من الجبال */}
            <svg
              className="about-mountain-mark"
              viewBox="0 0 500 180"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 155 L105 65 L165 112 L255 22 L345 112 L400 72 L495 155"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M5 170 L105 100 L165 140 L255 55 L345 140 L400 105 L495 170"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <div className="about-photo relative z-10 overflow-hidden">
              <img
                src="./favicon.png"
                alt="واجهة معمارية فاخرة"
                loading="lazy"
              />

              <div className="about-photo-caption  ">
                <span className="font-amiri">RAWASI REAL ESTATE</span>
                <p>رؤية راسخة... وقيمة تدوم</p>
              </div>
            </div>

            <div className="about-image-badge font-amiri">
              <span className="font-amiri">R</span>
              <small>RAWASI</small>
            </div>
          </div>

          {/* النص على اليسار */}
          <div className="about-copy relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-sm font-semibold text-gold">
                حكاية رواسي
              </span>
            </div>

            <h2 className="mb-8 font-heading text-4xl font-bold leading-[1.5] text-navy sm:text-5xl lg:text-[56px]">
              نصنع قيمة
              <span className="block text-gold">تدوم مع الزمن</span>
            </h2>

            <div className="mb-9 max-w-xl space-y-6 text-sm leading-9 text-slate sm:text-base">
              <p>
                في رواسي، نرى أن العقار يتجاوز كونه مساحة أو مبنى؛ فهو عنوان
                للطموح، واستثمار للمستقبل، واختيار يعكس أسلوب حياة متكامل.
              </p>

              <p>
                نستمد هويتنا من معنى اسمنا، فالرواسي هي الجبال الراسخة التي ترمز
                إلى الثبات والقوة والاستقرار. ومن هذا المعنى تنطلق رؤيتنا لتقديم
                تجربة عقارية تجمع بين الفخامة والثقة والقيمة طويلة الأمد.
              </p>
            </div>

            {/* قيم الشركة */}
            <div className="mb-10 space-y-6">
              {VALUES.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div className="about-value-row" key={index}>
                    <div className="about-value-icon">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary group">
              اكتشف عالم رواسي
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>

            <div className="about-signature">
              <span>RAWASI</span>
              <span className="about-signature-line" />
              <span>EST. IN EXCELLENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
