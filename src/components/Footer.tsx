
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-gold">
              About Us
            </h3>
            <p className="text-gray-300 mb-6">
              Qari Waseem Ullah Amin is dedicated to spreading the beauty of Quranic recitation and Islamic education worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/qariwaseemullah"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.facebook.com/qariwaseemullah', '_blank');
                }}
                className="text-gray-300 hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/+923007498747"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://wa.me/+923007498747', '_blank');
                }}
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0C7.164 0 0 7.163 0 16c0 2.837.74 5.522 2.039 7.867L0 32l8.386-2.196A15.928 15.928 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.412a13.38 13.38 0 01-7.19-2.05l-.514-.308-4.978 1.304 1.327-4.858-.335-.527A13.366 13.366 0 012.588 16C2.588 8.873 8.873 2.588 16 2.588S29.412 8.873 29.412 16 23.127 29.412 16 29.412zm7.73-10.412c-.419-.21-2.478-1.223-2.861-1.361-.383-.14-.663-.21-.942.21-.28.419-1.082 1.36-1.327 1.64-.245.28-.51.315-.929.105-.419-.21-1.77-.652-3.37-2.08-1.245-1.11-2.082-2.48-2.327-2.898-.245-.419-.026-.646.184-.855.189-.188.42-.492.63-.737.21-.245.28-.42.42-.7.14-.28.07-.525-.035-.735-.105-.21-.942-2.27-1.29-3.116-.34-.819-.687-.709-.942-.72l-.8-.014c-.28 0-.736.105-1.12.525-.383.42-1.46 1.426-1.46 3.48 0 2.054 1.493 4.042 1.7 4.317.21.28 2.94 4.48 7.122 6.28 4.18 1.8 4.18 1.2 4.93 1.12.736-.07 2.478-1.012 2.827-1.99.35-.979.35-1.822.245-1.99-.105-.175-.384-.28-.803-.49z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/qariwaseemullm/?igsh=MTc2a2JldnBramdvag%3D%3D"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.instagram.com/qariwaseemullm/?igsh=MTc2a2JldnBramdvag%3D%3D', '_blank');
                }}
                className="text-gray-300 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@qariwaseemullahaminofficia3128"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.youtube.com/@qariwaseemullahaminofficia3128', '_blank');
                }}
                className="text-gray-300 hover:text-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#media"
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-gold">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-gold mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-300">qariwaseemullah@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-gold mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-gray-300">+92-300-7498747</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-gold mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-300">Gujranwala, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Islamic Quote */}
        <div className="border-t border-gold/20 pt-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 italic mb-2 font-playfair">
              "The best among you are those who learn the Quran and teach it to others."
            </p>
            <p className="text-gold text-sm">- Prophet Muhammad (peace be upon him)</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Qari Waseem Ullah Amin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
