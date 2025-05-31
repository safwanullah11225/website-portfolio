import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  { name: "Solidity", percentage: 90 },
  { name: "Smart Contracts", percentage: 85 },
  { name: "JavaScript", percentage: 85 },
  { name: "Web3.js", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "React", percentage: 80 },
  { name: "Blockchain", percentage: 85 },
  { name: "DeFi", percentage: 75 },
  { name: "NFTs", percentage: 80 },
  { name: "AI", percentage: 70 },
];

// Group skills into two columns
const groupedSkills = [
  skillsData.slice(0, Math.ceil(skillsData.length / 2)),
  skillsData.slice(Math.ceil(skillsData.length / 2)),
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with on a regular basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {groupedSkills.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="space-y-6">
              {column.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: columnIndex === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: columnIndex === 0 ? -30 : 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <motion.div
                      className="bg-primary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {["React", "TypeScript", "Node.js", "JavaScript", "HTML", "CSS", "MongoDB", "Python"].map((tech, index) => (
            <div 
              key={tech} 
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                {/* This would be better with actual tech icons */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{tech.charAt(0)}</span>
                </div>
              </div>
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;