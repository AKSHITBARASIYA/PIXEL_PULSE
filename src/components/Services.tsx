import React, { useRef } from 'react';
import { Bot, Cpu, Zap, Cog } from 'lucide-react';
import { useScrollPopUp } from '../hooks/useScrollPopUp';

const Services = () => {
  const services = [
    {
      icon: <Bot size={32} />,
      title: "AI Brand Identity",
      description: "Revolutionary brand identities for AI companies, robotics firms, and tech startups that embody the future of intelligent automation.",
      features: ["AI Logo Design", "Robotic Aesthetics", "Tech Brand Guidelines", "Future-Forward Identity"]
    },
    {
      icon: <Cpu size={32} />,
      title: "Interface Design",
      description: "Cutting-edge user interfaces for robotic systems, AI dashboards, and automation platforms that prioritize both form and function.",
      features: ["Robot UI/UX", "Control Panels", "AI Dashboards", "System Interfaces"]
    },
    {
      icon: <Zap size={32} />,
      title: "Motion Graphics",
      description: "Dynamic animations and motion graphics that bring robotic concepts to life with precision engineering and futuristic aesthetics.",
      features: ["Robot Animations", "Tech Visualizations", "Process Flows", "3D Renderings"]
    },
    {
      icon: <Cog size={32} />,
      title: "System Branding",
      description: "Complete branding ecosystems for automation companies, robotics manufacturers, and AI-driven enterprises.",
      features: ["Product Branding", "System Documentation", "Technical Graphics", "Industrial Design"]
    },
    {
      icon: <Bot size={32} />,
      title: "AI Brand Identity",
      description: "Revolutionary brand identities for AI companies, robotics firms, and tech startups that embody the future of intelligent automation.",
      features: ["AI Logo Design", "Robotic Aesthetics", "Tech Brand Guidelines", "Future-Forward Identity"]
    },
    {
      icon: <Cpu size={32} />,
      title: "Interface Design",
      description: "Cutting-edge user interfaces for robotic systems, AI dashboards, and automation platforms that prioritize both form and function.",
      features: ["Robot UI/UX", "Control Panels", "AI Dashboards", "System Interfaces"]
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            System <span className="text-orange-500">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
            We engineer visual systems that merge cutting-edge technology with intelligent design, creating interfaces that think as fast as they look.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            useScrollPopUp(cardRef, { start: 'top 85%', end: 'bottom 60%', scaleFrom: 0.85, opacityFrom: 0.3, scrub: false });
            return (
              <div key={index} ref={cardRef} className="group">
                <div className="bg-black p-4 sm:p-6 md:p-8 lg:p-12 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 border border-gray-800 hover:border-orange-500/50 rounded-xl">
                  <div className="text-orange-500 mb-2 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-base md:text-lg mb-2 sm:mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                        <span className="text-gray-400 font-medium text-xs sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;