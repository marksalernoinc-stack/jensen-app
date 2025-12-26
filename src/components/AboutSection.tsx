import aboutPortrait from "@/assets/jensen3.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-2xl group-hover:from-primary/30 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl glow-border">
              <img
                src={aboutPortrait}
                alt="Jensen Ackles portrait"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                About Jensen
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Man Behind
                <span className="text-primary block">the Characters</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">
                  Jensen Ross Ackles
                </span>{" "}
                (born March 1, 1978) is an American actor, producer, director,
                and musician from Dallas, Texas. With over two decades in the
                entertainment industry, he has become one of television's most
                beloved and versatile performers.
              </p>
              <p>
                He gained worldwide recognition for his iconic portrayal of{" "}
                <span className="text-primary">Dean Winchester</span> in the
                long-running hit series <em>Supernatural</em>, spanning 15
                seasons and cementing his status as a genre television legend.
              </p>
              <p>
                Beyond acting, Jensen is a dedicated family man, married to
                actress <span className="text-foreground">Danneel Harris</span>{" "}
                since 2010. Together, they have three children and run their
                production company, Chaos Machine Productions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-primary">
                  20+
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Years in Acting
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-primary">
                  327
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Episodes of SPN
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-primary">
                  3
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Music Albums
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
