import { Award, Star, Tv, Film } from "lucide-react";

interface FilmographyCardProps {
  title: string;
  role: string;
  years: string;
  description: string;
  type: "tv" | "film" | "voice";
  featured?: boolean;
  awards?: string[];
}

const filmography: FilmographyCardProps[] = [
  {
    title: "Supernatural",
    role: "Dean Winchester",
    years: "2005 - 2020",
    description:
      "The role that defined a generation. 15 seasons of monster hunting, family bonds, and saving the world.",
    type: "tv",
    featured: true,
    awards: ["People's Choice Award", "Saturn Award Nominee"],
  },
  {
    title: "The Boys",
    role: "Soldier Boy",
    years: "2022",
    description:
      "A darker turn as the original superhero, bringing moral complexity to Amazon's hit series.",
    type: "tv",
    featured: true,
  },
  {
    title: "Countdown",
    role: "Mark Meachum",
    years: "2025",
    description:
      "First lead role since Supernatural in this Prime Video thriller series.",
    type: "tv",
    featured: true,
  },
  {
    title: "Days of Our Lives",
    role: "Eric Brady",
    years: "1997 - 2000",
    description:
      "Award-winning breakthrough role in the iconic soap opera, earning 3 Daytime Emmy nominations.",
    type: "tv",
    awards: ["Soap Opera Digest Award"],
  },
  {
    title: "Smallville",
    role: "Jason Teague",
    years: "2004 - 2005",
    description:
      "Recurring role as Lana Lang's boyfriend in the Superman origin series.",
    type: "tv",
  },
  {
    title: "Dark Angel",
    role: "Alec / X5-494",
    years: "2001 - 2002",
    description:
      "Breakout role in James Cameron's sci-fi series alongside Jessica Alba.",
    type: "tv",
  },
];

const FilmographyCard = ({
  title,
  role,
  years,
  description,
  type,
  featured,
  awards,
}: FilmographyCardProps) => {
  const Icon = type === "tv" ? Tv : type === "film" ? Film : Star;

  return (
    <div
      className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-primary font-medium">{role}</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {years}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Awards */}
        {awards && awards.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {awards.map((award) => (
              <span
                key={award}
                className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                <Award className="w-3 h-3" />
                {award}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const FilmographySection = () => {
  return (
    <section id="filmography" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Career Highlights
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Filmography
          </h2>
          <p className="text-xl text-muted-foreground">
            From daytime television to streaming giants — a journey through
            iconic roles
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filmography.map((item) => (
            <FilmographyCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmographySection;
