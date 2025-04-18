'use client';

import { motion } from 'framer-motion';
import {
  FaTeeth,
  FaMicroscope,
  FaTooth,
  FaUserMd,
  FaHospital,
  FaCrown,
  FaWheelchair,
  FaPhone,
} from 'react-icons/fa';
import Image from 'next/image';

const services = [
  {
    title: 'Prevention',
    icon: <FaTeeth className="w-8 h-8" />,
    items: [
      'Regular Dental Checkups',
      'Dental Sealants (ART)',
      'Fluoride Treatment',
      'Routine Cleaning',
      'Teeth Whitening',
      'Oral Hygiene Education',
      'Pediatric Dentistry',
    ],
  },
  {
    title: 'Digital X-Rays',
    icon: <FaMicroscope className="w-8 h-8" />,
    items: ['Digital Radiography including OPG & RVG'],
  },
  {
    title: 'Fillings',
    icon: <FaTooth className="w-8 h-8" />,
    items: [
      'Composite Fillings',
      'Porcelain Inlay/Onlay restorations',
      'GIC fillings',
    ],
  },
  {
    title: 'Periodontal Disease',
    icon: <FaUserMd className="w-8 h-8" />,
    items: [
      'Gingivitis',
      'Periodontitis',
      'Advanced Periodontitis including Root planing, Flap Surgeries, Laser treatments',
      'Periodontal Intervention, bone grafts & Maintenance',
    ],
  },
  {
    title: 'Endodontic Treatments',
    icon: <FaTooth className="w-8 h-8" />,
    items: [
      'Root Canal',
      'Endodontic Surgical Procedures',
      'Endodontic Diagnosis',
    ],
  },
  {
    title: 'Oral Surgery',
    icon: <FaHospital className="w-8 h-8" />,
    items: [
      'Tooth Extractions',
      'Dental Implants',
      'Facial Trauma Treatment',
      'TMJ Treatment',
      'Oral Cancer Screening',
    ],
  },
  {
    title: 'Advanced Treatments',
    icon: <FaCrown className="w-8 h-8" />,
    items: [
      'Crowns, Bridges & Prosthesis',
      'Full mouth rehabilitation',
      'Dental Implants & Aligners',
      'Lasers, Aligners, Ceramic braces, Smile Designing',
      'Dentures',
    ],
  },
];

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[50vh] md:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1800&q=80"
            alt="Dental Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative min-h-[50vh] md:min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Our Services
                </h1>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-2xl max-w-3xl mx-auto text-blue-100 px-4"
              >
                We offer comprehensive dental services to make your next visit to our practice
                as pain-free as possible.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white backdrop-blur-sm bg-opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-blue-100/20 p-6"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl shadow-inner">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 group"
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors"></span>
                        <span className="group-hover:text-blue-800 transition-colors text-sm md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1800&q=80"
            alt="Emergency Dental Care"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/95 to-red-900/95"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-12 text-center border border-white/10"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-red-100 bg-red-500/20 p-6 rounded-2xl shadow-lg mb-8"
            >
              <FaWheelchair className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Dental Emergency?
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto mb-10">
                At Suraksha dental hospital, we know that emergency situations arise when
                you least expect. Our team is available to provide immediate care
                with utmost professional hospitality – even outside regular office hours!
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="tel:+918639413582"
                className="group flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-xl font-semibold w-full sm:w-auto justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ 
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <FaPhone className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
                <span>Emergency: +91 8639413582</span>
              </a>
              <div className="flex items-center gap-4 text-red-100">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-base md:text-lg">Available 24/7</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
