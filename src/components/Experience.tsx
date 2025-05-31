import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "Blockchain Developer",
    company: "Freelance",
    duration: "2022 - Present",
    description: "Developing smart contracts and DApps using Solidity and Web3.js. Creating and deploying NFT collections and DeFi protocols. Implementing blockchain solutions for various client projects."
  },
  {
    id: 2,
    title: "Smart Contract Developer",
    company: "Blockchain Projects",
    duration: "2022 - Present",
    description: "Building and auditing smart contracts for DeFi protocols. Implementing ERC standards for tokens and NFTs. Optimizing gas efficiency and ensuring contract security."
  },
  {
    id: 3,
    title: "DApp Developer",
    company: "Web3 Projects",
    duration: "2022 - Present",
    description: "Creating decentralized applications with React.js and Web3 technologies. Integrating wallets and smart contracts. Building user interfaces for blockchain applications."
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            My professional journey and roles I've held over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1.5 md:-translate-x-2"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <Briefcase size={20} className="text-primary mr-2" />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <h4 className="text-lg font-medium mb-2">{item.company}</h4>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.duration}</span>
                    </div>
                    <p className="text-card-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;