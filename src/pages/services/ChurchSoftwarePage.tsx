import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Calendar,
  DollarSign,
  BarChart,
  MessageSquare,
  Heart,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Users2,
  FileImage,
  BookOpen,
  Archive,
  Award,
  Map,
  FileText,
  Mail,
  Gift,
  Wallet,
  Bell,
  FileSpreadsheet
} from 'lucide-react';

const ChurchSoftwarePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EaziParish Management System
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              A trusted system to manage your parish community, track participation, and streamline operations. 
              Experience the power of comprehensive church management software.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Membership Management */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Membership Management</h2>
              <p className="text-lg text-gray-600">
                Families and individuals are the heart and soul of your organization. Our comprehensive 
                system helps you manage all aspects of your parish community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users2 className="w-8 h-8 text-blue-600" />,
                  title: "Family Profile Tracking",
                  description: "Maintain detailed family records with relationships and history"
                },
                {
                  icon: <FileImage className="w-8 h-8 text-blue-600" />,
                  title: "Photo Management",
                  description: "Create and manage family & individual photos"
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  title: "Sacrament Register",
                  description: "Track Baptism, Holy Communion, Confirmation, Marriage and more"
                },
                {
                  icon: <Gift className="w-8 h-8 text-blue-600" />,
                  title: "Talent Management",
                  description: "Track and utilize member talents effectively"
                },
                {
                  icon: <Map className="w-8 h-8 text-blue-600" />,
                  title: "Area-wise Management",
                  description: "BCC-wise and street-wise data organization"
                },
                {
                  icon: <FileText className="w-8 h-8 text-blue-600" />,
                  title: "Certificate Management",
                  description: "Issue official certificates for various sacraments"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution Management */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contribution Management</h2>
              <p className="text-lg text-gray-600">
                Track and organize your contribution details with our comprehensive financial management tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Wallet className="w-8 h-8 text-blue-600" />,
                  title: "Subscription Management",
                  description: "Family and member-wise subscription tracking with multiple plans"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Management */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Communication Management</h2>
              <p className="text-lg text-gray-600">
                Share relevant information efficiently with your parish community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
                  title: "Bulk SMS Solution",
                  description: "Send instant messages from PC to multiple mobiles"
                },
                {
                  icon: <Bell className="w-8 h-8 text-blue-600" />,
                  title: "Event Notifications",
                  description: "Communicate special events, festivals, and meetings"
                },
                {
                  icon: <Mail className="w-8 h-8 text-blue-600" />,
                  title: "Email Management",
                  description: "Organize and manage group-wise email communications"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reports Section */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Reports</h2>
              <p className="text-lg text-gray-600">
                Generate detailed reports with our flexible reporting module.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileSpreadsheet className="w-8 h-8 text-blue-600" />,
                  title: "Dynamic Reports",
                  description: "Create custom reports with flexible parameters and export to Excel"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Church Leaders Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This software saved us 10+ hours weekly in administrative tasks!",
                author: "Pastor Michael Johnson",
                church: "First Community Church",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The online giving feature has increased our donations by 40%.",
                author: "Sarah Williams",
                church: "Grace Fellowship",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "Finally, a church management system that's easy to use!",
                author: "Pastor David Chen",
                church: "New Life Church",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-800">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.church}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Custom Church Software?
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-gray-800">Features</th>
                  <th className="px-6 py-4 text-center text-blue-600">Our Custom Solution</th>
                  <th className="px-6 py-4 text-center text-gray-600">Generic Software</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    feature: "Customization",
                    custom: "Fully customizable to your needs",
                    generic: "Limited templates"
                  },
                  {
                    feature: "Integration",
                    custom: "Seamless integration with existing tools",
                    generic: "Limited integration options"
                  },
                  {
                    feature: "Support",
                    custom: "Direct, personalized support",
                    generic: "Generic help desk"
                  },
                  {
                    feature: "Updates",
                    custom: "Regular updates based on your feedback",
                    generic: "Standard updates only"
                  }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-gray-800 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-green-600">
                      <div className="flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        {row.custom}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                question: "Is cloud hosting available?",
                answer: "Yes, our software can be hosted in the cloud for secure access from anywhere, or installed on your local servers based on your preference."
              },
              {
                question: "Can we integrate with existing tools?",
                answer: "Absolutely! Our software is designed to integrate with popular church tools and services, including accounting software and email platforms."
              },
              {
                question: "How secure is the donation processing?",
                answer: "We use bank-level encryption and comply with PCI DSS standards to ensure all financial transactions are completely secure."
              },
              {
                question: "What kind of support do you offer?",
                answer: "We provide comprehensive support including initial training, ongoing technical support, and regular check-ins to ensure your team is getting the most out of the software."
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
              Empower Your Ministry with Smart Software
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help streamline your church operations with custom software solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Schedule Demo
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChurchSoftwarePage;