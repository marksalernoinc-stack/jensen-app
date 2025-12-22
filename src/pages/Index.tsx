import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConnectSection from "@/components/ConnectSection";
import FilmographySection from "@/components/FilmographySection";
import MusicSection from "@/components/MusicSection";
import FanSection from "@/components/FanSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { FloatingThemeToggle } from "@/components/FloatingThemeToggle";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Jensen Ackles | Actor, Musician, Family Man - Official Fan Page
        </title>
        <meta
          name="description"
          content="Explore the world of Jensen Ackles - from Dean Winchester in Supernatural to Soldier Boy in The Boys. Discover his filmography, music with Radio Company, and upcoming events."
        />
        <meta property="og:title" content="Jensen Ackles - Official Fan Page" />
        <meta
          property="og:description"
          content="Actor, Musician, Family Man. From Supernatural to The Boys - discover Jensen's journey."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://jensenackles.fan" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ConnectSection />
          <FilmographySection />
          <FanSection />
          <EventsSection />
        </main>
        <Footer />
        <FloatingThemeToggle />
      </div>
    </>
  );
};

export default Index;
