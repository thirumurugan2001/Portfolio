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
} from "react-icons/fa";
import { MdWeb, MdApi, MdAutoAwesome, MdSmartToy } from "react-icons/md";
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
    },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

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
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#ba181b] border border-[#0b090a] rounded-full mb-4">
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
            A collection of cutting-edge projects showcasing expertise in AI,
            machine learning, cloud automation, and full-stack development.
          </p>
        </div>

        {/* Auto-Sliding Carousel */}
        <div className="relative mb-12 ">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden">
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] bg-[#f5f3f4] border border-[#d3d3d3] rounded-lg p-4 hover:border-[#ba181b] hover:shadow-lg transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3 ">
                  <div className="text-[#ba181b] group-hover:text-[#0b090a] transition-all duration-300">
                    {project.icon}
                  </div>
                  <span className="text-xs text-[#ffffff] bg-[#0b090a] border border-[#0b090a] px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-lg font-semibold text-[#0b090a] mb-2 tracking-tight group-hover:text-[#161a1d] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-[#161a1d] text-xs leading-relaxed mb-3 tracking-wide line-clamp-3">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-1 mb-3">
                  <h4 className="text-[#0b090a] text-xs font-medium">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-1">
                        <div className="w-1.5 h-1.5 bg-[#ba181b] rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-[#161a1d] text-xs leading-relaxed line-clamp-1">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-[#161a1d] bg-[#f5f3f4] border border-[#d3d3d3] px-1.5 py-0.5 rounded hover:bg-[#ba181b] hover:text-[#ffffff] hover:border-[#ba181b] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-[#ffffff] bg-[#0b090a] border border-[#0b090a] px-1.5 py-0.5 rounded hover:bg-[#ba181b] hover:border-[#ba181b] transition-all duration-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
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