import ecommerceImage from '@/assets/ecommerce-project.jpg';
import taskAppImage from '@/assets/task-app-project.jpg';

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
    title: "E-Commerce Platform",
    description: "Полнофункциональная платформа электронной коммерции с современным дизайном, корзиной покупок, и системой платежей.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    image: ecommerceImage
  },
  {
    id: "project-2", 
    title: "Task Management App",
    description: "Минималистичное приложение для управления задачами с drag-and-drop функциональностью и real-time обновлениями.",
    tech: ["React", "Firebase", "TypeScript", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
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