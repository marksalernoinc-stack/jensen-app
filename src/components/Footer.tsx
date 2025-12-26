import {
  Instagram,
  Twitter,
  Youtube,
  Heart,
  Facebook,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-center">
            <h3 className="font-display text-3xl font-bold">
              Jensen <span className="text-primary">Ackles</span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Actor • Musician • Family Man
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://x.com/jensenackles?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/jensenackles?igsh=cmIxNW4xcnZpMzl0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/JensenAckles?mibextid=wwXIfr&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://teams.live.com/l/invite/FDAqu4SOLqwvlPbyAE?v=g1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Microsoft Teams"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href="mailto:Jensenackles.incc@outlook.com"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="sms:+13183194267"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="SMS"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/13183194267"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/jensenackles_inc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#filmography"
              className="hover:text-primary transition-colors"
            >
              Filmography
            </a>
            <a href="#events" className="hover:text-primary transition-colors">
              Events
            </a>
            <a href="#fans" className="hover:text-primary transition-colors">
              Community
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border w-full">
            <p>
              © {currentYear} Jensen Ackles Page. Made with{" "}
              <Heart className="w-4 h-4 inline text-primary" /> for the SPN
              Family.
            </p>
            <p className="mt-2 text-xs">
              This is the official fan membership site of Jensen Ackles. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
