import { ExternalLink, Github } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { t, getCurrentLang } from "@/i18n";

import ecoLifeImg from "@/assets/eco-life.webp";
import essenzaImg from "@/assets/essenza.webp";
import mediCareImg from "@/assets/medicare.webp";
import PitStopImg from "@/assets/PitStop One.webp";
import kodBekhzodImg from "@/assets/kodBekhzod.webp";
import ugcImg from "@/assets/ugc.webp";
import karolinaImg from "@/assets/karolina.webp";
import tfpImg from "@/assets/tfp.webp";
import ttpuPmsImg from "@/assets/ttpupms.webp";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
  image?: string;
};

const TechBadge = memo(({ label }: { label: string }) => (
  <span className="px-3 py-1 text-sm rounded-md font-medium bg-surface text-surface-foreground whitespace-nowrap">
    {label}
  </span>
));

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group flex flex-col h-full bg-card border border-border-subtle rounded-lg overflow-hidden hover:border-accent-green-muted hover:shadow-glow transition-all duration-300">
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

    <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
      <header>
        <h3 className="font-inter font-semibold text-[clamp(1.25rem,2.2vw,1.5rem)] text-text-primary">
          {project.title}
        </h3>
        <p className="mt-3 text-text-secondary leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
      </header>

      {project.tech?.length ? (
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t}>
              <TechBadge label={t} />
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium bg-accent-green text-background hover:bg-accent-green-muted transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {project.liveLabel ?? t("projects.liveDemo")}
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

export const Projects = () => {
  const [lang, setLangState] = useState(getCurrentLang());

  useEffect(() => {
    const handler = (e: CustomEvent) => setLangState(e.detail);
    window.addEventListener("languageChanged", handler as EventListener);
    return () => window.removeEventListener("languageChanged", handler as EventListener);
  }, []);

  const projects: Project[] = [
    {
      id: "project-1",
      title: t("projects.ecoLife.title"),
      description: t("projects.ecoLife.description"),
      tech: ["React", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://eco-life-etiqod.com",
      githubUrl: "https://github.com/pakhlavonKh/ecoLife",
      image: ecoLifeImg,
    },

    {
      id: "project-2",
      title: t("projects.essenza.title"),
      description: t("projects.essenza.description"),
      tech: ["React", "Vite", "TailwindCSS", "Node.js", "Prisma", "PostgreSQL", "Netlify", "Cloudflare"],
      liveUrl: "https://essenza-demo.netlify.app",
      githubUrl: "https://github.com/pakhlavonKh/essenza",
      image: essenzaImg,
    },

    {
      id: "project-3",
      title: t("projects.mediCare.title"),
      description: t("projects.mediCare.description"),
      tech: ["TypeScript", "Vite", "React", "Netlify", "TailwindCSS", "Cloudflare"],
      liveUrl: "https://medicare.uz",
      githubUrl: "https://github.com/mukhsinus/medical_care",
      image: mediCareImg,
    },

    {
      id: "project-4",
      title: t("projects.pitStopOne.title"),
      description: t("projects.pitStopOne.description"),
      tech: ["JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Git", "Netlify"],
      liveUrl: "https://pitstop-one.netlify.app",
      githubUrl: "https://github.com/mukhsinus/PitStop-One",
      image: PitStopImg,
    },

    {
      id: "project-5",
      title: t("projects.bekhzodCompetition.title"),
      description: t("projects.bekhzodCompetition.description"),
      tech: ["React", "TypeScript", "TailwindCSS", "Vite", "Netlify"],
      liveUrl: "https://kodbekhzod.netlify.app",
      image: kodBekhzodImg,
    },

    {
      id: "project-6",
      title: t("projects.ugcMarketplace.title"),
      description: t("projects.ugcMarketplace.description"),
      tech: ["React", "TypeScript", "TailwindCSS", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "Netlify"],
      liveUrl: "https://ugc-market.netlify.app",
      image: ugcImg,
    },

    {
      id: "project-7",
      title: t("projects.karolinaBeauty.title"),
      description: t("projects.karolinaBeauty.description"),
      tech: ["React", "TypeScript", "TailwindCSS", "Vite", "Node.js", "Express.js", "PostgreSQL", "Supabase", "REST API", "Telegram Bot", "Netlify"],
      liveUrl: "https://karolinabeauty.uz/",
      image: karolinaImg,
    },

    {
      id: "project-8",
      title: t("projects.vantaTfp.title"),
      description: t("projects.vantaTfp.description"),
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "REST API",
        "JWT",
        "RBAC",
        "i18n",
        "Netlify",
        "Responsive UI",
      ],
      liveUrl: "https://vantatfp.netlify.app",
      image: tfpImg,
    },

    {
      id: "project-9",
      title: t("projects.ttpuPms.title"),
      description: t("projects.ttpuPms.description"),
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "Telegram Bot API",
        "JWT",
        "RBAC",
        "REST API",
        "i18n",
        "Vercel",
      ],
      liveUrl: "https://t.me/TTPUpointsBot",
      liveLabel: "Open Bot",
      image: ttpuPmsImg,
    },

  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-inter font-bold text-[clamp(1.8rem,5vw,3rem)] text-text-primary">
            {t("projects.title")}
          </h2>
          <div className="w-16 h-[3px] bg-accent-green mx-auto mt-4" />
        </div>
        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};