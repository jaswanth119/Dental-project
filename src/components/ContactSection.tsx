'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaPhone className="w-8 h-8 text-blue-500" />,
    title: 'Phone',
    content: '+91-8639413582',
    action: 'Call Now',
    href: 'tel:+918639413582',
  },
  {
    icon: <FaEnvelope className="w-8 h-8 text-blue-500" />,
    title: 'Email',
    content: 'surakshadentalhosp@gmail.com',
    action: 'Send Email',
    href: 'mailto:surakshadentalhosp@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt className="w-8 h-8 text-blue-500" />,
    title: 'Address',
    content: 'First floor, opp. Kummari kunta bavi, beside orange stores lane, kothapeta, Vinukonda, Palnadu District, Andhra Pradesh',
    action: 'Get Directions',
    href: 'https://maps.google.com/?q=Suraksha+Dental+Hospital+Kothapeta+Vinukonda+Palnadu+Andhra+Pradesh',
  },
  {
    icon: <FaClock className="w-8 h-8 text-blue-500" />,
    title: 'Working Hours',
    content: [
      'Monday - Saturday: 9:00 AM - 9:00 PM',
      'Sunday: 10:00 AM - 2:00 PM',
      'Emergency Services: Available 24/7'
    ],
    action: '',
    href: '',
  },
];

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We're here to help. Contact us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {Array.isArray(info.content) ? (
                  <div className="space-y-2">
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm mb-4">
                    {info.content}
                  </p>
                )}
                {info.action && (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-blue-500 hover:text-blue-600 font-medium text-sm mt-2"
                  >
                    {info.action}
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
