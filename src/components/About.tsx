import profilePhoto from '@/assets/profile-photo.jpg';

/**
 * About Section - Краткий рассказ об опыте и навыках
 */
export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* About Text */}
          <div className="animate-fade-in-up lg:pr-16">
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-text-primary mb-8">
              ABOUT ME
            </h2>
            
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                Я в мире IT я с <span className="text-accent-green font-medium"> 2025 года</span>. Я являюсь fullstack разработчиком в 
                создании современных сайтов, ботов, приложений, CRM а также ERP систем. Специализируюсь на Python, React, Node.js и TypeScript.
              </p>
              
              <p>
                Работал с заказчиками разного уровня — от антрипринеров до крупных предпринимателей. 
                Люблю создавать чистый, производительный код и красивые пользовательские интерфейсы.
              </p>
              
              <p>
                Постоянно изучаю новые технологии и подходы к разработке. 
                <span className="text-accent-green font-medium"> Всегда открыт для интересных проектов</span> и новых вызовов.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-8">
              <h3 className="font-inter font-semibold text-2xl text-text-primary mb-4">
                Технологии
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
                  'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
                  'Tailwind CSS', 'Docker', 'Git'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-surface text-surface-foreground rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* About Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="bg-surface rounded-lg overflow-hidden ml-12">
                <img 
                  src={profilePhoto} 
                  alt="Mukhsin Kamolov"
                  className="w-[506px] h-[600px] object-cover rounded-lg -mt-14"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent-green rounded-lg -z-10"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};