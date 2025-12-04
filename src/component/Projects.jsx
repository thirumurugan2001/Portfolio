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
} from "react-icons/fa";
import { MdWeb, MdApi, MdAutoAwesome, MdSmartToy, MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const projects = [
    {
      icon: <FaCloud className="w-6 h-6" />,
      title: "AI-Powered Cloud Operations Platform",
      description:
        "Drag-and-drop application to simplify cloud operations with AI-driven architecture generation and deployment automation.",
      features: [
        "Bot3 with RAG integration",
        "Automated cloud service creation",
        "Cost estimation & deployment",
        "AI architecture generation",
      ],
      technologies: ["AI/ML", "RAG", "Cloud Automation", "Bot3"],
      category: "AI & Cloud",
      color: "from-[#ba181b] to-[#e5383b]"
    },
    {
      icon: <MdApi className="w-6 h-6" />,
      title: "AWS Well-Architected Framework AI",
      description:
        "RESTful APIs to dynamically streamline AWS Well-Architected Framework Review with AI-driven insights and automation.",
      features: [
        "AI-driven cloud optimization",
        "Automated framework review",
        "Business operation optimization",
        "RESTful API architecture",
      ],
      technologies: ["AWS", "REST API", "AI Automation", "Cloud Optimization"],
      category: "Cloud & API",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <MdSmartToy className="w-6 h-6" />,
      title: "Educational RAG Chatbot",
      description:
        "Web application for students to clear doubts using RAG integration with LLMs for intelligent responses based on uploaded knowledge.",
      features: [
        "RAG implementation",
        "LLM integration",
        "Knowledge base upload",
        "Student doubt resolution",
      ],
      technologies: ["RAG", "LLMs", "Education Tech", "Web App"],
      category: "AI & Education",
      color: "from-[#ba181b] to-[#e5383b]"
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "India Tourism RAG & Fine-Tuning Model",
      description:
        "RAG and fine-tuning model project providing intelligent recommendations and information about famous places in India.",
      features: [
        "Fine-tuned LLM models",
        "Tourism recommendations",
        "Intelligent information retrieval",
        "Location-based insights",
      ],
      technologies: ["Fine-Tuning", "RAG", "Tourism AI", "Recommendations"],
      category: "AI & Tourism",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "AI Resume & Job Description Generator",
      description:
        "Intelligent systems for automated resume creation using DeepSeek AI and job description generation using Ollama models.",
      features: [
        "DeepSeek AI integration",
        "Ollama model deployment",
        "Professional resume generation",
        "Tailored job descriptions",
      ],
      technologies: ["DeepSeek AI", "Ollama", "HR Tech", "Automation"],
      category: "AI & HR",
      color: "from-[#ba181b] to-[#e5383b]"
    },
    {
      icon: <FaEye className="w-6 h-6" />,
      title: "AI Image Recognition System",
      description:
        "Advanced image recognition system using Azure OpenAI to analyze and identify objects, text, and patterns in images.",
      features: [
        "Azure OpenAI integration",
        "Object & pattern recognition",
        "Text extraction from images",
        "Multi-format image support",
      ],
      technologies: ["Azure OpenAI", "Computer Vision", "Image Analysis", "AI"],
      category: "Computer Vision",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <FaLanguage className="w-6 h-6" />,
      title: "Document Translation Application",
      description:
        "Application that translates DOCX files using Google Translate API for seamless multilingual support.",
      features: [
        "Google Translate API",
        "DOCX file processing",
        "Multilingual support",
        "Batch translation",
      ],
      technologies: [
        "Google API",
        "Document Processing",
        "Translation",
        "Automation",
      ],
      category: "AI & Translation",
      color: "from-[#ba181b] to-[#e5383b]"
    },
    {
      icon: <FaCog className="w-6 h-6" />,
      title: "Document Seal & Stamp Recognition",
      description:
        "FastAPI-based application that extracts seal and stamp information from document images using OpenAI's vision capabilities.",
      features: [
        "OpenAI Vision API",
        "Seal & stamp detection",
        "Document authentication",
        "FastAPI backend",
      ],
      technologies: [
        "OpenAI Vision",
        "FastAPI",
        "Document Processing",
        "Computer Vision",
      ],
      category: "AI & Security",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <FaCalculator className="w-6 h-6" />,
      title: "Azure Pricing Calculator Automation",
      description:
        "Flask-based web service that automates Azure pricing calculations by scraping the Azure Pricing Calculator website.",
      features: [
        "Playwright automation",
        "Real-time pricing data",
        "REST API endpoint",
        "Input validation",
      ],
      technologies: ["Flask", "Playwright", "Azure", "Web Scraping"],
      category: "Cloud & Automation",
      color: "from-[#ba181b] to-[#e5383b]"
    },
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Semantic Image Search API",
      description:
        "FastAPI-based semantic image search system using OpenAI's CLIP model with PostgreSQL for similarity search.",
      features: [
        "OpenAI CLIP model",
        "Semantic search",
        "PostgreSQL vector storage",
        "Similarity matching",
      ],
      technologies: ["CLIP", "FastAPI", "PostgreSQL", "Vector Search"],
      category: "AI & Search",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <MdWeb className="w-6 h-6" />,
      title: "AI ChatBot with Google Integration",
      description:
        "AI-powered chatbot using Flask, Azure OpenAI (GPT-4o), and Google Search API with PostgreSQL database.",
      features: [
        "Azure GPT-4o integration",
        "Google Search API",
        "User authentication",
        "Chat history storage",
      ],
      technologies: ["Azure OpenAI", "Flask", "PostgreSQL", "Google API"],
      category: "AI & Web",
      color: "from-[#ba181b] to-[#e5383b]"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Zoho CRM Automation Suite",
      description:
        "Desktop application for PDF scraping, content extraction, and Zoho CRM API integration for lead management.",
      features: [
        "PDF scraping & extraction",
        "Zoho CRM API integration",
        "Lead management automation",
        "Desktop application",
      ],
      technologies: ["Zoho API", "PDF Processing", "Desktop App", "Automation"],
      category: "CRM & Automation",
      color: "from-[#0b090a] to-[#161a1d]"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "AI-Powered OCR Solutions",
      description:
        "Advanced OCR solutions using OpenAI's GPT, Google Gemini, and Llama models for multi-language text recognition.",
      features: [
        "Multi-language OCR",
        "GPT & Gemini integration",
        "Handwritten text recognition",
        "Word document conversion",
      ],
      technologies: ["OCR", "OpenAI GPT", "Google Gemini", "Llama"],
      category: "AI & OCR",
      color: "from-[#ba181b] to-[#e5383b]"
    },
    {
      icon: <MdAutoAwesome className="w-6 h-6" />,
      title: "Voice-Enabled Website Chatbot",
      description:
        "Voice-enabled chatbot capable of answering user queries by analyzing website content and enhancing client interactions.",
      features: [
        "Voice recognition",
        "Website content analysis",
        "Real-time responses",
        "Client interaction enhancement",
      ],
      technologies: ["Voice AI", "Web Scraping", "Real-time Chat", "NLP"],
      category: "AI & Voice",
      color: "from-[#0b090a] to-[#161a1d]"
    },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleStartProjectClick = () => {
    navigate("/start-project");
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - From code 1 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#ba181b] border border-[#0b090a] rounded-full mb-4">
            <div className="w-2 h-2 bg-[#0b090a] rounded-full mr-3"></div>
            <span className="text-[#ffffff] text-sm font-medium tracking-wide">
              MAJOR PROJECTS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#0b090a] tracking-tight mb-3">
            Innovative{" "}
            <span className="text-[#ba181b]">AI & Cloud Solutions</span>
          </h2>
          <p className="text-lg text-[#161a1d] max-w-3xl mx-auto leading-relaxed">
            A collection of cutting-edge projects showcasing expertise in AI,
            machine learning, cloud automation, and full-stack development.
          </p>
        </div>

        {/* Stats Bar - From code 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <FaLaptopCode className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">{projects.length}</div>
            <div className="text-[#161a1d] text-sm font-medium">Total Projects</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <FaRobot className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">10+</div>
            <div className="text-[#161a1d] text-sm font-medium">AI Solutions</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <FaCloud className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">5+</div>
            <div className="text-[#161a1d] text-sm font-medium">Cloud Projects</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <FaAward className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">100%</div>
            <div className="text-[#161a1d] text-sm font-medium">Success Rate</div>
          </div>
        </div>

        {/* Auto-Sliding Projects Carousel - From code 2 */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
          
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden py-6"
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:border-[#ba181b] hover:-translate-y-2"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-br ${project.color} p-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
                  
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="text-[#ffffff] group-hover:scale-110 transition-transform">
                      {React.cloneElement(project.icon, { className: 'text-2xl' })}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-[#ffffff] text-xs font-semibold">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center">
                    <MdVerified className="text-[#ffffff] text-lg mr-2" />
                    <span className="text-[#ffffff] text-xs font-medium">Production Ready</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <h3 className="text-[#0b090a] font-bold text-base mb-2 leading-tight min-h-[40px] group-hover:text-[#ba181b] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#161a1d] text-xs leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-3">
                    <h4 className="text-[#0b090a] text-xs font-semibold mb-2 flex items-center">
                      <FaCheckCircle className="text-[#ba181b] text-xs mr-1" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-[#161a1d] text-xs">
                          <div className="w-1 h-1 bg-[#ba181b] rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-3 border-t border-[#d3d3d3]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-[#161a1d] bg-[#ffffff] border border-[#d3d3d3] px-2 py-1 rounded-md hover:bg-[#ba181b] hover:text-[#ffffff] hover:border-[#ba181b] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-[#ffffff] bg-[#0b090a] border border-[#0b090a] px-2 py-1 rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ba181b] rounded-xl pointer-events-none transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - From code 1 */}
        <div className="text-center mt-12">          
          <div className="bg-[#0b090a] border border-[#0b090a] rounded-2xl p-6 max-w-2xl mx-auto hover:shadow-lg transition-all duration-300 group">            
            <h3 className="text-[#ffffff] font-semibold text-lg mb-4 flex items-center justify-center">              
              <div className="w-10 h-10 bg-[#ba181b] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                <FaRocket className="text-[#0b090a] text-lg" />
              </div>
              <span className="italic">Ready to Build Something Amazing?</span>
            </h3>
            <div className="flex items-start space-x-4">              
              <div>                
                <p className="text-[#d3d3d3] text-sm leading-relaxed mb-4 italic">                  
                  Let's collaborate on your next AI-powered project or discuss
                  how these technologies can transform your business operations.
                </p>
                <button
                  className="bg-[#ba181b] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#0b090a] border border-[#ba181b] px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                  onClick={handleStartProjectClick}
                >                  
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;