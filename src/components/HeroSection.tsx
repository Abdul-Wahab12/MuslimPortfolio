
import React from "react";
// import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:py-32 bg-navy text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-12 -right-64 -top-64 h-[800px] w-[800px] rounded-full border-[40px] border-gold"></div>
        <div className="absolute transform -rotate-12 -left-64 -bottom-64 h-[800px] w-[800px] rounded-full border-[40px] border-gold"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bringing the Beauty of the <span className="text-gold">Quran</span> to Hearts Around the World
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 font-inter">
              Expert in Tajweed, Qirat, Hadar, Lehjaat & Quran Memorization.
            </p>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-video rounded-lg overflow-hidden border-4 border-gold/30 shadow-2xl">
              {/* This would be replaced with an actual video/image of Qari Waseem Ullah Amin */}
              <img 
                src="/Qari_38.jpg" 
                alt="Qari Waseem Ullah Amin reciting Quran" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
                {/* <div className="h-16 w-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer hover:bg-gold transition-colors duration-300">
                  <svg className="h-6 w-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
