import React, { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import ContactInfo from '../components/contact/ContactInfo';
import { ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSuccess = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Have a project in mind? Let's discuss how we can bring your vision to life.
            </p>
            <a 
              href="#contact-form" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us Now
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 my-8 max-w-3xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Message Sent Successfully</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Thank you for contacting us! We've received your message and will get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <section id="contact-form" className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <ContactForm onSuccess={handleFormSuccess} />
          </section>

          {/* Map and Contact Info Section */}
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Location</h2>
              <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                <GoogleMap />
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <ContactInfo />
            </section>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-12">
              Find answers to some of the most common questions about our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity and scope. A typical website project takes 4-8 weeks, while mobile apps and custom software solutions may take 2-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer maintenance and support after project completion?",
                answer: "Yes, we offer ongoing maintenance and support packages to keep your website or application running smoothly. Our support plans include regular updates, security patches, and technical assistance."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "Our team is proficient in a wide range of technologies including React, Node.js, Python, Flutter, React Native, and more. We choose the best technology stack based on your specific project requirements."
              },
              {
                question: "How do you handle project pricing?",
                answer: "We offer transparent pricing based on project scope and requirements. Depending on the project, we may work on a fixed-price model or a time and materials basis. We'll provide a detailed quote after our initial consultation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;