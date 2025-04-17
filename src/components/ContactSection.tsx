'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 9876543210', '+91 9876543211'],
      action: 'tel:+919876543210',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      details: ['info@suraksha-dental.com', 'appointments@suraksha-dental.com'],
      action: 'mailto:info@suraksha-dental.com',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Address',
      details: ['123 Healthcare Avenue', 'Bangalore, Karnataka 560001'],
      action: 'https://maps.google.com/?q=Suraksha+Dental+Bangalore',
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: Emergency Only'],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 px-4">
            We're here to help. Contact us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                  {info.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1 text-sm md:text-base">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base inline-block"
                  >
                    {info.title === 'Phone' && 'Call Now'}
                    {info.title === 'Email' && 'Send Email'}
                    {info.title === 'Address' && 'Get Directions'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
