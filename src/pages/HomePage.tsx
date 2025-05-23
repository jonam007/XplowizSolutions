import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Users, 
  Clock, 
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/home/HeroCarousel';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-12"
            >
              We offer a comprehensive range of software development services to help businesses succeed in the digital world.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-10 h-10 text-blue-600" />,
                title: "Website Development",
                description: "Custom websites designed to engage your audience and drive conversions. We create responsive, fast-loading websites with seamless user experiences."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-blue-600" />,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications for iOS and Android. We build user-friendly, feature-rich apps that deliver exceptional experiences."
              },
              {
                icon: <Database className="w-10 h-10 text-blue-600" />,
                title: "Church Management Software",
                description: "Specialized solutions for churches and religious organizations. Our software streamlines administration, member management, and community engagement."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose XplowizSolutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with industry insights to deliver solutions that make a real difference for our clients.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-6 h-6 text-blue-600" />,
                    title: "Expert Team",
                    description: "Our team of skilled developers, designers, and strategists bring years of experience across diverse industries."
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-blue-600" />,
                    title: "Timely Delivery",
                    description: "We understand the importance of deadlines and deliver high-quality solutions on time, every time."
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                    title: "Quality Assurance",
                    description: "Rigorous testing and quality assurance processes ensure our solutions are robust, secure, and reliable."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                      <p className="mt-1 text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-50 rounded-2xl p-6 relative">
                <img 
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team Collaboration" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute bottom-10 left-0 transform -translate-x-1/3 bg-blue-600 text-white py-6 px-8 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold">200+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 mb-12">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "CEO, GreenTech Solutions",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                testimonial: "The team at TechSolutions delivered a website that exceeded our expectations. Their attention to detail and commitment to quality is unmatched."
              },
              {
                name: "Mark Williams",
                position: "Director, First Community Church",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                testimonial: "The church management system has transformed how we operate. It's intuitive, powerful, and has saved us countless hours of administrative work."
              },
              {
                name: "Emily Chen",
                position: "Founder, NexTech Apps",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                testimonial: "Working with TechSolutions on our mobile app was a seamless experience. Their technical expertise and collaborative approach made all the difference."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss how our custom software solutions can help your business thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Us Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;