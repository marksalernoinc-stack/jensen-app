import {
  MessageCircle,
  MapPin,
  CreditCard,
  Phone,
  Bell,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ConnectSection = () => {
  return (
    <section id="connect" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-primary/5" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
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

            {/* Meet Me IRL */}
            <a
              href="https://jensenackles.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-green-700 hover:bg-green-800 text-white"
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Meet Me IRL
              </Button>
            </a>

            {/* Buy Fans ID Card */}
            <a href="sms:+13183194267" className="block">
              <Button
                className="w-full h-14 text-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                size="lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Buy Fans ID Card
              </Button>
            </a>

            {/* Chat on WhatsApp */}
            <a
              href="https://wa.me/13183194267"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>

            {/* Text Us */}
            <a href="sms:+13183194267" className="block">
              <Button
                className="w-full h-14 text-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Text Us
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

            {/* Tip Me */}
            <a
              href="https://jensenackles.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full h-14 text-lg bg-gray-800 hover:bg-gray-900 text-white"
                size="lg"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Tip Me
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
