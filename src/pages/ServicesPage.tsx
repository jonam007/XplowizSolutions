import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Layout, 
  ShoppingCart, 
  Server,
  Users,
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              We provide end-to-end software development services tailored to your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Core Services</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive range of software development services help businesses thrive in the digital landscape.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Website Development and Deployment */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Website Development</h3>
                <p className="text-gray-600 mb-6">
                  Professional website development with modern technologies and seamless deployment solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Custom website development",
                    "Modern, responsive design",
                    "Fast deployment process",
                    "Performance optimization",
                    "Security implementation"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" // Changed from /web-development
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Domain Registration */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Domain Registration</h3>
                <p className="text-gray-600 mb-6">
                  Secure your online presence with our domain registration and management services.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Domain name registration",
                    "DNS management",
                    "Domain transfer services",
                    "Domain privacy protection",
                    "24/7 support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" // Changed from /domain-registration
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* SEO & Marketing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Layout className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">SEO & Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Boost your online visibility with our comprehensive SEO and digital marketing solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Search engine optimization",
                    "Content optimization",
                    "Keyword research",
                    "Performance tracking",
                    "Marketing analytics"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" // Changed from /seo-services
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bulk SMS Services */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Bulk SMS Services</h3>
                <p className="text-gray-600 mb-6">
                  Reach your audience instantly with our reliable and scalable bulk SMS messaging solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Mass SMS campaigns",
                    "Automated messaging",
                    "SMS marketing",
                    "Delivery reports",
                    "API integration"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" // Changed from /bulk-sms
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Content Management System */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Layout className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Content Management</h3>
                <p className="text-gray-600 mb-6">
                  Powerful CMS solutions that make content creation and management effortless.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Custom CMS development",
                    "User-friendly interface",
                    "Content workflow automation",
                    "Multi-user management",
                    "SEO-friendly structure"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" // Changed from /cms-solutions
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile App Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom mobile applications with seamless user experience and powerful features.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "iOS & Android Development",
                    "Cross-platform Solutions",
                    "Push Notifications",
                    "Offline Functionality",
                    "App Store Deployment"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" // Changed from /mobile-app-development
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of additional services to complement our core offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-6 h-6 text-blue-600" />,
                title: "UI/UX Design",
                description: "User-centered design focused on creating intuitive, engaging interfaces that provide exceptional user experiences."
              },
              {
                icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
                title: "E-commerce Solutions",
                description: "Custom online stores with secure payment processing, inventory management, and seamless checkout experiences."
              },
              {
                icon: <Server className="w-6 h-6 text-blue-600" />,
                title: "Cloud Solutions",
                description: "Scalable, secure cloud infrastructure and migration services to optimize your business operations."
              },
              {
                icon: <Users className="w-6 h-6 text-blue-600" />,
                title: "Custom CRM Development",
                description: "Tailor-made customer relationship management systems designed to streamline sales and marketing processes."
              },
              {
                icon: <Database className="w-6 h-6 text-blue-600" />,
                title: "Database Design",
                description: "Efficient, scalable database architecture that ensures data integrity, security, and optimal performance."
              },
              {
                icon: <Monitor className="w-6 h-6 text-blue-600" />,
                title: "Maintenance & Support",
                description: "Ongoing technical support, updates, and maintenance to keep your software running smoothly."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">
              We follow a structured, collaborative approach to ensure your project is delivered on time and to the highest standard.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  title: "Discovery & Planning",
                  description: "We start by understanding your business goals, target audience, and project requirements to create a detailed project plan."
                },
                {
                  title: "Design & Prototyping",
                  description: "Our designers create wireframes and interactive prototypes to visualize the user interface and experience before development begins."
                },
                {
                  title: "Development",
                  description: "Our expert developers build your solution using the latest technologies and best practices, with regular updates and review cycles."
                },
                {
                  title: "Testing & Quality Assurance",
                  description: "Comprehensive testing ensures your software is bug-free, secure, and delivers an optimal user experience across all devices."
                },
                {
                  title: "Deployment & Launch",
                  description: "We handle the deployment process to ensure a smooth launch, providing all necessary training and documentation."
                },
                {
                  title: "Ongoing Support",
                  description: "Our relationship continues after launch with ongoing maintenance, support, and updates to keep your software performing at its best."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-px flex flex-col items-center relative">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 my-4 md:my-0">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:order-last' : 'md:pr-12'}`}>
                    {index % 2 === 0 ? <div className="hidden md:block"></div> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Project to Life?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Contact us today to discuss your project requirements and how we can help you achieve your goals.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;