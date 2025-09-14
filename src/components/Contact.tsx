import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

/**
 * Contact Link Component
 */
const ContactLink = ({ 
  href, 
  icon: Icon, 
  label, 
  username 
}: {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
  username: string;
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-6 bg-card border border-border-subtle rounded-lg hover:border-accent-green-muted transition-all duration-300 hover:shadow-glow"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-lg flex items-center justify-center group-hover:bg-accent-green-muted transition-colors">
        <Icon className="w-6 h-6 text-accent-green group-hover:text-background transition-colors" />
      </div>
      
      <div>
        <h3 className="font-inter font-medium text-text-primary group-hover:text-accent-green transition-colors">
          {label}
        </h3>
        <p className="text-text-secondary text-sm">
          {username}
        </p>
      </div>
    </a>
  );
};

/**
 * Contact Section - Контакты для связи
 */
export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 pb-0">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            LET'S CONNECT
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Заинтересованы в сотрудничестве? Напишите мне — обсудим ваш проект и найдем лучшее решение.
          </p>
          <div className="w-16 h-1 bg-accent-green mx-auto mt-6"></div>
        </div>
        
        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <ContactLink 
            href="mailto:kamolovmuhsin@icloud.com?subject=Лид%20с%20портфолио&body=здравствуйте, ..."
            icon={Mail}
            label="Email"
            username="kamolovmuhsin@icloud.com"
          />
          
          <ContactLink 
            href="https://github.com/The1uknow"
            icon={Github}
            label="GitHub"
            username="@The1uknow"
          />
          
          <ContactLink 
            href="https://www.linkedin.com/in/kamolov-muhsin-9b7133360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            icon={Linkedin}
            label="LinkedIn"
            username="Mukhsin Kamolov"
          />
          
          <ContactLink 
            href="https://t.me/mukhsinus"
            icon={MessageCircle}
            label="Telegram"
            username="@mukhsinus"
          />
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 pb-8 border-t border-border-subtle">
          <p className="text-text-muted text-sm">
            © 2025 made by Mukhsin Kamolov
          </p>
        </div>
        
      </div>
    </section>
  );
};