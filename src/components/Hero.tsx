import { ArrowDown } from "lucide-react";
import { useCallback, memo } from "react";

// список услуг для облака (RU)
const SERVICES = [
  "Сайты",
  "Telegram-боты",
  "Приложения",
  "CRM-системы",
  "ERP-системы",
  "E-commerce",
  "Админ-панели",
  "DevOps & Деплой",
];

// Небольшой компонент-облако, которое живёт ПОД контентом hero
const ServicesCloud = memo(() => {
  return (
    <div
      className="
        absolute inset-0 z-0
        pointer-events-none select-none
        flex flex-wrap items-center justify-center
        gap-6 md:gap-8
        opacity-70    /* 70% как просил (60–80%) */
      "
      aria-hidden="true"
      // мягкая маска по краям, чтобы слова плавно исчезали
      style={{
        WebkitMaskImage:
          "radial-gradient(60% 60% at 50% 50%, black 60%, transparent 100%)",
        maskImage:
          "radial-gradient(60% 60% at 50% 50%, black 60%, transparent 100%)",
      }}
    >
      {SERVICES.map((label, i) => (
        <span
          key={label}
          className="
            text-[clamp(0.95rem,2.2vw,1.15rem)]
            text-text-secondary
            animate-float-slow
          "
          // лёгкая рассинхронизация движения
          style={{ animationDelay: `${i * 0.25}s` }}
        >
          {label}
        </span>
      ))}
    </div>
  );
});

/**
 * Hero Section — главная секция с именем и заявлением о профессии
 */
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
        bg-gradient-hero
        overflow-x-hidden
      "
    >
      {/* ОБЛАКО СЛОВ — позади контента */}
      <ServicesCloud />

      {/* Основной контент — поверх облака */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Main Title */}
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

        {/* Statement */}
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
          <div
            className="w-24 h-[3px] bg-accent-green mx-auto mt-4"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
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
            className="
              w-8 h-8
              text-text-muted
              group-hover:text-accent-green
              transition-colors
            "
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
};