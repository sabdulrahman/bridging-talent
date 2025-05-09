import React from 'react';
import Customers from '../components/Customers';
import Testimonials from '../components/Testimonials';

const CustomersPage = () => {
  return (
    <div className="pt-20">
      <Customers />
      <Testimonials />
    </div>
  );
};

export default CustomersPage;