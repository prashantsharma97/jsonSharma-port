import { FC } from 'react';
import { ExternalLink } from 'lucide-react';

export const Work: FC = () => {
  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
      <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((item) => (
          <div key={item} className="group relative overflow-hidden rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 ease-in-out">
            <img
              src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`}
              alt={`Project ${item}`}
              className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                <p className="text-secondary/80 mb-4">A brief description of the project and the technologies used.</p>
                <a href="#" className="flex items-center space-x-2 text-primary hover:underline">
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};