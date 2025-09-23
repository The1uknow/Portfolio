import profilePhoto from "@/assets/profile-photo.jpg";
import { t, tArray } from "@/i18n";

export const About = () => {
  const paragraphs = tArray("about.paragraphs");
  const skills = tArray("about.skills");

  return (
    <section id="about" className="py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="font-inter font-bold text-[clamp(1.6rem,4.5vw,2.75rem)] text-text-primary mb-6">
            {t("about.title")}
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <h3 className="mt-8 font-inter font-semibold text-lg text-text-primary mb-4">
            {t("about.technologies")}
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <li key={s} className="px-3 py-2 bg-surface text-surface-foreground rounded-md font-medium text-sm whitespace-nowrap">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src={profilePhoto}
            alt={t("about.alt")}
            className="w-full h-auto object-cover aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
};