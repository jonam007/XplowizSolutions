import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Zap, Users, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BulkSMSPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Bulk SMS Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Reach your audience instantly with our reliable SMS gateway
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Start Sending
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Instant Delivery",
                description: "Send messages to thousands of recipients instantly"
              },
              {
                icon: <Settings className="w-8 h-8 text-blue-600" />,
                title: "API Integration",
                description: "Easy integration with your existing systems"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Group Management",
                description: "Organize contacts and create targeted campaigns"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                messages: "1,000",
                features: [
                  "API Access",
                  "Delivery Reports",
                  "24/7 Support",
                  "Custom Sender ID"
                ]
              },
              {
                name: "Business",
                price: "$79",
                messages: "5,000",
                features: [
                  "API Access",
                  "Delivery Reports",
                  "24/7 Priority Support",
                  "Custom Sender ID",
                  "Message Templates"
                ]
              },
              {
                name: "Enterprise",
                price: "$149",
                messages: "15,000",
                features: [
                  "API Access",
                  "Delivery Reports",
                  "24/7 Priority Support",
                  "Custom Sender ID",
                  "Message Templates",
                  "Dedicated Account Manager"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-6">{plan.messages} SMS Credits</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-6 text-center bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Sending?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our team to discuss your SMS needs
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkSMSPage;