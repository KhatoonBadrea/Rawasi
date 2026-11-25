import { useState } from "react";
import { Menu, X, Search, ArrowLeft, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { title: "الرئيسية", href: "#home", active: true },
  { title: "العقارات", href: "#properties" },
  { title: "خدماتنا", href: "#services" },
  { title: "عن رواسي", href: "#about" },
  { title: "لماذا رواسي", href: "#why-rawasi" },
  { title: "وجهاتنا", href: "#destinations" },
  { title: "تواصل معنا", href: "#contact" },
];

function Logo() {
  return (
    <a
      href="#home"
      aria-label="رواسي - الصفحة الرئيسية"
      className="flex shrink-0 items-center gap-3"
    >
      {/* Logo Symbol */}
      <div className="max-w-60">
        <img src="./logo2.png" alt="" />
      </div>

      {/* Brand Name */}
      {/* <div className="flex flex-col">
        <span className="  font-amiri p-1.5 text-xl font-bold  text-gold">
          رواســي
        </span>

        <span className="font-amiri text-sm font-blod tracking-[2px] text-gold">
          RAWASI
        </span>

        <span className="font-amiri  text-[8px] tracking-[1.5px] text-white/60">
          LUXURY REAL ESTATE
        </span>
      </div> */}
    </a>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy shadow-lg shadow-navy/10 font-arabic">
      <div className="container-main">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav
            aria-label="القائمة الرئيسية"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`relative py-2 text-sm transition-colors duration-300
                  ${
                    link.active
                      ? "font-semibold text-gold"
                      : "text-white/85 hover:text-gold"
                  }
                  after:absolute after:bottom-0 after:right-0
                  after:h-[2px] after:bg-gold
                  after:transition-all after:duration-300
                  ${
                    link.active
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              aria-label="البحث"
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10 hover:text-gold"
            >
              <Search size={20} />
            </button>

            <a href="#properties" className="group gold-btn ">
              استكشف العقارات
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="البحث"
              className="rounded-full p-2 text-white hover:bg-white/10"
            >
              <Search size={20} />
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="rounded-lg p-2 text-gold transition-colors hover:bg-white/10"
            >
              {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-navy transition-all duration-300 lg:hidden
          ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <nav className="container-main py-4">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-sm transition-colors
                  ${
                    link.active
                      ? "font-semibold text-gold"
                      : "text-white/85 hover:text-gold"
                  }
                `}
              >
                {link.title}

                <ArrowLeft size={15} className="text-gold/70" />
              </a>
            ))}
          </div>

          <a
            href="#properties"
            onClick={closeMenu}
            className=" gold-btn mt-5 w-full"
          >
            استكشف العقارات
            <ArrowLeft size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
