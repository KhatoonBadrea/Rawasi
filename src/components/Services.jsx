import { Gem, House, ChartNoAxesCombined, Handshake } from "lucide-react";

import "./services.css";

const services = [
  {
    icon: Gem,
    title: "تطوير المشاريع العقارية",
  },
  {
    icon: House,
    title: "البيع والشراء والتأجير",
  },
  {
    icon: ChartNoAxesCombined,
    title: "إدارة واستثمار العقارات",
  },
  {
    icon: Handshake,
    title: "دعم واستشارات متخصصة",
  },
];

export default function Services() {
  return (
    <section className="services-section" dir="rtl" id="services">
      <div className="container-main">
        <div className="services-heading">
          <span className="font-arabic services-label">خدماتنا</span>

          <h2 className="font-arabic !text-center section-title mb-4">
            حلول عقارية
            <span className="text-gold mr-3  ">متكاملة </span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-item" key={index}>
                <Icon className="service-icon" strokeWidth={1.35} />

                <h3 className="font-arabic">{service.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
