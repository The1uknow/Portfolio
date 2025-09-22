import { ArrowDown } from "lucide-react";
import { useCallback } from "react";

const TOP_SERVICES = [
  "Сайты",
  "Telegram-боты",
  "Приложения",
  "CRM-системы",
  "ERP-системы",
];

const BOTTOM_SERVICES = ["E-commerce", "Админ-панели", "DevOps & Деплой"];

export const Hero = () => {
  const handleScroll = useCallback(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    document.getElementById("projects")?.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-dvh
        flex flex-col items-center justify-center
        text-center
        px-6
        bg-gradient-hero hero-noise
        overflow-hidden
      "
    >
      {/* ВЕРХНЯЯ ЛИНИЯ — всегда по центру */}
      <div className="absolute inset-x-0 top-[12%]">
        <div className="w-full grid place-items-center">
          <div
            className="
              flex flex-wrap justify-center gap-4 md:gap-6
              text-[clamp(0.8rem,2.5vw,1rem)]
              text-text-secondary/70
              opacity-0 animate-fade-in-down
            "
          >
            {TOP_SERVICES.map((s, i) => (
              <span
                key={s}
                className="whitespace-nowrap"
                style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ЦЕНТРАЛЬНЫЙ КОНТЕНТ */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <h1
          className="
            font-inter font-extrabold leading-[0.95]
            text-[clamp(2.4rem,8vw,6.25rem)]
            tracking-tight
          "
        >
          <span className="text-foreground block">MUKHSIN</span>
          <span className="text-accent-green block">KAMOLOV</span>
        </h1>

        <div className="mt-5 md:mt-6">
          <p
            className="
              font-inter font-medium
              text-[clamp(1rem,3.2vw,1.6rem)]
              text-text-secondary tracking-wide
            "
          >
            FULLSTACK DEVELOPER
          </p>
          <div className="w-24 h-[3px] bg-accent-green mx-auto mt-4" aria-hidden="true" />
        </div>
      </div>

      {/* НИЖНЯЯ ЛИНИЯ — всегда по центру */}
      <div className="absolute inset-x-0 bottom-[18%]">
        <div className="w-full grid place-items-center">
          <div
            className="
              flex flex-wrap justify-center gap-4 md:gap-6
              text-[clamp(0.8rem,2.5vw,1rem)]
              text-text-secondary/70
              opacity-0 animate-fade-in-up
            "
          >
            {BOTTOM_SERVICES.map((s, i) => (
              <span
                key={s}
                className="whitespace-nowrap"
                style={{ animationDelay: `${i * 0.15 + 0.4}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Индикатор прокрутки */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={handleScroll}
          className="
            group inline-flex items-center justify-center
            w-12 h-12 rounded-full
            outline-none ring-0 focus-visible:ring-2 focus-visible:ring-accent-green/60
            transition-transform
            motion-safe:animate-bounce
          "
          aria-label="Прокрутить к проектам"
        >
          <ArrowDown
            className="w-8 h-8 text-text-muted group-hover:text-accent-green transition-colors"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
};