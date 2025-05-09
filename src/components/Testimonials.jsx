import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      quote: "BridgingTalent has transformed our engineering capabilities. Their India-based team integrated seamlessly with our US operations, delivering exceptional results and accelerating our product development timeline.",
      author: "Jennifer Richardson",
      position: "CTO, TechVision Inc.",
      company: "TechVision Inc.",
      rating: 5,
      image: "/images/testimonial-jennifer.png"
    },
    {
      quote: "Working with BridgingTalent gave us access to highly skilled engineers that we simply couldn't find locally. Their team's expertise and dedication have been invaluable to our project success.",
      author: "Michael Chen",
      position: "VP of Engineering, Innovate Systems",
      company: "Innovate Systems",
      rating: 5,
      image: "/images/testimonial-michael.png"
    },
    {
      quote: "After struggling to scale our engineering team, BridgingTalent provided the perfect solution. Their rigorous talent selection process and cultural alignment strategies ensured we got the right people for our specific needs.",
      author: "Sarah Johnson",
      position: "Director of Product, GrowthWave",
      company: "GrowthWave",
      rating: 5,
      image: "/images/testimonial-sarah.png"
    }
  ];

  // Company logos (placeholders for demonstration)
  const companies = [
    { name: "TechVision", logo: "/images/client-logo-1.png" },
    { name: "Innovate Systems", logo: "/images/client-logo-2.png" },
    { name: "GrowthWave", logo: "/images/client-logo-3.png" },
    { name: "Future Solutions", logo: "/images/client-logo-4.png" },
    { name: "BuildBetter", logo: "/images/client-logo-5.png" },
    { name: "NextGen Tech", logo: "//images/client-logo-6.png" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-slate-600">
            See what our clients have to say about their experience working with BridgingTalent.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons (could be connected to a slider in a full implementation) */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white p-2 rounded-full shadow-lg z-10 hidden md:block">
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white p-2 rounded-full shadow-lg z-10 hidden md:block">
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
          
          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-slate-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.author}</h4>
                    <p className="text-sm text-slate-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Logo Cloud */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-medium text-slate-700 mb-8">
            Trusted by innovative companies worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;