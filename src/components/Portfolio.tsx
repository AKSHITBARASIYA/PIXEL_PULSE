import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "CyberCore AI",
      category: "AI Brand Identity",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete rebrand for autonomous robotics company"
    },
    {
      title: "AutoMech Systems",
      category: "Interface Design",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Industrial robot control interface and dashboard"
    },
    {
      title: "NeuralLink Pro",
      category: "Motion Graphics",
      image: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "AI neural network visualization animations"
    },
    {
      title: "RoboFactory",
      category: "System Branding",
      image: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Manufacturing automation brand ecosystem"
    },
    {
      title: "QuantumBot",
      category: "AI Brand Identity",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Quantum computing robot brand identity"
    },
    {
      title: "TechNova Labs",
      category: "Interface Design",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Research lab automation interface system"
    }
  ];

  return (
    <section id="portfolio" className="py-10 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Project <span className="text-orange-500">Archive</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
            A curated database of our most advanced robotic design systems and AI-powered brand implementations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative overflow-hidden bg-gray-800 aspect-square mb-3 sm:mb-4 md:mb-6 border border-gray-700 hover:border-orange-500/50 transition-colors duration-300 rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                <p className="text-xs sm:text-sm font-medium text-orange-500 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-base md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-6 sm:mt-10 md:mt-16" data-aos="fade-up" data-aos-delay="600">
          <button className="bg-orange-500 text-black px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold hover:bg-orange-400 transition-colors duration-300 shadow-lg shadow-orange-500/25 rounded-xl">
            Access Full Database
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;