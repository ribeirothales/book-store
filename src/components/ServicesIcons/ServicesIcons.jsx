import React from 'react';

// Placeholder data for icons - replace with actual icons or SVGs
const services = [
  { name: 'Category 1', icon: 'ICON1' },
  { name: 'Category 2', icon: 'ICON2' },
  { name: 'Category 3', icon: 'ICON3' },
  { name: 'Category 4', icon: 'ICON4' },
  { name: 'Category 5', icon: 'ICON5' },
];

const ServicesIcons = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center">
              {/* Placeholder for Icon */}
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center text-gray-500">
                {service.icon}
              </div>
              <p className="text-gray-700 font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIcons;

