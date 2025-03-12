
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Add scroll reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-slide-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Sample project data
  const projects = [
    {
      title: "Air India Booking Redesign",
      description: "Redesigned the booking flow to improve conversion rates and user satisfaction.",
      category: "UX Design",
      image: "/placeholder-1.jpg",
      color: "blue",
      link: "#"
    },
    {
      title: "In-Flight Entertainment App",
      description: "Created an intuitive interface for browsing and enjoying content during flights.",
      category: "UI/UX",
      image: "/placeholder-2.jpg",
      color: "purple",
      link: "#"
    },
    {
      title: "Loyalty Program Dashboard",
      description: "Designed a dashboard for members to track and redeem their loyalty points.",
      category: "Dashboard",
      image: "/placeholder-3.jpg",
      color: "green",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-light-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      
      {/* Portfolio section */}
      <section className="py-24 px-6 md:px-10 bg-portfolio-light-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="badge badge-orange inline-block mb-4">Portfolio</div>
            <h2 className="section-heading">Selected Projects</h2>
            <p className="text-lg text-portfolio-light-subtext max-w-3xl mx-auto">
              A showcase of my recent work and design solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                color={project.color}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
