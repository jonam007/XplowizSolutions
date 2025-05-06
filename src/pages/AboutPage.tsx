import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Target, 
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-page">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              About Xplowiz Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn more about our mission, vision, and the team behind our success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2015, TechSolutions began with a simple mission: to help businesses thrive through innovative technology solutions. What started as a small team of three developers has grown into a full-service software development company with a diverse team of experts.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Over the years, we've had the privilege of working with companies across various industries, from small startups to established enterprises, helping them transform their ideas into powerful digital solutions.
              </p>
              <p className="text-lg text-gray-300">
                Today, we continue to push the boundaries of what's possible with technology, staying at the forefront of industry trends and best practices to deliver cutting-edge solutions that drive real business results.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-lg text-gray-300">
              What drives us every day in creating exceptional software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/60 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To empower businesses with innovative software solutions that solve complex problems, improve efficiency, and drive growth.
              </p>
            </div>

            <div className="bg-gray-900/60 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300">
                To be the leading software development partner for businesses seeking to transform and succeed in the digital world.
              </p>
            </div>

            <div className="bg-gray-900/60 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 mb-4">
                Our Values
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                  <span className="ml-2">Excellence in everything we do</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                  <span className="ml-2">Innovation and forward thinking</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                  <span className="ml-2">Integrity and transparency</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                  <span className="ml-2">Client-centered approach</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                  <span className="ml-2">Continuous learning and growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300">
              A passionate group of professionals dedicated to delivering excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO", gradient: "from-purple-500 to-pink-600" },
              { name: "Jane Smith", role: "CTO", gradient: "from-blue-500 to-purple-600" },
              { name: "Alice Johnson", role: "Lead Designer", gradient: "from-green-500 to-teal-600" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient}/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience", gradient: "from-purple-500 to-pink-600" },
              { number: "300+", label: "Projects Completed", gradient: "from-blue-500 to-purple-600" },
              { number: "50+", label: "Team Members", gradient: "from-green-500 to-teal-600" },
              { number: "100%", label: "Client Satisfaction", gradient: "from-yellow-500 to-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient}/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Us on Our Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how Xplowiz Solutions can help you achieve your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;