import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from "lucide-react";

const HERO_IMAGES = [
  {
    id: 1,
    image: "./src/assest/biulding1.png",
    alt: "فيلا عصرية فاخرة",
  },
  {
    id: 2,
    image: "./src/assest/coffe.png",
    alt: "تصميم معماري فاخر",
  },
  {
    id: 3,
    image: "./src/assest/coffe2.jpg",
    alt: "واجهة منزل فاخر",
  },
  {
    id: 4,
    image: "./src/assest/biulding5.jpg",
    alt: "مساحة معيشة فاخرة",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // الانتقال التلقائي بين الصور
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
    );
  };

  return (
    <section
      id="home"
      aria-label="اكتشف عقارات رواسي الفاخرة"
      className="relative isolate min-h-162.5 h-[calc(100svh-80px)] max-h-255 overflow-hidden bg-cream"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1800 ease-in-out ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={activeSlide !== index}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`h-full w-full object-cover transition-transform duration-7000 ${
                activeSlide === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-navy/50 via-navy/30 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="container-main relative z-10 flex h-full items-center">
        <div className="w-full max-w-2xl py-20">
          {/* Glass Card */}
          <div className="hero-glass-card relative overflow-hidden rounded-2xl border border-white/25 p-6 shadow-2xl shadow-black/20 sm:p-9 md:p-12">
            {/* Decorative Gold Line */}
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent" />

            {/* Small Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <span className="font-arabic text-xs font-semibold tracking-wide text-gold sm:text-sm">
                رواسي للعقارات الفاخرة
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 font-heading text-3xl font-bold tracking-wide leading-[1.7] text-white sm:text-4xl md:text-5xl">
              امتلك عنوانك الراقي
              <span className="block text-gold">في قلب الخليج</span>
            </h1>

            {/* Description */}
            <p className="font-arabic mb-9 max-w-lg text-sm leading-8 text-white/90 sm:text-base">
              نختار لك من أرقى الوجهات العقارية، حيث تلتقي روعة العمارة بقيمة
              الاستثمار وثبات المستقبل.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#properties" className="font-arabic group gold-btn">
                اكتشف عقاراتنا
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="font-arabic inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-gold hover:bg-white/10 hover:text-gold"
              >
                اكتشف رواسي
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mountain Silhouette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="h-24 w-full sm:h-32 md:h-40"
          aria-hidden="true"
        >
          <path
            d="M0 130 L160 55 L270 105 L440 20 L570 105 L730 42 L880 115 L1050 30 L1200 95 L1330 45 L1440 100 L1440 180 L0 180Z"
            fill="#142D55"
            opacity="0.55"
          />

          <path
            d="M0 145 L180 90 L310 125 L490 65 L650 135 L810 75 L970 125 L1120 55 L1280 120 L1440 75 L1440 180 L0 180Z"
            fill="#0B1F44"
            opacity="0.85"
          />

          <path
            d="M0 155 L210 120 L380 150 L570 105 L750 145 L920 115 L1100 150 L1280 105 L1440 140 L1440 180 L0 180Z"
            fill="#0B1F44"
          />

          <path
            d="M0 154 L210 119 L380 149 L570 104 L750 144 L920 114 L1100 149 L1280 104 L1440 139"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.2"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-10 left-0 z-30 w-full sm:bottom-12">
        <div className="container-main flex items-center justify-between">
          {/* Slide Indicators */}
          <div className="flex items-center gap-3" dir="ltr">
            {HERO_IMAGES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`عرض الصورة ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-10 bg-gold"
                    : "w-5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Previous / Next */}
          <div className="flex items-center gap-2" dir="ltr">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="الصورة السابقة"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="الصورة التالية"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
