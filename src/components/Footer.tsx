
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-portfolio-light-background py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="animate-slide-up">
            <div className="badge badge-blue mb-4">Get in Touch</div>
            <h2 className="text-3xl font-bold mb-6 text-portfolio-light-text">Let's connect and create amazing experiences together</h2>
            <p className="text-lg text-portfolio-light-subtext mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:contact@vishalmishra.com" className="flex items-center space-x-3 text-portfolio-light-text hover:text-portfolio-blue transition-colors">
                <div className="bg-portfolio-blue/10 p-2 rounded-full">
                  <Mail size={20} className="text-portfolio-blue" />
                </div>
                <span>contact@vishalmishra.com</span>
              </a>
              
              <a href="tel:+919876543210" className="flex items-center space-x-3 text-portfolio-light-text hover:text-portfolio-indigo transition-colors">
                <div className="bg-portfolio-indigo/10 p-2 rounded-full">
                  <Phone size={20} className="text-portfolio-indigo" />
                </div>
                <span>+91 98765 43210</span>
              </a>
              
              <div className="flex items-center space-x-3 text-portfolio-light-text">
                <div className="bg-portfolio-purple/10 p-2 rounded-full">
                  <MapPin size={20} className="text-portfolio-purple" />
                </div>
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-light-text mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-light-text mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-light-text mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-portfolio-blue text-white py-2 rounded-lg font-medium hover:bg-portfolio-blue/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-light-subtext mb-4 md:mb-0">
            © {new Date().getFullYear()} Vishal Mishra. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/vishal-mishra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-light-background p-2 rounded-full hover:bg-portfolio-blue/10 transition-colors group"
            >
              <Linkedin size={20} className="text-portfolio-light-subtext group-hover:text-portfolio-blue transition-colors" />
            </a>
            
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
