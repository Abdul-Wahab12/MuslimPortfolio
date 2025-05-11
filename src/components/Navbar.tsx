
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-navy text-white fixed w-full z-50">
      <div className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-xl md:text-2xl font-playfair font-semibold">
            Qari Waseem Ullah Amin
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-gold transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-gold transition-colors duration-300">
            About
          </a>
          <a href="#services" className="hover:text-gold transition-colors duration-300">
            Services
          </a>
          <a href="#testimonials" className="hover:text-gold transition-colors duration-300">
            Testimonials
          </a>
          <a href="#media" className="hover:text-gold transition-colors duration-300">
            Media
          </a>
          <a href="#contact" className="hover:text-gold transition-colors duration-300">
            Contact
          </a>
          {/* <Button className="bg-gold text-navy hover:bg-softgold">
            Book Now
          </Button> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-navy py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#media"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMenu}
            >
              Media
            </a>
            <a
              href="#contact"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button className="bg-gold text-navy hover:bg-softgold w-full">
              Book Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
