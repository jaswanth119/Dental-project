import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+918639413582" className="hover:text-blue-400">
                  +91 8639413582
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:surakshadentalhosp@gmail.com"
                  className="hover:text-blue-400"
                >
                  surakshadentalhosp@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <p>
                  First floor, opp. Kummari kunta bavi,
                  <br />
                  beside orange stores lane, kothapeta,
                  <br />
                  Vinukonda, Palnadu District,
                  <br />
                  Andhra Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
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

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
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
