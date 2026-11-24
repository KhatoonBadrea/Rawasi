const ICONS = {
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M11 3L8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </>
  ),
  chart: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
};

export default function ValueCard({ icon, title, text, delay = "1.6s" }) {
  return (
    <li
      className="rw-up flex items-start gap-4 rounded-2xl border border-gold-light bg-[#0B1F44]/75 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-[#F5C242]/60"
      style={{ "--d": delay }}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-light text-gold">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {ICONS[icon]}
        </svg>
      </span>
      <div>
        <h3 className="text-base section-title font-normal text-[#F5C242]">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed font-arabic text-[#C9C2AE]">
          {text}
        </p>
      </div>
    </li>
  );
}
