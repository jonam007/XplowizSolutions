import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Code,
  Rocket,
  Shield,
  Settings,
  Users,
  ArrowRight,
  CheckCircle2,
  Award,
  Timer
} from 'lucide-react';

const MobileAppPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Mobile Apps, Seamless Experiences
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From concept to launch, we build innovative mobile applications that users love and businesses rely on.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Discuss Your App Idea
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a detailed development roadmap."
              },
              {
                icon: <Settings className="w-8 h-8 text-blue-600" />,
                title: "UI/UX Design",
                description: "Creating intuitive interfaces that provide exceptional user experiences."
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "Development",
                description: "Building your app using the latest technologies and best practices."
              },
              {
                icon: <Rocket className="w-8 h-8 text-blue-600" />,
                title: "Testing & Launch",
                description: "Rigorous testing and successful deployment to app stores."
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 relative"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              We use the latest technologies to build robust and scalable mobile applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flutter",
                description: "Cross-platform development for iOS and Android"
              },
              {
                title: "React Native",
                description: "Native performance with JavaScript"
              },
              {
                title: "Swift",
                description: "Native iOS development"
              },
              {
                title: "Kotlin",
                description: "Native Android development"
              }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Social Network App",
                stats: "40% increase in user retention",
                description: "A social networking app that connects like-minded individuals."
              },
              {
                image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Fitness Tracking App",
                stats: "100,000+ active users",
                description: "Comprehensive fitness tracking with social features."
              },
              {
                image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Business Management App",
                stats: "85% task efficiency improvement",
                description: "Streamlined business operations and team management."
              }
            ].map((case_study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <img
                  src={case_study.image}
                  alt={case_study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {case_study.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{case_study.stats}</p>
                  <p className="text-gray-600">{case_study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Native vs. Hybrid apps?",
                answer: "We recommend the best approach based on your specific needs. Native apps offer the best performance and access to platform features, while hybrid apps provide faster development and cross-platform compatibility."
              },
              {
                question: "How do you handle app store submissions?",
                answer: "We manage the entire app store submission process, including preparation of all required assets, documentation, and compliance with store guidelines for both iOS and Android platforms."
              },
              {
                question: "What about app maintenance?",
                answer: "We provide ongoing maintenance and support to ensure your app stays up-to-date with the latest OS versions, security patches, and feature enhancements."
              },
              {
                question: "How long does it take to develop an app?",
                answer: "Development time varies based on complexity, but typically ranges from 3-6 months. We'll provide a detailed timeline during our initial consultation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
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
              Let's Build Your Dream App
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your idea into a powerful mobile application that users love.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;