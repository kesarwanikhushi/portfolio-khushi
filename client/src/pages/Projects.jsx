import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - replace with actual API call
    const fetchProjects = async () => {
      try {
        // Uncomment when backend is ready
        // const response = await fetch('http://localhost:5000/api/projects');
        // const data = await response.json();
        // setProjects(data);
        
        // Using local data for now
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents
            a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id || project.id} project={project} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
