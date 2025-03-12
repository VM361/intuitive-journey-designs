
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  color: string;
  link?: string;
}

const ProjectCard = ({ title, description, category, image, color, link }: ProjectCardProps) => {
  return (
    <div className={`rounded-2xl overflow-hidden bg-white shadow-sm hover-scale h-full flex flex-col animate-slide-up`}>
      <div className="relative aspect-video overflow-hidden">
        <div className={`absolute inset-0 bg-portfolio-${color}/20 flex items-center justify-center text-6xl font-bold text-portfolio-${color}/30`}>
          {title.charAt(0)}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className={`badge badge-${color} mb-3 self-start`}>{category}</div>
        <h3 className="text-xl font-semibold mb-2 text-portfolio-light-text">{title}</h3>
        <p className="text-portfolio-light-subtext mb-4 flex-1">{description}</p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center text-portfolio-${color} font-medium hover:underline mt-auto`}
          >
            View Project <ArrowUpRight size={16} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
