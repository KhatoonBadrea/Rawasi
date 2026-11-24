import { useRef, useState, useEffect, useCallback } from "react";
import PropertyCard from "./PropertyCard";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const PROPERTIES = [
  {
    id: 1,
    name: "فيلا بانوراما السعديات",
    location: "دبي, الإمارات",
    price: "12,500,000 درهم",
    bedrooms: 5,
    bathrooms: 6,
    status: "للبيع",
    image: "./src/assest/cards/villa&bool.jpg",
  },
  {
    id: 2,
    name: "بنتهاوس برج الماسة",
    location: "الرياض، السعودية",
    price: "8,000,000 ريال",
    bedrooms: 3,
    bathrooms: 4,
    status: "مباع",
    image: "./src/assest/cards/room.jpg",
  },
  {
    id: 3,
    name: "قصر اللؤلؤة",
    location: "الدوحة، قطر",
    price: "25,000,000 ريال",
    bedrooms: 7,
    bathrooms: 8,
    status: "للبيع",
    image: "./src/assest/cards/palace.jpg",
  },
  {
    id: 4,
    name: "دوبلكس",
    location: "دبي، الإمارات",
    price: "25,000,000 درهم",
    bedrooms: 7,
    bathrooms: 8,
    status: "للبيع",
    image: "./src/assest/cards/1.jpg",
  },
  {
    id: 5,
    name: "فيلا المارينا",
    location: "دبي، الإمارات",
    price: "18,000,000 درهم",
    bedrooms: 6,
    bathrooms: 7,
    status: "للبيع",
    image: "./src/assest/cards/room2.jpg",
  },
  {
    id: 6,
    name: "جناح البوليفارد",
    location: "الرياض، السعودية",
    price: "9,500,000 ريال",
    bedrooms: 4,
    bathrooms: 5,
    status: "للبيع",
    image: "./src/assest/cards/room3.jpg",
  },
];

// نكرر المصفوفة مرتين لحركة مستمرة بدون فراغ
const LOOP_PROPERTIES = [...PROPERTIES, ...PROPERTIES];

