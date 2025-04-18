'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUserMd, FaTooth, FaStethoscope } from 'react-icons/fa';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Dr. K.Gopi Krishna Reddy',
      qualification: 'M.D.S.',
      role: 'PROSTHODONTIST & IMPLANT Spl.',
      position: 'Chairman',
      description: 'Prosthodontist, implantologist and general dentist having 5 yrs of experience in treating complex cases involving both jaws',
      image: '/images/dr-gopi-krishna.jpg'
    },
    {
      name: 'Dr. K.Lakshmi Sowmya',
      qualification: 'M.D.S.',
      role: 'PERIDONTIST & IMPLANT Spl.',
      position: 'Director',
      description: 'Periodontist, Implantologist, diploma in clinical endodontics having 5 yrs of experience in treatinjg complex periodontal cases…',
      image: '/images/dr-lakshmi-sowmya.jpg'
    },
    {
      name: 'Dr.K.Anupam',
      qualification: '',
      role: 'ORAL SURGEON',
      position: '',
      description: 'Good experience on minor oral surgical procedures like impactions, trauma..',
      image: '/images/dr-anupam.jpg'
    },
    {
      name: 'Dr. Madhu Bhaskar.B',
      qualification: '',
      role: 'ORTHODONTIST',
      position: '',
      description: 'More than 5 years of experience in treating complex orthodontic cases…',
      image: '/images/dr-madhu-bhaskar.jpg'
    },
    {
      name: 'Dr. Harika',
      qualification: '',
      role: 'PEDODONTIST',
      position: '',
      description: 'More than 10 years of experience in preventice and interceptive child dentistry',
      image: '/images/dr-harika.jpg'
    },
    {
      name: 'Dr. Chinmay',
      qualification: '',
      role: 'ENDODONTIST',
      position: '',
      description: 'Good and experienced endodontist specialized in endodontic surgeries',
      image: '/images/dr-chinmay.jpg'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1800&q=80"
            alt="Our Team"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-[20%] opacity-20"
          >
            <FaTooth className="w-16 h-16 text-blue-200" />
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-[20%] opacity-20"
          >
            <FaStethoscope className="w-20 h-20 text-blue-200" />
          </motion.div>
        </div>

        <div className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center p-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6">
                <FaUserMd className="w-8 h-8 text-blue-100" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Meet Our Expert Team
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Our team of highly qualified dental specialists is committed to providing you with exceptional care and creating beautiful, healthy smiles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 hover:bg-white/90"
              >
                <div className="p-8 flex flex-col items-center bg-gradient-to-br from-blue-50/80 via-white/80 to-blue-50/80">
                  {member.image ? (
                    <div className="relative w-48 h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, 192px"
                      />
                    </div>
                  ) : (
                    <div className="relative w-48 h-48 mb-4 group">
                      <div className="absolute inset-0 bg-blue-200 rounded-lg animate-pulse group-hover:bg-blue-300 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaTooth className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <FaStethoscope className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-medium">Specialist</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                      {member.qualification && <span className="text-blue-600 ml-2">{member.qualification}</span>}
                    </h3>
                    <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                    {member.position && (
                      <p className="text-gray-600 font-medium">{member.position}</p>
                    )}
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
