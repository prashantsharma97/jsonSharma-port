import { ExternalLink, Calendar, Users, Code, Target, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  status: string;
  link: string;
  detailedDescription?: string;
  features?: string[];
  duration?: string;
  teamSize?: string;
  role?: string;
  challenges?: string[];
  results?: string[];
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
          <p className="text-blue-600 font-medium text-lg">{project.subtitle}</p>
        </div>
        
        <div className="px-6 pb-6 space-y-8">
          {/* Project Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 font-medium">Duration</p>
                <p className="text-gray-900 font-semibold">{project.duration || "3-6 months"}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 font-medium">Team Size</p>
                <p className="text-gray-900 font-semibold">{project.teamSize || "2-4 people"}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Code className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 font-medium">My Role</p>
                <p className="text-gray-900 font-semibold">{project.role || "Full Stack Developer"}</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.detailedDescription || project.description + " This project involved comprehensive planning, development, and deployment phases. I worked closely with stakeholders to ensure all requirements were met while maintaining high code quality and user experience standards."}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {(project.features || [
                "Responsive design for all device types",
                "Real-time data processing and updates",
                "Secure authentication and authorization",
                "Optimized performance and fast loading times",
                "Clean and intuitive user interface"
              ]).map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges & Solutions</h3>
            <div className="space-y-4">
              {(project.challenges || [
                "Implementing real-time features while maintaining performance",
                "Ensuring cross-browser compatibility and responsive design",
                "Integrating multiple third-party APIs seamlessly"
              ]).map((challenge, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-800">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Results & Impact</h3>
            <ul className="space-y-3">
              {(project.results || [
                "Improved user engagement by 40%",
                "Reduced loading time by 60%",
                "Successfully deployed and maintained with 99.9% uptime",
                "Positive feedback from users and stakeholders"
              ]).map((result, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live Project</span>
            </a>
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};