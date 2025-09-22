import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import type { SVGProps } from "react";

/** Универсальная карточка контакта */
type ContactLinkProps = {
  href: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  username: string;
};

const ContactLink = ({ href, icon: Icon, label, username }: ContactLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex items-center gap-4
        p-7 md:p-8
        bg-card border border-border-subtle rounded-lg
        hover:border-accent-green-muted hover:shadow-glow
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/60
        transition-all duration-300
      "
      aria-label={`${label}: ${username}`}
    >
      <span
        className="
          flex-shrink-0 grid place-items-center
          w-12 h-12 md:w-14 md:h-14
          rounded-lg bg-surface
          group-hover:bg-accent-green-muted
          transition-colors
        "
        aria-hidden="true"
      >
        <Icon
          className="
            w-6 h-6 md:w-7 md:h-7
            text-accent-green
            group-hover:text-background
            transition-colors
          "
        />
      </span>

      <span className="flex flex-col text-left">
        <span
          className="
            font-inter font-medium
            text-[clamp(1rem,2.4vw,1.125rem)]
            text-text-primary
            group-hover:text-accent-green
            transition-colors
          "
        >
          {label}
        </span>
        <span className="text-text-secondary text-sm md:text-[0.95rem]">
          {username}
        </span>
      </span>
    </a>
  );
};

/** Секция контактов */
export const Contact = () => {
  // аккуратно сформированная mailto (без пробелов и с экранированием)
  const mailto = (() => {
    const to = "kamolovmuhsin@icloud.com";
    const subject = encodeURIComponent("Лид с портфолио");
    const body = encodeURIComponent(
      "Здравствуйте, Мухсин!\n\nЯ пишу по поводу сотрудничества. Коротко о задаче: ..."
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  })();

  return (
    <section id="contact" className="py-24 md:py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Заголовок */}
        <div className="mb-14 md:mb-16 animate-fade-in-up">
          <h2
            className="
              font-inter font-bold
              text-[clamp(1.8rem,5vw,3rem)]
              text-text-primary
            "
          >
            LET'S CONNECT
          </h2>
          <p
            className="
              mt-4
              text-text-secondary leading-relaxed
              text-[clamp(1rem,2.6vw,1.25rem)]
              max-w-2xl mx-auto
            "
          >
            Заинтересованы в сотрудничестве? Напишите мне — обсудим ваш проект и найдём лучшее решение.
          </p>
          <div className="w-16 h-[3px] bg-accent-green mx-auto mt-6" aria-hidden="true" />
        </div>

        {/* Карточки контактов */}
        <div
          className="
            grid gap-6 md:gap-7
            grid-cols-1 md:grid-cols-2
            text-left
            animate-fade-in
          "
        >
          <ContactLink href={mailto} icon={Mail} label="Email" username="kamolovmuhsin@icloud.com" />

          <ContactLink
            href="https://github.com/The1uknow"
            icon={Github}
            label="GitHub"
            username="@The1uknow"
          />

          <ContactLink
            href="https://www.linkedin.com/in/kamolov-muhsin-9b7133360"
            icon={Linkedin}
            label="LinkedIn"
            username="Mukhsin Kamolov"
          />

          <ContactLink
            href="https://t.me/mukhsinus"
            icon={MessageCircle}
            label="Telegram"
            username="@mukhsinus"
          />
        </div>

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-8 pb-8 border-t border-border-subtle">
          <p className="text-text-muted text-sm">
            © 2025 made by Mukhsin Kamolov
          </p>
        </footer>
      </div>
    </section>
  );
};