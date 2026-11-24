import { useCountUp } from "./hooks";

// Jagged mini-peaks drawn above each number. Different heights, none of them a clean triangle.
const PEAKS = [
  "2,30 12,20 17,23 27,5 33,15 38,11 54,30",
  "2,30 10,24 20,12 25,17 34,8 41,19 46,16 54,30",
  "2,30 9,21 15,25 24,14 31,18 40,3 47,17 54,30",
  "2,30 13,17 18,21 28,9 35,22 42,12 54,30",
];

export default function StatItem({
  value,
  suffix = "",
  label,
  peakIndex = 0,
  delay = "1.3s",
  active,
}) {
  const count = useCountUp(value, active);

  return (
    <li
      className="rw-up flex flex-col items-center text-center"
      style={{ "--d": delay }}
    >
      <svg
        viewBox="0 0 56 32"
        className="h-8 w-14 text-gold"
        fill="none"
        aria-hidden="true"
      >
        <polyline
          points={PEAKS[peakIndex % PEAKS.length]}
          pathLength="1"
          className="rw-draw"
          style={{ "--d": delay }}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <p
        dir="ltr"
        className="mt-2 text-4xl font-bold font-english tabular-nums text-[#FAF8F4] md:text-5xl"
      >
        {count.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-[#C9C2AE] font-arabic md:text-base">
        {label}
      </p>
    </li>
  );
}
