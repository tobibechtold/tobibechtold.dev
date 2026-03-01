import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  logo?: string;
  logoIcon?: ReactNode;
  badgeText?: string;
}

const ProjectCard = ({ title, description, url, logo, logoIcon, badgeText }: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-coral"
    >
      <div className="flex items-center justify-between gap-4">
        {(logo || logoIcon) && (
          <div className="flex-shrink-0">
            {logo ? (
              <img src={logo} alt={`${title} logo`} className="h-12 w-12 rounded-lg object-contain" />
            ) : (
              <div
                aria-label={`${title} logo`}
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-foreground"
              >
                {logoIcon}
              </div>
            )}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">{title}</h3>
            {badgeText && (
              <Badge variant="secondary" className="text-[10px] uppercase tracking-wide">
                {badgeText}
              </Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>
    </a>
  );
};

export default ProjectCard;
