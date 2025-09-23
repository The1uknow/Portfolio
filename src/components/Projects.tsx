// src/components/Projects.tsx
import { ExternalLink, Github } from "lucide-react";
import { memo } from "react";
import { t } from "@/i18n";

// импортируем картинки из src/assets
import boxingSchoolImg from "@/assets/boxing-school.jpg";
import ecoLifeImg from "@/assets/eco-life.jpg";

// Тип проекта
type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

// Бейдж технологии
const TechBadge = memo(({ label }: { label: string }) => (
  <span className="px-3 py-1 text-sm rounded-md font-medium bg-surface text-surface-foreground whitespace-nowrap">
    {label}
  </span>
));

// Карточка проекта
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group flex flex-col h-full bg-card border border-border-subtle rounded-lg overflow-hidden hover:border-accent-green-muted hover:shadow-glow transition-all duration-300">
      {/* Картинка проекта */}
      <div className="bg-surface overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="aspect-[16/9] w-full grid place-items-center bg-zinc-900 text-zinc-400">
            {t("projects.noPreview")}
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
        <header>
          <h3 className="font-inter font-semibold text-[clamp(1.25rem,2.2vw,1.5rem)] text-text-primary">
            {project.title}
          </h3>
          <p className="mt-3 text-text-secondary leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </header>

        {/* Технологии */}
        {project.tech?.length ? (
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t}>
                <TechBadge label={t} />
              </li>
            ))}
          </ul>
        ) : null}

        {/* Действия */}
        <div className="mt-auto flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium bg-accent-green text-background hover:bg-accent-green-muted transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t("projects.live")} {/* 🔥 фиксированный ключ */}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium border border-border-subtle text-text-primary hover:border-accent-green hover:text-accent-green transition-colors"
            >
              <Github className="w-4 h-4" />
              {t("projects.code")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

// Секция проектов
export const Projects = () => {
  const projects: Project[] = [
    {
      id: "project-1",
      title: t("projects.boxingSchool.title"),
      description: t("projects.boxingSchool.description"),
      tech: ["React", "Node.js", "Telegram Bot", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/The1uknow/boxing_school",
      image: boxingSchoolImg, // ✅ правильный импорт
    },
    {
      id: "project-2",
      title: t("projects.ecoLife.title"),
      description: t("projects.ecoLife.description"),
      tech: ["React", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://eco-life-etiqod.com",
      githubUrl: "https://github.com/pakhlavonKh/ecoLife",
      image: ecoLifeImg, // ✅ правильный импорт
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-inter font-bold text-[clamp(1.8rem,5vw,3rem)] text-text-primary">
            {t("projects.title")}
          </h2>
          <div className="w-16 h-[3px] bg-accent-green mx-auto mt-4" />
        </div>

        {/* Сетка проектов */}
        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};