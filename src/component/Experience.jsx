import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaCloud,
  FaRobot,
  FaBuilding,
  FaSpider,
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
} from "react-icons/si";

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleDetails = (index) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
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
        "Hugging Face",
        "Ollama",
        "Web Scraping",
      ],
      logo: "src/assets/company1.png",
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
          name: "LangTech",
          period: "January 2024 - Present (Milestone 2)",
          description:
            "LangTech is a cutting-edge platform that leverages advanced AI models to provide seamless and accurate translation services for users uploading content.",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "OpenAI GPT",
            "Google Gemini",
            "Llama",
            "OCR",
            "Hugging Face",
            "Ollama",
            "Playwright",
          ],
          features: [
            "Created the front-end user interface using HTML, CSS, and JavaScript",
            "Developed AI-powered OCR solutions using OpenAI's GPT, Google Gemini, and Llama models for text recognition across multiple languages, including Vietnamese",
            "Integrated Hugging Face transformer models for enhanced NLP capabilities",
            "Implemented Ollama for local LLM deployment and inference",
            "Utilized Playwright for automated browser testing and web scraping operations",
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
      logo: "src/assets/company2.jfif",
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
      logo: "src/assets/company3.jfif",
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
      "AWS Bedrock": <FaCloud className="w-4 h-4" />,
      UiPath: <SiUipath className="w-4 h-4" />,
      "RPA Genie": <FaRobot className="w-4 h-4" />,
      HTML: <FaCode className="w-4 h-4" />,
      CSS: <FaCode className="w-4 h-4" />,
      OCR: <FaCode className="w-4 h-4" />,
      "REST API": <FaCode className="w-4 h-4" />,
      Terraform: <FaCloud className="w-4 h-4" />,
      WSL: <FaCode className="w-4 h-4" />,
      "OpenAI GPT": <FaCloud className="w-4 h-4" />,
      "Google Gemini": <FaCloud className="w-4 h-4" />,
      Llama: <FaCloud className="w-4 h-4" />,
      "Hugging Face": <SiHuggingface className="w-4 h-4" />,
      Ollama: <FaRobot className="w-4 h-4" />,
      "Web Scraping": <FaSpider className="w-4 h-4" />,
    };
    return techIcons[tech] || <FaCode className="w-4 h-4" />;
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#ba181b] border border-[#0b090a] rounded-full mb-6">
            <div className="w-2 h-2 bg-[#0b090a] rounded-full mr-3"></div>
            <span className="text-[#ffffff] text-sm font-medium tracking-wide">
              PROFESSIONAL JOURNEY
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#0b090a] tracking-tight mb-4">
            Professional <span className="text-[#ba181b]">Experience</span>
          </h2>
          <p className="text-lg text-[#161a1d] max-w-3xl mx-auto leading-relaxed">
            A chronological progression through my career, demonstrating
            expertise in AI development, cloud technologies, and software
            engineering across diverse industries and complex projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#ba181b] opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-4 h-4 bg-[#ba181b] rounded-full border-2 border-[#ffffff] z-10 shadow-lg"></div>

                {/* Experience Card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-1/2 md:pr-8" : "md:ml-1/2 md:pl-8"
                  }`}
                >
                  <div
                    className="group bg-[#ffffff] border border-[#d3d3d3] rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                    onClick={() => toggleDetails(index)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                            <div className="hidden w-full h-full items-center justify-center bg-[#0b090a] text-[#ffffff] rounded-lg">
                              <FaBuilding className="w-8 h-8" />
                            </div>
                          </div>
                        </div>

                        {/* Company Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold text-[#0b090a] mb-1 group-hover:text-[#161a1d] transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                            <p className="text-[#0b090a] font-medium text-sm">
                              {exp.company}
                            </p>
                            <span className="hidden sm:block text-[#ba181b]">
                              •
                            </span>
                            <p className="text-[#161a1d] opacity-80 text-sm">
                              {exp.location}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center space-x-2 text-[#161a1d] opacity-80">
                              <FaCalendarAlt className="w-3 h-3 text-[#ba181b]" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#161a1d] opacity-80">
                              <FaBuilding className="w-3 h-3 text-[#ba181b]" />
                              <span>{exp.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <div className="text-[#ba181b] group-hover:text-[#0b090a] transition-colors duration-300 flex-shrink-0 ml-4 transform group-hover:scale-110">
                        {expandedItems.includes(index) ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-[#f5f3f4] hover:bg-[#ba181b] hover:text-[#ffffff] border border-[#d3d3d3] px-3 py-1.5 rounded-md transition-all duration-200 group/tech transform hover:scale-105"
                        >
                          <div className="text-[#0b090a] group-hover/tech:text-[#ffffff] transition-colors">
                            {getTechIcon(tech)}
                          </div>
                          <span className="text-[#161a1d] text-xs font-medium group-hover/tech:text-[#ffffff]">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Details */}
                    {expandedItems.includes(index) && (
                      <div className="mt-6 space-y-6 border-t border-[#d3d3d3] pt-6">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-[#0b090a] font-semibold mb-3 text-sm uppercase tracking-wider flex items-center">
                            <div className="w-2 h-2 bg-[#ba181b] rounded-full mr-2"></div>
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-1.5 h-1.5 bg-[#ba181b] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[#161a1d] text-sm leading-relaxed">
                                  {resp}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Projects */}
                        {exp.projects.length > 0 && (
                          <div>
                            <h4 className="text-[#0b090a] font-semibold mb-4 text-sm uppercase tracking-wider flex items-center">
                              <div className="w-2 h-2 bg-[#ba181b] rounded-full mr-2"></div>
                              Key Projects
                            </h4>
                            <div className="space-y-4">
                              {exp.projects.map((project, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="group/project bg-[#f5f3f4] border border-[#d3d3d3] rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                                    <h5 className="text-[#0b090a] font-semibold text-base group-hover/project:text-[#161a1d] transition-colors duration-300">
                                      {project.name}
                                    </h5>
                                    <span className="text-[#ffffff] bg-[#ba181b] border border-transparent px-3 py-1 rounded-md flex-shrink-0 text-xs font-medium transform group-hover/project:scale-105 transition-transform duration-300">
                                      {project.period}
                                    </span>
                                  </div>
                                  <p className="text-[#161a1d] text-sm mb-4 leading-relaxed">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies.map((tech, tIdx) => (
                                      <div
                                        key={tIdx}
                                        className="flex items-center space-x-1 bg-[#ffffff] border border-[#d3d3d3] px-2 py-1 rounded-md hover:border-[#ba181b] transition-all duration-200 transform hover:scale-105"
                                      >
                                        <div className="text-[#0b090a]">
                                          {getTechIcon(tech)}
                                        </div>
                                        <span className="text-[#161a1d] text-xs">
                                          {tech}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                  <ul className="space-y-2">
                                    {project.features.map((feature, fIdx) => (
                                      <li
                                        key={fIdx}
                                        className="flex items-start space-x-2 text-[#161a1d] text-sm"
                                      >
                                        <div className="w-1 h-1 bg-[#ba181b] rounded-full mt-2 flex-shrink-0"></div>
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
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="text-center mt-10">
          <div className="bg-[#0b090a] border border-[#0b090a] rounded-2xl p-6 max-w-5xl mx-auto hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-[#ffffff] font-semibold text-2xl mb-6 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#ba181b] rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                <svg
                  className="w-5 h-5 text-[#0b090a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z italic"
                  />
                </svg>
              </div> <span className="italic">Career Summary</span>
            </h3>
            <p className="text-[#d3d3d3] mb-8 leading-relaxed text-base italic">
             
              From foundational RPA development to advanced AI engineering and
              cloud solutions, my career demonstrates continuous growth in
              technical expertise and project complexity, consistently
              delivering innovative solutions that create tangible business
              value.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
           
              <span className="text-[#0b090a] bg-[#ba181b] border border-transparent px-4 py-2 rounded-lg font-medium hover:bg-[#ffffff] hover:text-[#0b090a] transition-all duration-300 transform hover:scale-105">
                AI Engineering
              </span>
              <span className="text-[#0b090a] bg-[#ba181b] border border-transparent px-4 py-2 rounded-lg font-medium hover:bg-[#ffffff] hover:text-[#0b090a] transition-all duration-300 transform hover:scale-105">
                Cloud Architecture
              </span>
              <span className="text-[#0b090a] bg-[#ba181b] border border-transparent px-4 py-2 rounded-lg font-medium hover:bg-[#ffffff] hover:text-[#0b090a] transition-all duration-300 transform hover:scale-105">
                Full-Stack Development
              </span>
              <span className="text-[#0b090a] bg-[#ba181b] border border-transparent px-4 py-2 rounded-lg font-medium hover:bg-[#ffffff] hover:text-[#0b090a] transition-all duration-300 transform hover:scale-105">
                Process Automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;