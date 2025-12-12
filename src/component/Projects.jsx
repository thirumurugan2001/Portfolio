import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
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
} from "react-icons/fa";
import { MdApi, MdSmartToy, MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const projects = [
    {
      icon: <FaCloud className="w-5 h-5" />,
      title: "AI Cloud Operations Platform",
      description:
        "Drag-and-drop app with AI-driven architecture generation and deployment automation.",
      features: ["Bot3 with RAG", "Cloud automation", "Cost estimation"],
      technologies: ["AI/ML", "RAG", "Cloud"],
      category: "AI & Cloud",
      color: "from-[#8267ec] to-[#9d8aee]",
    },
    {
      icon: <MdApi className="w-5 h-5" />,
      title: "AWS Framework AI",
      description:
        "RESTful APIs for AWS Well-Architected Framework with AI-driven insights.",
      features: ["Cloud optimization", "Framework review", "REST API"],
      technologies: ["AWS", "API", "Automation"],
      category: "Cloud & API",
      color: "from-[#111111] to-[#333333]",
    },
    {
      icon: <MdSmartToy className="w-5 h-5" />,
      title: "Educational RAG Chatbot",
      description:
        "Web app for students with RAG integration and LLM-powered responses.",
      features: ["RAG implementation", "LLM integration", "Knowledge base"],
      technologies: ["RAG", "LLMs", "Web App"],
      category: "AI & Education",
      color: "from-[#8267ec] to-[#9d8aee]",
    },
    {
      icon: <FaRobot className="w-5 h-5" />,
      title: "India Tourism AI Model",
      description:
        "RAG and fine-tuning model for intelligent tourism recommendations.",
      features: ["Fine-tuned LLM", "Tourism AI", "Recommendations"],
      technologies: ["Fine-Tuning", "RAG", "AI"],
      category: "AI & Tourism",
      color: "from-[#111111] to-[#333333]",
    },
    {
      icon: <FaFileAlt className="w-5 h-5" />,
      title: "AI Resume Generator",
      description:
        "Automated resume creation with DeepSeek AI and Ollama models.",
      features: ["DeepSeek AI", "Ollama", "Resume generation"],
      technologies: ["DeepSeek", "Ollama", "HR Tech"],
      category: "AI & HR",
      color: "from-[#8267ec] to-[#9d8aee]",
    },
    {
      icon: <FaEye className="w-5 h-5" />,
      title: "AI Image Recognition",
      description:
        "Image recognition system using Azure OpenAI for object detection.",
      features: ["Azure OpenAI", "Object recognition", "Text extraction"],
      technologies: ["Azure", "Vision", "AI"],
      category: "Computer Vision",
      color: "from-[#111111] to-[#333333]",
    },
    {
      icon: <FaLanguage className="w-5 h-5" />,
      title: "Document Translator",
      description: "DOCX file translation app using Google Translate API.",
      features: ["Google API", "DOCX processing", "Translation"],
      technologies: ["Google", "Translation", "Automation"],
      category: "AI & Translation",
      color: "from-[#8267ec] to-[#9d8aee]",
    },
    {
      icon: <FaCog className="w-5 h-5" />,
      title: "Document Seal Recognition",
      description: "FastAPI app for seal/stamp detection using OpenAI Vision.",
      features: ["OpenAI Vision", "Seal detection", "Authentication"],
      technologies: ["Vision API", "FastAPI", "Security"],
      category: "AI & Security",
      color: "from-[#111111] to-[#333333]",
    },
    {
      icon: <FaCalculator className="w-5 h-5" />,
      title: "Azure Pricing Automation",
      description: "Flask service automating Azure pricing calculations.",
      features: ["Playwright", "Real-time pricing", "API"],
      technologies: ["Flask", "Playwright", "Azure"],
      category: "Cloud & Automation",
      color: "from-[#8267ec] to-[#9d8aee]",
    },
    {
      icon: <FaSearch className="w-5 h-5" />,
      title: "Semantic Image Search",
      description: "FastAPI semantic search using OpenAI CLIP model.",
      features: ["CLIP model", "Semantic search", "Vector DB"],
      technologies: ["CLIP", "FastAPI", "PostgreSQL"],
      category: "AI & Search",
      color: "from-[#111111] to-[#333333]",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleStartProjectClick = () => {
    navigate("/start-project");
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div
            className="group inline-flex items-center px-4 py-2 bg-[#8267ec] text-white 
             border border-[#8267ec] rounded-full mb-6 
             hover:bg-white hover:text-black 
             transition-all duration-300 transform hover:scale-105 
             shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]"
          >
            <div
              className="w-2 h-2 bg-white rounded-full mr-3 
               transition-colors duration-300 group-hover:bg-black"
            ></div>

            <span className="text-sm font-medium tracking-wide transition-colors duration-300">
              MAJOR PROJECTS
            </span>
          </div>

          <h2 className="text-5xl font-bold text-white tracking-tight mb-3">
            Innovative{" "}
            <span className="bg-gradient-to-r from-[#5f5297ff] to-violet-900 text-transparent bg-clip-text">
              AI & Cloud Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
            A collection of cutting-edge projects showcasing expertise in AI,
            machine learning, and cloud automation.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#111111] border border-[#333333] rounded-lg p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group">
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaLaptopCode className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">10+ </div>
            <div className="text-gray-300 text-xs font-medium">
              Total Projects
            </div>
          </div>

          <div className="bg-[#111111] border border-[#333333] rounded-lg p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group">
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaRobot className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">10+</div>
            <div className="text-gray-300 text-xs font-medium">
              AI Solutions
            </div>
          </div>

          <div className="bg-[#111111] border border-[#333333] rounded-lg p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group">
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaCloud className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">5+</div>
            <div className="text-gray-300 text-xs font-medium">
              Cloud Projects
            </div>
          </div>

          <div className="bg-[#111111] border border-[#333333] rounded-lg p-4 text-center hover:shadow-[0_0_15px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group">
            <div className="text-[#8267ec] flex justify-center mb-2 group-hover:scale-110 transition-transform">
              <FaAward className="text-2xl" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-300 text-xs font-medium">
              Success Rate
            </div>
          </div>
        </div>

        {/* Auto-scrolling Carousel with Slider */}
        <div className="relative mb-10 px-2 sm:px-4 md:px-8">
          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="bg-[#111111] border border-[#333333] rounded-lg p-4 hover:border-[#8267ec] hover:shadow-[0_0_25px_rgba(130,103,236,0.2)] transition-all duration-300 group h-full">
                  {/* Card Header with Gradient */}
                  <div
                    className={`bg-gradient-to-br ${project.color} p-3 rounded-md mb-3 relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>

                    <div className="relative z-10 flex items-center justify-between mb-2">
                      <div className="text-white group-hover:scale-110 transition-transform">
                        {React.cloneElement(project.icon, {
                          className: "text-xl",
                        })}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        <span className="text-white text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center">
                      <MdVerified className="text-white text-sm mr-1" />
                      <span className="text-white text-xs font-medium">
                        Production Ready
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 leading-tight min-h-[40px] group-hover:text-[#8267ec] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-xs leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-3">
                      <h4 className="text-white text-xs font-semibold mb-1 flex items-center">
                        <FaCheckCircle className="text-[#8267ec] text-xs mr-1" />
                        Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-1 text-gray-300 text-xs"
                          >
                            <div className="w-1 h-1 bg-[#8267ec] rounded-full mt-1 flex-shrink-0"></div>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2 border-t border-[#333333]">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-300 bg-[#1a1a1a] border border-[#333333] px-2 py-1 rounded-md hover:bg-[#8267ec] hover:text-white hover:border-[#8267ec] transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs text-white bg-[#8267ec] border border-[#8267ec] px-2 py-1 rounded-md hover:bg-[#9d8aee] transition-colors">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4 mb-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-[#111111] hover:bg-[#8267ec] border border-[#333333] hover:border-[#8267ec] text-white hover:text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(130,103,236,0.3)]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => sliderRef.current?.slickGoTo(idx * 3)}
                  className="w-2 h-2 rounded-full bg-[#333333] hover:bg-[#8267ec] transition-all duration-300"
                />
              )
            )}
          </div>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-[#111111] hover:bg-[#8267ec] border border-[#333333] hover:border-[#8267ec] text-white hover:text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(130,103,236,0.3)]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-black border border-[#8267ec] rounded-xl p-6 max-w-xl mx-auto hover:shadow-[0_0_40px_rgba(130,103,236,0.25)] transition-all duration-300 group">
            <h3 className="text-white font-semibold text-lg mb-3 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#8267ec] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform group-hover:shadow-[0_0_20px_rgba(130,103,236,0.5)]">
                <FaRocket className="text-white text-lg" />
              </div>
              <span className="italic text-sm">
                Ready to Build Something Amazing?
              </span>
            </h3>

            <div className="text-center">
              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md mx-auto italic">
                Let's collaborate on your next AI-powered project.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  className="group bg-[#8267ec] text-white hover:bg-white hover:text-black border border-[#8267ec] px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] flex items-center justify-center space-x-2 text-sm"
                  onClick={handleStartProjectClick}
                >
                  <span className="tracking-wide">Start a Project</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#contact"
                  className="group border border-[#8267ec] text-[#8267ec] hover:bg-[#8267ec] hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm hover:shadow-[0_0_15px_rgba(130,103,236,0.3)]"
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
