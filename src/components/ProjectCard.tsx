import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  logo?: string;
}

const ProjectCard = ({ title, description, url, logo }: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-coral"
    >
      <div className="flex items-start justify-between gap-4">
        {logo && (
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt={`${title} logo`} 
              className="h-12 w-12 rounded-lg object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>
    </a>
  );
};

export default ProjectCard;
