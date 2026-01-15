import { Github, AtSign } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-20 md:py-32">
        {/* Hero */}
        <section className="animate-fade-in">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Tobias Bechtold</h1>
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
            />
            <ProjectCard
              title="Intake"
              description="Calorie counting. Simplified."
              url="https://intake.tobibechtold.dev"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/tobibechtold" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="https://www.threads.com/@tob1.b" icon={<AtSign className="h-5 w-5" />} label="Threads" />
          </div>
          <p className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} Tobias Bechtold</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
