import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiEye, FiCode, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import GlowCard from '../components/ui/GlowCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projects';

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="overflow-x-hidden min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Heading */}
        <SectionHeading subtitle="All Projects" centered />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === category
                  ? 'bg-primary-500/20 border-primary-500 text-primary-400 shadow-[0_0_15px_rgba(var(--primary-rgb,148,163,184),0.15)]'
                  : 'bg-dark-800/50 border-dark-700 text-dark-400 hover:border-dark-500 hover:text-dark-200'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.08}>
              <GlowCard className="card-hover overflow-hidden group cursor-pointer h-full">
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

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 border border-primary-500/40 text-primary-300 backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  )}

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
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-dark-50 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.date && (
                      <span className="text-xs text-dark-500 whitespace-nowrap ml-2">
                        {project.date}
                      </span>
                    )}
                  </div>
                  <p className="text-dark-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <span key={i} className="badge-primary text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <span className="badge-primary text-xs">
                        +{project.technologies.length - 4}
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

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FiCode className="text-5xl text-dark-700 mx-auto mb-4" />
            <p className="text-dark-500 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default AllProjects;
