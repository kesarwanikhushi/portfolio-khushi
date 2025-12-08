import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import Card from './ui/Card';
import Badge from './ui/Badge';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group cursor-pointer">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image || 'https://via.placeholder.com/600x400'}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 bg-white text-dark-900 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 bg-dark-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-dark-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaGithub size={16} />
                Code
              </a>
            )}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="warning" size="sm">Featured</Badge>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors line-clamp-1">
            {project.title}
          </h3>
          {project.views > 0 && (
            <div className="flex items-center gap-1 text-dark-500 text-sm">
              <FaEye size={14} />
              <span>{project.views}</span>
            </div>
          )}
        </div>

        <p className="text-dark-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 4).map((tech, index) => (
            <Badge
              key={index}
              variant="primary"
              size="sm"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies?.length > 4 && (
            <Badge variant="gray" size="sm">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Category & Status */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-200">
          {project.category && (
            <span className="text-sm text-dark-500">
              {project.category}
            </span>
          )}
          {project.status && project.status !== 'completed' && (
            <Badge 
              variant={project.status === 'in-progress' ? 'warning' : 'gray'}
              size="sm"
            >
              {project.status === 'in-progress' ? 'In Progress' : 'Planned'}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
