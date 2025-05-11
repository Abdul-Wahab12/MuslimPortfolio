
import React from "react";
import { Award, Book, Globe, GraduationCap, Languages, Mic } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
            About <span className="text-gold">Qari Waseem Ullah Amin</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-inter">
            An internationally acclaimed Qari and Hafiz-ul-Quran dedicated to spreading the beauty of 
            Quranic recitation across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="rounded-lg overflow-hidden">
              {/* This would be replaced with an actual image of Qari Waseem Ullah Amin */}
              <img
                src="/Qari_Waseem.jpg"
                alt="Qari Waseem Ullah Amin"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 h-64 w-64 border-8 border-gold/30 rounded-lg -z-10"></div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-playfair font-semibold text-navy mb-6">
              Expertise & Background
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-gold/20 rounded-full p-3 text-gold h-12 w-12 flex items-center justify-center shrink-0">
                  <Book size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Expert in Quranic Sciences</h4>
                  <p className="text-gray-600">
                    Mastery in Tajweed, Hadar, Qirat, and Lehjaat-e-Quran with deep knowledge of Arabic linguistics.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gold/20 rounded-full p-3 text-gold h-12 w-12 flex items-center justify-center shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Educational Background</h4>
                  <p className="text-gray-600">
                    Completed Arabic Language and Quran Studies from renowned Islamic institutions with years of teaching experience.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gold/20 rounded-full p-3 text-gold h-12 w-12 flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Award-Winning Reciter</h4>
                  <p className="text-gray-600">
                    Winner and participant in multiple international Quran Qirat Competitions, recognized for his unique recitation style.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gold/20 rounded-full p-3 text-gold h-12 w-12 flex items-center justify-center shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">International Recognition</h4>
                  <p className="text-gray-600">
                    Invited to lead Taraweeh prayers in Hong Kong, Maldives, Thailand, Saudi Arabia (KSA), and the USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
