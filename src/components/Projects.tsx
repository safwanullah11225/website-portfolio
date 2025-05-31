import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    description: "A decentralized marketplace for NFTs with features like minting, buying, selling, and auctions. Built using Solidity smart contracts and React.js.",
    image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Solidity", "React", "Web3"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "DeFi Lending Protocol",
    description: "A decentralized lending platform allowing users to lend and borrow crypto assets. Implements complex DeFi mechanics with automated interest rates.",
    image: "https://images.pexels.com/photos/8370711/pexels-photo-8370711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["DeFi", "Solidity", "Smart Contracts"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Token Swap DApp",
    description: "A decentralized exchange platform for swapping ERC20 tokens with automated market maker functionality.",
    image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["DApp", "Web3", "React"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Smart Contract Wallet",
    description: "A multi-signature wallet implementation with advanced security features and daily transaction limits.",
    image: "https://images.pexels.com/photos/8369903/pexels-photo-8369903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Solidity", "Security", "DApp"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 5,
    title: "NFT Collection",
    description: "A generative NFT collection with on-chain metadata and random trait distribution.",
    image: "https://images.pexels.com/photos/8369650/pexels-photo-8369650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["NFT", "Solidity", "IPFS"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 6,
    title: "DAO Governance",
    description: "A decentralized autonomous organization platform with proposal creation and voting mechanisms.",
    image: "https://images.pexels.com/photos/8370749/pexels-photo-8370749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["DAO", "Solidity", "Web3"],
    demoLink: "#",
    codeLink: "#",
  },
];

const filterOptions = ["All", "Solidity", "DApp", "NFT", "DeFi", "Web3", "Smart Contracts"];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <section id="projects" ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            A showcase of my recent work and projects I've contributed to.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedFilter === filter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;