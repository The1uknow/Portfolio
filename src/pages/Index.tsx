import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

/**
 * Структура:
 * - Hero: имя и profession statement
 * - Projects: избранные проекты 
 * - About: краткий рассказ о себе
 * - Contact: контакты для связи
 */
const Index = () => {
  return (
    <main className="bg-background text-foreground font-inter overflow-x-hidden">
      <Hero />
      <Projects />
      <About />  
      <Contact />
    </main>
  );
};

export default Index;
