import React from "react";
import { 
  Users, 
  Clock, 
  Building2, 
  MonitorSmartphone, 
  PenTool,
  ClipboardCheck,
  ArrowRight,
  Globe
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "global-talent",
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Global Talent Solutions",
      description: "Connect with India's elite engineering talent pool. We bridge the gap between US companies and skilled offshore engineers, ensuring seamless collaboration and exceptional results.",
      features: ["Rigorous talent screening", "Cultural alignment", "Time zone coordination"]
    },
    {
      id: "flexible-teams",
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Flexible Engineering Teams",
      description: "Scale your engineering capacity with flexible engagement models. From short-term project support to long-term dedicated teams, we adapt to your needs.",
      features: ["Project-based deployment", "Scalable team size", "Skill-matched resources"]
    },
    {
      id: "dedicated-team",
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Dedicated Team Building",
      description: "Build your extended engineering team in India. We handle recruitment, onboarding, and retention of dedicated engineers who work exclusively on your projects.",
      features: ["Dedicated resources", "Team integration", "Long-term partnerships"]
    },
    {
      id: "remote-workforce",
      icon: <MonitorSmartphone className="w-12 h-12 text-blue-600" />,
      title: "Remote Workforce Solutions",
      description: "Embrace the future of work with our remote engineering talent. We specialize in placing engineers for both remote and hybrid work arrangements.",
      features: ["Remote collaboration tools", "Flexible scheduling", "Global talent access"]
    },
    {     
      id: "design-cad",
      icon: <PenTool className="w-12 h-12 text-blue-600" />,
      title: "Design & CAD Services",
      description: "Access comprehensive design and CAD expertise. Our specialized engineers deliver precise technical drawings and innovative design solutions.",
      features: ["2D/3D modeling", "Technical documentation", "Design optimization"]
    },
    { 
      id: "validation",
      icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
      title: "Validation Services",
      description: "Ensure product reliability with our thorough bench validation services. Our engineers conduct comprehensive testing and verification processes.",
      features: ["Performance testing", "Quality assurance", "Compliance verification"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Engineering Excellence Through Global Collaboration
          </h2>
          <p className="text-lg text-slate-600">
            Transform your engineering capabilities with our comprehensive suite of services. 
            We connect US companies with India's top engineering talent, delivering innovative solutions and exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
            <div className="w-20 h-20 rounded-lg overflow-hidden mb-6">
              <img 
                src={`/images/service-${service.id}.jpg`} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 flex items-center text-blue-600 hover:text-blue-700 transition-colors group">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Enhance Your Engineering Capabilities?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our global engineering solutions can accelerate your project delivery and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Schedule a Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;