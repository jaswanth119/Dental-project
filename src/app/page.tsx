'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import {
  FaTooth,
  FaTeeth,
  FaUserMd,
  FaClinicMedical,
  FaMicroscope,
  FaSmile,
} from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      icon: <FaTeeth className="w-12 h-12" />,
      title: 'Preventive Dental Care',
      description: 'Comprehensive check-ups, professional cleanings, fluoride treatments, and dental sealants to prevent cavities and maintain optimal oral health.',
      image: '/images/preventive-care.jpg',
    },
    {
      icon: <FaMicroscope className="w-12 h-12" />,
      title: 'Advanced Digital X-Rays',
      description: 'State-of-the-art digital radiography system providing instant, high-resolution images with minimal radiation exposure. Enables precise diagnosis and treatment planning.',
      image: 'https://img.freepik.com/free-photo/modern-dental-x-ray-machine-dentist-s-office_157027-1569.jpg',
    },
    {
      icon: <FaUserMd className="w-12 h-12" />,
      title: 'Root Canal Treatment',
      description: 'Painless and precise endodontic procedures using modern techniques to save your natural teeth and relieve dental pain.',
      image: '/images/root-canal.jpg',
    },
    {
      icon: <FaSmile className="w-12 h-12" />,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with teeth whitening, veneers, and cosmetic bonding procedures for a confident, beautiful appearance.',
      image: '/images/cosmetic.jpg',
    },
    {
      icon: <FaTooth className="w-12 h-12" />,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions using premium quality implants for a natural look and restored dental function.',
      image: '/images/implants.jpg',
    },
    {
      icon: <FaClinicMedical className="w-12 h-12" />,
      title: 'Emergency Dental Care',
      description: '24/7 emergency dental services for immediate relief from dental pain, trauma, and other urgent dental conditions.',
      image: '/images/emergency.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Dental clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Healthy Smiles Begin Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Welcome to Suraksha Multi-Speciality Dental Hospital, where we combine expertise
            with compassionate care for your perfect smile.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-appointment"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book an Appointment
            </Link>
            <button
              onClick={scrollToServices}
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class dental care with our comprehensive range of services,
              delivered using the latest technology and techniques.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-3">
                      <div className="text-white bg-blue-600/90 p-2 rounded-lg shadow-lg">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our satisfied patients have to say about their experience at Suraksha Dental
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I really love the service done by Suraksha dental hospital. Dr. Gopi Krishna
                is so patient with patients. The hospital is well organised with latest
                equipment and always well maintained."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">L</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lakshmi</h4>
                  <p className="text-sm text-gray-500">Regular Patient</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Good hospitality with well equipped infrastructure. Appreciate Dr. Gopi Krishna
                for his special care and attention. Will definitely recommend this for any
                dental related queries."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Arshad</h4>
                  <p className="text-sm text-gray-500">Satisfied Patient</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The hospital is spacious with state-of-the-art equipment and latest technology.
                Dr. Gopi Krishna is very considerate and compassionate which gives you the feeling
                that you are in safe hands."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Manoj M.</h4>
                  <p className="text-sm text-gray-500">Regular Patient</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
