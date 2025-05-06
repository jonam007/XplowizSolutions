import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Bell, 
  Settings, 
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

const ChurchSoftwarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Modern Church Management Software
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Streamline your ministry with our comprehensive church management solution
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-purple-400" />,
                title: "Member Management",
                description: "Track member information, attendance, and engagement with powerful analytics."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-400" />,
                title: "Online Donations",
                description: "Secure payment processing for tithes and offerings with detailed reporting."
              },
              {
                icon: <Calendar className="w-8 h-8 text-purple-400" />,
                title: "Event Scheduling",
                description: "Organize church events, room bookings, and volunteer coordination."
              },
              {
                icon: <Bell className="w-8 h-8 text-purple-400" />,
                title: "Communication Tools",
                description: "Send targeted messages, announcements, and prayer requests to your congregation."
              },
              {
                icon: <Settings className="w-8 h-8 text-purple-400" />,
                title: "Ministry Tools",
                description: "Manage small groups, ministries, and church resources efficiently."
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Security & Privacy",
                description: "Enterprise-grade security to protect your church's sensitive information."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Solution?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Easy-to-use interface",
                  "Cloud-based access",
                  "Mobile-friendly design",
                  "Regular updates",
                  "24/7 support",
                  "Data backup & security"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              See Our Platform in Action
            </h2>
            <p className="text-lg text-gray-300">
              Explore screenshots of our church management software to see how it can help streamline your operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://via.placeholder.com/400x300?text=Dashboard",
              "https://via.placeholder.com/400x300?text=Member+Management",
              "https://via.placeholder.com/400x300?text=Event+Scheduling",
              "https://via.placeholder.com/400x300?text=Donation+Tracking",
              "https://via.placeholder.com/400x300?text=Analytics",
              "https://via.placeholder.com/400x300?text=Mobile+View"
            ].map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
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
                Ready to Transform Your Church Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of churches already using our platform
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChurchSoftwarePage;