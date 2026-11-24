import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="rawasi-footer font-arabic" dir="rtl">
      {/* الجزء العلوي */}
      <div className="footer-top">
        {/* الجبال الذهبية: ثلاث قمم فقط */}
        <svg
          className="footer-mountain-line"
          viewBox="0 0 180 65"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 64 L43 34 L65 48 L100 13 L130 42 L147 34 L180 64"
            fill="none"
            stroke="#D4A447"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="footer-top-inner">
          {/* الشعار */}
          <div className="footer-brand">
            <a href="#home">
              <img src="./logo.png" alt="RAWASI" />
            </a>
          </div>

          {/* النشرة البريدية */}
          <div className="footer-newsletter">
            <h3>اشترك في نشرتنا البريدية</h3>
            <p>للحصول على أحدث العروض العقارية</p>

            <form
              className="footer-newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                aria-label="البريد الإلكتروني"
                required
              />

              <button type="submit">اشتراك</button>
            </form>
          </div>

          {/* روابط سريعة */}
          <div className="footer-quick-links">
            <h3>روابط سريعة</h3>

            <a href="#home">الرئيسية</a>
            <a href="#properties">العقارات</a>
            <a href="#about">عن رواسي</a>
            <a href="#contact">تواصل معنا</a>
          </div>

          {/* تابعنا */}
          <div className="footer-follow">
            <h3>تابعنا</h3>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a href="#" aria-label="X">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="#" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} رواسي العقارية. جميع الحقوق محفوظة.
          </p>

          <div className="footer-legal">
            <a href="#">سياسة الخصوصية</a>
            <span></span>
            <a href="#">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
