import { ArrowDown } from 'lucide-react';

/**
 * Hero Section - Главная секция с именем и profession statement
 */
export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        {/* Main Title */}
        <h1 className="font-inter font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6">
          <span className="text-foreground">MUKHSIN</span>
          <br />
          <span className="text-accent-green">KAMOLOV</span>
        </h1>
        
        {/* Statement */}
        <div className="mb-12">
          <p className="font-inter font-medium text-xl md:text-2xl lg:text-3xl text-text-secondary tracking-wide mb-2">
            FULLSTACK DEVELOPER
          </p>
          <div className="w-24 h-1 bg-accent-green mx-auto"></div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="w-12 h-12 text-text-muted hover:text-accent-green transition-colors cursor-pointer" 
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          />
        </div>
      </div>
    </section>
  );
};