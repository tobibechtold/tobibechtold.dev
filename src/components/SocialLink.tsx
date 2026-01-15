import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
      aria-label={label}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
};

export default SocialLink;
