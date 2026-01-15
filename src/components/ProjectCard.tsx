import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ title, description, url }: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-coral"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>
    </a>
  );
};

export default ProjectCard;
