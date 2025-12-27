import { useEffect, useMemo, useState } from "react";
import { Quote, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

const fanStories = [
  {
    quote:
      "I never imagined feeling this connected to someone I’ve admired for so long. Even reading his words made my heart race. Moments like this remind me why being a fan is so special.",
    vibe: "Heartfelt Connection",
    name: "Emily Johnson",
  },
  {
    quote:
      "I’m still shaking. Just knowing there’s a place where fans can feel closer to him made my whole week. It felt personal, warm, and genuine.",
    vibe: "Personal & Warm",
    name: "Sarah Williams",
  },
  {
    quote:
      "This experience made me emotional in ways I didn’t expect. I’ve followed his work for years, and feeling acknowledged—even symbolically—meant everything.",
    vibe: "Deeply Seen",
    name: "Ashley Brown",
  },
  {
    quote:
      "I cried happy tears. It felt respectful, sincere, and grounded. That’s what makes him stand out to me—not just talent, but heart.",
    vibe: "Respectful & Sincere",
    name: "Jessica Miller",
  },
  {
    quote:
      "I kept rereading the message over and over. It felt comforting and real in a way that surprised me.",
    vibe: "Comforting",
    name: "Amanda Davis",
  },
  {
    quote:
      "I didn’t expect to feel so seen. As a fan, moments like this stay with you forever.",
    vibe: "Forever Remembered",
    name: "Lauren Wilson",
  },
  {
    quote:
      "My hands were shaking the entire time. It felt like one of those rare fan moments you remember for life.",
    vibe: "Unforgettable",
    name: "Nicole Anderson",
  },
  {
    quote:
      "This reminded me why I admire him so much—kindness, humility, and authenticity all came through.",
    vibe: "Kindness & Humility",
    name: "Rachel Thompson",
  },
  {
    quote:
      "I smiled for hours afterward. Being a fan can be magical when it’s done the right way.",
    vibe: "Pure Joy",
    name: "Brittany Taylor",
  },
  {
    quote:
      "I’m still emotional thinking about it. It felt meaningful, respectful, and special—exactly what fans hope for.",
    vibe: "Meaningful",
    name: "Megan Harris",
  },
];

const TestimonialSection = () => {
  const [primaryStory, ...remainingStories] = fanStories;
  const spotlightStories = remainingStories.slice(0, 2);
  const gridStories = remainingStories.slice(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);
  const totalSlides = fanStories.length;

  const slideStories = useMemo(
    () =>
      fanStories.map((story, index) => ({
        ...story,
        id: index + 1,
      })),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setFeatureIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const updateSlides = (value: number) => {
    const normalized = ((value % totalSlides) + totalSlides) % totalSlides;
    setCurrentSlide(normalized);
    setFeatureIndex(normalized);
  };

  const handlePrev = () => {
    updateSlides(currentSlide - 1);
  };

  const handleNext = () => {
    updateSlides(currentSlide + 1);
  };

  const handleFeaturePrev = () => {
    updateSlides(featureIndex - 1);
  };

  const handleFeatureNext = () => {
    updateSlides(featureIndex + 1);
  };

  const featureStory = fanStories[featureIndex];

  const queueSlides = useMemo(
    () =>
      fanStories.map((_, index) => [
        {
          story: fanStories[(index + 1) % totalSlides],
          storyIndex: (index + 1) % totalSlides,
        },
        {
          story: fanStories[(index + 2) % totalSlides],
          storyIndex: (index + 2) % totalSlides,
        },
      ]),
    [totalSlides]
  );
  const childStories = [1, 2].map(
    (offset) => fanStories[(featureIndex + offset) % totalSlides]
  );

  return (
    <>
      <section id="testimonials" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-sm mb-4">
              Fan Testimonies
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Moments the SPN Family Carries Forever
            </h2>
            <p className="text-xl text-muted-foreground">
              Handwritten emotions from supporters who felt truly seen, heard,
              and cared for.
            </p>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-3">
                  Origin Story
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-semibold">
                  Unforgettable reactions
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  aria-label="Previous quote"
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-white/10 hover:border-primary/60 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next quote"
                  onClick={handleNext}
                  className="p-3 rounded-full border border-white/10 hover:border-primary/60 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur-lg">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {slideStories.map((story) => (
                    <div
                      key={story.id}
                      className="w-full flex-shrink-0 px-8 py-12 md:px-16 md:py-16 bg-background/80"
                    >
                      <Quote className="w-12 h-12 text-primary/30 mb-6" />
                      <p className="text-2xl md:text-3xl leading-relaxed font-light text-foreground">
                        “{story.quote}”
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                        <span className="text-primary">{story.vibe}</span>
                        <span className="h-1 w-8 bg-primary/40 rounded-full" />
                        <span>{story.name}</span>
                        <span># {story.id.toString().padStart(2, "0")}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-2 flex-wrap">
                {slideStories.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    aria-label={`Go to quote ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "w-12 bg-primary"
                        : "w-6 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {slideStories.slice(0, 3).map((story) => (
                <div
                  key={`summary-${story.id}`}
                  className="rounded-2xl border border-white/5 bg-card/80 p-6 backdrop-blur"
                >
                  <p className="text-sm text-primary uppercase tracking-[0.35em] mb-3">
                    Highlight #{story.id.toString().padStart(2, "0")}
                  </p>
                  <p className="text-base text-foreground/90 line-clamp-3">
                    “{story.quote}”
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground uppercase tracking-[0.3em]">
                    {story.name} • {story.vibe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      </section>
    </>
  );
};

export default TestimonialSection;
