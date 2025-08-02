import React, { useRef } from 'react';
import { Zap, Bot, Globe, Cpu } from 'lucide-react';
import { useScrollPopUp } from '../hooks/useScrollPopUp';

const About = () => {
  const stats = [
    { icon: <Bot size={28} />, number: "200+", label: "Robots Designed" },
    { icon: <Zap size={28} />, number: "75+", label: "AI Systems" },
    { icon: <Globe size={28} />, number: "30+", label: "Countries Deployed" },
    { icon: <Cpu size={28} />, number: "10+", label: "Years in Robotics" }
  ];

  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  useScrollPopUp(leftColRef);
  useScrollPopUp(rightColRef);

  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div ref={leftColRef} data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
              Robotics is our
              <br />
              <span className="text-orange-500">DNA</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                We are a cutting-edge design studio specializing in robotic interfaces, AI branding, and automation systems that define the future of human-machine interaction.
              </p>
              <p>
                Our methodology fuses advanced engineering principles with innovative design thinking, creating solutions that are both functionally superior and visually striking.
              </p>
              <p>
                From robotics startups to Fortune 500 tech giants, we've engineered visual systems for autonomous vehicles, industrial robots, and AI-powered platforms worldwide.
              </p>
            </div>
            <button className="mt-6 sm:mt-8 border-2 border-orange-500 text-orange-500 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium hover:bg-orange-500 hover:text-black transition-all duration-300 rounded-lg">
              Explore Our Systems
            </button>
          </div>
          <div ref={rightColRef} className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8" data-aos="fade-left" data-aos-delay="200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={400 + index * 100}>
                <div className="text-orange-500 mb-1 sm:mb-2 md:mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-lg sm:text-2xl md:text-4xl font-bold mb-0.5 sm:mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;