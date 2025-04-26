import { FC } from 'react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const Navigation: FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Jsonsharma</div>
          <div className="hidden md:flex space-x-2">
            <button onClick={() => scrollToSection('home')} className={`nav-item ${activeSection === 'home' ? 'text-primary' : ''}`}>Home</button>
            <button onClick={() => scrollToSection('about')} className={`nav-item ${activeSection === 'about' ? 'text-primary' : ''}`}>About</button>
            <button onClick={() => scrollToSection('work')} className={`nav-item ${activeSection === 'work' ? 'text-primary' : ''}`}>Work</button>
            <button onClick={() => scrollToSection('contact')} className={`nav-item ${activeSection === 'contact' ? 'text-primary' : ''}`}>Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};