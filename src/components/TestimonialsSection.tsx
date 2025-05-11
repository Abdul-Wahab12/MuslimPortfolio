
import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Qamar Zaman Minhas",
      role: "Business Man",
      text: "Qari Waseem's recitation during Taraweeh prayers in our mosque brought many to tears. His mastery of Tajweed and the beauty of his voice truly makes the Quran come alive.",
      location: "Hong Kong",
      rating: 5,
    },
    {
      name: "Mohammed Abubakar",
      role: "Student",
      text: "I've been taking online Quran classes with Qari Waseem for over a year. His teaching method is exceptional, and my Tajweed has improved dramatically. He is patient, kind, and truly knowledgeable.",
      location: "Gujranwala, Pakistan",
      rating: 5,
    },
    {
      name: "Fatima Zahra",
      role: "Event Organizer",
      text: "We invited Qari Waseem for our annual Islamic conference, and his recitation was the highlight of the event. His ability to recite in multiple Qirat styles captivated our audience completely.",
      location: "Maldives",
      rating: 5,
    },
    {
      name: "Ibrahim Chen",
      role: "Islamic Center President",
      text: "Having Qari Waseem lead prayers at our center was truly a blessing. His unique recitation style and perfect pronunciation made a profound impact on our community.",
      location: "Hong Kong",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Arabic Language Student",
      text: "Learning Arabic from Qari Waseem has been transformative. His deep understanding of the language and its connection to Quranic text has made learning both enjoyable and spiritual.",
      location: "London, UK",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            What People <span className="text-gold">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg font-inter">
            Testimonials from students and organizations worldwide about their experience 
            with Qari Waseem Ullah Amin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-navy/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/30 rounded-full flex items-center justify-center text-gold font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index < 3 ? "bg-gold" : "bg-gold/30"
              }`}
              aria-label={`View testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
