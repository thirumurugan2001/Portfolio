import React, { useState, useRef, useEffect } from "react";
import {
  FaCalendarAlt,
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaCloud,
  FaRobot,
  FaBuilding,
  FaSpider,
  FaBriefcase,
  FaLaptopCode,
  FaMicrochip,
  FaRocket,
  FaFilePdf,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";
import {
  SiPython,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiUipath,
  SiHuggingface,
  SiOpenai,
  SiGooglegemini,
  SiAmazon,
  SiZoho,
} from "react-icons/si";

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const contentRef = useRef(null);
  const experienceCardsRef = useRef([]);

  const toggleDetails = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
      setTimeout(() => {
        if (experienceCardsRef.current[index]) {
          experienceCardsRef.current[index].scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const experiences = [
    {
      title: "Application Developer",
      company: "VPearl Solutions Private Limited",
      location: "Chennai",
      period: "January 2025 - Present",
      role: "Application Developer",
      technologies: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "PostgreSQL",
        "OpenAI GPT",
        "AWS Bedrock",
        "Google Gemini",
        "MCP",
        "OCR",
        "Web Scraping",
        "Zoho CRM",
        "LLaMA",
        "Tesseract",
        "Poppler",
        "React.js",
        "Fast API",
      ],
      icon: <FaLaptopCode className="w-6 h-6" />,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      responsibilities: [
        "Specialized in developing cutting-edge AI applications and providing innovative solutions",
        "Worked closely with the development team to design and implement database structures and build APIs using Flask, Sanic, Django, and Fast API",
        "Implemented responsive designs using HTML, CSS, and JavaScript (React.jsx) to ensure cross-browser compatibility and optimal user experience",
        "Integrated Hugging Face models and Ollama for local AI model deployment and inference",
        "Developed MCP (Model Context Protocol) implementations for enhanced AI model interactions",
        "Implemented web scraping solutions and browser automation using Playwright for data extraction",
      ],
      projects: [
        {
          name: "AI Warehouses",
          period: "August 2025 – Present",
          description:
            "Designed and developed AI Warehouses (Chatbot), a PaaS web application capable of creating and retrieving data from the end-user database using MCP through a conversational interface, while leveraging advanced AI models including OpenAI GPT, AWS Bedrock and Google Gemini models.",
          technologies: [
            "React.js",
            "Fast API",
            "Python",
            "OpenAI GPT",
            "AWS Bedrock",
            "Google Gemini",
            "MCP",
            "PostgreSQL",
            "MongoDB",
          ],
          features: [
            "Developed a conversational interface using React.js for seamless user interactions",
            "Implemented MCP (Model Context Protocol) for efficient data operations on end-user databases",
            "Integrated multiple AI models including OpenAI GPT, AWS Bedrock, and Google Gemini for intelligent responses",
            "Built RESTful APIs using Fast API and Python for backend operations",
            "Designed scalable database architecture with PostgreSQL and MongoDB",
            "Created a PaaS platform allowing users to manage their database operations through natural language",
          ],
        },
        {
          name: "DTPC",
          period: "April 2025 – June 2025",
          description:
            "Designed and developed a desktop application for web scraping and extracting specific stamp details from PDFs using OCR technologies (Tesseract and Poppler) and AI models, including OpenAI GPT. Integrated Zoho CRM APIs to automatically push the processed data into the CRM system with Auto mailing.",
          technologies: [
            "Python",
            "Tesseract OCR",
            "Poppler",
            "OpenAI GPT",
            "Zoho CRM API",
            "Web Scraping",
            "PDF Processing",
            "Desktop Application",
            "Auto Mailing",
          ],
          features: [
            "Developed a desktop application for automated stamp detail extraction from PDF documents",
            "Implemented OCR using Tesseract and Poppler for accurate text recognition from scanned documents",
            "Integrated OpenAI GPT for intelligent data processing and validation",
            "Built web scraping functionality to collect additional stamp information",
            "Automated Zoho CRM integration for seamless data synchronization",
            "Implemented auto-mailing system for notifications and report distribution",
            "Created a user-friendly interface for batch PDF processing",
          ],
        },
        {
          name: "Lang Tech",
          period: "January 2025 – April 2025",
          description:
            "Designed and developed Lang Tech, a PaaS web application capable of translating Excel, Word, PDF, and text files, integrating OCR for text extraction, and leveraging AI models including OpenAI's GPT, Google Gemini, and LLaMA to ensure accurate multilingual text recognition and translation.",
          technologies: [
            "React.js",
            "Python",
            "OpenAI GPT",
            "Google Gemini",
            "LLaMA",
            "OCR",
            "PDF Processing",
            "Excel Processing",
            "Word Processing",
            "Fast API",
            "PostgreSQL",
          ],
          features: [
            "Created a PaaS web application for multilingual document translation",
            "Supported multiple file formats including Excel, Word, PDF, and plain text",
            "Integrated OCR technology for extracting text from scanned documents and images",
            "Leveraged multiple AI models (OpenAI GPT, Google Gemini, LLaMA) for accurate translations",
            "Implemented batch processing for handling multiple documents simultaneously",
            "Built responsive front-end using React.js for optimal user experience",
            "Developed REST APIs using Fast API for backend operations",
            "Implemented secure file upload and storage system",
          ],
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "Avasoft",
      location: "Chennai",
      period: "December 2023 - December 2024",
      role: "Software Engineer",
      technologies: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
        "PostgreSQL",
        "Azure OpenAI",
        "AWS Bedrock",
      ],
      icon: <FaMicrochip className="w-6 h-6" />,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      responsibilities: [
        "Specialized in developing next-generation AI applications and delivering innovative solutions",
        "Integrated Azure OpenAI Service and AWS Bedrock to create advanced AI solutions",
        "Collaborated with the development team to design and implement database structures and develop APIs using Flask, Sanic, Django, Fast API",
      ],
      projects: [
        {
          name: "Zeb Pulse",
          period: "March 2024 - April 2024",
          description:
            "With AI-driven insights and automation, businesses can dynamically streamline each aspect of the AWS Well-Architected Framework Review.",
          technologies: [
            "React.js",
            "Flask",
            "Python",
            "Azure OpenAI",
            "PostgreSQL",
            "MongoDB",
            "REST API",
          ],
          features: [
            "Created the front-end user interface using HTML, CSS, and JavaScript (React.js)",
            "Integrated Python and RESTful APIs using Flask, incorporated Azure OpenAI Service and managed generative AI prompting for AI responses",
          ],
        },
        {
          name: "LFS",
          period: "May 2023 - July 2024",
          description:
            "Designed and implemented a web application (chatbot) for students to clear their doubts based on the uploaded knowledge.",
          technologies: [
            "Flask",
            "Python",
            "Azure OpenAI",
            "PostgreSQL",
            "MS SQL",
            "Terraform",
            "WSL",
          ],
          features: [
            "Integrated Python and RESTful APIs using Flask, incorporated Azure OpenAI Service and managed generative AI prompting for AI responses",
            "Used PostgreSQL and MS SQL databases",
            "Used WSL to retrieve the Terraform code for analyzing automation and prepopulating answers",
          ],
        },
        {
          name: "CloudGen",
          period: "September 2024 - December 2024",
          description:
            "CloudGen is a drag-and-drop application designed to simplify cloud operations, enabling users to create services, estimate costs, and deploy them to the console with ease.",
          technologies: [
            "React.js",
            "Flask",
            "Python",
            "AWS Bedrock",
            "PostgreSQL",
            "MongoDB",
          ],
          features: [
            "Created the front-end user interface using HTML, CSS, and JavaScript (React.js)",
            "Integrated Python and RESTful APIs using Flask, incorporated AWS Bedrock Service, and managed generative AI prompting for AI responses",
          ],
        },
      ],
    },
    {
      title: "RPA Developer",
      company: "ClaySys Technologies",
      location: "Coimbatore",
      period: "July 2023 - October 2023",
      role: "RPA Developer",
      technologies: ["UiPath", "RPA Genie"],
      icon: <FaRobot className="w-6 h-6" />,
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      responsibilities: [
        "Created and maintained robotic automation workflows using UiPath and RPA Genie",
        "Tested and troubleshooted automation processes to ensure smooth operation",
        "Documented automation procedures, configurations, and troubleshooting steps",
      ],
      projects: [],
    },
  ];

  const getTechIcon = (tech) => {
    const techIcons = {
      Python: <SiPython className="w-4 h-4" />,
      JavaScript: <FaCode className="w-4 h-4" />,
      "React.js": <SiReact className="w-4 h-4" />,
      PostgreSQL: <SiPostgresql className="w-4 h-4" />,
      MySQL: <SiMysql className="w-4 h-4" />,
      MongoDB: <SiMongodb className="w-4 h-4" />,
      Flask: <SiFlask className="w-4 h-4" />,
      Django: <SiDjango className="w-4 h-4" />,
      "Fast API": <SiFastapi className="w-4 h-4" />,
      "Azure OpenAI": <FaCloud className="w-4 h-4" />,
      "AWS Bedrock": <SiAmazon className="w-4 h-4" />,
      "OpenAI GPT": <SiOpenai className="w-4 h-4" />,
      "Google Gemini": <SiGooglegemini className="w-4 h-4" />,
      UiPath: <SiUipath className="w-4 h-4" />,
      "RPA Genie": <FaRobot className="w-4 h-4" />,
      HTML: <FaCode className="w-4 h-4" />,
      CSS: <FaCode className="w-4 h-4" />,
      OCR: <FaFilePdf className="w-4 h-4" />,
      "REST API": <FaCode className="w-4 h-4" />,
      Terraform: <FaCloud className="w-4 h-4" />,
      WSL: <FaCode className="w-4 h-4" />,
      LLaMA: <FaRobot className="w-4 h-4" />,
      "Hugging Face": <SiHuggingface className="w-4 h-4" />,
      Ollama: <FaRobot className="w-4 h-4" />,
      "Web Scraping": <FaSpider className="w-4 h-4" />,
      MCP: <FaRobot className="w-4 h-4" />,
      Tesseract: <FaFilePdf className="w-4 h-4" />,
      Poppler: <FaFilePdf className="w-4 h-4" />,
      "Zoho CRM": <SiZoho className="w-4 h-4" />,
      "PDF Processing": <FaFilePdf className="w-4 h-4" />,
      "Excel Processing": <FaFileExcel className="w-4 h-4" />,
      "Word Processing": <FaFileWord className="w-4 h-4" />,
      "Desktop Application": <FaLaptopCode className="w-4 h-4" />,
      "Auto Mailing": <FaCode className="w-4 h-4" />,
      "Zoho CRM API": <SiZoho className="w-4 h-4" />,
    };
    return techIcons[tech] || <FaCode className="w-4 h-4" />;
  };

  // Set initial refs
  useEffect(() => {
    experienceCardsRef.current = experienceCardsRef.current.slice(
      0,
      experiences.length
    );
  }, []);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Main layout with 40/60 split */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - 40% width */}
          <div className="lg:w-2/5">
            <div className="space-y-8">
              {/* Header Section */}
              <div className="space-y-6">
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
                    PROFESSIONAL JOURNEY
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  My{" "}
                  <span className="bg-gradient-to-r from-[#5f5297ff] to-violet-900 text-transparent bg-clip-text">
                    Experience
                  </span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
                  A chronological progression through my career, demonstrating
                  expertise in AI development, cloud technologies, and software
                  engineering across diverse industries and complex projects.
                </p>
              </div>

              {/* Quick Navigation */}
              <div className="bg-[#111111] border border-[#333333] rounded-2xl p-6 hover:border-[#8267ec] transition-all duration-300">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Quick Navigation
                </h3>
                <div className="space-y-3">
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => toggleDetails(index)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                        expandedItem === index
                          ? `${exp.bgColor} ${exp.borderColor} border`
                          : expandedItem !== null
                          ? "opacity-50 hover:opacity-70"
                          : "hover:bg-[#1a1a1a]"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            exp.iconColor
                          } ${
                            expandedItem === index
                              ? "bg-white/10"
                              : "bg-[#1a1a1a]"
                          }`}
                        >
                          {exp.icon}
                        </div>
                        <div className="text-left">
                          <div
                            className={`font-medium ${
                              expandedItem === index
                                ? "text-white"
                                : "text-white"
                            }`}
                          >
                            {exp.company}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${
                          expandedItem === index
                            ? "text-white"
                            : "text-[#8267ec]"
                        }`}
                      >
                        {expandedItem === index ? (
                          <FaChevronUp className="w-5 h-5" />
                        ) : (
                          <FaChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - 60% width */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              {/* Only show the expanded item, hide others */}
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    expandedItem === index ? "block" : "hidden"
                  }`}
                >
                  {/* Experience Card - Always visible when this is the expanded item */}
                  <div
                    className={`bg-[#111111] border border-[#333333] rounded-xl overflow-hidden ${
                      expandedItem === index
                        ? `${exp.bgColor} ${exp.borderColor}`
                        : ""
                    }`}
                  >
                    {/* Static Header Section */}
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => toggleDetails(index)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center border ${exp.borderColor} ${exp.iconColor}`}
                            >
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-1">
                                {exp.title}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                                <p className="font-medium text-white">
                                  {exp.company}
                                </p>
                                <span className="hidden sm:block text-[#8267ec]">
                                  •
                                </span>
                                <p className="text-gray-400">{exp.location}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center space-x-2 text-gray-400">
                              <FaCalendarAlt className="w-4 h-4 text-[#8267ec]" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <FaBuilding className="w-4 h-4 text-[#8267ec]" />
                              <span>{exp.role}</span>
                            </div>
                          </div>
                        </div>

                        {/* Expand/Collapse Icon */}
                        <div
                          className={`flex-shrink-0 ml-4 transform transition-transform ${
                            expandedItem === index
                              ? "text-white rotate-180"
                              : "text-[#8267ec]"
                          }`}
                        >
                          {expandedItem === index ? (
                            <FaChevronUp className="w-5 h-5" />
                          ) : (
                            <FaChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#333333] rounded-md hover:bg-[#8267ec] hover:border-[#8267ec] transition-all duration-200"
                          >
                            <div className="text-gray-400">
                              {getTechIcon(tech)}
                            </div>
                            <span className="text-gray-400 text-sm font-medium">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scrollable Expanded Content */}
                    <div
                      ref={(el) => (experienceCardsRef.current[index] = el)}
                      className="px-6 pb-6 border-t border-[#333333] pt-6 space-y-6"
                      style={{
                        maxHeight: "400px",
                        overflowY: "auto",
                        scrollBehavior: "smooth",
                      }}
                    >
                      {/* Hide scrollbar */}
                      <style jsx>{`
                        div::-webkit-scrollbar {
                          display: none;
                        }
                        div {
                          -ms-overflow-style: none;
                          scrollbar-width: none;
                        }
                      `}</style>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center">
                          <div className="w-2 h-2 bg-[#8267ec] rounded-full mr-2"></div>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-1.5 h-1.5 bg-[#8267ec] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 leading-relaxed">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Projects */}
                      {exp.projects.length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center">
                            <div className="w-2 h-2 bg-[#8267ec] rounded-full mr-2"></div>
                            Key Projects
                          </h4>
                          <div className="space-y-4">
                            {exp.projects.map((project, pIdx) => (
                              <div
                                key={pIdx}
                                className="bg-black/50 border border-[#333333] rounded-lg p-4 hover:shadow-[0_0_20px_rgba(130,103,236,0.1)] transition-all duration-300"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                                  <h5 className="text-white font-semibold">
                                    {project.name}
                                  </h5>
                                  <span className="text-white bg-[#8267ec] border border-transparent px-3 py-1 rounded-md flex-shrink-0 text-sm font-medium">
                                    {project.period}
                                  </span>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                  {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {project.technologies.map((tech, tIdx) => (
                                    <div
                                      key={tIdx}
                                      className="flex items-center space-x-1 bg-[#111111] border border-[#333333] px-2 py-1 rounded-md hover:border-[#8267ec] hover:bg-[#8267ec]/10 transition-all duration-200"
                                    >
                                      <div className="text-[#8267ec]">
                                        {getTechIcon(tech)}
                                      </div>
                                      <span className="text-gray-300 text-sm">
                                        {tech}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                <ul className="space-y-2">
                                  {project.features.map((feature, fIdx) => (
                                    <li
                                      key={fIdx}
                                      className="flex items-start space-x-2 text-gray-300"
                                    >
                                      <div className="w-1 h-1 bg-[#8267ec] rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="leading-relaxed">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* When no item is expanded, show all companies collapsed */}
              {expandedItem === null && (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="transition-all duration-300 bg-[#111111] border border-[#333333] rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(130,103,236,0.15)] hover:border-[#8267ec]"
                    >
                      {/* Collapsed Company Card */}
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() => toggleDetails(index)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-4">
                              <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${exp.borderColor} ${exp.iconColor}`}
                              >
                                {exp.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-white mb-1">
                                  {exp.title}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                                  <p className="font-medium text-white">
                                    {exp.company}
                                  </p>
                                  <span className="hidden sm:block text-[#8267ec]">
                                    •
                                  </span>
                                  <p className="text-gray-400">
                                    {exp.location}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                              <div className="flex items-center space-x-2 text-gray-400">
                                <FaCalendarAlt className="w-4 h-4 text-[#8267ec]" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-400">
                                <FaBuilding className="w-4 h-4 text-[#8267ec]" />
                                <span>{exp.role}</span>
                              </div>
                            </div>
                          </div>

                          {/* Expand Icon */}
                          <div className="flex-shrink-0 ml-4 text-[#8267ec]">
                            <FaChevronDown className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Technologies (limited display) */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.slice(0, 4).map((tech, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#333333] rounded-md hover:bg-[#8267ec] hover:border-[#8267ec] transition-all duration-200"
                            >
                              <div className="text-gray-400">
                                {getTechIcon(tech)}
                              </div>
                              <span className="text-gray-400 text-sm font-medium">
                                {tech}
                              </span>
                            </div>
                          ))}
                          {exp.technologies.length > 4 && (
                            <div className="flex items-center space-x-2 bg-[#1a1a1a] border border-[#333333] px-3 py-1.5 rounded-md">
                              <span className="text-gray-400 text-sm font-medium">
                                +{exp.technologies.length - 4} more
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="pt-10">
        <div className="flex items-center justify-center">
          <div
            className="bg-black border border-[#8267ec] rounded-2xl p-6 
        hover:shadow-[0_0_30px_rgba(130,103,236,0.25)] 
        transition-all duration-300 group max-w-lg text-center"
          >
            <h3
              className="text-white font-semibold text-lg mb-4 flex items-center 
          justify-center"
            >
              <div
                className="w-10 h-10 bg-[#8267ec] rounded-lg flex items-center 
            justify-center mr-3 group-hover:scale-105 transition-transform"
              >
                <FaBriefcase className="text-white text-lg" />
              </div>
              Career Summary
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed text-sm italic">
              From foundational RPA development to advanced AI engineering and
              cloud solutions, my career demonstrates continuous growth in
              technical expertise and project complexity.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 justify-center 
          items-center text-gray-300 text-sm"
            >
              <div className="flex items-center space-x-2">
                <FaRocket className="w-4 h-4 text-[#8267ec]" />
                <span>20+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMicrochip className="w-4 h-4 text-[#8267ec]" />
                <span>10+ AI Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
