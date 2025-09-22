import profilePhoto from "@/assets/profile-photo.jpg";

/**
 * About Section — краткий рассказ об опыте и навыках
 */
const SKILLS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Git",
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* About Text */}
          <div className="animate-fade-in-up md:pr-6 lg:pr-12">
            <h2
              className="
                font-inter font-bold
                text-[clamp(1.6rem,4.5vw,2.75rem)]
                text-text-primary
                mb-6
              "
            >
              ABOUT ME
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed text-[clamp(1rem,2.6vw,1.125rem)]">
              <p>
                Я в мире IT{" "}
                <span className="text-accent-green font-medium">с 2025 года</span>.
                Я — full-stack разработчик: создаю современные сайты, Telegram-боты,
                веб-приложения, а также CRM/ERP-системы. Специализируюсь на Python,
                React, Node.js и TypeScript.
              </p>

              <p>
                Работал с заказчиками разного уровня — от предпринимателей до крупных компаний.
                Люблю писать чистый, производительный код и делать понятные интерфейсы.
              </p>

              <p>
                Постоянно изучаю новые технологии и подходы к разработке.{" "}
                <span className="text-accent-green font-medium">
                  Открыт для интересных проектов
                </span>{" "}
                и новых вызовов.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="font-inter font-semibold text-[clamp(1.1rem,3.2vw,1.5rem)] text-text-primary mb-4">
                Технологии
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="
                      px-3 py-2
                      bg-surface text-surface-foreground
                      rounded-md font-medium
                      text-sm
                      whitespace-nowrap
                    "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About Image */}
          <div className="animate-fade-in">
            <div
              className="
                relative
                max-w-md md:max-w-lg lg:max-w-xl
                mx-auto
              "
            >
              <div className="bg-surface rounded-xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Портрет Мухсина Камолова"
                  className="w-full h-auto object-cover aspect-[5/6]"
                  loading="lazy"
                />
              </div>

              {/* Decorative Element (скрываем на мобилках, чтобы не ломал макет) */}
              <div
                className="
                  hidden md:block
                  absolute -top-4 -right-4
                  w-20 h-20 lg:w-24 lg:h-24
                  border border-accent-green
                  rounded-lg -z-10
                "
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};