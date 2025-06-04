import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  status: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <div className="bg-secondary/5 rounded-lg backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-300 group shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-white-200">
      {/* Project Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white-900 mb-2">{project.title}</h3>

        {/* Subtitle */}
        <p className="text-sm text-green-600 font-medium mb-3">{project.subtitle}</p>

        {/* Description */}
        <p className="text-white-600 text-sm leading-relaxed mb-4 line-clamp-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white-100 text-white-700 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-green-600 font-medium flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            {project.status}
          </span>
          <button
            onClick={() => onViewDetails(project)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="text-sm font-medium">View Details</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
