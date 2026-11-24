import {
  MapPin,
  BedDouble,
  Bath,
  ArrowUpLeft,
} from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <article className="property-card group ">
      {/* صورة العقار */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* طبقة خفيفة فوق الصورة */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />

        {/* حالة العقار */}
        <span
          className={`absolute right-4 top-4 rounded-full px-4 py-2 text-xs font-semibold font-arabic ${
            property.status === "مباع"
              ? "bg-white/90 text-slate"
              : "bg-gold text-navy"
          }`}
        >
          {property.status}
        </span>
      </div>

      {/* معلومات العقار */}
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-slate font-arabic">
          <MapPin size={16} className="text-gold" />
          <span >{property.location}</span>
        </div>

        <h3 className="mb-4 font-heading text-lg font-bold text-navy transition-colors group-hover:text-gold">
          {property.name}
        </h3>

        {/* تفاصيل العقار */}
        <div className="mb-5 flex items-center gap-5 border-b border-gray-100 pb-5 text-sm text-slate font-arabic">
          <div className="flex items-center gap-2">
            <BedDouble size={18} className="text-gold" />
            <span>{property.bedrooms} غرف</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} className="text-gold" />
            <span>{property.bathrooms} حمامات</span>
          </div>
        </div>

        {/* السعر والزر */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="mb-1 font-arabic block text-xs text-slate">
              {property.status === "مباع" ? "السعر عند البيع" : "السعر"}
            </span>

            <p className="font-english text-lg font-bold text-navy">
              {property.price}
            </p>
          </div>

          <a
            href="#contact"
            aria-label={`استفسر عن ${property.name}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-navy transition-all duration-300 hover:bg-gold hover:text-navy"
          >
            <ArrowUpLeft size={20} 
            className="transition-transform duration-300 hover:-translate-y-1  hover:-translate-x-1"/>
          </a>
        </div>
      </div>
    </article>
  );
}
