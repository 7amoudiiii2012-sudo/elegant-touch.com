import React from "react";
import Navbar from "@/components/barber/Navbar";
import Hero from "@/components/barber/Hero";
import Services from "@/components/barber/Services";
import WhyUs from "@/components/barber/WhyUs";
import Reviews from "@/components/barber/Reviews";
import Contact from "@/components/barber/Contact";
import Footer from "@/components/barber/Footer";

export default function Home() {
  return (
    <div className="bg-[#0A0B0D] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
