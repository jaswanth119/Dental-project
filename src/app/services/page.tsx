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
  FaUser,
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
      <section className="relative overflow-hidden min-h-screen">
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

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: -100,
                y: Math.random() * 500 + 100, // Start below the navbar
                opacity: 0.1,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: ['100vw', '-100px'],
                y: Math.random() * 500 + 100,
                opacity: [0.1, 0.2, 0.1],
                scale: Math.random() * 0.5 + 0.5,
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: i * 3,
              }}
            >
              <FaTooth className="w-12 h-12 text-blue-200/20" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative min-h-screen flex items-center">
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Our Services
                </h1>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -left-4 text-blue-200/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaTeeth className="w-16 h-16" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -right-4 text-blue-200/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaTeeth className="w-16 h-16" />
                </motion.div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100"
              >
                We offer comprehensive dental services to simplify your next visit to our practice,
                making it as pain-free as possible.
              </motion.p>

              {/* Service Icons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex justify-center gap-8 mt-12"
              >
                {[
                  { icon: FaTeeth, label: "Prevention" },
                  { icon: FaMicroscope, label: "Digital X-Rays" },
                  { icon: FaTooth, label: "Fillings" },
                  { icon: FaUserMd, label: "Surgery" },
                  { icon: FaCrown, label: "Cosmetic" }
                ].map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={index}
                    className="group flex flex-col items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <div className="text-blue-200/90 group-hover:text-white transition-colors p-4 bg-blue-500/10 rounded-xl backdrop-blur-sm">
                      <Icon className="w-10 h-10" />
                    </div>
                    <span className="text-sm text-blue-200 group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white backdrop-blur-sm bg-opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-blue-100/20"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl shadow-inner">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 group"
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors"></span>
                        <span className="group-hover:text-blue-800 transition-colors">{item}</span>
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
      <section className="relative py-20 overflow-hidden">
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
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-white/10"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-red-100 bg-red-500/20 p-6 rounded-2xl shadow-lg mb-8"
            >
              <FaWheelchair className="w-16 h-16" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dental Emergency?
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto mb-10">
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
                className="group flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-xl font-semibold"
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ 
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <FaPhone className="w-6 h-6" />
                </motion.div>
                <span>Emergency: +91 8639413582</span>
              </a>
              <div className="flex items-center gap-4 text-red-100">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg">Available 24/7</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
