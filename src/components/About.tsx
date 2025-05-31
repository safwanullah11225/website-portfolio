import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Blockchain developer passionate about decentralized technologies and Web3 innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] bg-secondary rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional Blockchain Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
            <p className="text-lg mb-4">
              I'm a dedicated blockchain developer with a passion for creating decentralized
              solutions. Since 2022, I've been immersed in blockchain technology, focusing on
              smart contract development, DeFi protocols, and Web3 applications.
            </p>
            <p className="text-lg mb-4">
              My expertise lies in Solidity development, creating secure smart contracts,
              and building decentralized applications that bridge the gap between users
              and blockchain technology.
            </p>
            <p className="text-lg mb-6">
              When I'm not coding, I'm researching new blockchain protocols and staying
              updated with the latest developments in the Web3 ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-4 text-lg">
              <div>
                <p><span className="font-semibold">Role:</span> Blockchain Developer</p>
                <p><span className="font-semibold">Experience:</span> Since 2022</p>
                <p><span className="font-semibold">Freelance:</span> Available</p>
              </div>
              <div>
                <p><span className="font-semibold">Focus:</span> Smart Contracts</p>
                <p><span className="font-semibold">Specialty:</span> DeFi & NFTs</p>
                <p><span className="font-semibold">Status:</span> Open to Work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;