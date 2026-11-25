import { useEffect, useRef } from "react";
import { Gem, House, ChartNoAxesCombined, Handshake } from "lucide-react";

import servicesBg from "../assest/services.png"; // عدّلي المسار
import "./services.css";

const services = [
  {
    icon: Gem,
    number: "01",
    title: "تطوير المشاريع العقارية",
    description: "نحوّل الأراضي والأفكار إلى مشاريع متكاملة بجودة تدوم.",
  },
  {
    icon: House,
    number: "02",
    title: "البيع والشراء والتأجير",
    description: "نوصلك بالعقار المناسب بأفضل الشروط وبإجراءات واضحة وسلسة.",
  },
  {
    icon: ChartNoAxesCombined,
    number: "03",
    title: "إدارة واستثمار العقارات",
    description: "ندير أصولك العقارية ونبني لها عائداً مستقراً ونمواً مدروساً.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "دعم واستشارات متخصصة",
    description:
      "رأي خبير في كل خطوة، لقرار عقاري مبني على فهم لا على التخمين.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  // نضيف كلاس is-visible مرة وحدة لما القسم يظهر بالشاشة
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section"
      id="services"
      dir="rtl"
      style={{ "--services-bg": `url(${servicesBg})` }}
    >
      {/* ===== الجزء العلوي: صورة ثابتة + عنوان + جبال ===== */}
      <div className="services-hero">
        <div className="services-bg"  />

        <div className="container-main services-heading">
          <span className="services-label">خدماتنا</span>

          <h2 className="services-title section-title ">
            حلول عقارية <em>متكاملة</em>
          </h2>

          <p className="services-subtitle">
            من الفكرة إلى المفتاح، نرافقك في كل مرحلة من رحلتك العقارية.
          </p>
        </div>

        {/* <div className="services-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path
              className="divider-back"
              d="M0 160 V80 L120 40 L230 75 L380 15 L500 70 L620 30 L760 80 L900 10 L1020 65 L1160 25 L1290 75 L1440 35 V160 Z"
            />
            <path
              className="divider-front"
              d="M0 160 V105 L90 70 L150 95 L260 35 L340 85 L430 55 L540 100 L650 40 L740 90 L850 25 L940 80 L1040 50 L1150 100 L1250 60 L1340 90 L1440 55 V160 Z"
            />
          </svg>
        </div> */}
      </div>

      {/* ===== الكاردات ===== */}
      <div className="container-main services-body">
        <ul className="services-grid">
          {services.map(({ icon: Icon, number, title, description }, index) => (
            <li className="service-card" key={number} style={{ "--i": index }}>
              {/* <span className="service-number" aria-hidden="true">
                {number}
              </span> */}

              <span className="service-icon-wrap">
                <Icon size={26} strokeWidth={1.5} />
              </span>

              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
