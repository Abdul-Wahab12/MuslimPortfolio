
import React, { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_jyjx668',        // EmailJS service ID
      'template_72obxv4',       // EmailJS template ID
      formRef.current,
      'NghF7SrwyBkFRmKsh'         // EmailJS public key
    ).then(
      (result) => {
        setSuccessMsg("Message sent successfully!");
        formRef.current.reset();
        setTimeout(() => {
          setSuccessMsg('');
        }, 10000)
      },
      (error) => {
        setSuccessMsg("Failed to send message. Please try again.");
        setTimeout(() => {
          setSuccessMsg('');
        }, 10000);
      }
    ).finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-inter">
            Reach out to book classes, schedule a recitation, or inquire about any of our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-2xl font-playfair font-semibold text-navy mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="from_name"
                    placeholder="Your name"
                    className="border-gray-300 focus:border-gold focus:ring-gold"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="from_email"
                    placeholder="Your email"
                    className="border-gray-300 focus:border-gold focus:ring-gold"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  className="border-gray-300 focus:border-gold focus:ring-gold"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="border-gray-300 focus:border-gold focus:ring-gold min-h-[150px]"
                  required
                />
              </div>

              <Button className="w-full bg-gold text-navy hover:bg-softgold" disabled={loading}>
                <Send className="h-4 w-4 mr-2" />
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
              {successMsg && <p className="text-green-600 pt-2">{successMsg}</p>}
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-playfair font-semibold text-navy mb-6">
              Contact Information
            </h3>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="bg-gold/20 rounded-full p-3 text-gold h-12 w-12 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Email Address</h4>
                  <p className="text-gray-600">qariwaseemullah@gmail.com</p>
                  {/* <p className="text-gray-600">bookings@qariwaseem.com</p> */}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-gold/20 rounded-full p-3 text-gold h-12 w-12 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600">+92 (300) 749-8747</p>
                  <p className="text-gray-600">Available 9 AM - 10 PM (EST)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-gold/20 rounded-full p-3 text-gold h-12 w-12 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Based In</h4>
                  <p className="text-gray-600">Gujranwala, Punjab, Pakistan</p>
                  <p className="text-gray-600">Available for international travel</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <h3 className="text-xl font-playfair font-semibold text-navy mb-6">
              Follow on Social Media
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/qariwaseemullah"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.facebook.com/qariwaseemullah', '_blank');
                }}
                className="bg-navy text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
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
                className="bg-navy text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339-8.3 227.2-32 135.7 22.5 72.4 60.4 32.1 129.8 32 204c0 35.2 8.2 69.5 24.2 100.5L0 480l178.7-55.6c28.7 7.9 58.7 11.9 88.5 11.9h.1c74.3 0 143.6-40.3 181.5-103.7 54.5-91.5 30.9-203.3-68-235.5zM223.5 388c-26.7 0-52.8-7.1-75.6-20.6l-5.4-3.2-89.5 27.9 28.4-87.3-3.5-5.6c-17.5-28.2-26.8-60.8-26.8-94.2 0-98.1 79.9-178 178-178 47.6 0 92.3 18.6 125.9 52.2 33.6 33.6 52.2 78.3 52.2 125.9.1 98.1-79.8 178-178 178zm101.8-138.2c-5.6-2.8-33.1-16.3-38.2-18.1-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18.1-17.7 21.8c-3.2 3.7-6.5 4.2-12.1 1.4-33.1-16.5-54.8-29.4-76.6-66.5-5.8-10 5.8-9.3 16.5-30.9 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30-17.1-41.1-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.7 6.9c-5.1 5.6-19.3 18.8-19.3 45.8s19.8 53.2 22.6 56.9c2.8 3.7 38.9 59.3 94.2 83.2 13.1 5.7 23.3 9.1 31.2 11.6 13.1 4.2 25 3.6 34.4 2.2 10.5-1.6 33.1-13.5 37.8-26.5 4.7-13 4.7-24.1 3.3-26.5-1.3-2.5-5.1-3.9-10.6-6.7z" />
                </svg>
              </a>


              <a
                href="https://www.instagram.com/qariwaseemullm/?igsh=MTc2a2JldnBramdvag%3D%3D"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.instagram.com/qariwaseemullm/?igsh=MTc2a2JldnBramdvag%3D%3D', '_blank');
                }}
                className="bg-navy text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
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
                className="bg-navy text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
