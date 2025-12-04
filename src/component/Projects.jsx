import React, { useState, useEffect, useRef } from "react";
import {
  FaCloud,
  FaRobot,
  FaRocket,
  FaFileAlt,
  FaSearch,
  FaCalculator,
  FaCog,
  FaShieldAlt,
  FaLanguage,
  FaEye,
  FaChartLine,
  FaCheckCircle,
  FaLaptopCode,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import { MdWeb, MdApi, MdAutoAwesome, MdSmartToy, MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      icon: <FaCloud className="w-5 h-5" />,
      title: "AI Cloud Operations Platform",
      description: "Drag-and-drop app with AI-driven architecture generation and deployment automation.",
      features: ["Bot3 with RAG", "Cloud automation", "Cost estimation"],
      technologies: ["AI/ML", "RAG", "Cloud"],
      category: "AI & Cloud",
      color: "from-[#530304ff] to-[#e5383b]",
      // color: "#530304ff",
    },
    {
      icon: <MdApi className="w-5 h-5" />,
      title: "AWS Framework AI",
      description: "RESTful APIs for AWS Well-Architected Framework with AI-driven insights.",
      features: ["Cloud optimization", "Framework review", "REST API"],
      technologies: ["AWS", "API", "Automation"],
      category: "Cloud & API",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <MdSmartToy className="w-5 h-5" />,
      title: "Educational RAG Chatbot",
      description: "Web app for students with RAG integration and LLM-powered responses.",
      features: ["RAG implementation", "LLM integration", "Knowledge base"],
      technologies: ["RAG", "LLMs", "Web App"],
      category: "AI & Education",
      color: "from-[#530304ff] to-[#e5383b]"
    },
    {
      icon: <FaRobot className="w-5 h-5" />,
      title: "India Tourism AI Model",
      description: "RAG and fine-tuning model for intelligent tourism recommendations.",
      features: ["Fine-tuned LLM", "Tourism AI", "Recommendations"],
      technologies: ["Fine-Tuning", "RAG", "AI"],
      category: "AI & Tourism",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <FaFileAlt className="w-5 h-5" />,
      title: "AI Resume Generator",
      description: "Automated resume creation with DeepSeek AI and Ollama models.",
      features: ["DeepSeek AI", "Ollama", "Resume generation"],
      technologies: ["DeepSeek", "Ollama", "HR Tech"],
      category: "AI & HR",
      color: "from-[#530304ff] to-[#e5383b]"
    },
    {
      icon: <FaEye className="w-5 h-5" />,
      title: "AI Image Recognition",
      description: "Image recognition system using Azure OpenAI for object detection.",
      features: ["Azure OpenAI", "Object recognition", "Text extraction"],
      technologies: ["Azure", "Vision", "AI"],
      category: "Computer Vision",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <FaLanguage className="w-5 h-5" />,
      title: "Document Translator",
      description: "DOCX file translation app using Google Translate API.",
      features: ["Google API", "DOCX processing", "Translation"],
      technologies: ["Google", "Translation", "Automation"],
      category: "AI & Translation",
      color: "from-[#530304ff] to-[#e5383b]"
    },
    {
      icon: <FaCog className="w-5 h-5" />,
      title: "Document Seal Recognition",
      description: "FastAPI app for seal/stamp detection using OpenAI Vision.",
      features: ["OpenAI Vision", "Seal detection", "Authentication"],
      technologies: ["Vision API", "FastAPI", "Security"],
      category: "AI & Security",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <FaCalculator className="w-5 h-5" />,
      title: "Azure Pricing Automation",
      description: "Flask service automating Azure pricing calculations.",
      features: ["Playwright", "Real-time pricing", "API"],
      technologies: ["Flask", "Playwright", "Azure"],
      category: "Cloud & Automation",
      color: "from-[#530304ff] to-[#e5383b]"
    },
    {
      icon: <FaSearch className="w-5 h-5" />,
      title: "Semantic Image Search",
      description: "FastAPI semantic search using OpenAI CLIP model.",
      features: ["CLIP model", "Semantic search", "Vector DB"],
      technologies: ["CLIP", "FastAPI", "PostgreSQL"],
      category: "AI & Search",
      color: "from-[#0b090a] to-[#161a1d]"
    },
  ];

  // Calculate number of cards per slide based on screen size
  const cardsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(projects.length / cardsPerSlide);
  
  // Create carousel items with the first set duplicated at the end for seamless transition
  const carouselItems = [];
  for (let i = 0; i < totalSlides + 1; i++) {
    const slideIndex = i % totalSlides;
    const startIndex = slideIndex * cardsPerSlide;
    const slideProjects = projects.slice(startIndex, startIndex + cardsPerSlide);
    carouselItems.push(slideProjects);
  }

  // Auto-slide effect - 6 seconds per slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle transition when reaching the end
  useEffect(() => {
    if (currentSlide === totalSlides) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700);
    } else {
      setIsTransitioning(true);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, totalSlides]);

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  const handleStartProjectClick = () => {
    navigate("/start-project");
  };

  // Calculate the actual slide index for display
  const displayIndex = currentSlide % totalSlides;

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-[#ba181b] border border-[#0b090a] rounded-full mb-6">
            <div className="w-2 h-2 bg-[#0b090a] rounded-full mr-3"></div>
            <span className="text-[#ffffff] text-sm font-medium tracking-wide">
              MAJOR PROJECTS
            </span>
          </div>

          <h2 className="text-3xl font-bold text-[#0b090a] tracking-tight mb-3">
            Innovative{" "}
            <span className="text-[#ba181b]">AI & Cloud Solutions</span>
          </h2>
          <p className="text-base text-[#161a1d] max-w-2xl mx-auto leading-relaxed">
            A collection of cutting-edge projects showcasing expertise in AI, machine learning, and cloud automation.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaLaptopCode className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-[#0b090a] mb-1">10+ </div>
            <div className="text-[#161a1d] text-xs font-medium">Total Projects</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaRobot className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-[#0b090a] mb-1">10+</div>
            <div className="text-[#161a1d] text-xs font-medium">AI Solutions</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaCloud className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-[#0b090a] mb-1">5+</div>
            <div className="text-[#161a1d] text-xs font-medium">Cloud Projects</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaAward className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-[#0b090a] mb-1">100%</div>
            <div className="text-[#161a1d] text-xs font-medium">Success Rate</div>
          </div>
        </div>

        {/* Infinite Auto-Sliding Carousel */}
        <div className="relative overflow-hidden rounded-xl mb-10">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((slideProjects, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full flex gap-4 px-4"
              >
                {slideProjects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className={`${
                      isMobile ? 'w-full' : 'w-1/2'
                    } bg-[#fffff] border border-[#d3d3d3] rounded-lg p-4 hover:border-[#ba181b] hover:shadow-lg transition-all duration-300 group`}
                  >
                    {/* Card Header with Gradient */}
                    <div className={`bg-gradient-to-br ${project.color} p-3 rounded-md mb-3 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                      
                      <div className=" relative z-10 flex items-center justify-between mb-2">
                        <div className="text-[#ffffff] group-hover:scale-110 transition-transform">
                          {React.cloneElement(project.icon, { className: 'text-xl' })}
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                          <span className="text-[#ffffff] text-xs font-semibold">{project.category}</span>
                        </div>
                      </div>
                      
                      <div className="relative z-10 flex items-center">
                        <MdVerified className="text-[#ffffff] text-sm mr-1" />
                        <span className="text-[#ffffff] text-xs font-medium">Production Ready</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div>
                      <h3 className="text-[#0b090a] font-bold text-sm mb-1 leading-tight min-h-[40px] group-hover:text-[#ba181b] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-[#161a1d] text-xs leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-3">
                        <h4 className="text-[#0b090a] text-xs font-semibold mb-1 flex items-center">
                          <FaCheckCircle className="text-[#ba181b] text-xs mr-1" />
                          Features
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-1 text-[#161a1d] text-xs">
                              <div className="w-1 h-1 bg-[#ba181b] rounded-full mt-1 flex-shrink-0"></div>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="pt-2 border-t border-[#d3d3d3]">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-[#161a1d] bg-[#ffffff] border border-[#d3d3d3] px-2 py-1 rounded-md hover:bg-[#ba181b] hover:text-[#ffffff] hover:border-[#ba181b] transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="text-xs text-[#ffffff] bg-[#0b090a] border border-[#0b090a] px-2 py-1 rounded-md">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Fill empty slots if less than cardsPerSlide in last slide */}
                {slideProjects.length < cardsPerSlide && 
                  Array(cardsPerSlide - slideProjects.length).fill(null).map((_, idx) => (
                    <div key={`empty-${idx}`} className={`${isMobile ? 'w-full' : 'w-1/2'} opacity-0`} />
                  ))
                }
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  displayIndex === index 
                    ? 'w-6 bg-[#ba181b]' 
                    : 'w-1.5 bg-[#0b090a] opacity-30 hover:opacity-60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">          
          <div className="bg-[#0b090a] border border-[#0b090a] rounded-xl p-6 max-w-xl mx-auto hover:shadow-lg transition-all duration-300 group">            
            <h3 className="text-[#ffffff] font-semibold text-lg mb-3 flex items-center justify-center">              
              <div className="w-10 h-10 bg-[#ba181b] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                <FaRocket className="text-[#0b090a] text-lg" />
              </div>
              <span className="italic text-sm">Ready to Build Something Amazing?</span>
            </h3>
            
            <div className="text-center">
              <p className="text-[#d3d3d3] text-sm leading-relaxed mb-4 max-w-md mx-auto italic">
                Let's collaborate on your next AI-powered project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  className="group bg-[#ba181b] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#0b090a] border border-[#ba181b] px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
                  onClick={handleStartProjectClick}
                >
                  <span className="tracking-wide">Start a Project</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="#contact"
                  className="group border border-[#ba181b] text-[#ba181b] hover:bg-[#ba181b] hover:text-[#ffffff] px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                >
                  <span className="tracking-wide">Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;