import { Music, Disc3, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const albums = [
  {
    title: "Radio Company Vol. 1",
    year: "2019",
    description:
      "Debut album featuring soulful Americana and folk-rock tracks.",
  },
  {
    title: "Radio Company Vol. 2",
    year: "2021",
    description: "A deeper exploration of acoustic storytelling and harmony.",
  },
  {
    title: "Keep on Ramblin'",
    year: "2023",
    description:
      "Latest release with Radio Company, embracing raw authenticity.",
  },
];

const MusicSection = () => {
  return (
    <section id="music" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Beyond Acting
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Radio Company
                <span className="text-primary block">Music Project</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Jensen Ackles channels his creative passion through{" "}
              <span className="text-foreground">Radio Company</span>, a musical
              collaboration with Steve Carlson. Their Americana-infused sound
              captures raw emotion and authentic storytelling, earning a devoted
              following beyond his acting fanbase.
            </p>

            <div className="space-y-4">
              {albums.map((album) => (
                <div
                  key={album.title}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 group hover:bg-card/90 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Disc3
                      className="w-7 h-7 text-primary group-hover:animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {album.description}
                    </p>
                  </div>
                  <span className="text-sm text-primary font-medium">
                    {album.year}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              <Music className="w-5 h-5" />
              Listen on Spotify
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-card to-muted border border-border/50 flex items-center justify-center shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-background border-4 border-border" />
              <div className="absolute inset-8 rounded-full border border-muted-foreground/20" />
              <div className="absolute text-center">
                <p className="font-display text-2xl font-bold -mt-20">Radio</p>
                <p className="font-display text-2xl font-bold text-primary mt-16">
                  Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
