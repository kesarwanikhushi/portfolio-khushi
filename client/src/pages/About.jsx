import { skillsData } from '../data/skills';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for web development.
          </p>
        </div>

        {/* Bio Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Who I Am
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I'm a full-stack developer with a passion for creating elegant solutions
            to complex problems. My journey in web development started with a curiosity
            about how websites work, and it has evolved into a fulfilling career.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and
            love building responsive, user-friendly applications that make a difference.
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technical Skills
          </h2>
          
          {/* Frontend Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.backend.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Tools & Others
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
