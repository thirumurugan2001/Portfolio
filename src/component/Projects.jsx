import React, { useState, useEffect, useRef } from "react";
import {
  FaCloud,
  FaRobot,
  FaRocket,
  FaFileAlt,
  FaSearch,
  FaCalculator,
  FaCog,
  FaLanguage,
  FaEye,
  FaCheckCircle,
  FaLaptopCode,
  FaAward,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaWarehouse,
  FaDatabase,
  FaFilePdf,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";
import { MdApi, MdSmartToy, MdVerified, MdTranslate } from "react-icons/md";
import { SiZoho } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef(null);
  const slidesPerViewRef = useRef(3);

  const projects = [
    // New Projects - Added at the beginning for prominence
    {
      icon: <FaWarehouse className="w-5 h-5" />,
      title: "AI Warehouses",
      description:
        "PaaS web application for creating and retrieving data from end-user databases using MCP through conversational interface with advanced AI models.",
      features: ["Multi-AI integration", "Database operations", "Conversational UI", "MCP protocol"],
      technologies: ["OpenAI GPT", "AWS Bedrock", "Google Gemini", "PaaS"],
      category: "AI & PaaS",
      color: "from-[#8267ec] to-[#9d8aee]",
      period: "Aug 2025 - Present",
    },
    {
      icon: <FaFilePdf className="w-5 h-5" />,
      title: "DTPC PDF Processing",
      description:
        "Desktop application for web scraping and extracting stamp details from PDFs using OCR and AI models with Zoho CRM integration.",
      features: ["PDF processing", "OCR extraction", "CRM integration", "Auto mailing"],
      technologies: ["Tesseract", "Poppler", "OpenAI GPT", "Zoho CRM"],
      category: "AI & Automation",
      color: "from-[#111111] to-[#333333]",
      period: "Apr 2025 - Jun 2025",
    },
    {
      icon: <MdTranslate className="w-5 h-5" />,
      title: "Lang Tech Translator",
      description:
        "PaaS web application for translating Excel, Word, PDF, and text files with OCR integration and multiple AI model support.",
      features: ["Multi-format support", "OCR integration", "AI translation", "PaaS platform"],
      technologies: ["OpenAI GPT", "Google Gemini", "LLaMA", "OCR"],
      category: "AI & Translation",
      color: "from-[#8267ec] to-[#9d8aee]",
      period: "Jan 2025 - Apr 2025",
    },
    // Original Projects
    {
      icon: <FaCloud className="w-5 h-5" />,
      title: "AI Cloud Operations Platform",
      description:
        "Drag-and-drop app with AI-driven architecture generation and deployment automation.",
      features: ["Bot3 with RAG", "Cloud automation", "Cost estimation"],
      technologies: ["AI/ML", "RAG", "Cloud"],
      category: "AI & Cloud",
      color: "from-[#111111] to-[#333333]",
      period: "Recent",
    },
    {
      icon: <MdApi className="w-5 h-5" />,
      title: "AWS Framework AI",
      description:
        "RESTful APIs for AWS Well-Architected Framework with AI-driven insights.",
      features: ["Cloud optimization", "Framework review", "REST API"],
      technologies: ["AWS", "API", "Automation"],
      category: "Cloud & API",
      color: "from-[#8267ec] to-[#9d8aee]",
      period: "Recent",
    },
    {
      icon: <MdSmartToy className="w-5 h-5" />,
      title: "Educational RAG Chatbot",
      description:
        "Web app for students with RAG integration and LLM-powered responses.",
      features: ["RAG implementation", "LLM integration", "Knowledge base"],
      technologies: ["RAG", "LLMs", "Web App"],
      category: "AI & Education",
      color: "from-[#111111] to-[#333333]",
      period: "Recent",
    },
    {
      icon: <FaFileAlt className="w-5 h-5" />,
      title: "AI Resume Generator",
      description:
        "Automated resume creation with DeepSeek AI and Ollama models.",
      features: ["DeepSeek AI", "Ollama", "Resume generation"],
      technologies: ["DeepSeek", "Ollama", "HR Tech"],
      category: "AI & HR",
      color: "from-[#111111] to-[#333333]",
      period: "Recent",
    },
    {
      icon: <FaEye className="w-5 h-5" />,
      title: "AI Image Recognition",
      description:
        "Image recognition system using Azure OpenAI for object detection.",
      features: ["Azure OpenAI", "Object recognition", "Text extraction"],
      technologies: ["Azure", "Vision", "AI"],
      category: "Computer Vision",
      color: "from-[#8267ec] to-[#9d8aee]",
      period: "Recent",
    },
    {
      icon: <FaLanguage className="w-5 h-5" />,
      title: "Document Translator",
      description: "DOCX file translation app using Google Translate API.",
      features: ["Google API", "DOCX processing", "Translation"],
      technologies: ["Google", "Translation", "Automation"],
      category: "AI & Translation",
      color: "from-[#111111] to-[#333333]",
      period: "Recent",
    },
    {
      icon: <FaCog className="w-5 h-5" />,
      title: "Document Seal Recognition",
      description: "FastAPI app for seal/stamp detection using OpenAI Vision.",
      features: ["OpenAI Vision", "Seal detection", "Authentication"],
      technologies: ["Vision API", "FastAPI", "Security"],
      category: "AI & Security",
      color: "from-[#8267ec] to-[#9d8aee]",
      period: "Recent",
    },
    {
      icon: <FaCalculator className="w-5 h-5" />,
      title: "Azure Pricing Automation",
      description: "Flask service automating Azure pricing calculations.",
      features: ["Playwright", "Real-time pricing", "API"],
      technologies: ["Flask", "Playwright", "Azure"],
      category: "Cloud & Automation",
      color: "from-[#111111] to-[#333333]",
      period: "Recent",
    },
    {
      icon: <FaSearch className="w-5 h-5" />,
      title: "Semantic Image Search",
      description: "FastAPI semantic search using OpenAI CLIP model.",
      features: ["CLIP model", "Semantic search", "Vector DB"],
      technologies: ["CLIP", "FastAPI", "PostgreSQL"],
      category: "AI & Search",
      color: "from-[#8267ec] to-[#9d8aee]",
      period: "Recent",
    },
  ];

  // Check for mobile device and calculate slides per view
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      // Calculate slides per view
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) slidesPerViewRef.current = 1;
        else if (window.innerWidth < 1024) slidesPerViewRef.current = 2;
        else slidesPerViewRef.current = 3;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total slides for desktop view
  const totalDesktopSlides = Math.ceil(projects.length / slidesPerViewRef.current);
  
  const nextSlide = () => {
    if (isMobile) {
      // For mobile: when at last item, jump to first
      if (currentIndex === projects.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    } else {
      // For desktop: paginated by slidesPerView
      const nextIndex = currentIndex + slidesPerViewRef.current;
      if (nextIndex >= projects.length) {
        // Jump to first set of projects
        setCurrentIndex(0);
      } else {
        setCurrentIndex(nextIndex);
      }
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      // For mobile: when at first item, go to last
      if (currentIndex === 0) {
        setCurrentIndex(projects.length - 1);
      } else {
        setCurrentIndex(prevIndex => prevIndex - 1);
      }
    } else {
      // For desktop: paginated by slidesPerView
      const prevIndex = currentIndex - slidesPerViewRef.current;
      if (prevIndex < 0) {
        // Go to last set of projects
        const lastIndex = Math.floor((projects.length - 1) / slidesPerViewRef.current) * slidesPerViewRef.current;
        setCurrentIndex(lastIndex);
      } else {
        setCurrentIndex(prevIndex);
      }
    }
  };

  const goToSlide = (index) => {
    if (isMobile) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(index * slidesPerViewRef.current);
    }
  };

  // Auto-scroll functionality - only forward, never backward
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling, isMobile]);

  // Pause auto-scroll on user interaction
  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 10000); // Resume after 10 seconds of inactivity
  };

  const handleStartProjectClick = () => {
    navigate("/start-project");
  };

  // Get visible projects for desktop
  const getVisibleDesktopProjects = () => {
    const endIndex = Math.min(currentIndex + slidesPerViewRef.current, projects.length);
    return projects.slice(currentIndex, endIndex);
  };

  // Calculate current slide index for dots (both mobile and desktop)
  const getCurrentSlideIndex = () => {
    if (isMobile) {
      return currentIndex;
    } else {
      return Math.floor(currentIndex / slidesPerViewRef.current);
    }
  };

  // Calculate total slides for dots
  const getTotalSlides = () => {
    if (isMobile) {
      return projects.length;
    } else {
      return totalDesktopSlides;
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Updated Section Header - Updated stats */}
        <div className="text-center mb-8 sm:mb-10 px-2">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div
              className="group inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
               border border-[#8267ec] bg-black
               transition-all duration-300 transform hover:scale-105 
               shadow-md hover:shadow-[0_0_15px_rgba(130,103,236,0.4)] sm:hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]
               hover:bg-[#8267ec] cursor-pointer"
              onClick={handleUserInteraction}
            >
              {/* Dot with animation */}
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 animate-pulse
                 bg-[#8267ec] transition-all duration-300 
                 group-hover:bg-white group-hover:scale-110 group-hover:animate-none"
              ></div>

              {/* Text */}
              <span 
                className="text-xs sm:text-sm font-medium tracking-wide 
                 text-[#8267ec] transition-colors duration-300
                 group-hover:text-white"
              >
                MAJOR PROJECTS
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3 px-2">
            Enterprise{" "}
            <span className="bg-gradient-to-r from-[#5f5297ff] to-violet-900 text-transparent bg-clip-text">
              AI & Cloud Solutions
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed tracking-wide max-w-3xl mx-auto px-2 sm:px-4">
            A portfolio of cutting-edge projects showcasing expertise in AI, machine learning, cloud automation, and enterprise solutions.
          </p>
        </div>

        {/* Updated Stats Bar - Updated counts */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
          <div className="bg-[#111111] border border-[#333333] rounded-lg p-3 sm:p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group"
               onClick={handleUserInteraction}>
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaLaptopCode className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">13+</div>
            <div className="text-gray-300 text-xs sm:text-sm font-medium">
              Total Projects
            </div>
          </div>

          <div className="bg-[#111111] border border-[#333333] rounded-lg p-3 sm:p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group"
               onClick={handleUserInteraction}>
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaRobot className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">13+</div>
            <div className="text-gray-300 text-xs sm:text-sm font-medium">
              AI Solutions
            </div>
          </div>

          <div className="bg-[#111111] border border-[#333333] rounded-lg p-3 sm:p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group"
               onClick={handleUserInteraction}>
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaCloud className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">7+</div>
            <div className="text-gray-300 text-xs sm:text-sm font-medium">
              Cloud Projects
            </div>
          </div>

          <div className="bg-[#111111] border border-[#333333] rounded-lg p-3 sm:p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group"
               onClick={handleUserInteraction}>
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaAward className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-300 text-xs sm:text-sm font-medium">
              Client Satisfaction
            </div>
          </div>
        </div>

        {/* Custom Carousel Container */}
        <div className="relative mb-8 sm:mb-10" onClick={handleUserInteraction}>
          {/* Desktop Grid View */}
          {!isMobile && (
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {getVisibleDesktopProjects().map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Mobile Carousel View */}
          {isMobile && (
            <div className="md:hidden relative overflow-hidden px-10 sm:px-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
              
              {/* Mobile Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                  handleUserInteraction();
                }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#111111] hover:bg-[#8267ec] border border-[#333333] hover:border-[#8267ec] text-white hover:text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(130,103,236,0.3)] z-10"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                  handleUserInteraction();
                }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#111111] hover:bg-[#8267ec] border border-[#333333] hover:border-[#8267ec] text-white hover:text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(130,103,236,0.3)] z-10"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex justify-center items-center space-x-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                  handleUserInteraction();
                }}
                className="bg-[#111111] hover:bg-[#8267ec] border border-[#333333] hover:border-[#8267ec] text-white hover:text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(130,103,236,0.3)]"
                aria-label="Previous slide"
                disabled={currentIndex === 0}
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: getTotalSlides() }).map(
                  (_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(idx);
                        handleUserInteraction();
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        getCurrentSlideIndex() === idx
                          ? "bg-[#8267ec] w-6"
                          : "bg-[#333333] hover:bg-[#8267ec]"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  )
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                  handleUserInteraction();
                }}
                className="bg-[#111111] hover:bg-[#8267ec] border border-[#333333] hover:border-[#8267ec] text-white hover:text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(130,103,236,0.3)]"
                aria-label="Next slide"
                disabled={currentIndex >= projects.length - slidesPerViewRef.current}
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}

          {/* Mobile Dots */}
          {isMobile && (
            <div className="md:hidden flex justify-center space-x-2 mt-4 sm:mt-6">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(idx);
                    handleUserInteraction();
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-[#8267ec] w-4 sm:w-6"
                      : "bg-[#333333] hover:bg-[#8267ec]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action - Updated text */}
        <div className="text-center px-2">
          <div className="bg-black border border-[#8267ec] rounded-xl p-4 sm:p-6 max-w-xl mx-auto hover:shadow-[0_0_20px_rgba(130,103,236,0.25)] sm:hover:shadow-[0_0_40px_rgba(130,103,236,0.25)] transition-all duration-300 group"
               onClick={handleUserInteraction}>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#8267ec] rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-105 transition-transform group-hover:shadow-[0_0_15px_rgba(130,103,236,0.5)] sm:group-hover:shadow-[0_0_20px_rgba(130,103,236,0.5)]">
                <FaRocket className="text-white text-sm sm:text-lg" />
              </div>
              <span className="italic text-sm sm:text-base">
                Ready to Build Enterprise AI Solutions?
              </span>
            </h3>

            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 max-w-md mx-auto italic px-2">
                Let's collaborate on your next enterprise AI project with production-ready solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center px-2">
                <button
                  className="group bg-[#8267ec] text-white hover:bg-white hover:text-black border border-[#8267ec] px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_15px_rgba(130,103,236,0.4)] sm:hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] flex items-center justify-center space-x-2 text-xs sm:text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartProjectClick();
                  }}
                >
                  <span className="tracking-wide">Start a Project</span>
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#contact"
                  className="group border border-[#8267ec] text-[#8267ec] hover:bg-[#8267ec] hover:text-white px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm hover:shadow-[0_0_10px_rgba(130,103,236,0.3)] sm:hover:shadow-[0_0_15px_rgba(130,103,236,0.3)]"
                  onClick={handleUserInteraction}
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

// Updated Project Card Component with Period
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#111111] border border-[#333333] rounded-lg p-3 sm:p-4 hover:border-[#8267ec] hover:shadow-[0_0_15px_rgba(130,103,236,0.2)] sm:hover:shadow-[0_0_25px_rgba(130,103,236,0.2)] transition-all duration-300 group h-full">
      {/* Card Header with Gradient */}
      <div
        className={`bg-gradient-to-br ${project.color} p-2 sm:p-3 rounded-md mb-2 sm:mb-3 relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full -mr-6 sm:-mr-8 -mt-6 sm:-mt-8"></div>

        <div className="relative z-10 flex items-center justify-between mb-1 sm:mb-2">
          <div className="text-white group-hover:scale-110 transition-transform">
            {React.cloneElement(project.icon, {
              className: "text-lg sm:text-xl",
            })}
          </div>
          <div className="flex flex-col items-end">
            <div className="bg-white/20 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 rounded-full mb-1">
              <span className="text-white text-xs font-semibold">
                {project.category}
              </span>
            </div>
            {project.period && (
              <span className="text-white text-xs bg-black/30 px-1.5 py-0.5 rounded">
                {project.period}
              </span>
            )}
          </div>
        </div>

        <div className="relative z-10 flex items-center">
          <MdVerified className="text-white text-xs sm:text-sm mr-1" />
          <span className="text-white text-xs font-medium">
            Production Ready
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div>
        <h3 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 leading-tight min-h-[40px] group-hover:text-[#8267ec] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-3">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-2 sm:mb-3">
          <h4 className="text-white text-xs font-semibold mb-1 sm:mb-2 flex items-center">
            <FaCheckCircle className="text-[#8267ec] text-xs mr-1" />
            Features
          </h4>
          <ul className="space-y-1">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-2 text-gray-300 text-xs"
              >
                <div className="w-1 h-1 bg-[#8267ec] rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="pt-2 sm:pt-3 border-t border-[#333333]">
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-300 bg-[#1a1a1a] border border-[#333333] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md hover:bg-[#8267ec] hover:text-white hover:border-[#8267ec] transition-all duration-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-white bg-[#8267ec] border border-[#8267ec] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md hover:bg-[#9d8aee] transition-colors">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;