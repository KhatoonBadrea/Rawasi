import { useRef } from "react";
import { ABOUT_CONTENT, STATS, VALUES } from "./aboutData";
import { useInView, useParallax } from "./hooks";
// import MountainScene from "./MountainScene";
import StatItem from "./StatItem";
import ValueCard from "./ValueCard";
import "./about.css";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.2 });
  useParallax(sectionRef);

  const { eyebrow, titleLine1, titleLine2, description } = ABOUT_CONTENT;

  return (
    <section
      id="about"
      ref={sectionRef}
      dir="rtl"
      aria-labelledby="about-title"
      className={` rw-about flex flex-col relative isolate overflow-hidden  bg-[#07142E] md:pt-32 pt-24  ${
        inView ? "is-visible" : ""
      }`}
    >
      <p
        className="rw-up mb-6 inline-flex items-center gap-3 self-center font-arabic text-sm font-semibold leading-[1.7] tracking-wide text-gold"
        style={{ "--d": "0.3s" }}
      >
        <span className="h-px w-10 bg-gold" />
        {eyebrow}
        <span className="h-px w-10 bg-gold" />
      </p>
      {/* <span className="span-circle"></span> */}
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="relative z-10 mx-0 max-w-5xl px-6">
          <header className=" max-w-2xl text-end">
            <h2
              id="about-title"
              className="section-title mt-3   text-[#FAF8F4]"
            >
              <span
                className="rw-up block mb-0 mr-[1rem]   text-white "
                style={{ "--d": "0.4s" }}
              >
                {titleLine1}
              </span>
              <span
                className="rw-up block  text-gold mb-5 mt-0  mr-[1.5rem]  "
                style={{ "--d": "0.5s" }}
              >
                {titleLine2}
              </span>
            </h2>

            <p
              className="rw-up  font-arabic mb-9 max-w-lg mr-[2rem] text-sm leading-8 text-[#a3aab8] sm:text-basel"
              style={{ "--d": "0.7s" }}
            >
              {description}
            </p>
          </header>

          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 min-[1050px]:grid-cols-4">
            {" "}
            {STATS.map((stat, i) => (
              <StatItem
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                peakIndex={i}
                delay={`${1.3 + i * 0.5}s`}
                active={inView}
              />
            ))}
          </ul>

          <ul className="mt-14 mr-[3rem]  mb-14 grid gap-6 max-[md:grid-cols-1 max-[950px]:grid-cols-2 min-[950px]:grid-cols-3">
            {VALUES.map((item, i) => (
              <ValueCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
                delay={`${1.8 + i * 0.6}s`}
              />
            ))}
          </ul>
        </div>
        <div className="my-auto shrink-0 self-center">
          <img
            className="rw-up  max-h-95 w-auto object-contain md:max-h-115 "
            src="./logo1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
