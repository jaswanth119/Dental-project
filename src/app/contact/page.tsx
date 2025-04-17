'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1800&q=80"
            alt="Contact Us"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 via-blue-800/95 to-blue-900/95"></div>
        </div>

        <div className="relative pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                We're here to help! Reach out to us through any of the channels below.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="relative h-[400px] mt-8">
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985619587854!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
