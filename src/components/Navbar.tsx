import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-orange-500' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          {/* Logo - Responsive sizing with glass text effect on hover (text only, no background overlay) */}
          <div className="flex-shrink-0">
            <span className="group text-lg sm:text-xl md:text-2xl font-bold text-orange-500 hover:scale-105 transition-transform duration-200 cursor-pointer select-none relative">
              <span className="relative z-10">
                <span
                  className="transition-all duration-300 group-hover:text-white group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-orange-500 group-hover:drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)] group-hover:brightness-200"
                  style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'inherit',
                    transition: 'color 0.3s, filter 0.3s',
                    filter: 'none',
                  }}
                >
                  ROBO
                  <span
                    className="text-white group-hover:text-orange-500 group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-orange-500 group-hover:drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)] group-hover:brightness-200"
                    style={{
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'inherit',
                      transition: 'color 0.3s, filter 0.3s',
                      filter: 'none',
                    }}
                  >
                    FLUX
                  </span>
                </span>
              </span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              <a 
                href="#home" 
                className="relative group text-white hover:text-orange-500 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:scale-105 transform"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Welcome to RoboFlux
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                </div>
              </a>
              
              <a 
                href="#services" 
                className="relative group text-white hover:text-orange-500 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:scale-105 transform"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Our AI Solutions
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                </div>
              </a>
              
              <a 
                href="#portfolio" 
                className="relative group text-white hover:text-orange-500 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:scale-105 transform"
              >
                <span className="relative z-10">Portfolio</span>
                <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  View Our Work
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                </div>
              </a>
              
              <a 
                href="#about" 
                className="relative group text-white hover:text-orange-500 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:scale-105 transform"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Learn About Us
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                </div>
              </a>
              
              <a 
                href="#contact" 
                className="relative group text-white hover:text-orange-500 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:scale-105 transform"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Get In Touch
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile/Tablet Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg hover:scale-105 transition-all duration-200 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block absolute h-0.5 w-7 sm:w-8 bg-white rounded transition-all duration-300 ease-in-out group-hover:bg-orange-500 ${
                  isOpen ? 'rotate-45 top-6 sm:top-7' : 'top-4 sm:top-5'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 sm:w-8 bg-white rounded transition-all duration-300 ease-in-out group-hover:bg-orange-500 ${
                  isOpen ? 'opacity-0 left-1/2 -translate-x-1/2' : 'top-6 sm:top-7'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 sm:w-8 bg-white rounded transition-all duration-300 ease-in-out group-hover:bg-orange-500 ${
                  isOpen ? '-rotate-45 top-6 sm:top-7' : 'top-8 sm:top-9'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-500 ease-in-out z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '3.5rem' }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 py-8 space-y-6">
          {/* Mobile Navigation Links */}
          <a 
            href="#home" 
            className="relative group w-full max-w-sm text-center"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative px-6 py-4 text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg sm:text-xl rounded-xl hover:scale-105 transform touch-manipulation">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-orange-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </div>
          </a>
          
          <a 
            href="#services" 
            className="relative group w-full max-w-sm text-center"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative px-6 py-4 text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg sm:text-xl rounded-xl hover:scale-105 transform touch-manipulation">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-orange-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </div>
          </a>
          
          <a 
            href="#portfolio" 
            className="relative group w-full max-w-sm text-center"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative px-6 py-4 text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg sm:text-xl rounded-xl hover:scale-105 transform touch-manipulation">
              <span className="relative z-10">Portfolio</span>
              <div className="absolute inset-0 bg-orange-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </div>
          </a>
          
          <a 
            href="#about" 
            className="relative group w-full max-w-sm text-center"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative px-6 py-4 text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg sm:text-xl rounded-xl hover:scale-105 transform touch-manipulation">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-orange-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </div>
          </a>
          
          <a 
            href="#contact" 
            className="relative group w-full max-w-sm text-center"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative px-6 py-4 text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg sm:text-xl rounded-xl hover:scale-105 transform touch-manipulation">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-orange-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </div>
          </a>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className="text-gray-400 text-sm">
              <span className="text-orange-500 font-semibold">ROBO</span><span className="text-white font-semibold">FLUX</span>
            </div>
            <div className="text-gray-500 text-xs mt-1">Robotic Design Studio</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;