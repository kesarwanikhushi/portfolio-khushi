import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            About Me
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            I'm a passionate full-stack developer specializing in the MERN stack.
            I love building scalable web applications and learning new technologies.
          </p>
          <div className="text-center">
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Check out some of my recent work
          </p>
          <div className="text-center">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg mb-8">
            Have a project in mind? Let's discuss how I can help.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
