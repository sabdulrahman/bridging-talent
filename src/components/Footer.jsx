import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">
                <span className="text-white">Bridging</span>
                <span className="text-blue-400">Talent</span>
              </h2>
            </Link>
            <p className="text-slate-300 mb-6">
              Connecting US companies with India's top engineering talent for seamless global collaboration.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">US Office: 123 Innovation Drive</p>
                  <p className="text-slate-300">San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">India Office: 45 Tech Park</p>
                  <p className="text-slate-300">Bangalore, 560103</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/customers" className="text-slate-300 hover:text-blue-400 transition-colors">Customers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/global-talent" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Global Talent Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/flexible-teams" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Flexible Engineering Teams
                </Link>
              </li>
              <li>
                <Link to="/services/dedicated-teams" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Dedicated Team Building
                </Link>
              </li>
              <li>
                <Link to="/services/remote-workforce" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Remote Workforce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/design-cad" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Design & CAD Services
                </Link>
              </li>
              <li>
                <Link to="/services/validation" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Validation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-slate-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-slate-300">info@bridgingtalent.com</p>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-slate-300">www.bridgingtalent.com</p>
              </div>
            </div>
            
            {/* Subscribe Form */}
            <form className="mb-6">
              <label className="block text-white mb-2">Subscribe to our newsletter</label>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-slate-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BridgingTalent. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <button 
              onClick={scrollToTop}
              className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;