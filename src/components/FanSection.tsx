import { Quote, Heart } from "lucide-react";

const testimonials = [
  {
    quote:
      "Jensen's portrayal of Dean Winchester is nothing short of legendary. He brought humanity to a character that could have been one-dimensional.",
    author: "TV Guide",
    role: "Critics Choice",
  },
  {
    quote:
      "The transformation into Soldier Boy showcased an actor unafraid to embrace complexity and darkness.",
    author: "Entertainment Weekly",
    role: "Review",
  },
  {
    quote:
      "A true talent who connects with fans on a genuine level. Jensen represents the best of what this industry can offer.",
    author: "SPN Family",
    role: "Fan Community",
  },
];

const FanSection = () => {
  return (
    <section id="fans" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Community Love
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground">
            From critics to the devoted SPN Family — the impact resonates
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 relative group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <Quote className="w-12 h-12 text-primary/30 absolute top-6 right-3" />
              <div className="flex flex-col h-full">
                <p className="text-lg text-foreground w-[90%] leading-relaxed relative z-10 flex-grow mb-6">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center glass-card rounded-xl p-6">
            <p className="font-display text-3xl font-bold text-primary">8M+</p>
            <p className="text-sm text-muted-foreground mt-1">
              Instagram Followers
            </p>
          </div>
          <div className="text-center glass-card rounded-xl p-6">
            <p className="font-display text-3xl font-bold text-primary">
              3.5M+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Twitter Followers
            </p>
          </div>
          <div className="text-center glass-card rounded-xl p-6">
            <p className="font-display text-3xl font-bold text-primary">15</p>
            <p className="text-sm text-muted-foreground mt-1">Seasons of SPN</p>
          </div>
          <div className="text-center glass-card rounded-xl p-6">
            <p className="font-display text-3xl font-bold text-primary">∞</p>
            <p className="text-sm text-muted-foreground mt-1">Fan Love</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanSection;
