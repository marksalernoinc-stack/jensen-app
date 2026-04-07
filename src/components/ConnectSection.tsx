import {
  MessageCircle,
  CreditCard,
  Phone,
  Bell,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import connectBackground from "@/assets/jensen3.jpg";
import darkConnectBackground from "@/assets/jensen3.jpg";

const ConnectSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = sectionElement.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    sectionElement.addEventListener("mousemove", handleMouseMove);
    return () =>
      sectionElement.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const mouseParallaxX = (mousePosition.x - 0.5) * 80;
  const mouseParallaxY = (mousePosition.y - 0.5) * 80;

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          transform: `translate3d(${mouseParallaxX}px, ${mouseParallaxY}px, 0) scale(1.1)`,
          transition: "transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)",
          willChange: "transform",
        }}
      >
        <img
          src={connectBackground}
          alt="Jensen Ackles cinematic background"
          className="w-full block dark:hidden h-full object-cover object-right-top opacity-30"
        />
        <img
          src={darkConnectBackground}
          alt="Jensen Ackles cinematic background"
          className="w-full hidden dark:block h-full object-cover object-right-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background/95" />
      </div>

      {/* Background gradient */}
      <div className="hidden dark:block absolute inset-0 z-10 bg-gradient-to-b from-primary/5 via-background to-primary/5" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 z-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl z-10" />

      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the community and stay connected with Jensen
            </p>
          </div>

          {/* Connect Buttons */}
          <div className="space-y-4">
            {/* Chat with Me */}
            <a
              href="https://t.me/jensenackles_inc"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Me
              </Button>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jensenackles?igsh=cmIxNW4xcnZpMzl0"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-pink-600 hover:bg-pink-700 text-white"
                size="lg"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
            </a>

            {/* Buy Fans ID Card */}
            <a href="https://wa.me/13183194267" className="block">
              <Button
                className="w-full h-14 text-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                size="lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Buy Fans ID Card
              </Button>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/jensenackles?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                size="lg"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Button>
            </a>

            {/* Subscribe Now */}
            <a
              href="https://youtube.com/channel/UCr9IHoqiSjPOgjODdk-F1vA?reload=9"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-red-600 hover:bg-red-700 text-white"
                size="lg"
              >
                <Bell className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/JensenAckles?mibextid=wwXIfr&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-blue-700 hover:bg-blue-800 text-white"
                size="lg"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All links are secure and verified. Your privacy is important to
              us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
