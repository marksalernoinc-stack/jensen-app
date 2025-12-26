import { Play, Film, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import jensenVideo from "@/assets/jensen.mp4";
import jensenImage from "@/assets/jensen1.jpg";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, [videoLoaded]);

  const parallaxOffset = scrollY * 0.8;
  const opacityValue = Math.max(0, 1 - scrollY / 400);
  const scaleValue = 1 + scrollY * 0.001;

  const mouseParallaxX = (mousePosition.x - 0.5) * 40;
  const mouseParallaxY = (mousePosition.y - 0.5) * 40;
  const tiltX = (mousePosition.y - 0.5) * 10;
  const tiltY = (mousePosition.x - 0.5) * -10;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0"
        style={{
          transform: `translate3d(${mouseParallaxX}px, ${
            parallaxOffset + mouseParallaxY
          }px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scaleValue})`,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          willChange: "transform",
          transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {!videoError ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover transition-opacity duration-1000"
              style={{
                opacity: videoLoaded ? opacityValue : 0,
              }}
            >
              <source src={jensenVideo} type="video/mp4" />
              <source src={jensenVideo} type="video/mp4" />
            </video>
            {!videoLoaded && (
              <img
                src={heroPortrait}
                alt="Jensen Ackles cinematic portrait"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            )}
          </>
        ) : (
          <img
            src={heroPortrait}
            alt="Jensen Ackles cinematic portrait"
            className="w-full h-full object-cover object-top"
            style={{
              opacity: opacityValue,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
        <div className="absolute inset-0 blue-glow opacity-30" />

        {/* Animated overlay particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          />
        </div>
      </div>

      {/* Content with Parallax */}
      <div
        className="relative z-10 container mx-auto px-6 text-center"
        style={{
          transform: `translate3d(${mouseParallaxX * 0.3}px, ${
            scrollY * 0.4 + mouseParallaxY * 0.3
          }px, 50px)`,
          transformStyle: "preserve-3d",
          opacity: opacityValue,
          willChange: "transform, opacity",
          transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtitle */}
          <p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Actor • Musician • Family Man
          </p>

          {/* Main Title */}
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight glow-text animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Jensen
            <span className="block text-primary">Ackles</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            From Dean Winchester to Soldier Boy — a journey through television's
            most iconic roles
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("filmography")}
            >
              <Film className="w-5 h-5" />
              Filmography
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("events")} //about
            >
              <Play className="w-5 h-5" />
              Watch Showreel
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-primary opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
