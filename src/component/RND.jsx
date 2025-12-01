import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFlask, FaMicroscope, FaCode, FaBrain, FaRobot,  FaUniversity,    FaCalendarAlt,  FaCheck, FaLightbulb,   FaArrowUp } from 'react-icons/fa';

const RND = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated color palette as per request
  const colors = {
    primaryDark: '#0b090a',        // Rich black
    secondaryDark: '#161a1d',      // Eerie black
    darkRed: '#660708',            // Blood red
    mediumRed: '#a4161a',          // Ruby red
    primaryRed: '#ba181b',         // Venetian red
    lightRed: '#e5383b',           // Amaranth red
    darkGray: '#b1a7a6',           // Silver pink
    lightGray: '#d3d3d3',          // Light gray
    offWhite: '#f5f3f4',           // Cultured
    pureWhite: '#ffffff'           // White
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
    <div className="min-h-screen font-sans antialiased relative overflow-hidden" style={{ backgroundColor: colors.pureWhite, color: colors.primaryDark }}>
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.offWhite }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.offWhite, animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.offWhite, animationDelay: '4s' }}></div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border"
          style={{ backgroundColor: colors.primaryDark, borderColor: colors.primaryDark }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = colors.primaryRed;
            e.target.style.borderColor = colors.primaryRed;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = colors.primaryDark;
            e.target.style.borderColor = colors.primaryDark;
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <nav className="fixed top-0 w-full backdrop-blur-lg z-50 border-b shadow-sm" style={{ backgroundColor: colors.pureWhite, borderColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-md"
                    style={{ backgroundColor: colors.primaryDark }}
                    onClick={() => navigate('/')}
                  >
                    <div className="w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: colors.primaryRed }}>
                      <span className="text-white font-bold text-[10px] tracking-tighter">TS</span>
                    </div>
                    <span className="absolute text-white font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-xl leading-tight tracking-tight" style={{ color: colors.primaryDark }}>THIRUMURUGAN S</div>
                  <div className="text-xs font-medium tracking-wider opacity-90 uppercase" style={{ color: colors.secondaryDark }}>AI Research Engineer</div>
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
                  style={{ color: colors.secondaryDark }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.primaryDark;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colors.secondaryDark;
                  }}
                >
                  {item === 'home' ? 'Home' : 
                   item === 'about' ? 'About' : 
                   item === 'projects' ? 'Projects' : 
                   item === 'experience' ? 'Experience' : 
                   item === 'contact' ? 'Contact' : item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: colors.primaryRed }}></span>
                </button>
              ))}
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <button 
                  onClick={handleAskAboutMeClick}
                  className="text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border"
                  style={{ 
                    backgroundColor: colors.primaryDark,
                    borderColor: `${colors.primaryDark}1a`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.primaryRed;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primaryDark;
                  }}
                >
                  Ask About Me
                </button>
                <button 
                  onClick={handleStartProjectClick}
                  className="text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border"
                  style={{ 
                    backgroundColor: colors.primaryRed,
                    borderColor: `${colors.primaryRed}33`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.mediumRed;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primaryRed;
                  }}
                >
                  Start Project
                </button>
                <button 
                  onClick={handleHireMeClick}
                  className="text-white hover:text-white border px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.primaryDark,
                    borderColor: colors.primaryDark
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.primaryRed;
                    e.target.style.borderColor = colors.primaryRed;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primaryDark;
                    e.target.style.borderColor = colors.primaryDark;
                  }}
                >
                  Hire Me
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 transition-colors duration-300"
              style={{ color: colors.secondaryDark }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={(e) => {
                e.target.style.color = colors.primaryDark;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = colors.secondaryDark;
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
            <div className="md:hidden absolute top-16 left-0 w-full backdrop-blur-lg border-b shadow-lg" style={{ backgroundColor: colors.pureWhite, borderColor: colors.lightGray }}>
              <div className="flex flex-col space-y-1 p-4">
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="py-3 px-4 font-medium text-sm transition-all duration-300 border-l-2 rounded-r-lg text-left capitalize"
                    style={{ 
                      color: colors.secondaryDark,
                      borderColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = colors.primaryDark;
                      e.target.style.borderColor = colors.primaryRed;
                      e.target.style.backgroundColor = colors.offWhite;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = colors.secondaryDark;
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
                <div className="flex flex-col space-y-3 pt-4 mt-2" style={{ borderTopColor: colors.lightGray }}>
                  <button 
                    onClick={handleAskAboutMeClick}
                    className="text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                    style={{ backgroundColor: colors.primaryDark }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.primaryRed;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primaryDark;
                    }}
                  >
                    Ask About Me
                  </button>
                  <button 
                    onClick={handleStartProjectClick}
                    className="text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                    style={{ backgroundColor: colors.primaryRed }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.mediumRed;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primaryRed;
                    }}
                  >
                    Start Project
                  </button>
                  <button 
                    onClick={handleHireMeClick}
                    className="text-white py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                    style={{ backgroundColor: colors.primaryDark }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.primaryRed;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primaryDark;
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
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2.5 border rounded-full group hover:bg-black transition-all duration-300 mb-6" style={{ backgroundColor: colors.pureWhite, borderColor: colors.primaryDark }}>
              <div className="w-2 h-2 rounded-full mr-3 animate-pulse group-hover:animate-none group-hover:scale-110" style={{ backgroundColor: colors.primaryRed }}></div>
              <span className="text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300" style={{ color: colors.primaryDark }}>RESEARCH & DEVELOPMENT</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: colors.primaryDark }}>
              Research & Innovation
            </h1>
            
            <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed tracking-wide" style={{ color: colors.secondaryDark }}>
              Exploring the frontiers of Artificial Intelligence through cutting-edge research, 
              experimental projects, and innovative solutions that push the boundaries of what's possible.
            </p>
          </div>

          {/* Research Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-xl p-4 hover:shadow-lg transition-all duration-300 group" style={{ backgroundColor: colors.offWhite, borderColor: colors.lightGray }}>
              <FaFlask className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: colors.primaryRed }} />
              <h3 className="font-semibold text-base mb-1 tracking-tight" style={{ color: colors.primaryDark }}>Active Research</h3>
              <p className="opacity-80 text-xs tracking-wide" style={{ color: colors.secondaryDark }}>
                {researchProjects.filter(p => p.status === 'ongoing').length} ongoing projects exploring new AI frontiers
              </p>
            </div>
            
            <div className="border rounded-xl p-4 hover:shadow-lg transition-all duration-300 group" style={{ backgroundColor: colors.offWhite, borderColor: colors.lightGray }}>
              <FaUniversity className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: colors.primaryRed }} />
              <h3 className="font-semibold text-base mb-1 tracking-tight" style={{ color: colors.primaryDark }}>Research Focus</h3>
              <p className="opacity-80 text-xs tracking-wide" style={{ color: colors.secondaryDark }}>
                Cutting-edge AI research in LLMs, RAG systems, and multimodal AI
              </p>
            </div>
            
            <div className="border rounded-xl p-4 hover:shadow-lg transition-all duration-300 group" style={{ backgroundColor: colors.offWhite, borderColor: colors.lightGray }}>
              <FaLightbulb className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: colors.primaryRed }} />
              <h3 className="font-semibold text-base mb-1 tracking-tight" style={{ color: colors.primaryDark }}>Innovation Areas</h3>
              <p className="opacity-80 text-xs tracking-wide" style={{ color: colors.secondaryDark }}>
                Focused on LLMs, RAG systems, multimodal AI, and efficient model deployment
              </p>
            </div>
          </div>

          {/* Research Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 tracking-tight" style={{ color: colors.primaryDark }}>Research Categories</h2>
            <div className="flex flex-wrap gap-2">
              {researchCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-300 group ${
                    activeCategory === category.id
                      ? 'text-white border-black'
                      : 'border-gray-300 hover:bg-black hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? colors.primaryDark : colors.pureWhite,
                    borderColor: activeCategory === category.id ? colors.primaryDark : colors.lightGray,
                    color: activeCategory === category.id ? colors.pureWhite : colors.primaryDark
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category.id) {
                      e.target.style.backgroundColor = colors.primaryDark;
                      e.target.style.borderColor = colors.primaryDark;
                      e.target.style.color = colors.pureWhite;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category.id) {
                      e.target.style.backgroundColor = colors.pureWhite;
                      e.target.style.borderColor = colors.lightGray;
                      e.target.style.color = colors.primaryDark;
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
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                style={{ 
                  backgroundColor: colors.offWhite, 
                  borderColor: colors.lightGray
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primaryRed;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.lightGray;
                }}
              >
                {/* Project Header */}
                <div className="p-4 border-b" style={{ borderColor: colors.lightGray }}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm leading-tight group-hover:opacity-80 transition-opacity tracking-tight" style={{ color: colors.primaryDark }}>
                      {project.title}
                    </h3>
                    <span className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs border" style={{ 
                      backgroundColor: project.status === 'ongoing' ? colors.primaryRed : 
                                     project.status === 'completed' ? colors.primaryDark : colors.darkGray,
                      color: colors.pureWhite,
                      borderColor: project.status === 'ongoing' ? colors.primaryRed : 
                                  project.status === 'completed' ? colors.primaryDark : colors.darkGray
                    }}>
                      <span className="capitalize tracking-wide text-xs">{project.status}</span>
                    </span>
                  </div>
                  <p className="opacity-80 text-xs leading-relaxed tracking-wide line-clamp-2" style={{ color: colors.secondaryDark }}>
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="p-4 space-y-3">
                  {/* Technologies */}
                  <div>
                    <h4 className="opacity-80 text-xs font-medium mb-1 tracking-wide" style={{ color: colors.secondaryDark }}>Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="border px-1.5 py-0.5 rounded text-xs tracking-wide"
                          style={{ backgroundColor: colors.pureWhite, borderColor: colors.lightGray, color: colors.secondaryDark }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="border px-1.5 py-0.5 rounded text-xs tracking-wide opacity-60" style={{ backgroundColor: colors.pureWhite, borderColor: colors.lightGray, color: colors.secondaryDark }}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="opacity-80 text-xs font-medium mb-1 tracking-wide" style={{ color: colors.secondaryDark }}>Key Outcomes</h4>
                    <ul className="opacity-80 text-xs space-y-0.5" style={{ color: colors.secondaryDark }}>
                      {project.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-1">
                          <FaCheck className="w-2 h-2 mt-0.5 flex-shrink-0" style={{ color: colors.primaryRed }} />
                          <span className="tracking-wide line-clamp-1">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center text-xs opacity-60" style={{ color: colors.secondaryDark }}>
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
              <FaMicroscope className="w-12 h-12 mx-auto mb-3" style={{ color: colors.darkGray }} />
              <h3 className="font-semibold text-base mb-1 tracking-tight" style={{ color: colors.primaryDark }}>No projects found</h3>
              <p className="opacity-80 text-xs tracking-wide" style={{ color: colors.secondaryDark }}>
                No research projects match the selected category. Try selecting a different category.
              </p>
            </div>
          )}  
        
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="border rounded-xl p-6 max-w-2xl mx-auto hover:shadow-lg transition-all duration-300" style={{ backgroundColor: colors.offWhite, borderColor: colors.lightGray }}>
              <FaBrain className="w-10 h-10 mx-auto mb-3" style={{ color: colors.primaryRed }} />
              <h2 className="text-xl font-semibold mb-3 tracking-tight" style={{ color: colors.primaryDark }}>Interested in Research Collaboration?</h2>
              <p className="opacity-80 mb-4 tracking-wide leading-relaxed text-sm" style={{ color: colors.secondaryDark }}>
                I'm always open to discussing new research opportunities, collaborations, 
                and innovative projects in the field of Artificial Intelligence. Let's push the boundaries of AI together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => navigate('/hire-me')}
                  className="text-white border px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wide text-sm"
                  style={{ 
                    backgroundColor: colors.primaryDark,
                    borderColor: colors.primaryDark
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.primaryRed;
                    e.target.style.borderColor = colors.primaryRed;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primaryDark;
                    e.target.style.borderColor = colors.primaryDark;
                  }}
                >
                  Discuss Collaboration
                </button>
                <button 
                  onClick={() => navigate('/start-project')}
                  className="border px-4 py-2 rounded-lg font-semibold transition-all duration-300 tracking-wide text-sm"
                  style={{ 
                    borderColor: colors.primaryDark,
                    color: colors.primaryDark
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.primaryDark;
                    e.target.style.color = colors.pureWhite;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = colors.primaryDark;
                  }}
                >
                  Start Research Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t" style={{ backgroundColor: colors.pureWhite, borderColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="opacity-80 text-sm tracking-wide font-light" style={{ color: colors.secondaryDark }}>
              © 2025 THIRUMURUGAN SUBRAMANIYAN • AI RESEARCH ENGINEER • RESEARCH & DEVELOPMENT
            </p>
            <p className="opacity-60 text-xs mt-1 tracking-wide" style={{ color: colors.secondaryDark }}>
              PUSHING THE BOUNDARIES OF ARTIFICIAL INTELLIGENCE THROUGH INNOVATIVE RESEARCH
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RND;