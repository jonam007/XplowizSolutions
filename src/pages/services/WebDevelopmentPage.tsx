import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Rocket, 
  Search, 
  ShoppingCart, 
  Layout, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Timer,
  Award,
  Globe,
  Users,
  Settings,
  Shield
} from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section with Animation */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/pattern.svg")',
            opacity: 0.1
          }}
        />
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Create stunning, high-performance websites that engage your audience
              and drive business growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center p-6 rounded-lg bg-gray-50"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to deliver high-quality web solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Discovery",
                description: "Understanding your goals and requirements"
              },
              {
                icon: <Layout className="w-8 h-8 text-blue-600" />,
                title: "Design",
                description: "Creating the perfect user experience"
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "Development",
                description: "Building with clean, efficient code"
              },
              {
                icon: <Rocket className="w-8 h-8 text-blue-600" />,
                title: "Launch",
                description: "Deploying and optimizing performance"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "E-commerce Platform",
                description: "Custom shopping experience with advanced filtering and secure checkout."
              },
              {
                image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Corporate Website",
                description: "Modern design with interactive elements and optimized performance."
              },
              {
                image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "News Portal",
                description: "Content-rich platform with advanced search and categorization."
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to="/contact"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with the latest technologies to build modern web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              "src/assets/images/tech/react.svg",
              "src/assets/images/tech/nodejs.jpg",
              "src/assets/images/tech/typescript.jpg",
              "src/assets/images/tech/nextjs.jpg",
              "src/assets/images/tech/tailwind.jpg",
              "src/assets/images/tech/mongodb.jpg",
               "src/assets/images/tech/php.jpg", 
               "src/assets/images/tech/laravel.jpg"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={tech} alt="Technology" className="w-full h-12 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Comprehensive Web Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layout className="w-8 h-8 text-blue-600" />,
                title: "Responsive Web Design",
                description: "Websites that look and perform beautifully across all devices and screen sizes."
              },
              {
                icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
                title: "E-Commerce Development",
                description: "Custom online stores with secure payment processing and inventory management."
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "CMS Development",
                description: "Easy-to-manage content systems built with WordPress or custom solutions."
              },
              {
                icon: <Search className="w-8 h-8 text-blue-600" />,
                title: "SEO Optimization",
                description: "Built-in SEO best practices to improve your search engine rankings."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">
              We combine technical expertise with creative excellence to deliver websites that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: "Pixel-Perfect Design",
                description: "Meticulously crafted interfaces that maintain visual consistency and brand identity across all pages."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Lightning-Fast Performance",
                description: "Optimized code and assets ensure your website loads quickly and performs smoothly."
              },
              {
                icon: <Rocket className="w-8 h-8 text-blue-600" />,
                title: "SEO-Optimized Structure",
                description: "Built with search engines in mind to help improve your online visibility and rankings."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How much does a website cost?",
                answer: "Website costs vary based on complexity, features, and scope. We provide detailed quotes after understanding your specific requirements during the consultation."
              },
              {
                question: "How long does development take?",
                answer: "A typical website takes 4-8 weeks from concept to launch. Complex e-commerce or custom platforms may take longer. We'll provide a timeline during our initial discussion."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally after launch."
              },
              {
                question: "Will my website be mobile-friendly?",
                answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they work perfectly on all devices and screen sizes."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help bring your vision to life with a website that drives results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Get Started
              </Link>
              <a
                href="tel:+11234567890"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;