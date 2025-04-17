import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-blue-400 mr-2" />
                <span>+91 8639413582</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-blue-400 mr-2" />
                <span>surakshadentalhosp@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span>First floor, opp. Kummari kunta bavi,<br />beside orange stores lane, kothapeta,<br />Vinukonda, Palnadu District,<br />Andhra Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-400">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-blue-400">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Connect With Us</h2>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com/surakshadental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/surakshadental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/@surakshadental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
            <h2 className="mb-2 text-sm font-semibold uppercase text-white">Working Hours</h2>
            <ul className="space-y-2">
              <li>Monday - Saturday: 9:00 AM - 8:00 PM</li>
              <li>Sunday: 10:00 AM - 2:00 PM</li>
              <li className="text-yellow-400 mt-4">
                Emergency Services Available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Suraksha Multi-Speciality Dental Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
