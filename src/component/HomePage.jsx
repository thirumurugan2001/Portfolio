import { useState, useRef, useEffect } from 'react';
import { FaDownload, FaArrowRight, FaDatabase, FaCloud, FaCode, FaBrain, FaNetworkWired, FaRobot, FaCogs, FaArrowUp } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiHackerrank } from 'react-icons/si';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Header from './Header';
import Footer from './footer';
import Contact from './Contact';

// Typing Animation Component
const TypingAnimation = ({ text, speed = 30, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const HomePage = () => {
  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/thirumurugan-subramaniyan-a62351212/' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/thirumurugan2001' },
    { icon: <SiCodechef className="w-5 h-5" />, name: 'CodeChef', url: 'https://www.codechef.com/users/thiru2001' },
    { icon: <FaHackerrank className="w-5 h-5" />, name: 'HackerRank', url: 'https://www.hackerrank.com/profile/thirusubramaniy1' },
    { icon: <SiLeetcode className="w-5 h-5" />, name: 'LeetCode', url: 'https://leetcode.com/u/thirusubramaniyan2001/' },
    { icon: <SiHackerrank className="w-5 h-5" />, name: 'HackerEarth', url: 'https://www.hackerearth.com/@thirumuruganSubramaniyan/' },
  ];

  const techStack = [
    { 
      icon: <FaBrain className="w-7 h-7" />, 
      title: 'AI Engineering', 
      description: 'LLMs, RAG Systems, Computer Vision, NLP',
      features: ['Fine-tuning', 'Vector DBs', 'Model Deployment']
    },
    { 
      icon: <FaCode className="w-7 h-7" />, 
      title: 'Full-Stack Development', 
      description: 'Python, FastAPI, React, Node.js, TypeScript',
      features: ['API Design', 'System Integration', 'Performance']
    },
    { 
      icon: <FaCloud className="w-7 h-7" />, 
      title: 'Cloud & DevOps', 
      description: 'Azure OpenAI, AWS Bedrock, Docker, CI/CD',
      features: ['Cloud AI', 'Containerization', 'Automation']
    },
    { 
      icon: <FaDatabase className="w-7 h-7" />, 
      title: 'Data Engineering', 
      description: 'SQL, NoSQL, Vector Databases',
      features: ['Data Modeling', 'Optimization', 'Pipelines']
    },
    { 
      icon: <FaRobot className="w-7 h-7" />, 
      title: 'Automation Testing', 
      description: 'Selenium, Playwright',
      features: ['Test Frameworks', 'CI/CD Integration', 'Cross-Browser Testing']
    },
    { 
      icon: <FaCogs className="w-7 h-7" />, 
      title: 'RPA Engineering', 
      description: 'UiPath, Automation Anywhere, Power Automate',
      features: ['Process Automation', 'Bot Deployment', 'Workflow Design']
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const timeoutRef = useRef(null);
  const canvasRef = useRef(null);

  const resumeUrl = 'src/assets/Thirumurugan_Resume.pdf'; 

  // Neural Network Background Animation with New Color Palette
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

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
        radius: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2
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
            opacity: 0.1
          });
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.forEach(node => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Pulse animation
        node.pulse += 0.02;
        const pulseSize = Math.sin(node.pulse) * 0.5 + 1;
        
        // Draw node with #0b090a color
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(11, 9, 10, ${0.1 + Math.sin(node.pulse) * 0.05})`;
        ctx.fill();
      });

      // Draw connections with #0b090a color
      connections.forEach(connection => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        const dx = fromNode.x - toNode.x;
        const dy = fromNode.y - toNode.y;
        const currentDistance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate opacity based on distance and pulse
        const pulse = (Math.sin(fromNode.pulse) + Math.sin(toNode.pulse)) * 0.5;
        const opacity = Math.max(0.02, 0.1 * (1 - currentDistance / 200) + pulse * 0.05);
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `rgba(11, 9, 10, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Draw data flow dots with #ba181b color
        const progress = (Date.now() * 0.001) % 1;
        const dotX = fromNode.x + (toNode.x - fromNode.x) * progress;
        const dotY = fromNode.y + (toNode.y - fromNode.y) * progress;
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 24, 27, ${0.6})`;
        ctx.fill();
      });

      // Draw floating AI icons with #ba181b color
      const time = Date.now() * 0.001;
      const icons = ['🤖', '🧠', '⚡', '🔗', '🌐', '📊'];
      
      icons.forEach((icon, index) => {
        const x = (canvas.width / 2) + Math.cos(time * 0.5 + index) * 300;
        const y = (canvas.height / 2) + Math.sin(time * 0.7 + index) * 200;
        const scale = 0.8 + Math.sin(time + index) * 0.2;
        const opacity = 0.1 + Math.sin(time * 0.3 + index) * 0.05;
        
        ctx.font = `${24 * scale}px Arial`;
        ctx.fillStyle = `rgba(186, 24, 27, ${opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(icon, x, y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
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

  const professionalSummary = "Specializing in Large Language Models, RAG Systems, and AI-powered applications. Transforming complex business challenges into scalable AI solutions using cutting-edge machine learning and cloud technologies.";

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0b090a] font-sans antialiased relative overflow-hidden">

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#0b090a] text-[#ffffff] hover:bg-[#ba181b] hover:text-[#ffffff] border border-[#0b090a] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Professional Badge */}
                  <div className="inline-flex items-center px-4 py-2.5 bg-[#0b090a] rounded-full group hover:bg-[#ba181b] transition-all duration-300">
                    <div className="w-2 h-2 bg-[#ba181b] rounded-full mr-3 animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:bg-[#0b090a]"></div>
                    <span className="text-[#ffffff] text-sm font-medium tracking-wide group-hover:text-[#ffffff]">AI RESEARCH ENGINEER</span>
                  </div>

                  {/* Name and Title */}
                  <div className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                      <span className="text-[#0b090a]">
                        Thirumurugan
                      </span>
                      <br />
                      <span className="text-[#161a1d]">Subramaniyan</span>
                    </h1>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-0.5 bg-[#ba181b]"></div>
                      <p className="text-xl text-[#161a1d] font-light tracking-wide">
                        Artificial Intelligence Engineer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Summary with Typing Animation */}
                <div className="text-lg text-[#161a1d] leading-relaxed max-w-2xl tracking-wide min-h-[120px]">
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
                    {['LLM Fine-tuning', 'Vector Databases', 'Cloud AI Services', 'MLOps & Deployment'].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2 group">
                        <div className="w-2 h-2 bg-[#ba181b] rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
                        <span className="text-[#161a1d] group-hover:text-[#0b090a] transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons with PDF Download */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a 
                    href={resumeUrl}
                    download="Thirumurugan_Subramaniyan_Resume.pdf"
                    className="group bg-[#0b090a] text-[#ffffff] hover:bg-[#ba181b] hover:text-[#ffffff] border border-[#0b090a] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <FaDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="tracking-wide">Download Research CV</span>
                  </a>
                  <button 
                    onClick={scrollToProjects}
                    className="group border-2 border-[#0b090a] text-[#0b090a] hover:bg-[#0b090a] hover:text-[#ffffff] px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span className="tracking-wide">Explore Projects</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Content with Infinite Carousel */}
              <div className="space-y-8">
                {/* Infinite Auto-Sliding Carousel */}
                <div className="relative overflow-hidden rounded-2xl ">
                  <div 
                    className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {[...techStack, techStack[0]].map((tech, index) => (
                      <div
                        key={index}
                        className="min-w-full px-2 "
                      >
                        <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-8 hover:border-[#ba181b] hover:shadow-xl transition-all duration-300 group h-full">
                          <div className="text-[#0b090a] group-hover:text-[#ba181b] mb-6 transition-all duration-300 group-hover:scale-110 transform">
                            {tech.icon}
                          </div>
                          <h3 className="font-semibold text-[#0b090a] text-2xl mb-3 tracking-tight">
                            {tech.title}
                          </h3>
                          <p className="text-[#161a1d] text-base leading-relaxed tracking-wide mb-4">
                            {tech.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {tech.features.map((feature, idx) => (
                              <span key={idx} className="text-sm text-[#161a1d] bg-[#ba181b]/10 border border-[#ba181b]/20 px-3 py-1.5 rounded-lg">
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
                            ? 'w-8 bg-[#ba181b]' 
                            : 'w-2 bg-[#0b090a] opacity-30 hover:opacity-60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Professional Network */}
                <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-2xl p-6 hover:border-[#ba181b] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-[#0b090a] font-semibold text-lg mb-6 tracking-tight flex items-center">
                    <div className="w-8 h-8 bg-[#0b090a] rounded-lg flex items-center justify-center mr-3">
                      <FaNetworkWired className="text-[#ba181b] text-sm" />
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
                        className="flex flex-col items-center justify-center p-3 bg-[#ffffff] border border-[#d3d3d3] rounded-lg hover:bg-[#0b090a] hover:border-[#0b090a] hover:text-[#ffffff] transition-all duration-300 group"
                      >
                        <div className="text-[#0b090a] group-hover:text-[#ba181b] transition-all duration-300 group-hover:scale-110 transform">
                          {social.icon}
                        </div>
                        <span className="text-[#161a1d] text-xs font-medium tracking-wide group-hover:text-[#ffffff] mt-2">
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
        <Contact />
        <Footer />
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;