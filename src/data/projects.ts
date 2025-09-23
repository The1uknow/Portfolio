import ecommerceImage from '@/assets/ecommerce-project.jpg';
import taskAppImage from '@/assets/task-app-project.jpg';
import { t } from "@/i18n";

/**
 * 
 * Каждый проект должен иметь:
 * - id: уникальный идентификатор
 * - title: название проекта
 * - description: краткое описание
 * - tech: используемые технологии
 * - liveUrl: ссылка на живой проект
 * - githubUrl: ссылка на GitHub (опционально)
 * - image: изображение проекта
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Boxing School",
    description: t("projects.boxingSchool.description"),
    tech: ["HTML", "CSS", "React", "Python", "SQLAlchemy", "FastAPI", "Flusk", "pyTelegramBotAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/The1uknow/boxing_school",
    image: ecommerceImage
  },
  {
    id: "project-2", 
    title: "Eco Life Etiqod",
    description: t("projects.ecoLife.description"),
    tech: ["HTML", "CSS", "Java Script", "React"],
    liveUrl: "https://eco-life-etiqod.com",
    githubUrl: "https://github.com/pakhlavonKh/ecoLife",
    image: taskAppImage
  }
];

// Функция для получения всех проектов
export const getProjects = (): Project[] => {
  return projects;
};

// Функция для получения проекта по ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};