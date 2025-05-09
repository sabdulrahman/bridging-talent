import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-3 bg-white shadow-md" : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? "text-blue-600" : "text-blue-600"}`}>
              <span className="text-slate-800">Bridging</span>Talent
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-10">
                  <Link 
                    to="/services/global-talent" 
                    className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Global Talent Solutions
                  </Link>
                  <Link 
                    to="/services/flexible-teams" 
                    className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Flexible Engineering Teams
                  </Link>
                  <Link 
                    to="/services/dedicated-teams" 
                    className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Dedicated Team Building
                  </Link>
                  <Link 
                    to="/services/remote-workforce" 
                    className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Remote Workforce Solutions
                  </Link>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/customers" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Customers
            </Link>
            <Link to="/blog" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors">
                About Us
              </Link>
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="w-full text-left flex items-center justify-between text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      to="/services/global-talent" 
                      className="block py-2 text-slate-700 hover:text-blue-600"
                    >
                      Global Talent Solutions
                    </Link>
                    <Link 
                      to="/services/flexible-teams" 
                      className="block py-2 text-slate-700 hover:text-blue-600"
                    >
                      Flexible Engineering Teams
                    </Link>
                    <Link 
                      to="/services/dedicated-teams" 
                      className="block py-2 text-slate-700 hover:text-blue-600"
                    >
                      Dedicated Team Building
                    </Link>
                    <Link 
                      to="/services/remote-workforce" 
                      className="block py-2 text-slate-700 hover:text-blue-600"
                    >
                      Remote Workforce Solutions
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/pricing" className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors">
                Pricing
              </Link>
              <Link to="/customers" className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors">
                Customers
              </Link>
              <Link to="/blog" className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors">
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center mt-2"
              >
                Hire Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;