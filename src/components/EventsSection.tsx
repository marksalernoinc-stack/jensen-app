import {
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const events = [
  {
    name: "VOUGHT RISING",
    character: "Soldier Boy",
    date: "2024 - now",
    type: "Streaming series",
    status: "Pre-production",
  },
  {
    name: "COUNTDOWN",
    character: "Mark Meachum",
    date: "2025 - now",
    type: "Streaming series",
    status: "Premiered: June 2025",
  },
  {
    name: "TRACKER",
    character: "Russell Shaw",
    date: "2024 - now",
    type: "TV Show",
    status: "Season 2 airing",
  },
  {
    name: "THE BOYS",
    character: "Soldier Boy",
    date: "2022 - now",
    type: "Streaming series",
    status: "Season 5 on-going",
  },
  {
    name: "GEN V",
    character: "Soldier Boy",
    date: "2023",
    type: "Streaming series",
    status: "Finished",
  },
  {
    name: "JUSTICE LEAGUE: CRISIS ON INFINITE EARTHS / JUSTICE LEAGUE: WARWORLD / LEGION OF SUPER-HEROES",
    character: "Batman/Bruce Wayne",
    date: "2023 - 2024",
    type: "Animated movies",
    status: "Available",
  },
  {
    name: "BIG SKY",
    character: "Beau Arlen",
    date: "2022 - 2023",
    type: "TV Show",
    status: "Finished",
  },
];

const EventsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const currentEvents = events.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section id="events" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Events */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Upcoming
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Events & Appearances
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet Jensen at fan conventions and special appearances around
                the world.
              </p>
            </div>

            <div className="space-y-4">
              {currentEvents.map((event) => (
                <div
                  key={event.name}
                  className="glass-card rounded-xl p-6 group hover:bg-card/90 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                    {event.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <span className="text-foreground font-medium">
                      Character:
                    </span>{" "}
                    {event.character}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Status:</span>{" "}
                    {event.status}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between py-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <a
              href="https://jensenackles.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline" size="lg" className="w-full">
                View All Events
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>

          {/* Newsletter */}
          <div className="mt-8">
            <div className="mt-8 aspect-video w-full h-[350px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8DBviaBbKKs"
                title="Countdown: Meacham Blacks Out"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full max-w-4xl aspect-video mx-auto rounded-lg"
              ></iframe>
            </div>

            <div className="glass-card rounded-2xl p-10 glow-border mt-8">
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                    Stay Updated
                  </p>
                  <h3 className="font-display text-3xl font-bold mb-4">
                    Join the Family
                  </h3>
                  <p className="text-muted-foreground">
                    Subscribe to receive news about upcoming projects, events,
                    and exclusive content.
                  </p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                  <Button variant="hero" className="w-full" size="lg">
                    Subscribe
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to receive updates. Unsubscribe
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
