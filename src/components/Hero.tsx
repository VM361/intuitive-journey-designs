
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/5 to-portfolio-purple/5" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-portfolio-blue/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-portfolio-purple/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center animate-fade-in">
        <div className="badge badge-blue mb-4 animate-slide-down">Senior UX Designer</div>
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 text-portfolio-light-text tracking-tight">
          Vishal Mishra
        </h1>
        <p className="text-xl md:text-2xl text-center text-portfolio-light-subtext max-w-3xl mb-8 text-balance">
          Enhancing User Experiences at <span className="text-portfolio-light-text">Air India Limited</span>
        </p>
        <button 
          onClick={scrollToAbout}
          className="mt-10 flex flex-col items-center text-portfolio-light-subtext hover:text-portfolio-light-text transition-colors animate-pulse"
        >
          <span className="text-sm mb-2">Discover More</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
