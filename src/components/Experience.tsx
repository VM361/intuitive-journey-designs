
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="badge badge-indigo inline-block mb-4">Professional Journey</div>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-lg text-portfolio-light-subtext max-w-3xl mx-auto">
            My professional journey in creating user-centered design solutions.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-portfolio-light-background md:transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row items-start animate-slide-up">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <div className="glass-card p-6 hover-scale">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-light-text">
                    Senior UX Designer
                  </h3>
                  <p className="text-portfolio-light-subtext mb-4">Air India Limited</p>
                  <p className="text-portfolio-light-text/80">
                    In my current role, I focus on designing seamless interfaces that improve user satisfaction 
                    and operational efficiency. Collaborating closely with cross-functional teams, I ensure that 
                    design solutions are both innovative and practical.
                  </p>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 border border-portfolio-light-background">
                <div className="bg-portfolio-indigo p-2 rounded-full">
                  <Briefcase size={20} className="text-white" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-portfolio-indigo/5 p-6 rounded-xl">
                  <h4 className="font-medium text-portfolio-indigo mb-4">Key Responsibilities</h4>
                  <ul className="space-y-2 text-portfolio-light-text/80">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-portfolio-indigo mt-1.5 mr-2"></span>
                      <span>Led design sprints and workshops to identify user pain points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-portfolio-indigo mt-1.5 mr-2"></span>
                      <span>Created wireframes, prototypes, and high-fidelity designs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-portfolio-indigo mt-1.5 mr-2"></span>
                      <span>Collaborated with developers to ensure design implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-portfolio-indigo mt-1.5 mr-2"></span>
                      <span>Conducted usability testing and user interviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-portfolio-indigo mt-1.5 mr-2"></span>
                      <span>Presented design concepts to stakeholders and executive teams</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Additional experience entries could be added here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
