import { FC } from 'react';
import { Code, Database, Globe } from 'lucide-react';

export const About: FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-secondary/80">
              <p>
                Hi, I'm Prashant Sharma, a passionate Software Developer with expertise in creating innovative digital solutions. I specialize in full-stack development, focusing on building scalable and user-centric applications.
              </p>
              <p>
                With a strong foundation in modern web technologies and a keen eye for design, I bring ideas to life through clean code and intuitive user experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-secondary/5 rounded-lg backdrop-blur-sm">
                  <Code className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                  <p className="text-sm">React, Vue, TypeScript</p>
                </div>
                <div className="p-6 bg-secondary/5 rounded-lg backdrop-blur-sm">
                  <Database className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend</h3>
                  <p className="text-sm">Node.js, Laravel </p>
                </div>
                <div className="p-6 bg-secondary/5 rounded-lg backdrop-blur-sm">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                  <p className="text-sm">Docker, AWS, CI/CD</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000"
              alt="Developer workspace"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};