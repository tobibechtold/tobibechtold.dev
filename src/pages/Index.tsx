import { Github, AtSign } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import FloatingParticles from "@/components/FloatingParticles";
import fiftyfiftyLogo from "@/assets/fiftyfifty-logo.png";
import intakeLogo from "@/assets/intake-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animated-gradient-bg relative">
      <FloatingParticles />
      <main className="mx-auto max-w-2xl px-6 py-20 md:py-32 relative z-10">
        {/* Hero */}
        <section className="animate-fade-in">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl text-gradient-glow">Tobias Bechtold</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Developer from Germany.
            <br />
            Building apps that make life easier.
          </p>
        </section>

        {/* Projects */}
        <section className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Projects</h2>
          <div className="mt-6 space-y-4">
            <ProjectCard
              title="FiftyFifty"
              description="Share Mental Load, Strengthen Your Bond"
              url="https://fiftyfifty.cloud"
              logo={fiftyfiftyLogo}
            />
            <ProjectCard
              title="Intake"
              description="Calorie counting. Simplified."
              url="https://intake.tobibechtold.dev"
              logo={intakeLogo}
            />
            <ProjectCard
              title="Feature Voting Tool"
              description="Open-source project for deploying your own feature voting tool with Supabase backend."
              url="https://github.com/tobibechtold/feature-voting-tool"
              logoIcon={<Github className="h-6 w-6" />}
              badgeText="Open Source"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/tobibechtold" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="https://www.threads.com/@tob1.b" icon={<AtSign className="h-5 w-5" />} label="Threads" />
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Tobias Bechtold</span>
            <span>·</span>
            <Link to="/impressum" className="transition-colors hover:text-primary">
              Impressum
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
