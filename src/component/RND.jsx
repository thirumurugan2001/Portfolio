import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFlask, FaMicroscope, FaCode, FaBrain, FaRobot,  FaUniversity,    FaCalendarAlt,  FaCheck, FaLightbulb,   FaArrowUp } from 'react-icons/fa';

const RND = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated color palette to match Projects component
  const colors = {
    // Purple theme from Projects
    primaryPurple: '#8267ec',      // Main purple
    secondaryPurple: '#9d8aee',    // Light purple
    darkPurple: '#5f5297ff',       // Dark purple for gradients
    violet: '#a855f7',             // Violet accent
    
    // Background colors from Projects
    black: '#000000',              // Pure black
    darkGray: '#111111',           // Dark background
    cardBg: '#111111',             // Card background
    borderGray: '#333333',         // Border gray
    lightGray: '#d3d3d3',          // Light gray for text
    white: '#ffffff',              // White
    offWhite: '#f5f3f4'            // Off white
  };

  // Research categories and projects
  const researchCategories = [
    { id: 'all', name: 'All Research', icon: <FaFlask className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Research', icon: <FaBrain className="w-4 h-4" /> },
    { id: 'nlp', name: 'NLP', icon: <FaRobot className="w-4 h-4" /> },
    { id: 'cv', name: 'Computer Vision', icon: <FaMicroscope className="w-4 h-4" /> },
    { id: 'systems', name: 'AI Systems', icon: <FaCode className="w-4 h-4" /> }
  ];

  const researchProjects = [
    {
      id: 1,
      title: "Advanced RAG Systems for Enterprise Knowledge",
      category: 'ai',
      status: 'ongoing',
      description: "Developing enhanced Retrieval-Augmented Generation systems with improved context understanding and multi-modal capabilities.",
      technologies: ["Python", "LangChain", "Vector DBs", "LLMs", "Transformer Architecture"],
      outcomes: ["Improved retrieval accuracy by 40%", "Reduced hallucination rates", "Multi-source knowledge integration"],
      timeline: "Jan 2024 - Present"
    },
    {
      id: 2,
      title: "Multimodal AI for Document Understanding",
      category: 'nlp',
      status: 'completed',
      description: "Research on combining text, layout, and visual features for comprehensive document analysis and information extraction.",
      technologies: ["PyTorch", "Transformers", "Computer Vision", "OCR", "LayoutLM"],
      outcomes: ["95% accuracy in document classification", "Real-time processing capability", "Cross-format compatibility"],
      timeline: "Jun 2023 - Dec 2023"
    },
    {
      id: 3,
      title: "Efficient Fine-tuning of Large Language Models",
      category: 'ai',
      status: 'ongoing',
      description: "Exploring parameter-efficient fine-tuning methods (LoRA, QLoRA) for adapting large models to specific domains with limited resources.",
      technologies: ["PyTorch", "Hugging Face", "PEFT", "QLoRA", "Model Compression"],
      outcomes: ["80% reduction in training memory", "Faster convergence", "Maintained 95% of original performance"],
      timeline: "Mar 2024 - Present"
    },
    {
      id: 4,
      title: "Real-time Object Detection for Autonomous Systems",
      category: 'cv',
      status: 'completed',
      description: "Development of lightweight object detection models optimized for real-time performance on edge devices.",
      technologies: ["YOLOv8", "TensorRT", "OpenCV", "Edge Computing", "Model Optimization"],
      outcomes: ["60 FPS on Jetson Nano", "mAP@0.5: 0.89", "Energy efficient inference"],
      timeline: "Sep 2022 - May 2023"
    },
    {
      id: 5,
      title: "AI-powered Code Generation and Analysis",
      category: 'systems',
      status: 'ongoing',
      description: "Building intelligent systems for code generation, bug detection, and automated code review using advanced language models.",
      technologies: ["Tree-sitter", "CodeBERT", "AST Analysis", "Static Analysis", "AI Code Generation"],
      outcomes: ["40% faster code review", "Accurate bug prediction", "Context-aware code suggestions"],
      timeline: "Aug 2023 - Present"
    },
    {
      id: 6,
      title: "Cross-lingual NLP for Low-resource Languages",
      category: 'nlp',
      status: 'planned',
      description: "Research on transfer learning and cross-lingual embeddings to improve NLP capabilities for underrepresented languages.",
      technologies: ["mBERT", "XLM-R", "Transfer Learning", "Multilingual NLP", "Low-resource ML"],
      outcomes: ["Improved performance for 5 low-resource languages", "Zero-shot cross-lingual transfer", "Cultural context preservation"],
      timeline: "Q2 2024 - Q4 2024"
    }
  ];

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

  const filteredProjects = activeCategory === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => project.category === activeCategory);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const handleHireMeClick = () => {
    navigate('/hire-me');
    setIsMenuOpen(false);
  };

  const handleStartProjectClick = () => {
    navigate('/start-project');
    setIsMenuOpen(false);
  };

  const handleAskAboutMeClick = () => {
    navigate('/ask-about-me');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans antialiased relative overflow-hidden" style={{ backgroundColor: colors.black, color: colors.white }}>


      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border"
          style={{ backgroundColor: colors.primaryPurple, borderColor: colors.primaryPurple }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = colors.secondaryPurple;
            e.target.style.borderColor = colors.secondaryPurple;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = colors.primaryPurple;
            e.target.style.borderColor = colors.primaryPurple;
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <nav className="fixed top-0 w-full backdrop-blur-lg z-50 border-b shadow-sm" style={{ backgroundColor: colors.black, borderColor: colors.borderGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-md"
                    style={{ backgroundColor: colors.primaryPurple }}
                    onClick={() => navigate('/')}
                  >
                    <div className="w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: colors.white }}>
                      <span className="text-black font-bold text-[10px] tracking-tighter">TS</span>
                    </div>
                    <span className="absolute text-white font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-xl leading-tight tracking-tight" style={{ color: colors.white }}>THIRUMURUGAN S</div>
                  <div className="text-xs font-medium tracking-wider opacity-90 uppercase" style={{ color: colors.lightGray }}>AI Research Engineer</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="font-medium text-sm transition-all duration-300 tracking-wide relative group capitalize"
                  style={{ color: colors.lightGray }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.primaryPurple;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colors.lightGray;
                  }}
                >
                  {item === 'home' ? 'Home' : 
                   item === 'about' ? 'About' : 
                   item === 'projects' ? 'Projects' : 
                   item === 'experience' ? 'Experience' : 
                   item === 'contact' ? 'Contact' : item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: colors.primaryPurple }}></span>
                </button>
              ))}
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <button 
                  onClick={handleAskAboutMeClick}
                  className="text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border"
                  style={{ 
                    backgroundColor: colors.primaryPurple,
                    borderColor: `${colors.primaryPurple}1a`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.secondaryPurple;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primaryPurple;
                  }}
                >
                  Ask About Me
                </button>
                <button 
                  onClick={handleStartProjectClick}
                  className="text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border"
                  style={{ 
                    backgroundColor: colors.primaryPurple,
                    borderColor: `${colors.primaryPurple}33`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.secondaryPurple;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primaryPurple;
                  }}
                >
                  Start Project
                </button>
                <button 
                  onClick={handleHireMeClick}
                  className="text-white hover:text-white border px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.primaryPurple,
                    borderColor: colors.primaryPurple
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.secondaryPurple;
                    e.target.style.borderColor = colors.secondaryPurple;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primaryPurple;
                    e.target.style.borderColor = colors.primaryPurple;
                  }}
                >
                  Hire Me
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 transition-colors duration-300"
              style={{ color: colors.lightGray }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={(e) => {
                e.target.style.color = colors.primaryPurple;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = colors.lightGray;
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full backdrop-blur-lg border-b shadow-lg" style={{ backgroundColor: colors.darkGray, borderColor: colors.borderGray }}>
              <div className="flex flex-col space-y-1 p-4">
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="py-3 px-4 font-medium text-sm transition-all duration-300 border-l-2 rounded-r-lg text-left capitalize"
                    style={{ 
                      color: colors.lightGray,
                      borderColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = colors.primaryPurple;
                      e.target.style.borderColor = colors.primaryPurple;
                      e.target.style.backgroundColor = colors.cardBg;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = colors.lightGray;
                      e.target.style.borderColor = 'transparent';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item === 'home' ? 'Home' : 
                     item === 'about' ? 'About' : 
                     item === 'projects' ? 'Projects' : 
                     item === 'experience' ? 'Experience' : 
                     item === 'contact' ? 'Contact' : item}
                  </button>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-3 pt-4 mt-2" style={{ borderTopColor: colors.borderGray }}>
                  <button 
                    onClick={handleAskAboutMeClick}
                    className="text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                    style={{ backgroundColor: colors.primaryPurple }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.secondaryPurple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primaryPurple;
                    }}
                  >
                    Ask About Me
                  </button>
                  <button 
                    onClick={handleStartProjectClick}
                    className="text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                    style={{ backgroundColor: colors.primaryPurple }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.secondaryPurple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primaryPurple;
                    }}
                  >
                    Start Project
                  </button>
                  <button 
                    onClick={handleHireMeClick}
                    className="text-white py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                    style={{ backgroundColor: colors.primaryPurple }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.secondaryPurple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primaryPurple;
                    }}
                  >
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section - Matching Projects style */}
          <div className="text-center mb-12">
            {/* Professional Badge */}
            <div className="relative inline-block mb-6">
              <div
                className="group inline-flex items-center px-4 py-2 rounded-full 
                 border border-[#8267ec] bg-black
                 transition-all duration-300 transform hover:scale-105 
                 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]
                 hover:bg-[#8267ec] cursor-pointer"
              >
                {/* Dot with animation */}
                <div
                  className="w-2 h-2 rounded-full mr-3 animate-pulse
                   bg-[#8267ec] transition-all duration-300 
                   group-hover:bg-white group-hover:scale-110 group-hover:animate-none"
                ></div>

                {/* Text */}
                <span 
                  className="text-sm font-medium tracking-wide 
                   text-[#8267ec] transition-colors duration-300
                   group-hover:text-white"
                >
                  RESEARCH & DEVELOPMENT
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Research & Innovation
            </h1>
            
            <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed tracking-wide text-gray-300">
              Exploring the frontiers of Artificial Intelligence through cutting-edge research, 
              experimental projects, and innovative solutions that push the boundaries of what's possible.
            </p>
          </div>

          {/* Research Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-xl p-4 hover:shadow-lg transition-all duration-300 group hover:border-[#8267ec] hover:shadow-[0_0_25px_rgba(130,103,236,0.1)]" style={{ backgroundColor: colors.darkGray, borderColor: colors.borderGray }}>
              <FaFlask className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: colors.primaryPurple }} />
              <h3 className="font-semibold text-base mb-1 tracking-tight text-white">Active Research</h3>
              <p className="opacity-80 text-xs tracking-wide text-gray-300">
                {researchProjects.filter(p => p.status === 'ongoing').length} ongoing projects exploring new AI frontiers
              </p>
            </div>
            
            <div className="border rounded-xl p-4 hover:shadow-lg transition-all duration-300 group hover:border-[#8267ec] hover:shadow-[0_0_25px_rgba(130,103,236,0.1)]" style={{ backgroundColor: colors.darkGray, borderColor: colors.borderGray }}>
              <FaUniversity className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: colors.primaryPurple }} />
              <h3 className="font-semibold text-base mb-1 tracking-tight text-white">Research Focus</h3>
              <p className="opacity-80 text-xs tracking-wide text-gray-300">
                Cutting-edge AI research in LLMs, RAG systems, and multimodal AI
              </p>
            </div>
            
            <div className="border rounded-xl p-4 hover:shadow-lg transition-all duration-300 group hover:border-[#8267ec] hover:shadow-[0_0_25px_rgba(130,103,236,0.1)]" style={{ backgroundColor: colors.darkGray, borderColor: colors.borderGray }}>
              <FaLightbulb className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: colors.primaryPurple }} />
              <h3 className="font-semibold text-base mb-1 tracking-tight text-white">Innovation Areas</h3>
              <p className="opacity-80 text-xs tracking-wide text-gray-300">
                Focused on LLMs, RAG systems, multimodal AI, and efficient model deployment
              </p>
            </div>
          </div>

          {/* Research Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 tracking-tight text-white">Research Categories</h2>
            <div className="flex flex-wrap gap-2">
              {researchCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-300 group ${
                    activeCategory === category.id
                      ? 'text-white border-[#8267ec]'
                      : 'border-[#333333] hover:bg-[#8267ec] hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? colors.primaryPurple : colors.cardBg,
                    borderColor: activeCategory === category.id ? colors.primaryPurple : colors.borderGray,
                    color: activeCategory === category.id ? colors.white : colors.lightGray
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category.id) {
                      e.target.style.backgroundColor = colors.primaryPurple;
                      e.target.style.borderColor = colors.primaryPurple;
                      e.target.style.color = colors.white;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category.id) {
                      e.target.style.backgroundColor = colors.cardBg;
                      e.target.style.borderColor = colors.borderGray;
                      e.target.style.color = colors.lightGray;
                    }
                  }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <span className="font-medium text-xs tracking-wide">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Research Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group hover:border-[#8267ec] hover:shadow-[0_0_25px_rgba(130,103,236,0.2)]"
                style={{ 
                  backgroundColor: colors.cardBg, 
                  borderColor: colors.borderGray
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primaryPurple;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderGray;
                }}
              >
                {/* Project Header */}
                <div className="p-4 border-b" style={{ borderColor: colors.borderGray }}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm leading-tight group-hover:text-[#8267ec] transition-colors tracking-tight text-white">
                      {project.title}
                    </h3>
                    <span className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs border" style={{ 
                      backgroundColor: project.status === 'ongoing' ? colors.primaryPurple : 
                                     project.status === 'completed' ? colors.primaryPurple : colors.borderGray,
                      color: colors.white,
                      borderColor: project.status === 'ongoing' ? colors.primaryPurple : 
                                  project.status === 'completed' ? colors.primaryPurple : colors.borderGray
                    }}>
                      <span className="capitalize tracking-wide text-xs">{project.status}</span>
                    </span>
                  </div>
                  <p className="opacity-80 text-xs leading-relaxed tracking-wide line-clamp-2 text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="p-4 space-y-3">
                  {/* Technologies */}
                  <div>
                    <h4 className="opacity-80 text-xs font-medium mb-1 tracking-wide text-gray-300">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="border px-1.5 py-0.5 rounded text-xs tracking-wide hover:bg-[#8267ec] hover:text-white hover:border-[#8267ec] transition-all duration-200 cursor-pointer"
                          style={{ backgroundColor: colors.darkGray, borderColor: colors.borderGray, color: colors.lightGray }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="border px-1.5 py-0.5 rounded text-xs tracking-wide opacity-60 hover:bg-[#8267ec] hover:text-white hover:border-[#8267ec] transition-all duration-200" style={{ backgroundColor: colors.darkGray, borderColor: colors.borderGray, color: colors.lightGray }}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="opacity-80 text-xs font-medium mb-1 tracking-wide text-gray-300">Key Outcomes</h4>
                    <ul className="opacity-80 text-xs space-y-0.5 text-gray-300">
                      {project.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-1">
                          <FaCheck className="w-2 h-2 mt-0.5 flex-shrink-0" style={{ color: colors.primaryPurple }} />
                          <span className="tracking-wide line-clamp-1">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center text-xs opacity-60 text-gray-300">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-2 h-2" />
                      <span className="tracking-wide text-xs">{project.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <FaMicroscope className="w-12 h-12 mx-auto mb-3 text-gray-500" />
              <h3 className="font-semibold text-base mb-1 tracking-tight text-white">No projects found</h3>
              <p className="opacity-80 text-xs tracking-wide text-gray-300">
                No research projects match the selected category. Try selecting a different category.
              </p>
            </div>
          )}  
        
          {/* Call to Action - Matching Projects style */}
          <div className="text-center mt-12">
            <div className="bg-black border border-[#8267ec] rounded-xl p-6 max-w-xl mx-auto hover:shadow-[0_0_40px_rgba(130,103,236,0.25)] transition-all duration-300 group">
              <FaBrain className="w-10 h-10 mx-auto mb-3 text-[#8267ec]" />
              <h2 className="text-xl font-semibold mb-3 tracking-tight text-white">Interested in Research Collaboration?</h2>
              <p className="opacity-80 mb-4 tracking-wide leading-relaxed text-sm text-gray-300">
                I'm always open to discussing new research opportunities, collaborations, 
                and innovative projects in the field of Artificial Intelligence. Let's push the boundaries of AI together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => navigate('/hire-me')}
                  className="group bg-[#8267ec] text-white hover:bg-white hover:text-black border border-[#8267ec] px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] flex items-center justify-center space-x-2 text-sm"
                >
                  <span className="tracking-wide">Discuss Collaboration</span>
                </button>
                <button 
                  onClick={() => navigate('/start-project')}
                  className="group border border-[#8267ec] text-[#8267ec] hover:bg-[#8267ec] hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm hover:shadow-[0_0_15px_rgba(130,103,236,0.3)]"
                >
                  <span className="tracking-wide">Start Research Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t" style={{ backgroundColor: colors.black, borderColor: colors.borderGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="opacity-80 text-sm tracking-wide font-light text-gray-300">
              © 2025 THIRUMURUGAN SUBRAMANIYAN • AI RESEARCH ENGINEER • RESEARCH & DEVELOPMENT
            </p>
            <p className="opacity-60 text-xs mt-1 tracking-wide text-gray-500">
              PUSHING THE BOUNDARIES OF ARTIFICIAL INTELLIGENCE THROUGH INNOVATIVE RESEARCH
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RND;