import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Galaxy } from './components/Galaxy';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio('/audio.mp4');
    audio.preload = 'auto';
    audio.volume = 0.4;

    const handleInteraction = async () => {
      try {
        await audio.play();
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
    };

    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
      document.addEventListener('click', handleInteraction, { once: true });
      document.addEventListener('scroll', handleInteraction, { once: true });
    });

    return () => {
      audio.pause();
      audio.src = '';
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-secondary relative">
      {/* Background Canvas */}
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Galaxy />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Canvas>

      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;