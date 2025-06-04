import { FC, Suspense } from 'react';
import { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Github, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { FloatingSphere } from './FloatingSphere';
import pdf from '/Prashant_Sharma_Full_Stack_Linkedin.pdf';

interface HomeProps {
  scrollToSection: (sectionId: string) => void;
}

const openHandler = () => {
  window.open(pdf, "_blank");
};

export const Home: FC<HomeProps> = ({ scrollToSection }) => {
  const titles = [
    "Software Engineer",
    "MERN Stack Developer",
    "Full Stack Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      setFadeKey((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 animate__fadeIn animate__animated">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Prashant Sharma</span><br />
            <span
              key={fadeKey}
              className="block animate-fade-in-up"
            >
              {titles[currentIndex]}
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-secondary/80 backdrop-blur-sm">
            I'm a full-stack developer specializing in modern web technologies.
            I design and build scalable, high-performance applications with clean code and creative vision.
            My focus is on delivering seamless user experiences that feel futuristic.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={openHandler}
              className="flex items-center space-x-2 bg-primary text-secondary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>View Resume</span>
              <ChevronRight size={20} />
            </button>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/prashantsharma97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://x.com/prashantshar5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/prashant-sharma-ps565"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="sphere">
            {[1, 2, 3, 4].map((layer) => (
              <div key={layer} className="sphere-layer" />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="floating-dots"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};