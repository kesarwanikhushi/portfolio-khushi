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
        { name: 'React', icon: SiReact, iconColor: 'text-[#61DAFB]' },
        { name: 'JavaScript', icon: SiJavascript, iconColor: 'text-[#F7DF1E]' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, iconColor: 'text-[#06B6D4]' },
        { name: 'Figma', icon: SiFigma, iconColor: 'text-[#F24E1E]' },
        { name: 'HTML5', icon: SiHtml5, iconColor: 'text-[#E34F26]' },
        { name: 'CSS3', icon: SiCss3, iconColor: 'text-[#1572B6]' },
      ],
    },
    {
      title: 'Backend & Languages',
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, iconColor: 'text-[#339933]' },
        { name: 'Express.js', icon: SiExpress, iconColor: 'text-[#ffffff]' },
        { name: 'MongoDB', icon: SiMongodb, iconColor: 'text-[#47A248]' },
        { name: 'Python', icon: SiPython, iconColor: 'text-[#3776AB]' },
        { name: 'Flask', icon: SiFlask, iconColor: 'text-[#ffffff]' },
        { name: 'C/C++', icon: SiCplusplus, iconColor: 'text-[#00599C]' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Docker', icon: SiDocker, iconColor: 'text-[#2496ED]' },
        { name: 'Kubernetes', icon: SiKubernetes, iconColor: 'text-[#326CE5]' },
        { name: 'Azure', icon: SiMicrosoftazure, iconColor: 'text-[#0078D4]' },
        { name: 'Git', icon: SiGit, iconColor: 'text-[#F05032]' },
        { name: 'Postman', icon: SiPostman, iconColor: 'text-[#FF6C37]' },
        { name: 'Vercel', icon: SiVercel, iconColor: 'text-[#ffffff]' },
      ],
    },
  ];

  return (
    <section className="section relative py-20" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="My Toolkit"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.1}>
              <motion.div 
                className="relative p-6 rounded-2xl bg-dark-800/40 border border-dark-700 hover:border-gray-600 transition-all duration-300 overflow-hidden group backdrop-blur-sm"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(128, 128, 128, 0.1)" }}
              >
                {/* Grey overlay on hover */}
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <h3 className={`text-lg font-bold mb-5 text-primary-400 relative z-10`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-dark-900/60 hover:bg-dark-900/80 border border-dark-700/50 hover:border-primary-500/40 transition-all duration-300 cursor-default group/skill min-h-[90px]"
                      >
                        <Icon className={`text-3xl ${skill.iconColor} group-hover/skill:scale-110 transition-transform duration-300 drop-shadow-lg`} />
                        <span className="text-base text-dark-200 font-medium text-center leading-tight">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech badges */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 flex flex-wrap justify-center gap-3 px-4">
            {['Full-Stack Development', 'DevOps', 'UI/UX Design', 'API Development', 'Azure AI Certified', 'OAuth 2.0', 'PWA'].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-dark-800/60 border border-dark-700 text-dark-300 text-sm font-medium hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300 cursor-default"
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
