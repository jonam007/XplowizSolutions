import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Welcome to XplowizSolution",
    subtitle: "Creating Innovative Digital Solutions for a Better Tomorrow",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Explore More"
  },
  {
    title: "Transform Your Digital Presence",
    subtitle: "Custom software solutions that drive innovation and growth",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Get Started"
  },
  {
    title: "Mobile Solutions That Matter",
    subtitle: "Powerful apps that engage users and deliver results",
    image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Build Your App"
  },
  {
    title: "Empower Your Ministry",
    subtitle: "Church management software that streamlines operations",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Learn More"
  }
];

const HeroCarousel: React.FC = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-screen">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 h-full flex items-center"
              >
                <div className="container mx-auto px-6">
                  <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white mb-8">
                      {slide.subtitle}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;