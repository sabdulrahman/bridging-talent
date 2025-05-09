import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="flex items-center text-blue-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          {serviceId.charAt(0).toUpperCase() + serviceId.slice(1).replace(/-/g, ' ')}
        </h1>
        
        <p className="text-lg text-slate-600">
          Detailed information about this service will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetailPage;