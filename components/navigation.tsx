"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div
            className={`text-2xl md:text-3xl font-bold cursor-pointer transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            onClick={() => scrollToSection("hero")}
          >
            Jaboo
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("ride-options")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Ride Options
            </button>
            <button
              onClick={() => scrollToSection("safety")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Safety
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              FAQ
            </button>
          </div>
          <Button
            onClick={() => scrollToSection("download")}
            className={`hidden md:flex ${
              isScrolled ? "" : "bg-white text-primary hover:bg-gray-100"
            }`}
            size="lg"
          >
            Get the App
          </Button>
          <Button
            onClick={() => scrollToSection("download")}
            className={`md:hidden ${
              isScrolled ? "" : "bg-white text-primary hover:bg-gray-100"
            }`}
            size="sm"
          >
            Get App
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

