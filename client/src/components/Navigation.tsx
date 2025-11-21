import { Link, useLocation } from "wouter";
import { BookOpen, User, MessageSquare, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const newMode = !darkMode;
    if (newMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const navItems = [
    { path: "/", label: "學習筆記", icon: BookOpen },
    { path: "/about", label: "關於我", icon: User },
    { path: "/guestbook", label: "留言板", icon: MessageSquare },
  ];

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">學習筆記</span>
          </Link>

          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  size="default"
                  className="gap-2"
                  data-testid={`link-${item.label}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              </Link>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
