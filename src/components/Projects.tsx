import { ExternalLink, Github } from "lucide-react";
import { getProjects, type Project } from "@/data/projects";
import { memo } from "react";

/** Вспомогательный компонент — бейдж технологии */
const TechBadge = memo(({ label }: { label: string }) => (
  <span
    className="
      px-3 py-1 text-sm rounded-md font-medium
      bg-surface text-surface-foreground
      whitespace-nowrap
    "
  >
    {label}
  </span>
));

/** Карточка проекта с нормальным адаптивом и a11y */
const ProjectCard = ({ project }: { project: Project }) => {
  const hasImage = Boolean(project.image);

  return (
    <article
      className="
        group flex flex-col h-full
        bg-card border border-border-subtle rounded-lg overflow-hidden
        transition-all duration-300
        hover:border-accent-green-muted hover:shadow-glow
        focus-within:border-accent-green-muted
      "
    >
      {/* Изображение проекта */}
      <div className="bg-surface overflow-hidden">
        {hasImage ? (
          <img
            src={project.image!}
            alt={project.title || "Project preview"}
            className="
              w-full h-auto object-cover
              aspect-[16/9]
              transition-transform duration-300
              group-hover:scale-[1.03]
            "
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div
            className="
              aspect-[16/9] w-full
              grid place-items-center
              bg-gradient-to-br from-zinc-900 to-zinc-800
              text-zinc-400 text-sm
            "
            aria-hidden="true"
          >
            No preview
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
        {/* Заголовок + описание */}
        <header>
          <h3
            className="
              font-inter font-semibold
              text-[clamp(1.25rem,2.2vw,1.5rem)]
              text-text-primary
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-3 text-text-secondary leading-relaxed
              break-words whitespace-pre-line
            "
          >
            {project.description}
          </p>
        </header>

        {/* Стек технологий */}
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
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-md font-medium
                bg-accent-green text-background
                hover:bg-accent-green-muted
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/60
                transition-colors
              "
              aria-label={`Open live demo: ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-md font-medium
                bg-zinc-800 text-zinc-400 cursor-not-allowed
              "
              aria-disabled="true"
              title="Live Demo недоступна"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Live Demo
            </button>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-md font-medium
                border border-border-subtle text-text-primary
                hover:border-accent-green hover:text-accent-green
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/60
                transition-colors
              "
              aria-label={`Open source code: ${project.title}`}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

/** Секция с проектами */
export const Projects = () => {
  const projects = getProjects();

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-14 md:mb-16 animate-fade-in-up">
          <h2
            className="
              font-inter font-bold
              text-[clamp(1.8rem,5vw,3rem)]
              text-text-primary
            "
          >
            SELECTED WORK
          </h2>
          <div className="w-16 h-[3px] bg-accent-green mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* Сетка проектов */}
        <div
          className="
            grid gap-8 md:gap-10
            grid-cols-1 md:grid-cols-2
          "
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};