import React from "react";
import { Shield, UserCheck, Target, ChartBar } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Trust & Integrity",
      description: "Building lasting relationships through transparency and ethical practices in every engagement."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "Client-Centric",
      description: "Tailoring our approach to meet unique client needs and exceed expectations consistently."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Results-Driven",
      description: "Delivering measurable outcomes and tangible value through strategic solutions."
    },
    {
      icon: <ChartBar className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "Embracing forward-thinking approaches to solve complex business challenges."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Driving Excellence in Business Transformation
            </h2>
            <p className="text-lg text-slate-600">
              With over two decades of experience, we've established ourselves as a leading consulting firm, partnering with organizations to navigate complex challenges and capitalize on opportunities in an ever-evolving business landscape.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-blue-600"></div>
                <p className="text-slate-700">
                  Trusted by Fortune 500 companies across 30+ countries
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-blue-600"></div>
                <p className="text-slate-700">
                  Over 2000+ successful business transformations completed
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-blue-600"></div>
                <p className="text-slate-700">
                  Industry-leading expertise across multiple sectors
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/collaborate.png" 
              alt="Team collaboration" 
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <img 
              src="/images/business.png" 
              alt="Business meeting" 
              className="rounded-xl shadow-lg w-full h-full object-cover mt-8"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Core Values</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These principles guide our approach and ensure we deliver exceptional value to our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">
                {value.title}
              </h4>
              <p className="text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="mb-8 text-blue-100">
              Let's discuss how we can help you achieve your business goals.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Schedule a Consultation
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;