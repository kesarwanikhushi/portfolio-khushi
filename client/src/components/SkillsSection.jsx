import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, 
  SiTailwindcss, SiGit, SiDocker, SiFigma,
  SiPython, SiFlask, SiKubernetes, SiPostman, SiMicrosoftazure,
  SiC, SiCplusplus, SiHtml5, SiCss3, SiVercel
} from 'react-icons/si';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Design & Frontend',
      color: 'from-primary-500 to-primary-600',
      skills: [
        { name: 'React', icon: SiReact, level: 90 },
        { name: 'JavaScript', icon: SiJavascript, level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
        { name: 'Figma', icon: SiFigma, level: 85 },
        { name: 'HTML5', icon: SiHtml5, level: 90 },
        { name: 'CSS3', icon: SiCss3, level: 85 },
      ],
    },
    {
      title: 'Backend & Languages',
      color: 'from-secondary-500 to-secondary-600',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 85 },
        { name: 'Express.js', icon: SiExpress, level: 85 },
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'Python', icon: SiPython, level: 75 },
        { name: 'Flask', icon: SiFlask, level: 70 },
        { name: 'C/C++', icon: SiCplusplus, level: 70 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      color: 'from-accent-500 to-accent-600',
      skills: [
        { name: 'Docker', icon: SiDocker, level: 80 },
        { name: 'Kubernetes', icon: SiKubernetes, level: 75 },
        { name: 'Azure', icon: SiMicrosoftazure, level: 70 },
        { name: 'Git', icon: SiGit, level: 90 },
        { name: 'Postman', icon: SiPostman, level: 85 },
        { name: 'Vercel', icon: SiVercel, level: 80 },
      ],
    },
  ];

  return (
    <section className="section bg-dark-900/50 relative" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="// My Toolkit"
          title="Skills & Technologies"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.1}>
              <div className="card-hover p-8">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className="text-2xl text-primary-400 group-hover:scale-110 transition-transform" />
                          <span className="text-dark-200 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-dark-500 font-mono">{skill.level}%</span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut' 
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech badges */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['Full-Stack Development', 'DevOps', 'UI/UX Design', 'API Development', 'Azure AI Certified', 'OAuth 2.0', 'PWA'].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="badge-glow cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
