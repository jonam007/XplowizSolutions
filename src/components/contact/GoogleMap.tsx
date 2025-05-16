import React from 'react';
import { motion } from 'framer-motion';

const GoogleMap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
    >
    
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.0989804846167!2d76.99491607970417!3d10.99877461136897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859dceb5165ab%3A0x8200b9ca0199cdc3!2sSowripalayam%20Pirivu%2C%20Ramanathapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641045!5e0!3m2!1sen!2sin!4v1746761223424!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="XplowizSolutions Location"
      />
    </motion.div>
  );
};

export default GoogleMap;