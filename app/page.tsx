"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Bike,
  Car,
  Users,
  Zap,
  Shield,
  MapPin,
  Clock,
  DollarSign,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Fast, Affordable Rides
              <br />
              <span className="text-primary">Across Bangladesh</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a nearby rider in minutes with upfront fares in BDT. Multiple
              vehicle options for solo rides, friends, or family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("download")}
                size="lg"
                className="text-lg px-8 py-6 h-auto w-full sm:w-auto"
              >
                Download Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("how-it-works")}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto w-full sm:w-auto border-white/20 bg-transparent text-white hover:bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  5min
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  Average Wait
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100%+
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  Verified Drivers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  BDT
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  Upfront Pricing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 md:py-28 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose Jaboo?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a smooth, reliable ride experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Fast Pickup
              </h3>
              <p className="text-gray-600">
                Get matched with nearby drivers in minutes. No more waiting
                around.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Upfront Pricing
              </h3>
              <p className="text-gray-600">
                See your fare before you ride. No surprises, no bargaining.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Real-Time Tracking
              </h3>
              <p className="text-gray-600">
                Track your ride in real-time with GPS. Know exactly when your
                driver arrives.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Verified Drivers
              </h3>
              <p className="text-gray-600">
                All drivers are background-checked and verified for your safety.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Easy Payment
              </h3>
              <p className="text-gray-600">
                Pay with bKash, Nagad, Rocket, or cards. Quick and secure.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                24/7 Availability
              </h3>
              <p className="text-gray-600">
                Need a ride anytime? We&apos;re available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting a ride is simple. Just follow these steps:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Download & Sign Up",
                description: "Download the app and sign up with your phone number using OTP verification.",
              },
              {
                step: "2",
                title: "Choose Your Ride",
                description: "Select from Bike, Car, Microbus, or CNG based on your needs.",
              },
              {
                step: "3",
                title: "Book & Track",
                description: "Enter your destination, see the fare, and track your driver in real-time.",
              },
              {
                step: "4",
                title: "Ride & Pay",
                description: "Enjoy your ride and pay securely with your preferred payment method.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ride Options Section */}
      <section
        id="ride-options"
        className="py-20 md:py-28 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Choose Your Ride
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple vehicle options for every occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Bike,
                title: "Bike",
                description: "Fast and affordable rides for solo travelers. Perfect for short distances.",
                price: "From ৳50",
              },
              {
                icon: Car,
                title: "Car",
                description: "Comfortable rides for up to 4 passengers. Ideal for daily commutes.",
                price: "From ৳150",
              },
              {
                icon: Users,
                title: "Microbus",
                description: "Spacious rides for groups and families. Fits up to 7 passengers.",
                price: "From ৳300",
              },
              {
                icon: Car,
                title: "CNG",
                description: "Eco-friendly and economical. Great for short to medium distances.",
                price: "From ৳80",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <option.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-lg font-semibold text-primary">
                  {option.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section
        id="safety"
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Your Safety is Our Priority
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We take every measure to ensure your ride is safe and secure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Background-verified drivers",
                "Real-time GPS tracking",
                "24/7 customer support",
                "Emergency assistance",
                "In-app safety features",
                "Regular vehicle inspections",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Trusted by Thousands
                  </h3>
                  <p className="text-gray-600">
                    Join thousands of satisfied riders across Bangladesh who
                    trust Jaboo for their daily commute. Your safety and
                    satisfaction are our top priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 md:py-28 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Jaboo
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How do I book a ride?
                </AccordionTrigger>
                <AccordionContent>
                  Simply download the app, sign up with your phone number, enter
                  your destination, choose your preferred vehicle type, and
                  confirm your ride. You&apos;ll see the fare upfront before
                  booking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major payment methods including bKash, Nagad,
                  Rocket, and credit/debit cards. You can pay directly through
                  the app.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How long does it take for a driver to arrive?
                </AccordionTrigger>
                <AccordionContent>
                  On average, drivers arrive within 5 minutes. The exact time
                  depends on your location and traffic conditions. You can track
                  your driver&apos;s arrival in real-time through the app.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Are the drivers verified?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all our drivers undergo thorough background checks and
                  verification processes. We ensure they have valid licenses and
                  meet our safety standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can I cancel my ride?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your ride through the app. Cancellation
                  fees may apply if you cancel after a driver has been assigned,
                  depending on the timing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Which cities do you operate in?
                </AccordionTrigger>
                <AccordionContent>
                  We currently operate in major cities across Bangladesh
                  including Dhaka, Chattogram, Sylhet, and more. We&apos;re
                  continuously expanding to serve more areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Ride?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Download Jaboo today and experience fast, affordable, and safe
              rides across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  // Placeholder for app store link
                  window.open("#", "_blank");
                }}
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  // Placeholder for play store link
                  window.open("#", "_blank");
                }}
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Star className="h-5 w-5 fill-white" />
              <span className="text-lg font-semibold">4.8/5</span>
              <span className="text-sm">from 10,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">Jaboo</div>
              <p className="text-gray-400">
                Fast, affordable, and safe rides across Bangladesh.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("safety")}
                    className="hover:text-white transition-colors"
                  >
                    Safety
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rides</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("ride-options")}
                    className="hover:text-white transition-colors"
                  >
                    Bike
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("ride-options")}
                    className="hover:text-white transition-colors"
                  >
                    Car
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("ride-options")}
                    className="hover:text-white transition-colors"
                  >
                    Microbus
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("ride-options")}
                    className="hover:text-white transition-colors"
                  >
                    CNG
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get the App</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="hover:text-white transition-colors"
                  >
                    iOS App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="hover:text-white transition-colors"
                  >
                    Android App
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jaboo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

