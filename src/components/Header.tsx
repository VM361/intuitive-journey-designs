
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl text-portfolio-light-text">VM.</div>
        <nav className="hidden md:flex space-x-8">
          {[
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Education", id: "education" },
            { name: "Skills", id: "skills" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-portfolio-light-text/80 hover:text-portfolio-light-text underline-animation py-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        <button className="bg-portfolio-blue text-white px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105">
          <a href="https://www.linkedin.com/in/vishal-mishra" target="_blank" rel="noopener noreferrer">
            Connect
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
