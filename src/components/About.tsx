
import { User, MapPin, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-portfolio-light-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="badge badge-blue mb-2">About Me</div>
            <h2 className="section-heading">Designing intuitive experiences that solve real problems</h2>
            <p className="text-lg text-portfolio-light-text/80 mb-6">
              As a dedicated Senior UX Designer at Air India Limited, I specialize in crafting intuitive 
              and engaging digital experiences that align with user needs and business objectives. With a 
              strong foundation in user-centered design principles, I have contributed to enhancing the 
              digital journey for Air India's customers.
            </p>
            <p className="text-lg text-portfolio-light-text/80">
              I am passionate about leveraging design to solve real-world problems and enhance user experiences. 
              Let's connect to explore opportunities for collaboration and innovation.
            </p>
            
            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-portfolio-blue/10 p-2 rounded-full">
                  <MapPin size={20} className="text-portfolio-blue" />
                </div>
                <span>Gurugram, Haryana, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-portfolio-indigo/10 p-2 rounded-full">
                  <User size={20} className="text-portfolio-indigo" />
                </div>
                <span>500+ connections on LinkedIn</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-portfolio-purple/10 p-2 rounded-full">
                  <Linkedin size={20} className="text-portfolio-purple" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/vishal-mishra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-purple hover:underline"
                >
                  linkedin.com/in/vishal-mishra
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-slide-in-right">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/20 flex items-center justify-center">
              <div className="text-9xl font-bold text-portfolio-blue/30">VM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
