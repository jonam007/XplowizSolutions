import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Cloud,
  Wifi,
  RefreshCw,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

const MobileAppPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-cyan-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
              Church Management in Your Pocket
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Powerful mobile solutions for modern ministry management
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
              >
                Download iOS App
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Download Android App
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Mobile App Preview"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-white">Everything You Need</h2>
                <p className="text-gray-300">
                  Access all your church management tools from anywhere, anytime. Our mobile app puts the power of comprehensive church management in your pocket.
                </p>
                <ul className="space-y-4">
                  {[
                    "Real-time member updates",
                    "Mobile check-in system",
                    "Push notifications",
                    "Event management",
                    "Secure giving platform"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Screenshot Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              Explore Our App Screenshots
            </h2>
            <p className="text-lg text-gray-300">
              Take a closer look at the features and design of our mobile app.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://via.placeholder.com/400x300?text=Dashboard",
              "https://via.placeholder.com/400x300?text=Member+Management",
              "https://via.placeholder.com/400x300?text=Event+Scheduling",
              "https://via.placeholder.com/400x300?text=Push+Notifications",
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

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-cyan-400" />,
                title: "Fast Performance",
                description: "Optimized for speed and reliability, even on slower connections."
              },
              {
                icon: <Shield className="w-8 h-8 text-cyan-400" />,
                title: "Secure Access",
                description: "Enterprise-grade security with biometric authentication."
              },
              {
                icon: <Cloud className="w-8 h-8 text-cyan-400" />,
                title: "Cloud Sync",
                description: "Real-time synchronization across all your devices."
              },
              {
                icon: <Wifi className="w-8 h-8 text-cyan-400" />,
                title: "Offline Mode",
                description: "Continue working even without an internet connection."
              },
              {
                icon: <RefreshCw className="w-8 h-8 text-cyan-400" />,
                title: "Auto Updates",
                description: "Always stay up to date with automatic updates."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
                title: "Cross Platform",
                description: "Available for both iOS and Android devices."
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Download our mobile app and transform your church management today
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                >
                  Download Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;