import React from 'react';
import { CheckCircle, Users, Clock, Globe, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "BridgingTalent was established with a mission to connect US innovation with India's engineering excellence."
    },
    {
      year: "2019",
      title: "First 10 Clients",
      description: "Reached our first major milestone with 10 US companies successfully utilizing our engineering talent solutions."
    },
    {
      year: "2020",
      title: "Remote Work Expansion",
      description: "Pioneered enhanced remote collaboration methodologies during the global pandemic."
    },
    {
      year: "2022",
      title: "100+ Engineers Placed",
      description: "Surpassed 100 engineers successfully placed with US companies across various industries."
    },
    {
      year: "2023",
      title: "Opened Bangalore HQ",
      description: "Established our headquarters in Bangalore's tech corridor to better support our growing engineer base."
    },
    {
      year: "2024",
      title: "US Office Launch",
      description: "Opened our San Francisco office to better serve our US client base with local support."
    }
  ];

  const team = [
    {
      name: "Shakir Ul Hassan Mohammed",
      position: "CEO & Co-Founder",
      bio: "Former engineering leader with 15+ years of experience spanning US and Indian tech companies.",
      image: "/images/shakir.jpeg"
    },
    {
      name: "Abdul Rahman Shaikh",
      position: "CTO & Co-Founder",
      bio: "Operational excellence expert with experience scaling global teams across multiple industries.",
      image: "/images/abdul.jpeg"
    },
    {
      name: "Michael Rivera",
      position: "VP of Client Success",
      bio: "Customer-focused leader ensuring seamless integration between US clients and engineering teams.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Priya Sharma",
      position: "Head of Talent Acquisition",
      bio: "Recruitment specialist with deep networks in India's top engineering institutions and tech hubs.",
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in everything we do, from talent selection to project delivery."
    },
    {
      title: "Transparency",
      description: "We believe in open communication and honest relationships with both clients and engineers."
    },
    {
      title: "Cultural Bridge",
      description: "We actively work to bridge cultural gaps, ensuring effective collaboration across borders."
    },
    {
      title: "Long-term Partnerships",
      description: "We focus on building lasting relationships rather than short-term placements."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission: Connecting Global Talent
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              BridgingTalent was founded with a singular purpose: to create seamless connections between US innovation and India's engineering excellence.
            </p>
            <div className="flex items-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="/images/temp.png" 
                alt="Our story" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2018 by a team of engineers with experience in both US and Indian tech ecosystems, BridgingTalent was born from a simple observation: US companies needed specialized engineering talent, while India had an abundance of skilled engineers seeking global opportunities.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                What began as a small talent matching service has grown into a comprehensive engineering talent solution, helping companies build and manage dedicated offshore teams that function as seamless extensions of their US operations.
              </p>
              <p className="text-lg text-slate-600">
                Today, we're proud to have connected hundreds of engineers with exciting opportunities while helping US companies accelerate their growth through access to world-class talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600">
              Key milestones that have shaped our growth and success.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:pl-0 px-6">
                      <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ${
                        index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                      }`}>
                        <span className="text-blue-600 font-bold text-xl mb-2 block">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Empty Space for timeline alignment */}
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-slate-600">
              The experienced team guiding our mission to connect talent across borders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-slate-600 mb-4">
                    {member.bio}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                    Connect
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <span className="block text-4xl font-bold mb-2">150+</span>
              <span className="text-blue-100">Active Clients</span>
            </div>
            <div>
              <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <span className="block text-4xl font-bold mb-2">1,500+</span>
              <span className="text-blue-100">Engineers Placed</span>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <span className="block text-4xl font-bold mb-2">95%</span>
              <span className="text-blue-100">Client Retention</span>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <span className="block text-4xl font-bold mb-2">6+</span>
              <span className="text-blue-100">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Scale Your Engineering Capabilities?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how BridgingTalent can help you build your ideal engineering team with top talent from India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;