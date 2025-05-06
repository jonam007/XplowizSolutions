import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Target, 
  Check
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              We're a team of passionate technology experts dedicated to delivering exceptional software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, TechSolutions began with a simple mission: to help businesses thrive through innovative technology solutions. What started as a small team of three developers has grown into a full-service software development company with a diverse team of experts.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've had the privilege of working with companies across various industries, from small startups to established enterprises, helping them transform their ideas into powerful digital solutions.
              </p>
              <p className="text-lg text-gray-600">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-lg text-gray-600">
              What drives us every day in creating exceptional software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative software solutions that solve complex problems, improve efficiency, and drive growth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading software development partner for businesses seeking to transform and succeed in the digital world.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the talented individuals who lead our company and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Anderson",
                position: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "With over 15 years of experience in software development and business leadership, Michael founded TechSolutions with a vision to create impactful digital solutions."
              },
              {
                name: "Jennifer Lee",
                position: "CTO",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Jennifer leads our technical team, bringing her extensive background in software architecture and emerging technologies to drive innovation."
              },
              {
                name: "David Wilson",
                position: "Creative Director",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "David oversees all design aspects of our projects, ensuring they not only function flawlessly but also provide exceptional user experiences."
              },
              {
                name: "Sarah Martinez",
                position: "Client Success Manager",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Sarah works closely with our clients to understand their needs and ensure our solutions deliver measurable business results."
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "300+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help bring your vision to life with our expertise in software development.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;