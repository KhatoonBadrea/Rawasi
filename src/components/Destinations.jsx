import { useState } from "react";
import { ArrowLeft, MapPin, MoveUpLeft } from "lucide-react";
import "./destinations.css";

const destinations = [
  {
    id: "01",
    name: "دبي",
    english: "DUBAI",
    country: "الإمارات العربية المتحدة",
    description: "حيث تلتقي الرؤية الطموحة بفرص الاستثمار الاستثنائية.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "02",
    name: "أبوظبي",
    english: "ABU DHABI",
    country: "الإمارات العربية المتحدة",
    description: "وجهة تجمع بين الاستقرار والرقي وفرص النمو المستدام.",
    image:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "03",
    name: "الرياض",
    english: "RIYADH",
    country: "المملكة العربية السعودية",
    description: "مدينة تصنع المستقبل وتفتح آفاقاً جديدة للاستثمار.",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "04",
    name: "الدوحة",
    english: "DOHA",
    country: "دولة قطر",
    description: "عنوان يجمع بين الحداثة والهوية والقيمة العقارية.",
    image:
      "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=2000&q=90",
  },
];

export default function Destinations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = destinations[activeIndex];

  const selectDestination = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="destinations-section" id="destinations" dir="rtl">
      <div className="destinations-container">
        {/* رأس القسم */}
        <div className="destinations-header">
          <div>
            <span className="destinations-eyebrow">
              <span className="!font-arabic destinations-eyebrow-line" />
              وجهاتنا
            </span>

            <h2 className="font-heading">
              حضور يمتد
              <span> عبر الخليج</span>
            </h2>
          </div>

          <p className="font-arabic destinations-intro">
            من قلب المدن النابضة بالحياة، نختار وجهات تحمل فرصاً استثنائية ورؤية
            تتجاوز حدود المكان.
          </p>
        </div>

        {/* العرض السينمائي */}
        <div className="destinations-showcase">
          {/* الصورة */}
          <div className="destination-visual">
            <div
              key={active.id}
              className="destination-image"
              style={{ backgroundImage: `url("${active.image}")` }}
            />

            <div className="destination-image-overlay" />

            <div className="destination-image-top">
              <span className="font-english">RAWASI </span>
              <span className="font-english destination-image-number">
                {active.id} <b>/ 04</b>
              </span>
            </div>

            <div
              className="destination-image-content"
              key={`${active.id}-text`}
            >
              <span className="font-arabic destination-country">
                <MapPin size={14} />
                {active.country}
              </span>

              <h3 className="font-heading !mb-2">{active.name}</h3>

              <span className="font-english !mt-5 destination-english">
                {active.english}
              </span>

              <p className="font-arabic">{active.description}</p>
            </div>

            {/* <div className="destination-image-bottom">
              <span>EXPLORE THE EXTRAORDINARY</span>
              <span className="destination-bottom-line" />
            </div> */}
          </div>

          {/* قائمة المدن */}
          <div className="destinations-sidebar">
            <div className="destinations-sidebar-heading">
              <span className="font-arabic">اكتشف وجهاتنا</span>
              <span className="font-english">SELECT A DESTINATION</span>
            </div>

            <div className="destinations-list font-arabic">
              {destinations.map((destination, index) => (
                <button
                  key={destination.id}
                  className={`destination-link ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => selectDestination(index)}
                  aria-pressed={activeIndex === index}
                >
                  <span className="font-english destination-link-number">
                    {destination.id}
                  </span>

                  <span className="destination-link-name">
                    <strong>{destination.name}</strong>
                    <small className="font-english">
                      {destination.english}
                    </small>
                  </span>

                  <span className="destination-link-arrow">
                    <MoveUpLeft size={18} />
                  </span>
                </button>
              ))}
            </div>

            {/* مؤشر التقدم */}
            <div className="destinations-progress">
              <div className="destinations-progress-track">
                <span
                  className="font-english"
                  style={{
                    width: `${((activeIndex + 1) / destinations.length) * 100}%`,
                  }}
                />
              </div>

              <div className="destinations-progress-labels">
                <span className="font-arabic">وجهات رواسي</span>
                <span className="font-english">0{activeIndex + 1} / 04</span>
              </div>
            </div>

            {/* <div className="destinations-sidebar-footer">
              <span>BEYOND BORDERS</span>
              <ArrowLeft size={17} />
            </div> */}
          </div>
        </div>

        {/* التذييل */}
        {/* <div className="destinations-footer">
          <span>ROOTED IN THE GULF. BUILT FOR THE FUTURE.</span>
          <span className="destinations-footer-brand">RAWASI REAL ESTATE</span>
        </div> */}
      </div>
    </section>
  );
}