export default function FeaturedProperties() {
  const sliderRef = useRef(null);
  const cardRefs = useRef({}); // نخزن ref لكل كارد حسب id
  const scrollPosRef = useRef(0);
  const pauseUntilRef = useRef(0); // يوقف الحركة التلقائية مؤقتاً بعد الضغط على زر/نقطة

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const [activeId, setActiveId] = useState(PROPERTIES[0].id);
  const [isPaused, setIsPaused] = useState(false);

  // إرجاع إحداثي التمرير الدقيق لكارد معين حسب id
  const getCardScrollLeft = useCallback((propertyId) => {
    const slider = sliderRef.current;
    const cardEl = cardRefs.current[propertyId];
    if (!slider || !cardEl) return 0;

    return Math.max(0, cardEl.offsetLeft - slider.offsetLeft);
  }, []);

  // تحديث النقطة النشطة بناءً على أقرب كارد لموضع التمرير الحالي
  const syncActiveProperty = useCallback(
    (currentLeft) => {
      const slider = sliderRef.current;
      if (!slider) return;

      let closestId = PROPERTIES[0].id;
      let minDiff = Infinity;

      for (const prop of PROPERTIES) {
        const cardLeft = getCardScrollLeft(prop.id);
        const diff = Math.abs(currentLeft - cardLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestId = prop.id;
        }
      }

      setActiveId(closestId);
    },
    [getCardScrollLeft],
  );

  // الانتقال المباشر إلى عقار محدد عبر id
  const goToPropertyById = useCallback(
    (propertyId) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const targetLeft = getCardScrollLeft(propertyId);
      pauseUntilRef.current = Date.now() + 2500; // إيقاف التمرير التلقائي 2.5 ثانية لراحة الانتقال
      scrollPosRef.current = targetLeft;
      setActiveId(propertyId);

      slider.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    },
    [getCardScrollLeft],
  );

  // التنقل عبر الأسهم (يمين / يسار) بالانتقال للعقار التالي أو السابق حسب id
  const handleStepById = useCallback(
    (direction) => {
      const currentIndex = PROPERTIES.findIndex((p) => p.id === activeId);
      const safeIndex = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex =
        (safeIndex + direction + PROPERTIES.length) % PROPERTIES.length;

      goToPropertyById(PROPERTIES[nextIndex].id);
    },
    [activeId, goToPropertyById],
  );

  // الحركة التلقائية البطيئة جداً والهادئة
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    scrollPosRef.current = slider.scrollLeft;

    let animationFrameId;
    const speed = 0.4;

    const tick = () => {
      const currentSlider = sliderRef.current;
      const isCoolingDown = Date.now() < pauseUntilRef.current;

      if (currentSlider && !isPaused && !isDragging.current && !isCoolingDown) {
        const halfWidth = currentSlider.scrollWidth / 2;
        let nextLeft = scrollPosRef.current + speed;

        if (halfWidth > 0 && nextLeft >= halfWidth) {
          nextLeft -= halfWidth;
        }

        scrollPosRef.current = nextLeft;
        currentSlider.scrollLeft = nextLeft;
        syncActiveProperty(nextLeft);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, syncActiveProperty]);

  // مزامنة السكرول اليدوي
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    scrollPosRef.current = slider.scrollLeft;
    syncActiveProperty(slider.scrollLeft);
  };

  // السحب اليدوي بالماوس
  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    pauseUntilRef.current = Date.now() + 2000;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    const next = Math.max(0, scrollStart.current - walk);
    sliderRef.current.scrollLeft = next;
    scrollPosRef.current = next;
    syncActiveProperty(next);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section id="properties" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-main">
        {/* عنوان القسم */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-arabic text-sm font-semibold text-gold">
                اختيارات رواسي
              </span>
            </div>

            <h2 className="section-title mb-4">
              عقارات <span className="text-gold">مختارة بعناية</span>
            </h2>

            <p className="font-arabic max-w-xl text-sm leading-8 text-slate sm:text-base">
              اكتشف مجموعة من العقارات الاستثنائية التي تجمع بين روعة التصميم،
              والمواقع المميزة، والقيمة العقارية.
            </p>
          </div>
          <a
            href="#contact"
            className="font-arabic inline-flex w-fit items-center gap-3 text-sm font-semibold text-navy transition-colors hover:text-gold group"
          >
            استكشف جميع العقارات
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* شريط الكاردات القابل للسحب والحركة البطيئة */}
      <div
        dir="ltr"
        ref={sliderRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          stopDragging();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        className="no-scrollbar flex w-full cursor-grab gap-6 overflow-x-auto px-6 py-4 select-none active:cursor-grabbing"
      >
        {LOOP_PROPERTIES.map((property, index) => {
          const isFirstCopy = index < PROPERTIES.length;
          return (
            <div
              key={`${property.id}-${index}`}
              ref={
                isFirstCopy
                  ? (el) => {
                      cardRefs.current[property.id] = el;
                    }
                  : null
              }
              data-property-id={property.id}
              dir="rtl"
              className="w-[340px] shrink-0"
            >
              <PropertyCard property={property} />
            </div>
          );
        })}
      </div>

      {/* شريط التنقل السفلي (الأسهم الذهبية + كبسولة النقاط المرتبطة بالـ id) */}
      <div className="container-main relative z-10 mt-8 flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-4" dir="ltr">
          {/* زر السهم اليسار */}
          <button
            type="button"
            onClick={() => handleStepById(-1)}
            aria-label="السابق"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* الكبسولة البيضاء التي تحتوي النقاط المرتبطة بكل id */}
          <div className="flex items-center gap-2.5 rounded-full border border-navy/5 bg-white px-5 py-2.5 shadow-sm">
            {PROPERTIES.map((property) => {
              const isActive = activeId === property.id;
              return (
                <button
                  key={property.id}
                  type="button"
                  onClick={() => goToPropertyById(property.id)}
                  aria-label={`الانتقال إلى ${property.name}`}
                  className={`flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-4 w-4 border border-gold p-0.5"
                      : "h-2 w-2 bg-gold/35 hover:bg-gold/60"
                  }`}
                >
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  )}
                </button>
              );
            })}
          </div>

          {/* زر السهم اليمين */}
          <button
            type="button"
            onClick={() => handleStepById(1)}
            aria-label="التالي"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* زر عرض المزيد */}
        <a
          href="#contact"
          className="group gold-btn font-arabic "
          // className="inline-flex items-center gap-2 rounded-xl border border-gold/60 bg-white px-7 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-white"
        >
          عرض المزيد
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </a>
      </div>

      {/* <div className="container-main mt-10">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs tracking-widest text-slate">
            اكتشف المزيد من رواسي
          </span>
          <span className="h-px w-12 bg-gold" />
        </div>
      </div> */}
    </section>
  );
}
