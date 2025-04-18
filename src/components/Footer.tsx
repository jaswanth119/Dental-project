import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61560980788709',
      icon: <FaFacebook className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/surakshadentalhosp_vinukonda?igsh=MWU2Zms1OGdseHN1aA==',
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@surakshadentalhospital?si=YeWwJranN45VegSR',
      icon: <FaYoutube className="w-5 h-5" />,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/+918639413582',
      icon: <FaTelegram className="w-5 h-5" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/qr/6HPINRNWUWKDO1',
      icon: <FaWhatsapp className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Contact Us</h2>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase text-white">Address</h3>
              <p className="text-gray-300">
                First floor, opp. Kummari kunta bavi,<br />
                beside orange stores lane, kothapeta,<br />
                Vinukonda, Palnadu District,<br />
                Andhra Pradesh
              </p>
              <a
                href="https://maps.google.com/?q=Suraksha+Dental+Hospital+Kothapeta+Vinukonda+Palnadu+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 mt-2"
              >
                <FaMapMarkerAlt className="w-4 h-4" />
                Get Directions
              </a>
            </div>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-blue-400 mr-2" />
                <span>+91 8639413582</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-blue-400 mr-2" />
                <span>surakshadentalhosp@gmail.com</span>
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
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <h2 className="mb-2 text-sm font-semibold uppercase text-white">Working Hours</h2>
            <ul className="space-y-2">
              <li className="text-gray-300">Monday - Saturday: 9:00 AM - 9:00 PM</li>
              <li className="text-gray-300">Sunday: 10:00 AM - 2:00 PM</li>
              <li className="text-yellow-400 font-medium">Emergency Services Available 24/7</li>
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
