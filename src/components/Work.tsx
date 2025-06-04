

import { ProjectCard } from "./reuseComponent/ProjectCard";
import { useState } from "react";
import { ProjectDetailModal } from "./reuseComponent/ProjectDetailModal";

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: "AI Resume Analyzer",
      subtitle: "A Web application for AI Resume Analyzer",
      description: "Web application that uses AI to analyze and provide insights from resumes, helping streamline the recruitment process.",
      technologies: ["GeminiAI", "AI", "React", "lucide-react", "Node.js"],
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
      status: "Live Project",
      link: "https://resume-analyzer-green.vercel.app/"
    },
    {
      id: 2,
      title: "Blockchain Todo DApp",
      subtitle: "A Web application for Add todo list in Blockchain Todo DApp",
      description: "Decentralized Todo application built on blockchain technology with MetaMask wallet integration for secure task management.",
      technologies: ["Blockchain", "Web3", "wagmi", "lucide-react", "React"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
      status: "Live Project",
      link: "https://todo-list-dapp-seven.vercel.app/"
    },
    {
      id: 3,
      title: "Saloon Booking System",
      subtitle: "A real-time slot booking system and reflecting technician availability slot",
      description: "Designed and developed a real-time slot booking system reflecting technician availability and enabled users to browse detailed service info.",
      technologies: ["React", "Plivo", "quagga", "html5-qrcode", "plivo-browser-sdk", "Node.js", "MongoDB"],
      image: "/vnail.png",
      status: "Live Project",
      link: "https://vnail360.com"
    },
    {
      id: 4,
      title: "Laundry & Dry Clean Services",
      subtitle: "A project for designing laundry & dry clean services with intelligent delivery system",
      description: "Designed and implemented an intelligent delivery agent assignment feature using real-time location data.",
      technologies: ["React", "Node.js", "MySQL", "Firebase"],
      image: "/washApp.png",
      status: "Live Project",
      link: "https://www.washapp.fi"
    },
    {
      id: 5,
      title: "Gurudwara Booking Management",
      subtitle: "A system for Gurudwara langar and booking management",
      description: "Implemented profile management features for admins to update services, events, and langar schedules.",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      image: "/ardaas_logo.png",
      status: "Live Project",
      link: "http://karoardaas.com"
    },
    {
      id: 6,
      title: "365 Entertainment Website",
      subtitle: "Event promotion platform for DJs and entertainment services",
      description: "Engineered a responsive web platform to promote DJ and event services for weddings, corporates, and private events.",
      technologies: ["React", "Tailwind", "Node.js"],
      image: "/365.png",
      status: "Live Project",
      link: "https://365ents.ie/"
    },
    {
      id: 7,
      title: "IT Portfolio",
      subtitle: "A portfolio website showcasing IT and creative projects",
      description: "Engineered a dynamic and responsive website using WordPress, showcasing modern design and user-friendly interface.",
      technologies: ["WordPress", "PHP", "MySQL"],
      image: "/motion.png",
      status: "Live",
      link: "https://motionvillee.com/"
    },
    {
      id: 8,
      title: "Facility Management",
      subtitle: "Facility and support service management website",
      description: "Management services, ensuring seamless operations, safety, and maintenance for your business.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/consult.png",
      status: "Live Project",
      link: "https://www.starlinesupportservices.in/"
    },
    {
      id: 9,
      title: "Fantasy Football App",
      subtitle: "A fantasy football league management app",
      description: "The ACME Real Fantasy Football League is the most competitive realistic coaching experience for a 12-team league.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/acme.png",
      status: "Live Project",
      link: "https://acmerealfantasyfootball.com"
    }
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
      <div className="min-h-screen bg-tranparent">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-white-900 mb-4">My Projects</h1>
            <p className="text-lg text-white-600">A showcase of my work across various technologies</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-lg text-white-600">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </main>

        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

