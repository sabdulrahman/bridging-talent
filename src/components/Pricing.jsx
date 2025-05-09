import React, { useState } from 'react';
import { Check, X, ArrowRight, Info } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small projects',
      price: isAnnual ? 2499 : 3499,
      features: [
        { text: '1 dedicated engineer', included: true },
        { text: '160 hours monthly', included: true },
        { text: 'US-based project coordinator', included: true },
        { text: 'Weekly progress reports', included: true },
        { text: 'Basic technical support', included: true },
        { text: 'Senior engineering oversight', included: false },
        { text: 'Extended team integration', included: false },
        { text: 'Custom talent assessment', included: false },
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies and ongoing projects',
      price: isAnnual ? 4999 : 6999,
      features: [
        { text: '3 dedicated engineers', included: true },
        { text: '160 hours monthly per engineer', included: true },
        { text: 'US-based project manager', included: true },
        { text: 'Daily status updates', included: true },
        { text: 'Priority technical support', included: true },
        { text: 'Senior engineering oversight', included: true },
        { text: 'Extended team integration', included: true },
        { text: 'Custom talent assessment', included: false },
      ],
      popular: true,
      cta: 'Choose Professional'
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations requiring dedicated teams',
      price: isAnnual ? 9999 : 13999,
      features: [
        { text: '5+ dedicated engineers', included: true },
        { text: '160 hours monthly per engineer', included: true },
        { text: 'Dedicated US-based delivery manager', included: true },
        { text: 'Customized reporting', included: true },
        { text: '24/7 premium support', included: true },
        { text: 'Senior engineering leadership', included: true },
        { text: 'Full team integration', included: true },
        { text: 'Custom talent assessment', included: true },
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Transparent Pricing for Every Need
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that works best for your business requirements and scale as your needs grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 text-sm ${!isAnnual ? 'font-semibold text-blue-600' : 'text-slate-600'}`}>
              Monthly
            </span>
            <button 
              onClick={toggleBilling}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-200"
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm ${isAnnual ? 'font-semibold text-blue-600' : 'text-slate-600'}`}>
              Annual <span className="text-green-500 font-medium">(Save 30%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105 md:scale-110' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-900">
                      ${plan.price.toLocaleString()}
                    </span>
                    <span className="text-slate-600 ml-2">
                      / {isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm mt-2">
                      Billed annually (save 30%)
                    </p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  } transition-colors`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Custom Plans Note */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Info className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-slate-900">Need a custom solution?</h3>
          </div>
          <p className="text-slate-600 mb-6">
            For specialized requirements or larger teams, we offer tailored packages to meet your specific needs.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;