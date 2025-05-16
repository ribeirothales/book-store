import React from 'react';
import { Apple, Smartphone } from 'lucide-react'; // Assuming lucide-react is installed

const DownloadApp = () => {
  return (
    <section className="bg-cream py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* App Screenshot Placeholder - styled to look like a phone */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end order-last lg:order-first">
          <div className="relative w-64 h-[540px] sm:w-72 sm:h-[600px] bg-dark-text rounded-[40px] shadow-2xl p-3.5">
            <div className="w-full h-full bg-white rounded-[30px] overflow-hidden">
              {/* Placeholder for app screen, can be an image */}
              <img src="/placeholder-app-screen.jpg" alt="App Screenshot" className="w-full h-full object-cover"/>
            </div>
            {/* Phone details */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-700 rounded-full"></div>
            <div className="absolute top-2 left-6 w-1.5 h-6 bg-gray-700 rounded-full"></div>
            <div className="absolute top-2 right-6 w-1.5 h-10 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Text Content and Download Buttons */}
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-heading-text mb-4 lg:mb-6 leading-tight">
            Download our app now !
          </h2>
          <p className="text-light-text mb-8 lg:mb-10 leading-relaxed text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
            <a href="#" className="flex items-center justify-center bg-dark-text text-white py-3.5 px-7 rounded-lg hover:bg-brand transition-colors duration-300 w-full sm:w-auto min-w-[180px]">
              <Apple size={28} className="mr-2.5" />
              <div>
                <p className="text-xs -mb-0.5">Download on the</p>
                <p className="text-xl font-semibold">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center justify-center bg-dark-text text-white py-3.5 px-7 rounded-lg hover:bg-brand transition-colors duration-300 w-full sm:w-auto min-w-[180px]">
              <Smartphone size={28} className="mr-2.5" /> {/* Using Smartphone as a generic play store icon */}
              <div>
                <p className="text-xs -mb-0.5">GET IT ON</p>
                <p className="text-xl font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

