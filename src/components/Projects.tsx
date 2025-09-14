import { ExternalLink, Github } from 'lucide-react';
import { getProjects, type Project } from '@/data/projects';

/**
 * Project Card Component
 */
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group bg-card border border-border-subtle rounded-lg overflow-hidden hover:border-accent-green-muted transition-all duration-300 hover:shadow-glow flex flex-col">
  {/* Project Image */}
  <div className="aspect-video bg-surface overflow-hidden">
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
  
  {/* Project Content */}
  <div className="p-8 flex flex-col justify-between flex-1">
    {/* Верхняя часть */}
    <div>
      <h3 className="font-inter font-semibold text-2xl text-text-primary mb-4">
        {project.title}
      </h3>
      
      <p className="text-text-secondary leading-relaxed mb-6 whitespace-pre-line">
        {project.description}
      </p>
    </div>

    {/* Нижняя часть */}
    <div>
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 text-sm bg-surface text-surface-foreground rounded-md font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex gap-4">
        <a 
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green text-background font-medium rounded-md hover:bg-accent-green-muted transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
        
        {project.githubUrl && (
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle text-text-primary hover:border-accent-green hover:text-accent-green transition-colors rounded-md"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
</div>
  );
};

/**
 * Projects Section - Блок с проектами портфолио
 */
export const Projects = () => {
  const projects = getProjects();

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            SELECTED WORK
          </h2>
          <div className="w-16 h-1 bg-accent-green mx-auto"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="mx-auto max-w-[90vw] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};