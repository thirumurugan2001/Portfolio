import { useState, useRef, useEffect } from "react";
import {
  FaDownload,
  FaArrowRight,
  FaDatabase,
  FaCloud,
  FaCode,
  FaBrain,
  FaNetworkWired,
  FaRobot,
  FaCogs,
  FaArrowUp,
} from "react-icons/fa";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiHackerrank } from "react-icons/si";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Certifications from "./Certifications";
import resumeCV from "../assets/Thirumurugan_Resume.pdf";

// Color Constants
const COLORS = {
  primary: "#8267ec", // Purple
  black: "#000000",
  white: "#ffffff",
  grayLight: "#f5f5f5",
  grayDark: "#1a1a1a",
};

// Typing Animation Component
const TypingAnimation = ({ text, speed = 30, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

const HomePage = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thirumurugan-subramaniyan-a62351212/",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/thirumurugan2001",
    },
    {
      icon: <SiCodechef className="w-5 h-5" />,
      name: "CodeChef",
      url: "https://www.codechef.com/users/thiru2001",
    },
    {
      icon: <FaHackerrank className="w-5 h-5" />,
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/thirusubramaniy1",
    },
    {
      icon: <SiLeetcode className="w-5 h-5" />,
      name: "LeetCode",
      url: "https://leetcode.com/u/thirusubramaniyan2001/",
    },
    {
      icon: <SiHackerrank className="w-5 h-5" />,
      name: "HackerEarth",
      url: "https://www.hackerearth.com/@thirumuruganSubramaniyan/",
    },
  ];

  const techStack = [
    {
      icon: <FaBrain className="w-7 h-7" />,
      title: "AI Engineering",
      description: "LLMs, RAG Systems, Computer Vision, NLP",
      features: ["Fine-tuning", "Vector DBs", "Model Deployment"],
    },
    {
      icon: <FaCode className="w-7 h-7" />,
      title: "Full-Stack Development",
      description: "Python, FastAPI, React, Node.js, TypeScript",
      features: ["API Design", "System Integration", "Performance"],
    },
    {
      icon: <FaCloud className="w-7 h-7" />,
      title: "Cloud & DevOps",
      description: "Azure OpenAI, AWS Bedrock, Docker, CI/CD",
      features: ["Cloud AI", "Containerization", "Automation"],
    },
    {
      icon: <FaDatabase className="w-7 h-7" />,
      title: "Data Engineering",
      description: "SQL, NoSQL, Vector Databases",
      features: ["Data Modeling", "Optimization", "Pipelines"],
    },
    {
      icon: <FaRobot className="w-7 h-7" />,
      title: "Automation Testing",
      description: "Selenium, Playwright",
      features: [
        "Test Frameworks",
        "CI/CD Integration",
        "Cross-Browser Testing",
      ],
    },
    {
      icon: <FaCogs className="w-7 h-7" />,
      title: "RPA Engineering",
      description: "UiPath, Automation Anywhere, Power Automate",
      features: ["Process Automation", "Bot Deployment", "Workflow Design"],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const timeoutRef = useRef(null);
  const canvasRef = useRef(null);

  // Neural Network Background Animation - Black, White & Purple Theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Neural network nodes and connections
    const nodes = [];
    const connections = [];
    const nodeCount = 25;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.8,
        pulse: Math.random() * Math.PI * 2,
        color: Math.random() > 0.7 ? COLORS.primary : COLORS.white,
      });
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          connections.push({
            from: i,
            to: j,
            distance: distance,
          });
        }
      }
    }

    const animate = () => {
      // Clear with black background
      ctx.fillStyle = COLORS.black;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach((node) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Pulse animation
        node.pulse += 0.02;
        const pulseSize = Math.sin(node.pulse) * 0.5 + 1;

        // Draw node with color
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseSize, 0, Math.PI * 2);
        if (node.color === COLORS.primary) {
          ctx.fillStyle = `${COLORS.primary}${node.radius > 2 ? "80" : "40"}`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${node.radius > 2 ? 0.4 : 0.2})`;
        }
        ctx.fill();

        // Add glow effect for purple nodes
        if (node.color === COLORS.primary) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * pulseSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${COLORS.primary}20`;
          ctx.fill();
        }
      });

      // Draw connections
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];

        // Determine connection color
        const connectionColor =
          fromNode.color === COLORS.primary || toNode.color === COLORS.primary
            ? COLORS.primary
            : COLORS.white;

        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `${connectionColor}${
          connectionColor === COLORS.primary ? "30" : "15"
        }`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Draw data flow dots
        const progress = (Date.now() * 0.001) % 1;
        const dotX = fromNode.x + (toNode.x - fromNode.x) * progress;
        const dotY = fromNode.y + (toNode.y - fromNode.y) * progress;

        ctx.beginPath();
        ctx.arc(dotX, dotY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle =
          connectionColor === COLORS.primary
            ? `${COLORS.primary}${progress > 0.5 ? "cc" : "aa"}`
            : `rgba(255, 255, 255, ${progress > 0.5 ? 0.9 : 0.7})`;
        ctx.fill();
      });

      // Draw floating AI icons with purple accent
      const time = Date.now() * 0.001;
      const icons = ["🤖", "🧠", "⚡", "🔗", "🌐", "📊"];

      icons.forEach((icon, index) => {
        const x = canvas.width / 2 + Math.cos(time * 0.5 + index) * 300;
        const y = canvas.height / 2 + Math.sin(time * 0.7 + index) * 200;
        const scale = 0.8 + Math.sin(time + index) * 0.2;
        const isPurple = index % 3 === 0;

        ctx.font = `${24 * scale}px Arial`;
        ctx.fillStyle = isPurple
          ? `${COLORS.primary}15`
          : `rgba(255, 255, 255, 0.08)`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(icon, x, y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === techStack.length) {
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
  }, [currentSlide, techStack.length]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  const professionalSummary =
    "Specializing in Large Language Models, RAG Systems, and AI-powered applications. Transforming complex business challenges into scalable AI solutions using cutting-edge machine learning and cloud technologies.";

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#8267ec] text-white border border-[#8267ec] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(130,103,236,0.6)]"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <section
          id="home"
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Professional Badge */}                  

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
                      AI RESEARCH ENGINEER
                    </span>
                  </div>

                  {/* Name and Title */}
                  <div className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                      <span className="text-white ">Thirumurugan</span>
                      <br />
                      <span className="bg-gradient-to-r from-[#5f5297ff] to-violet-900 text-transparent bg-clip-text">
                        Subramaniyan
                      </span>
                    </h1>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-0.5 bg-[#8267ec]"></div>
                      <p className="text-xl text-white font-light tracking-wide">
                        Artificial Intelligence Engineer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Summary with Typing Animation */}
                <div className="text-lg text-gray-300 leading-relaxed max-w-2xl tracking-wide min-h-[120px]">
                  <TypingAnimation
                    text={professionalSummary}
                    speed={20}
                    onComplete={handleTypingComplete}
                    className="font-light"
                  />
                </div>

                {/* Key Expertise - Appears after typing completes */}
                {typingComplete && (
                  <div className="grid grid-cols-2 gap-4 text-sm animate-fadeIn">
                    {[
                      "LLM Fine-tuning",
                      "Vector Databases",
                      "Cloud AI Services",
                      "MLOps & Deployment",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 group"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            index % 2 === 0 ? "bg-[#8267ec]" : "bg-white"
                          } animate-pulse group-hover:scale-125 transition-transform`}
                        ></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons with PDF Download */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href={resumeCV}
                    download="Thirumurugan_Subramaniyan_Resume.pdf"
                    className="group bg-[#8267ec] text-white border border-[#8267ec] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] flex items-center justify-center space-x-3"
                  >
                    <FaDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="tracking-wide">Download Research CV</span>
                  </a>
                  <button
                    onClick={scrollToProjects}
                    className="group border-2 border-[#8267ec] text-[#8267ec] hover:bg-[#8267ec] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-[0_0_20px_rgba(130,103,236,0.3)]"
                  >
                    <span className="tracking-wide">Explore Projects</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Content with Infinite Carousel */}
              <div className="space-y-8">
                {/* Infinite Auto-Sliding Carousel */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className={`flex ${
                      isTransitioning
                        ? "transition-transform duration-700 ease-in-out"
                        : ""
                    }`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {[...techStack, techStack[0]].map((tech, index) => (
                      <div key={index} className="min-w-full px-2">
                        <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-[#8267ec] hover:shadow-[0_0_30px_rgba(130,103,236,0.2)] transition-all duration-300 group h-full">
                          <div className="text-[#8267ec] mb-6 transition-all duration-300 group-hover:scale-110 transform">
                            {tech.icon}
                          </div>
                          <h3 className="font-semibold text-white text-2xl mb-3 tracking-tight">
                            {tech.title}
                          </h3>
                          <p className="text-gray-400 text-base leading-relaxed tracking-wide mb-4">
                            {tech.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {tech.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="text-sm text-[#8267ec] bg-[#8267ec]/10 border border-[#8267ec]/30 px-3 py-1.5 rounded-lg hover:bg-[#8267ec] hover:text-white transition-all duration-300"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex justify-center gap-2 mt-6">
                    {techStack.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide % techStack.length === index
                            ? "w-8 bg-[#8267ec]"
                            : "w-2 bg-gray-600 hover:bg-[#8267ec] opacity-60 hover:opacity-100"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Professional Network */}
                <div className="bg-black border border-gray-800 rounded-2xl p-6 hover:border-[#8267ec] hover:shadow-[0_0_30px_rgba(130,103,236,0.15)] transition-all duration-300">
                  <h3 className="text-white font-semibold text-lg mb-6 tracking-tight flex items-center">
                    <div className="w-8 h-8 bg-[#8267ec] rounded-lg flex items-center justify-center mr-3">
                      <FaNetworkWired className="text-white text-sm" />
                    </div>
                    Professional Network
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-[#8267ec] hover:border-[#8267ec] transition-all duration-300 group"
                      >
                        <div className="text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-110 transform">
                          {social.icon}
                        </div>
                        <span className="text-gray-400 text-xs font-medium tracking-wide group-hover:text-white mt-2">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
