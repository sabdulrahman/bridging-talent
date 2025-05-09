import React from 'react';
import { ArrowRight, CheckCircle, Globe, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const services = [
    "Global Talent Solutions for US Companies",
    "Dedicated Engineering Teams in India",
    "Remote Workforce Management",
    "Technical Design & CAD Services",
    "Engineering Validation & Testing"
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="container mx-auto px-4 py-16 md:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Connecting <span className="text-blue-600">US Innovation</span> with <span className="text-blue-600">Indian Engineering</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              BridgingTalent helps US companies build and manage high-performing offshore engineering teams in India with seamless integration and exceptional results.
            </p>
            
            {/* Services Bullet Points */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{service}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/about" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
              >
                Know More About Us
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition"
              >
                Hire Us
              </Link>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
              <img 
                src="/images/hero-image.jpg" 
                alt="US-India Engineering Collaboration"
                className="rounded-xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900">Global Reach</h3>
            <p className="text-slate-600 mt-2">Bridging US innovation with India's top engineering talent</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900">Expert Teams</h3>
            <p className="text-slate-600 mt-2">500+ skilled engineers ready to join your projects</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900">Proven Results</h3>
            <p className="text-slate-600 mt-2">95% client retention rate across all partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;