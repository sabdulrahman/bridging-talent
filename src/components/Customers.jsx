import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Award, ChartBar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Customers = () => {
  const [activeTab, setActiveTab] = useState('technology');
  
  const industries = ['technology', 'manufacturing', 'healthcare', 'finance'];
  
  const caseStudies = {
    technology: [
      {
        id: 1,
        title: "How TechNova Scaled Their Engineering Team with BridgingTalent",
        description: "Learn how TechNova expanded their engineering capacity by 300% within 6 months using our dedicated team model.",
        stats: [
          { value: "300%", label: "Team Growth" },
          { value: "40%", label: "Cost Reduction" },
          { value: "25+", label: "Engineers" },
        ],
        image: "/images/customers-technova.jpg"
      },
      {
        id: 2,
        title: "SaaS Platform Accelerates Development with Offshore Engineers",
        description: "See how a leading SaaS company reduced time-to-market by 35% by leveraging our engineering talent pool.",
        stats: [
          { value: "35%", label: "Faster Delivery" },
          { value: "12", label: "Engineers" },
          { value: "8", label: "Months" },
        ],
        image: "/images/customers-saas.jpg"
      }
    ],
    manufacturing: [
      {
        id: 3,
        title: "Modernizing CAD Systems with Specialized Engineering Teams",
        description: "How a manufacturing leader transformed their design workflows with our dedicated CAD specialists.",
        stats: [
          { value: "50%", label: "Process Optimization" },
          { value: "15", label: "CAD Engineers" },
          { value: "3", label: "Design Centers" },
        ],
        image: "/images/customers-manufacturing.jpg"
      }
    ],
    healthcare: [
      {
        id: 4,
        title: "Medical Device Startup Scales Testing & Validation",
        description: "A medical technology company expanded their validation capacity while maintaining strict quality standards.",
        stats: [
          { value: "150%", label: "Testing Capacity" },
          { value: "10", label: "Validation Engineers" },
          { value: "99.8%", label: "Quality Rating" },
        ],
        image: "/images/customers-healthcare.jpg"
      }
    ],
    finance: [
      {
        id: 5,
        title: "FinTech Company Builds Remote Development Center",
        description: "How a growing fintech established a complete development center in India while maintaining security compliance.",
        stats: [
          { value: "60%", label: "Cost Reduction" },
          { value: "30+", label: "Team Size" },
          { value: "100%", label: "Compliance Maintained" },
        ],
        image: "/images/customers-fintech.jpg"
      }
    ]
  };
  
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      value: "150+",
      label: "Clients Worldwide",
      description: "Trusted by companies ranging from startups to Fortune 500 enterprises"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      value: "1,500+",
      label: "Engineers Placed",
      description: "Skilled professionals connecting US innovation with Indian expertise"
    },
    {
      icon: <ChartBar className="w-12 h-12 text-blue-600" />,
      value: "95%",
      label: "Client Retention",
      description: "Our partnerships last because we deliver consistent excellence"
    }
  ];

  const successFactors = [
    "Rigorous talent screening process",
    "Cultural alignment & communication training",
    "Time zone overlap management",
    "Continuous performance monitoring",
    "Transparent reporting & feedback systems",
    "Long-term career development"
  ];

  return (
    <section id="customers" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-slate-600">
            Discover how companies across various industries have transformed their engineering capabilities with BridgingTalent.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">
                {stat.label}
              </h4>
              <p className="text-slate-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveTab(industry)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors ${
                  activeTab === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies[activeTab].map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                    Case Study
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {study.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-between mb-6">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-sm text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Factors */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mt-16">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                What Makes Our Clients Successful
              </h3>
              <p className="text-slate-600 mb-6">
                We've identified key factors that consistently lead to successful engineering partnerships between US companies and Indian talent.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {successFactors.map((factor, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img
                src="/images/customers-success.jpg"
                alt="Team collaboration"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our global engineering talent solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Customers;