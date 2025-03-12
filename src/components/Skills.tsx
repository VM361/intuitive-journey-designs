
import { CheckCircle, Figma, Code, Inspect, MousePointer, Heart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "User Research & Usability Testing",
      icon: <Inspect size={24} />,
      color: "blue",
      skills: ["User Interviews", "Usability Testing", "Heuristic Evaluation", "Survey Design", "User Personas"]
    },
    {
      title: "Interaction & Visual Design",
      icon: <MousePointer size={24} />,
      color: "green",
      skills: ["Wireframing", "UI Design", "Visual Hierarchy", "Design Systems", "Micro-interactions"]
    },
    {
      title: "Wireframing & Prototyping",
      icon: <Figma size={24} />,
      color: "purple",
      skills: ["Low-fidelity Wireframes", "High-fidelity Mockups", "Interactive Prototypes", "User Flows", "Screen Transitions"]
    },
    {
      title: "Accessibility & Inclusive Design",
      icon: <Heart size={24} />,
      color: "pink",
      skills: ["WCAG Guidelines", "Color Contrast", "Screen Reader Compatibility", "Keyboard Navigation", "Inclusive Design Patterns"]
    },
    {
      title: "Design Thinking & Problem-Solving",
      icon: <CheckCircle size={24} />,
      color: "orange",
      skills: ["Empathize", "Define", "Ideate", "Prototype", "Test", "Implement"]
    },
    {
      title: "Technical Skills",
      icon: <Code size={24} />,
      color: "indigo",
      skills: ["HTML/CSS", "Design Handoff", "Developer Collaboration", "Version Control", "Basic JavaScript"]
    }
  ];

  const tools = [
    { name: "Figma", proficiency: 95 },
    { name: "Sketch", proficiency: 90 },
    { name: "Adobe XD", proficiency: 85 },
    { name: "InVision", proficiency: 80 },
    { name: "HTML/CSS", proficiency: 75 },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="badge badge-green inline-block mb-4">Expertise</div>
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="text-lg text-portfolio-light-subtext max-w-3xl mx-auto">
            My professional toolkit refined through years of experience in user experience design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-portfolio-${category.color}/10 p-3 inline-flex rounded-lg mb-4`}>
                <div className={`text-portfolio-${category.color}`}>{category.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-light-text">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start text-portfolio-light-text/80">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full bg-portfolio-${category.color} mt-2 mr-2`}></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-light-text">Tools & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-portfolio-light-text">{tool.name}</span>
                  <span className="text-sm text-portfolio-light-subtext">{tool.proficiency}%</span>
                </div>
                <div className="w-full bg-portfolio-light-background rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-2 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${tool.proficiency}%`, animationDelay: `${index * 0.2}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
