import React from 'react';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-8 md:gap-12">
          <div className="md:col-span-2" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">ROBO<span className="text-orange-500">FLUX</span></h3>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Advanced robotics design studio engineering the future of human-machine interfaces and AI-powered brand experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-4 sm:mt-6 md:mt-8">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 md:mb-6">Systems</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">AI Brand Identity</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Interface Design</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Motion Graphics</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">System Branding</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 md:mb-6">Network</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">About System</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Project Archive</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Join Network</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Connect</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-400 text-xs sm:text-sm md:text-sm">
            © 2024 RoboFlux Systems. All protocols reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-3 sm:mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm md:text-sm">Privacy Protocol</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm md:text-sm">System Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;