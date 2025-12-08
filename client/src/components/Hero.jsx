import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Full Stack Developer | MERN Stack Specialist
        </p>
        
        {/* Description */}
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I build modern web applications with React, Node.js, Express, and MongoDB.
          Passionate about creating clean, efficient, and user-friendly solutions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
