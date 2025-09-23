import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import type { SVGProps } from "react";
import { t } from "@/i18n";

type ContactLinkProps = {
  href: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  username: string;
};

const ContactLink = ({ href, icon: Icon, label, username }: ContactLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 p-7 md:p-8 bg-card border border-border-subtle rounded-lg hover:border-accent-green-muted hover:shadow-glow transition-all duration-300"
  >
    <span className="flex-shrink-0 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-lg bg-surface group-hover:bg-accent-green-muted transition-colors">
      <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent-green group-hover:text-background" />
    </span>
    <span className="flex flex-col text-left">
      <span className="font-inter font-medium text-lg text-text-primary group-hover:text-accent-green">
        {label}
      </span>
      <span className="text-text-secondary text-sm">{username}</span>
    </span>
  </a>
);

export const Contact = () => {
  const mailto = `mailto:kamolovmuhsin@icloud.com?subject=${encodeURIComponent(
    t("contact.mailSubject")
  )}`;

  return (
    <section id="contact" className="py-24 md:py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-inter font-bold text-[clamp(1.8rem,5vw,3rem)] text-text-primary">
          {t("contact.title")}
        </h2>
        <p className="mt-4 text-text-secondary">{t("contact.subtitle")}</p>
        <div className="w-16 h-[3px] bg-accent-green mx-auto mt-6" />

        <div className="mt-12 grid gap-6 md:gap-7 grid-cols-1 md:grid-cols-2">
          <ContactLink href={mailto} icon={Mail} label={t("contact.email")} username="kamolovmuhsin@icloud.com" />
          <ContactLink href="https://github.com/The1uknow" icon={Github} label={t("contact.github")} username="@The1uknow" />
          <ContactLink href="https://www.linkedin.com/in/kamolov-muhsin-9b7133360" icon={Linkedin} label={t("contact.linkedin")} username="Mukhsin Kamolov" />
          <ContactLink href="https://t.me/mukhsinus" icon={MessageCircle} label={t("contact.telegram")} username="@mukhsinus" />
        </div>

        <footer className="mt-16 border-t border-border-subtle pt-8">
          <p className="text-text-muted text-sm">{t("contact.footer")}</p>
        </footer>
      </div>
    </section>
  );
};