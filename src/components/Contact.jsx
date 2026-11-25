import { useState } from "react";
import "./contact.css";
import {
  UserRound,
  Phone,
  Mail,
  Building2,
  MessageSquare,
  MapPin,
  ArrowLeft,
} from "lucide-react";

const PROPERTY_TYPES = ["فيلا", "شقة", "بنتهاوس", "قصر", "عقار تجاري", "أخرى"];

function MountainBackground() {
  return (
    <svg
      className="contact-mountains"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {/* الجبال البعيدة */}
      <path
        d="M0 390 L110 300 L190 350 L330 210 L450 335 L570 245 L690 350 L830 190 L960 330 L1100 230 L1240 350 L1390 190 L1600 360"
        fill="#E9E9E6"
        opacity=".65"
      />

      {/* الجبال المتوسطة */}
      <path
        d="M0 470 L160 350 L280 420 L440 290 L570 405 L720 275 L870 420 L1030 300 L1180 410 L1350 280 L1600 430"
        fill="#DCDDD9"
        opacity=".42"
      />

      {/* خطوط القمم الذهبية */}
      <path
        d="M0 390 L110 300 L190 350 L330 210 L450 335 L570 245 L690 350"
        stroke="#D4AF37"
        strokeWidth="1.5"
        opacity=".38"
      />
      <path
        d="M830 190 L960 330 L1100 230 L1240 350 L1390 190 L1600 360"
        stroke="#D4AF37"
        strokeWidth="1.5"
        opacity=".38"
      />

      {/* الجبال الأمامية */}
      <path
        d="M0 710 L170 570 L290 650 L440 500 L600 670 L760 520 L920 680 L1100 530 L1280 680 L1450 520 L1600 640 L1600 900 L0 900Z"
        fill="#E5E4DF"
        opacity=".75"
      />

      <path
        d="M0 710 L170 570 L290 650 L440 500 L600 670 L760 520 L920 680 L1100 530 L1280 680 L1450 520 L1600 640"
        stroke="#D4AF37"
        strokeWidth="1.5"
        opacity=".35"
      />
    </svg>
  );
}

function PropertyGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85",
      alt: "أفق مدينة دبي",
      className: "contact-image-side contact-image-left",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=90",
      alt: "فيلا عصرية فاخرة",
      className: "contact-image-main",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85",
      alt: "واجهة عقارية فاخرة",
      className: "contact-image-side contact-image-right",
    },
  ];

  return (
    <div className="contact-gallery">
      <div className="contact-gallery-oval" />
      <div className="contact-gallery-ring" />

      {images.map((image, index) => (
        <div
          key={image.alt}
          className={`contact-image ${image.className}`}
          style={{ "--image-index": index }}
        >
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    message: "",
  });

  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // الواجهة جاهزة، وسيتم ربط الإرسال بخدمة استقبال الرسائل لاحقاً.
    // setNotice(
    //   "تم التحقق من البيانات. بقي ربط النموذج بخدمة استقبال الرسائل لتفعيل الإرسال.",
    // );
  }

  return (
    <form className="contact-form font-arabic " onSubmit={handleSubmit}>
      <div className="contact-fields-grid">
        <label className="contact-field">
          <span>الاسم الكامل</span>
          <div className="contact-input-wrap contact-name-input">
            <UserRound size={19} />
            <input
              type="text"
              name="name"
              placeholder="أدخل اسمك الكامل"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        <label className="contact-field">
          <span>رقم الهاتف</span>
          <div className="contact-input-wrap">
            <Phone size={19} />
            <input
              type="tel"
              name="phone"
              placeholder="+971"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        <label className="contact-field">
          <span>نوع العقار</span>
          <div className="contact-input-wrap">
            <Building2 size={19} />
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">اختر نوع العقار</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="contact-field">
          <span>البريد الإلكتروني</span>
          <div className="contact-input-wrap">
            <Mail size={19} />
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              dir="ltr"
            />
          </div>
        </label>
      </div>

      <label className="contact-field contact-message-field">
        <span>رسالتك</span>
        <div className="contact-input-wrap contact-textarea-wrap contact-name-input">
          <MessageSquare size={19} />
          <textarea
            name="message"
            placeholder="أخبرنا كيف يمكننا مساعدتك..."
            value={formData.message}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
      </label>

      <button type="submit" className="group gold-btn my-10">
        إرسال الرسالة
        {/* <span className="contact-submit-icon"> */}
        <ArrowLeft
          size={19}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        {/* </span> */}
      </button>

      {notice && (
        <p className="contact-notice" role="status">
          {notice}
        </p>
      )}
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info-wrapper font-arabic">
      <div className="contact-info-bar">
        {/* مكان شعار الشركة */}
        <a
          href="#home"
          aria-label="رواسي - الصفحة الرئيسية"
          className="flex shrink-0 items-center gap-3"
        >
          {/* Logo Symbol */}
          <div className="max-w-50 ">
        <img src="./logo2.png" alt="" />
          </div>

          {/* Brand Name */}
          {/* <div className="flex flex-col">
            <span className="  font-amiri p-1.5 text-sm font-bold  text-gold">
              رواســي
            </span>

            <span className="font-amiri text-sm font-blod tracking-[2px] text-gold">
              RAWASI
            </span>
          </div> */}
        </a>

        <div className="contact-info-item">
          <div className="contact-info-icon">
            <MapPin size={21} />
          </div>
          <div>
            <span>موقعنا</span>
            <p>دبي، الإمارات العربية المتحدة</p>
          </div>
        </div>

        <div className="contact-info-item">
          <div className="contact-info-icon">
            <Phone size={21} />
          </div>
          <div>
            <span>اتصل بنا</span>
            <p className="font-english [direction:ltr]"> +961567860805 </p>
          </div>
        </div>

        <div className="contact-info-item">
          <div className="contact-info-icon">
            <Mail size={21} />
          </div>
          <div>
            <span>البريد الإلكتروني</span>
            <a className="font-english text-navy-light text-[11px] leading-[1.8] cursor-pointer">
              Rawasi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section" dir="rtl">
      <MountainBackground />

      <div className="container-main contact-container">
        <div className="contact-main-grid">
          {/* الصور على اليمين */}
          <div className="contact-visual">
            <PropertyGallery />
          </div>

          {/* النص والنموذج على اليسار */}
          <div className="contact-content">
            <div className="font-arabic text-sm font-semibold contact-eyebrow">
              <span />
              تواصل معنا
            </div>

            <h2 className=" contact-title">
              لنبدأ رحلتك العقارية
              <span>مع رواسي</span>
            </h2>

            <p className="font-arabic contact-description">
              فريقنا المتخصص جاهز للإجابة على استفساراتك وتقديم أفضل الحلول
              العقارية المناسبة لك.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>

      <ContactInfo />
    </section>
  );
}
