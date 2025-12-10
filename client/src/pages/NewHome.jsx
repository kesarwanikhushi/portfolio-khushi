import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import MarqueeText from '../components/ui/MarqueeText';
import { projectsData } from '../data/projects';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Marquee */}
      <MarqueeText 
        text={['MERN Stack', 'Cloud Computing', 'DevOps', 'UI/UX Design', 'Full-Stack Development']}
        speed={30}
        className="bg-dark-900/30 border-y border-dark-800"
      />

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection projects={projectsData} />
      </section>

      {/* Education Section */}
      <section id="education">
        <EducationSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
