
import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "./ui/button";
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MediaSection = () => {
  // Mock video data - in a real implementation, these would be actual YouTube/SoundCloud links
  const featuredVideos = [
    {
      id: "video1",
      title: "Surah Rahman - Live Recitation",
      src: "/Qari_Video_1.mp4",
      duration: "00:52",
    },
    {
      id: "video2",
      title: "Taraweeh Prayer in Maldives",
      src: "/Qari_Video_2.mp4",
      duration: "00:48",
    },
    {
      id: "video3",
      title: "Quranic Recitation - Islamic Conference",
      src: "/Qari_Video_3.mp4",
      duration: "02:57",
    },
    {
      id: "video4",
      title: "Quranic Recitation - Islamic Conference",
      src: "/Qari_Video_4.mp4",
      duration: "02:57",
    },
    {
      id: "video5",
      title: "Quranic Recitation - Islamic Conference",
      src: "/Qari_Video_5.mp4",
      duration: "02:57",
    },
    {
      id: "video7",
      title: "Quranic Recitation - Islamic Conference",
      src: "/Qari_Video_7.mp4",
      duration: "02:57",
    },
  ];
  const [isPlaying, setIsPlaying] = useState(Array(featuredVideos.length).fill(false));
  const playerRefs = useRef([]);

  const handlePlay = (index) => {
    const updatedStates = isPlaying.map((_, i) => i === index);
    setIsPlaying(updatedStates);
  };

  const handlePause = (index) => {
    const updatedStates = [...isPlaying];
    updatedStates[index] = false;
    setIsPlaying(updatedStates);
  };

  const togglePlayPause = (index) => {
    const updatedStates = [...isPlaying];
    updatedStates[index] = !updatedStates[index];
    setIsPlaying(updatedStates);
  };

  // Mock gallery images
  const galleryImages = [
    "/Qari_67.jpg",
    "/Qari_96.jpg",
    "/Qari_31.jpg",
    "/Qari_38.jpg",
    "/Qari_74.jpg",
    "/Qari_80.jpg",
    "/Qari_84.jpg",
    "/Qari_99.jpg",
    "/Qari_34.jpg",
    "/Qari_36.jpg",
    "/Qari_46.jpg",
    "/Qari_86.jpg",
  ];

  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
            Media <span className="text-gold">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-inter">
            Watch and listen to Qari Waseem Ullah Amin's beautiful Quran recitations
            and international Taraweeh prayers.
          </p>
        </div>

        {/* Featured Videos Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-semibold text-navy mb-8 text-center">
            Featured Recitations
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 7000, // ✅ 3 seconds between slides
              disableOnInteraction: false, // keeps autoplay running after user interaction
            }}
            speed={800}
            loop={true} 
            navigation
          >
            {featuredVideos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <div
                  className="group relative rounded-lg overflow-hidden shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative w-full aspect-video">
                    <ReactPlayer
                      ref={el => playerRefs.current[index] = el}
                      url={video.src}
                      controls
                      playing={isPlaying[index]}
                      width="100%"
                      height="100%"
                      onPlay={() => handlePlay(index)}
                      onPause={() => handlePause(index)}
                      className="!absolute !top-0 !left-0 transition-transform duration-500"
                    />
                  </div>

                  {
                    !isPlaying[index] && (
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => togglePlayPause(index)}
                      >
                        <div className="h-16 w-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer hover:bg-gold transition-colors duration-300">
                          <Play className="h-6 w-6 text-navy" />
                        </div>
                      </div>
                    )
                  }
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Photo Gallery Section */}
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-navy mb-8 text-center">
            Photo Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="ghost" className="text-white border border-white hover:bg-white/20">
                    View Larger
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            {/* <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
              View Full Gallery
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
