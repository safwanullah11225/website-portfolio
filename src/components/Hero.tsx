import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-primary">Safwan Ullah</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-[70px]">
            <TypeAnimation
              sequence={[
                'Blockchain Developer',
                2000,
                'Smart Contract Engineer',
                2000,
                'DeFi Specialist',
                2000,
                'Web3 Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          
          <p className="text-lg max-w-lg mx-auto md:mx-0 mb-8">
            Passionate blockchain developer specializing in smart contracts, DeFi protocols, 
            and Web3 applications. Building the decentralized future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex justify-center md:justify-start mt-8 space-x-4">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full border border-border hover:bg-secondary transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;