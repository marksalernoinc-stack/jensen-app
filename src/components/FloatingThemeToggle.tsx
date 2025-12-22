import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-2 hover:scale-110"
        aria-label="Toggle theme"
      >
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
