import React from 'react';
import { Wrench } from 'lucide-react';

const WebMaintenancePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Wrench className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Web Maintenance Services</h1>
          <p className="text-xl text-gray-600">Keep your website running smoothly with our professional maintenance services</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Regular Updates</h2>
            <p className="text-gray-600">We ensure your website stays current with the latest security patches, plugin updates, and content management system versions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performance Optimization</h2>
            <p className="text-gray-600">Regular monitoring and optimization of your website's performance to ensure fast loading times and smooth operation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Monitoring</h2>
            <p className="text-gray-600">Continuous security monitoring and implementation of best practices to protect your website from threats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Backup Management</h2>
            <p className="text-gray-600">Regular backups of your website data and content to ensure quick recovery in case of any issues.</p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Maintenance Service?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>24/7 monitoring and support</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Proactive maintenance to prevent issues</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Regular performance reports</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Expert technical support team</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebMaintenancePage;