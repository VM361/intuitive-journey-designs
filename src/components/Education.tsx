
import { GraduationCap, Building } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-10 bg-portfolio-light-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="badge badge-purple inline-block mb-4">Academic Background</div>
          <h2 className="section-heading">Education</h2>
          <p className="text-lg text-portfolio-light-subtext max-w-3xl mx-auto">
            My academic foundation that empowers my design approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 animate-slide-up hover-scale">
            <div className="flex items-center mb-6">
              <div className="bg-portfolio-purple/10 p-3 rounded-lg mr-4">
                <GraduationCap size={24} className="text-portfolio-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-portfolio-light-text">Vellore Institute of Technology</h3>
              </div>
            </div>
            
            <p className="text-portfolio-light-text/80 mb-4">
              I hold a degree from Vellore Institute of Technology, where I developed a solid 
              grounding in design and technology, equipping me with the skills to tackle complex design challenges.
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-portfolio-purple font-medium">Design Principles</span>
                <span className="text-portfolio-light-subtext">Advanced</span>
              </div>
              <div className="w-full bg-portfolio-purple/10 rounded-full h-1.5">
                <div className="bg-portfolio-purple h-1.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-portfolio-purple font-medium">UX Research Methods</span>
                <span className="text-portfolio-light-subtext">Advanced</span>
              </div>
              <div className="w-full bg-portfolio-purple/10 rounded-full h-1.5">
                <div className="bg-portfolio-purple h-1.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-portfolio-purple font-medium">Interaction Design</span>
                <span className="text-portfolio-light-subtext">Advanced</span>
              </div>
              <div className="w-full bg-portfolio-purple/10 rounded-full h-1.5">
                <div className="bg-portfolio-purple h-1.5 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-slide-up hover-scale" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-6">
              <div className="bg-portfolio-teal/10 p-3 rounded-lg mr-4">
                <Building size={24} className="text-portfolio-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-portfolio-light-text">Professional Certifications</h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="badge badge-teal mb-2">UX Design</div>
                <h4 className="text-lg font-medium text-portfolio-light-text mb-1">Google UX Design Professional Certificate</h4>
                <p className="text-portfolio-light-subtext text-sm">Comprehensive training in UX research, wireframing, prototyping, and design systems</p>
              </div>
              
              <div>
                <div className="badge badge-blue mb-2">Design Systems</div>
                <h4 className="text-lg font-medium text-portfolio-light-text mb-1">Design Systems for Digital Products</h4>
                <p className="text-portfolio-light-subtext text-sm">Creating scalable and consistent design systems for complex digital products</p>
              </div>
              
              <div>
                <div className="badge badge-green mb-2">Interaction Design</div>
                <h4 className="text-lg font-medium text-portfolio-light-text mb-1">Interaction Design Foundation Certificate</h4>
                <p className="text-portfolio-light-subtext text-sm">Advanced interaction design principles and patterns for intuitive interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
