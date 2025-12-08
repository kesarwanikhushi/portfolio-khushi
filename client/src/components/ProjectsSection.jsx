import { useState } from 'react';
import { FiGithub, FiExternalLink, FiEye, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';
import ProjectModal from './ProjectModal';

const ProjectsSection = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'fullstack', 'frontend', 'backend', 'ui/ux'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Sample projects if none provided
  const sampleProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack online shopping platform with secure payment integration',
      longDescription: 'A comprehensive e-commerce solution built with the MERN stack, featuring user authentication, product management, shopping cart, and secure payment processing.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & wishlist',
        'Secure payment integration',
        'Order tracking system',
        'Admin dashboard'
      ],
      category: 'fullstack',
      githubUrl: 'https://github.com/yourusername/project',
      liveUrl: 'https://project-demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      longDescription: 'A productivity tool for teams to organize and track tasks with real-time collaboration features.',
      image: '/projects/taskapp.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      features: [
        'Real-time collaboration',
        'Drag & drop interface',
        'Task prioritization',
        'Team workspaces',
        'Due date reminders'
      ],
      category: 'frontend',
      githubUrl: 'https://github.com/yourusername/project',
      liveUrl: 'https://project-demo.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and location tracking',
      longDescription: 'An intuitive weather application providing current conditions and forecasts with a modern UI.',
      image: '/projects/weather.jpg',
      technologies: ['React', 'Weather API', 'Chart.js', 'Tailwind CSS'],
      features: [
        '7-day forecast',
        'Location-based weather',
        'Interactive charts',
        'Favorite locations',
        'Weather alerts'
      ],
      category: 'frontend',
      githubUrl: 'https://github.com/yourusername/project',
      liveUrl: 'https://project-demo.com',
    },
  ];

  const displayProjects = projects.length > 0 ? filteredProjects : sampleProjects;

  return (
    <section className="section bg-dark-900/30 relative" id="projects">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="// My Work"
          title="Featured Projects"
          centered
        />

        {/* Filter buttons */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-500 text-white shadow-glow-sm'
                    : 'bg-dark-800 text-dark-400 hover:text-primary-400 border border-dark-700 hover:border-primary-500/50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <GlowCard className="card-hover overflow-hidden group cursor-pointer">
                {/* Project image */}
                <div className="relative h-48 bg-dark-800 overflow-hidden mb-4 rounded-lg">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                      <FiCode className="text-6xl text-dark-700" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent opacity-60" />
                  
                  {/* View Details overlay */}
                  <div className="absolute inset-0 bg-dark-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                    >
                      <FiEye className="mr-2" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-50 mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="badge-primary text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 3 && (
                      <span className="badge-primary text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
                      >
                        <FiGithub />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
                      >
                        <FiExternalLink />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
