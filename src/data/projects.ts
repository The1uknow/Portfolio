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
    title: "Boxing School",
    description: "Boxing School — это цифровая экосистема для современной спортивной школы бокса, которая объединяет сайт для лидогенерации, Telegram-бота для записи и оплаты занятий, а также удобную админ-панель для управления клубом.\n\nБлагодаря интеграции всех модулей Boxing School:\n1. клиенты получают максимально удобный способ записи и оплаты;\n2. владельцы школы экономят время и ресурсы на администрировании;\n 3. бизнес получает прозрачный инструмент для роста и масштабирования.",
    tech: ["HTML", "CSS", "React", "Python", "SQLAlchemy", "FastAPI", "Flusk", "pyTelegramBotAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/The1uknow/boxing_school",
    image: ecommerceImage
  },
  {
    id: "project-2", 
    title: "Eco Life Etiqod",
    description: "Eco Life Etiqod — это сайт курорта здоровья, который демонстрирует целебную родниковую воду, шведский стол и уютную семейную атмосферу. Сайт имеет адаптивный многостраничный дизайн с современным оформлением и плавными анимациями. Построен с использованием HTML, CSS, JavaScript и React, он обеспечивает удобный пользовательский опыт на всех устройствах.",
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