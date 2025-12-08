import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaRocket, FaPalette } from 'react-icons/fa';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Loading from '../components/ui/Loading';
import { projectsAPI } from '../services/api';
import toast from 'react-hot-toast';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const response = await projectsAPI.getFeatured();
      setFeaturedProjects(response.data.slice(0, 3));
    } catch (error) {
      toast.error('Failed to load featured projects');
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Building fast, optimized applications for the best user experience',
    },
    {
      icon: FaPalette,
      title: 'Modern Design',
      description: 'Creating beautiful, responsive interfaces with attention to detail',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{feature.title}</h3>
                  <p className="text-dark-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-dark-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Check out some of my recent work and projects I've built
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loading size="lg" text="Loading projects..." />
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {featuredProjects.map((project) => (
                <motion.div key={project._id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg">
                View All Projects <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-primary-100 mb-8">
              Have a project in mind? Let's create something amazing together.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-primary-50 border-white">
                Get In Touch <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
