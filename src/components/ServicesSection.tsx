
import React from "react";
import { Book, Clock, FileText, Globe, Languages, Mic, Video } from "lucide-react";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Book size={24} />,
      title: "Online Quran Classes",
      description: "Learn Quran with proper Tajweed & Qirat under the guidance of Qari Waseem Ullah Amin.",
    },
    {
      icon: <FileText size={24} />,
      title: "One-on-One Memorization",
      description: "Personalized Quran memorization programs tailored to your pace and learning style.",
    },
    {
      icon: <Languages size={24} />,
      title: "Arabic Language Course",
      description: "Learn classical Arabic to better understand the Quran and Islamic texts.",
    },
    {
      icon: <Mic size={24} />,
      title: "Qirat Style Training",
      description: "Master different recitation styles including Warsh, Hafs, and other authentic Qirat methods.",
    },
    {
      icon: <Globe size={24} />,
      title: "International Recitations",
      description: "Book Qari Waseem for international Quran recitation events and gatherings.",
    },
    {
      icon: <Clock size={24} />,
      title: "Taraweeh Booking",
      description: "Invite Qari Waseem to lead Taraweeh prayers during Ramadan at your mosque.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-inter">
            Comprehensive Quranic education and recitation services to help you connect 
            with the divine words of Allah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gold/20 rounded-full p-3 text-gold h-14 w-14 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              {/* <Button variant="link" className="p-0 text-gold hover:text-navy">
                Learn More →
              </Button> */}
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Button className="bg-gold text-navy hover:bg-softgold">
            Book a Service
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
