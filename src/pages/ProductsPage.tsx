import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Shield, 
  Clock, 
  Monitor, 
  Smartphone, 
  Database, 
  Layout, 
  ShoppingCart, 
  Server,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
  BarChart3,
  TrendingUp,
  Award
} from 'lucide-react';

const ProductsPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Statistics */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise-Grade Software Solutions</h1>
            <p className="text-xl text-blue-100 mb-12">
              Trusted by over 30+ Clients
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {[
           
                { number: "98%", label: "Customer Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "20+", label: "Clients Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Featured Products</h2>
            <p className="text-lg text-gray-600">
              Industry-leading solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Mobile App Development Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="src/assets/images/tech/mobileapp.png" 
                  alt="Mobile App Development"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Hybrid
                </div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile App Development</h3>
                <p className="text-gray-600 mb-6">
                  We build native and cross-platform mobile applications that provide exceptional user experiences across all devices.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "iOS app development",
                    "Android app development",
                    "Cross-platform solutions",
                    "UI/UX design for mobile",
                    "App maintenance and updates"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/mobile-apps" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Church Management Software Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="src/assets/images/tech/church-management.jpeg" 
                  alt="Church Management Software"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Cloud
                </div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Church Management Software</h3>
                <p className="text-gray-600 mb-6">
                  Our specialized software helps churches streamline operations, manage members, and foster community engagement.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Member management",
                    "Event scheduling",
                    "Donation tracking",
                    "Communication tools",
                    "Volunteer coordination"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/church-software" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits with Icons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Products?</h2>
            <p className="text-lg text-gray-600">
              Enterprise solutions built for scalability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Enterprise Security",
                description: "Bank-grade security protocols with end-to-end encryption and compliance with international standards."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Scalable Architecture",
                description: "Built to grow with your business, handling millions of transactions seamlessly."
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: "Industry Recognition",
                description: "Award-winning solutions recognized by leading industry experts."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                title: "Real-time Analytics",
                description: "Comprehensive dashboards with actionable insights for informed decision-making."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Trusted by leading organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The mobile app solution transformed our customer engagement completely.",
                author: "John Smith",
                role: "CTO, Tech Corp",
                rating: 5
              },
              {
                quote: "Best church management software we've ever used. Highly recommended!",
                author: "Pastor David Wilson",
                role: "Senior Pastor, Grace Church",
                rating: 5
              },
              {
                quote: "Exceptional support team and powerful features. Worth every penny.",
                author: "Sarah Johnson",
                role: "Operations Manager, StartUp Inc",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Get started with our powerful software solutions today
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
