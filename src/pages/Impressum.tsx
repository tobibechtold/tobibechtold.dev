import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-20 md:py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
          Impressum
        </h1>

        <section className="mt-10 space-y-8 text-muted-foreground">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-4">
              Tobias Bechtold
              <br />
              In den Falzäckern 14
              <br />
              76307 Karlsbad
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Kontakt
            </h2>
            <p className="mt-4">
              E-Mail:{" "}
              <a
                href="mailto:support@tobibechtold.dev"
                className="text-primary transition-colors hover:text-primary/80"
              >
                support@tobibechtold.dev
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Haftungsausschluss
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed">
              <div>
                <h3 className="font-medium text-foreground">Haftung für Inhalte</h3>
                <p className="mt-2">
                  Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Haftung für Links</h3>
                <p className="mt-2">
                  Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Impressum;
