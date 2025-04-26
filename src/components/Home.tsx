import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Github, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { FloatingSphere } from './FloatingSphere';

interface HomeProps {
  scrollToSection: (sectionId: string) => void;
}

export const Home: FC<HomeProps> = ({ scrollToSection }) => {
  return (
    // <section id="home" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-7xl mx-auto w-full">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    //       <div className="space-y-8">
    //         <h1 className="text-6xl md:text-8xl font-bold leading-tight">
    //           <span className="gradient-text">Software</span><br />
    //           Developer &<br />
    //           Designer
    //         </h1>
    //         <p className="text-xl md:text-2xl text-secondary/80">
    //           Crafting digital experiences that push the boundaries of innovation
    //         </p>
    //         <div className="flex space-x-6">
    //           <button
    //             onClick={() => scrollToSection('contact')}
    //             className="flex items-center space-x-2 bg-primary text-secondary px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
    //           >
    //             <span>Let's Connect</span>
    //             <ChevronRight size={24} />
    //           </button>
    //           <div className="flex items-center space-x-4">
    //             <a href="https://github.com/prashantsharma97" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
    //               <Github size={28} />
    //             </a>
    //             <a href="https://x.com/prashantshar5" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
    //               <Twitter size={28} />
    //             </a>
    //             <a href="https://www.linkedin.com/in/prashant-sharma-ps565" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
    //               <Linkedin size={28} />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="relative h-[600px]">
    //         <Canvas camera={{ position: [0, 0, 5] }}>
    //           <ambientLight intensity={0.5} />
    //           <pointLight position={[10, 10, 10]} />
    //           <Suspense fallback={null}>
    //             <FloatingSphere />
    //           </Suspense>
    //           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    //         </Canvas>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="home" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 animate__fadeIn animate__animated">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span><br />
              of Tomorrow
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-secondary/80 backdrop-blur-sm">
              Full-stack developer specializing in creating innovative and futuristic web solutions that push the boundaries of digital interaction.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 bg-primary text-secondary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <span>Let's collaborate</span>
                <ChevronRight size={20} />
              </button>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/prashantsharma97" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://x.com/prashantshar5" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/prashant-sharma-ps565" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
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