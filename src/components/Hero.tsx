import { ArrowDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { t, tArray, setLang, getCurrentLang } from "@/i18n";

export const Hero = () => {
  const [lang, setLangState] = useState(getCurrentLang());

  // Подписываемся на событие смены языка
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setLangState(e.detail);
    };
    window.addEventListener("languageChanged", handler as EventListener);

    return () => {
      window.removeEventListener("languageChanged", handler as EventListener);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    document.getElementById("projects")?.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  const services = tArray("hero.services");

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center text-center px-6 bg-gradient-hero hero-noise overflow-hidden"
    >
      {/* === Навигация (фиксированная и анимированная) === */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center items-center gap-6 md:gap-10 py-4 text-sm md:text-base font-medium text-text-secondary backdrop-blur bg-background/70 opacity-0 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
        aria-label="Main navigation"
      >
        <a href="#projects" className="hover:text-accent-green transition-colors">
          {t("nav.projects")}
        </a>
        <a href="#about" className="hover:text-accent-green transition-colors">
          {t("nav.about")}
        </a>
        <a href="#contact" className="hover:text-accent-green transition-colors">
          {t("nav.contact")}
        </a>
        <div className="flex items-center gap-2">
          {(["ru", "en", "uz"] as const).map((lng) => (
            <span
              key={lng}
              onClick={() => setLang(lng)}
              className={`cursor-pointer hover:text-accent-green ${
                lang === lng ? "text-accent-green font-semibold" : ""
              }`}
            >
              {lng.toUpperCase()}
            </span>
          ))}
        </div>
      </nav>

      {/* === Контент === */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center justify-center flex-1">
        {/* Имя */}
        <h1 className="font-inter font-extrabold leading-[0.95] text-[clamp(2.4rem,8vw,6.25rem)] tracking-tight">
          <span
            className="text-foreground block opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            MUKHSIN
          </span>
          <span
            className="text-accent-green block opacity-0 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            KAMOLOV
          </span>
        </h1>

        {/* Подзаголовок */}
        <div
          className="mt-5 md:mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="font-inter font-medium text-[clamp(1rem,3.2vw,1.6rem)] text-text-secondary tracking-wide">
            {t("hero.subtitle")}
          </p>
          <div className="w-24 h-[3px] bg-accent-green mx-auto mt-4" />
        </div>

        {/* === Услуги === */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6 text-[clamp(0.8rem,2.5vw,1rem)] text-text-secondary/80">
          {services.map((s, i) => (
            <span
              key={s}
              className="whitespace-nowrap opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2 + 1.2}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* === Индикатор скролла === */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={handleScroll}
          className="group inline-flex items-center justify-center w-12 h-12 rounded-full outline-none motion-safe:animate-bounce"
          aria-label={t("hero.scroll")}
        >
          <ArrowDown className="w-8 h-8 text-text-muted group-hover:text-accent-green transition-colors" />
        </button>
      </div>
    </section>
  );
};