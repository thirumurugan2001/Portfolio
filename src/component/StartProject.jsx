import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaHome, FaLinkedin, FaGithub, FaHackerrank, FaNetworkWired, FaBuilding, FaUser, FaGlobe, FaCheck, FaExclamationCircle, FaCheckCircle, FaBars, FaTimes } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiHackerrank } from 'react-icons/si';
import API_URLS from './ApiURL.jsx';

const StartProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: '',
    clientMobile: '',
    clientEmail: '',
    organizationType: '',
    organizationName: '',
    location: '',
    businessDescription: '',
    techStack: [],
    projectTimeline: '',
    budgetRange: ''
  });
  const [errors, setErrors] = useState({});
  const [showOrgTypes, setShowOrgTypes] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/thirumurugan-subramaniyan-a62351212/' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/thirumurugan2001' },
    { icon: <SiCodechef className="w-5 h-5" />, name: 'CodeChef', url: 'https://www.codechef.com/users/thiru2001' },
    { icon: <FaHackerrank className="w-5 h-5" />, name: 'HackerRank', url: 'https://www.hackerrank.com/profile/thirusubramaniy1' },
    { icon: <SiLeetcode className="w-5 h-5" />, name: 'LeetCode', url: 'https://leetcode.com/u/thirusubramaniyan2001/' },
    { icon: <SiHackerrank className="w-5 h-5" />, name: 'HackerEarth', url: 'https://www.hackerearth.com/@thirumuruganSubramaniyan/' },
  ];

  const organizationTypes = [
    'Startup',
    'Small Business',
    'Medium Enterprise',
    'Large Corporation',
    'Government',
    'Non-Profit',
    'Educational',
    'Other'
  ];

  const techStackOptions = [
    'AI/ML Development',
    'Web Application',
    'Mobile Application',
    'Cloud Solutions',
    'Data Analytics',
    'CRM Development',
    'E-commerce Platform',
    'Custom Software'
  ];

  const timelineOptions = [
    { value: '1-2 weeks', label: '1-2 weeks' },
    { value: '2-4 weeks', label: '2-4 weeks' },
    { value: '1-2 months', label: '1-2 months' },
    { value: '2-4 months', label: '2-4 months' },
    { value: '4-6 months', label: '4-6 months' },
    { value: '6+ months', label: '6+ months' }
  ];

  const budgetRanges = [
    'Less than $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000 - $100,000',
    'More than $100,000'
  ];

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 5000);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.clientName.trim()) {
      newErrors.clientName = "Client name is required";
    }
    
    if (!formData.clientMobile.trim()) {
      newErrors.clientMobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.clientMobile.replace(/\D/g, ''))) {
      newErrors.clientMobile = "Please enter a valid 10-digit mobile number";
    }
    
    if (!formData.clientEmail.trim()) {
      newErrors.clientEmail = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)) {
      newErrors.clientEmail = "Please enter a valid email address";
    }
    
    if (!formData.organizationType) {
      newErrors.organizationType = "Organization type is required";
    }
    
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }
    
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    
    if (!formData.businessDescription.trim()) {
      newErrors.businessDescription = "Business description is required";
    } else if (formData.businessDescription.length < 100) {
      newErrors.businessDescription = "Business description should be at least 100 characters";
    }
    
    if (formData.techStack.length === 0) {
      newErrors.techStack = "Please select at least one technology stack";
    }
    
    if (!formData.projectTimeline) {
      newErrors.projectTimeline = "Project timeline is required";
    }
    
    if (!formData.budgetRange) {
      newErrors.budgetRange = "Budget range is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleOrgTypeSelect = (type) => {
    setFormData(prev => ({
      ...prev,
      organizationType: type
    }));
    setShowOrgTypes(false);
  };

  const handleTechStackToggle = (tech) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter(t => t !== tech)
        : [...prev.techStack, tech]
    }));
    if (errors.techStack) {
      setErrors(prev => ({
        ...prev,
        techStack: ''
      }));
    }
  };

  const handleTimelineSelect = (timeline) => {
    setFormData(prev => ({
      ...prev,
      projectTimeline: timeline
    }));
    setShowTimeline(false);
  };

  const handleBudgetSelect = (budget) => {
    setFormData(prev => ({
      ...prev,
      budgetRange: budget
    }));
    setShowBudget(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ClientName: formData.clientName,
        ClientPhone: formData.clientMobile,
        ClientMail: formData.clientEmail,
        OrganizationType: formData.organizationType,
        OrganizationName: formData.organizationName,
        OrganizationLocation: formData.location,
        TechStack: formData.techStack,
        ProjectDescription: formData.businessDescription,
        ProjectTechnology: formData.techStack.join(', '), 
        Timeline: formData.projectTimeline,
        Budget: formData.budgetRange
      };

      const response = await fetch(API_URLS.CLIENT.TESTIMONIAL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.Status) {
        showNotification(result.message || 'Thank you for your project inquiry! I will review it and get back to you within 24 hours.', 'success');
        // Reset form
        setFormData({
          clientName: '',
          clientMobile: '',
          clientEmail: '',
          organizationType: '',
          organizationName: '',
          location: '',
          businessDescription: '',
          techStack: [],
          projectTimeline: '',
          budgetRange: ''
        });
      } else {
        showNotification(result.message || 'Failed to submit your project inquiry. Please try again later.', 'error');
      }
      
    } catch (error) {
      console.error('Error:', error);
      showNotification('Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
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

  const handleRNDClick = () => {
    navigate('/research-development');
    setIsMenuOpen(false);
  };

  const handleAskAboutMeClick = () => {
    navigate('/ask-about-me');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
    
      {/* Header - Updated with Color Pattern */}
      <nav className="fixed top-0 w-full bg-[#ffffff] backdrop-blur-lg z-50 border-b border-[#d3d3d3] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div 
                    className="w-10 h-10 bg-gradient-to-br from-[#0b090a] to-[#161a1d] rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-md"
                    onClick={() => navigate('/')}
                  >
                    <div className="w-6 h-6 bg-[#ba181b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-[#ffffff] font-bold text-[10px] tracking-tighter">TS</span>
                    </div>
                    <span className="absolute text-[#ffffff] font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-[#0b090a] font-bold text-xl leading-tight tracking-tight">THIRUMURUGAN S</div>
                  <div className="text-[#161a1d] text-xs font-medium tracking-wider opacity-90 uppercase">AI Research Engineer</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-[#161a1d] hover:text-[#0b090a] font-medium text-sm transition-all duration-300 tracking-wide relative group capitalize"
                >
                  {item === 'home' ? 'Home' : 
                   item === 'about' ? 'About' : 
                   item === 'projects' ? 'Projects' : 
                   item === 'experience' ? 'Experience' : 
                   item === 'contact' ? 'Contact' : item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ba181b] to-[#e5383b] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              {/* Action Buttons - Updated with Color Pattern */}
              <div className="flex items-center space-x-3 ml-4">
                <button 
                  onClick={handleRNDClick}
                  className="bg-gradient-to-r from-[#660708] to-[#a4161a] text-white hover:from-[#0b090a] hover:to-[#161a1d] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#660708]/20"
                >
                  Research
                </button>
                <button 
                  onClick={handleAskAboutMeClick}
                  className="bg-gradient-to-r from-[#0b090a] to-[#161a1d] text-white hover:from-[#ba181b] hover:to-[#e5383b] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#0b090a]/10"
                >
                  Ask About Me
                </button>
                <button 
                  onClick={handleHireMeClick}
                  className="bg-[#0b090a] text-white hover:bg-[#ba181b] hover:text-white border border-[#0b090a] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Hire Me
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#161a1d] hover:text-[#0b090a] p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation - Updated with Color Pattern */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-[#ffffff] backdrop-blur-lg border-b border-[#d3d3d3] shadow-lg">
              <div className="flex flex-col space-y-1 p-4">
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-[#161a1d] hover:text-[#0b090a] py-3 px-4 font-medium text-sm transition-all duration-300 border-l-2 border-transparent hover:border-[#ba181b] hover:bg-[#f5f3f4] rounded-r-lg text-left capitalize"
                  >
                    {item === 'home' ? 'Home' : 
                     item === 'about' ? 'About' : 
                     item === 'projects' ? 'Projects' : 
                     item === 'experience' ? 'Experience' : 
                     item === 'contact' ? 'Contact' : item}
                  </button>
                ))}
                
                {/* Mobile Action Buttons - Updated with Color Pattern */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-[#d3d3d3] mt-2">
                  <button 
                    onClick={handleRNDClick}
                    className="bg-gradient-to-r from-[#660708] to-[#a4161a] text-white hover:from-[#0b090a] hover:to-[#161a1d] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    Research
                  </button>
                  <button 
                    onClick={handleAskAboutMeClick}
                    className="bg-gradient-to-r from-[#0b090a] to-[#161a1d] text-white hover:from-[#ba181b] hover:to-[#e5383b] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    Ask About Me
                  </button>
                  <button 
                    onClick={handleHireMeClick}
                    className="bg-[#0b090a] text-white hover:bg-[#ba181b] py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                  >
                    Hire Me
                  </button>
                </div>
                
                {/* Mobile Social Links - Updated with Color Pattern */}
                <div className="flex justify-center space-x-6 pt-4 border-t border-[#d3d3d3] mt-4">
                  {socialLinks.slice(0, 3).map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#161a1d] hover:text-[#ba181b] transition-colors duration-300 p-2 rounded-full hover:bg-[#f5f3f4]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Notification Toast */}
      {notification.show && (
        <div className={`fixed top-20 right-4 z-50 flex items-center space-x-3 p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 transform ${
          notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${
          notification.type === 'success' 
            ? 'bg-white border-gray-300 text-gray-900' 
            : 'bg-white border-red-200 text-red-900'
        }`}>
          {notification.type === 'success' ? (
            <FaCheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <FaExclamationCircle className="w-5 h-5 text-red-600" />
          )}
          <span className="text-sm font-medium">{notification.message}</span>
          <button 
            onClick={() => setNotification({ show: false, message: '', type: '' })}
            className="text-gray-500 hover:text-gray-700 transition-colors ml-2"
          >
            &times;
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Section - Project Information & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Project Information */}
            <div className="space-y-6">
              {/* Professional Badge */}
              <div className="relative inline-block">
                <div 
                  className="professional-badge inline-flex items-center px-4 py-2.5 rounded-full border cursor-pointer transition-all duration-300 group bg-white"
                  style={{ 
                    borderColor: '#a4161a',
                    color: '#a4161a'
                  }}
                >
                  <div 
                    className="badge-dot w-2 h-2 rounded-full mr-3 animate-pulse transition-all duration-300"
                    style={{ 
                      backgroundColor: '#a4161a'
                    }}
                  ></div>
                  <span className="badge-text text-sm font-medium tracking-wide transition-colors duration-300">READY FOR PROJECTS</span>
                </div>
                
                {/* CSS for hover effect */}
                <style jsx>{`
                  .professional-badge:hover {
                    background-color: #a4161a !important;
                    color: #ffffff !important;
                  }
                  .professional-badge:hover .badge-dot {
                    background-color: #ffffff !important;
                    animation: none !important;
                    transform: scale(1.1);
                  }
                  .professional-badge:hover .badge-text {
                    color: #ffffff !important;
                  }
                `}</style>
              </div>

              {/* Title Section with Split Colors */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  <span style={{ color: '#0b090a' }}>Start </span>
                  <span style={{ color: '#a4161a' }}>Project</span>
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-black to-red-800"></div>
                  <p className="text-xl font-light tracking-wide text-gray-700">
                    Let's bring your vision to life
                  </p>
                </div>
              </div>

              {/* Project Capabilities */}
              <div className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 tracking-tight flex items-center text-gray-900">
                  <FaBuilding className="mr-2 text-red-600" />
                  Project Capabilities
                </h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {['AI/ML Solutions', 'Web Applications', 'Cloud Architecture', 'Data Analytics', 'API Development', 'Database Design'].map((capability, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Development Process */}
              <div className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 tracking-tight flex items-center text-gray-900">
                  <FaGlobe className="mr-2 text-red-600" />
                  Development Process
                </h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    {[
                      { phase: 'Discovery & Planning', duration: '1-2 weeks' },
                      { phase: 'Design & Architecture', duration: '2-3 weeks' },
                      { phase: 'Development', duration: '4-12 weeks' },
                      { phase: 'Testing & Deployment', duration: '1-2 weeks' }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{item.phase}</span>
                        <span className="text-xs text-gray-500">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Professional Network */}
              <div className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 tracking-tight flex items-center text-gray-900">
                  <FaNetworkWired className="mr-2 text-red-600" />
                  Professional Network
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:bg-red-600 hover:border-red-600 group"
                    >
                      <div className="text-red-600 transition-colors group-hover:scale-110 transform duration-300 group-hover:text-white">
                        {social.icon}
                      </div>
                      <span className="text-xs font-medium tracking-wide mt-1 text-gray-700 group-hover:text-white">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <h3 className="font-semibold text-lg mb-3 tracking-tight text-gray-900">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-sm tracking-wide text-gray-700">
                    <span className="font-medium text-gray-900">Email:</span> thirusubramaniyan2001@gmail.com
                  </p>
                  <p className="text-sm tracking-wide text-gray-700">
                    <span className="font-medium text-gray-900">Phone:</span> +91 7339225958
                  </p>
                  <p className="text-sm tracking-wide text-gray-700">
                    <span className="font-medium text-gray-900">Current Location:</span> Velachery, Chennai, Tamil Nadu
                  </p>
                  <p className="text-sm tracking-wide text-gray-700">
                    <span className="font-medium text-gray-900">Permanent Location:</span> Salem, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Project Details Form */}
            <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 h-full border border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 tracking-tight text-gray-900">Project Details</h2>
              <p className="mb-4 text-sm tracking-wide text-gray-700">Fill in your project requirements and I'll get back to you with a proposal</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Client Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center text-gray-900">
                    <FaUser className="mr-2 text-red-600" />
                    Client Information
                  </h3>
                  
                  <div>
                    <input 
                      type="text" 
                      name="clientName"
                      placeholder="Client Name *" 
                      value={formData.clientName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                        errors.clientName ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 placeholder-gray-500`}
                    />
                    {errors.clientName && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.clientName}</p>
                    )}
                  </div>

                  <div>
                    <input 
                      type="tel" 
                      name="clientMobile"
                      placeholder="Client Mobile Number *" 
                      value={formData.clientMobile}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                        errors.clientMobile ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 placeholder-gray-500`}
                    />
                    {errors.clientMobile && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.clientMobile}</p>
                    )}
                  </div>

                  <div>
                    <input 
                      type="email" 
                      name="clientEmail"
                      placeholder="Client Email Address *" 
                      value={formData.clientEmail}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                        errors.clientEmail ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 placeholder-gray-500`}
                    />
                    {errors.clientEmail && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.clientEmail}</p>
                    )}
                  </div>
                </div>

                {/* Organization Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center text-gray-900">
                    <FaBuilding className="mr-2 text-red-600" />
                    Organization Information
                  </h3>

                  {/* Organization Type - Custom Select */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowOrgTypes(!showOrgTypes)}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-left text-sm transition-all duration-300 border ${
                        errors.organizationType ? 'border-red-500' : 'border-gray-300'
                      } ${!formData.organizationType ? 'text-gray-500' : 'text-gray-900'}`}
                    >
                      {formData.organizationType || 'Select Organization Type *'}
                    </button>
                    {showOrgTypes && (
                      <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto border border-gray-200">
                        {organizationTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleOrgTypeSelect(type)}
                            className="w-full px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-red-600 hover:text-white text-gray-900"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.organizationType && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.organizationType}</p>
                    )}
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="organizationName"
                      placeholder="Organization Name *" 
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                        errors.organizationName ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 placeholder-gray-500`}
                    />
                    {errors.organizationName && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.organizationName}</p>
                    )}
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="location"
                      placeholder="Location *" 
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                        errors.location ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 placeholder-gray-500`}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.location}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900">Project Details</h3>

                  <div>
                    <textarea 
                      name="businessDescription"
                      placeholder="High-level Business Description *" 
                      rows="4"
                      value={formData.businessDescription}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 resize-none border ${
                        errors.businessDescription ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 placeholder-gray-500`}
                    />
                    {errors.businessDescription && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.businessDescription}</p>
                    )}
                    <p className="text-xs mt-1 tracking-wide text-gray-500">
                      {formData.businessDescription.length}/100 characters minimum
                    </p>
                  </div>

                  {/* Tech Stack - Multi Select */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowTechStack(!showTechStack)}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-left text-sm transition-all duration-300 border ${
                        errors.techStack ? 'border-red-500' : 'border-gray-300'
                      } ${formData.techStack.length === 0 ? 'text-gray-500' : 'text-gray-900'}`}
                    >
                      {formData.techStack.length > 0 
                        ? `${formData.techStack.length} technology stack selected` 
                        : 'Select Technology Stack *'
                      }
                    </button>
                    {showTechStack && (
                      <div className="mt-2 p-3 bg-white rounded-lg space-y-2 border border-gray-200">
                        {techStackOptions.map((tech) => (
                          <label key={tech} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.techStack.includes(tech)}
                              onChange={() => handleTechStackToggle(tech)}
                              className="hidden"
                            />
                            <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                              formData.techStack.includes(tech) 
                                ? 'bg-red-600 border-red-600' 
                                : 'bg-transparent border-gray-300'
                            }`}>
                              {formData.techStack.includes(tech) && (
                                <FaCheck className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className="text-sm text-gray-900">{tech}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    {errors.techStack && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.techStack}</p>
                    )}
                  </div>

                  {/* Project Timeline - Custom Select */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowTimeline(!showTimeline)}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-left text-sm transition-all duration-300 border ${
                        errors.projectTimeline ? 'border-red-500' : 'border-gray-300'
                      } ${!formData.projectTimeline ? 'text-gray-500' : 'text-gray-900'}`}
                    >
                      {formData.projectTimeline || 'Select Project Timeline *'}
                    </button>
                    {showTimeline && (
                      <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                        {timelineOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleTimelineSelect(option.value)}
                            className="w-full px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-red-600 hover:text-white text-gray-900"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.projectTimeline && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.projectTimeline}</p>
                    )}
                  </div>

                  {/* Budget Range - Custom Select */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowBudget(!showBudget)}
                      className={`w-full px-3 py-2.5 bg-white rounded-lg text-left text-sm transition-all duration-300 border ${
                        errors.budgetRange ? 'border-red-500' : 'border-gray-300'
                      } ${!formData.budgetRange ? 'text-gray-500' : 'text-gray-900'}`}
                    >
                      {formData.budgetRange || 'Select Budget Range *'}
                    </button>
                    {showBudget && (
                      <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                        {budgetRanges.map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => handleBudgetSelect(budget)}
                            className="w-full px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-red-600 hover:text-white text-gray-900"
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.budgetRange && (
                      <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.budgetRange}</p>
                    )}
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl tracking-wide text-sm flex items-center justify-center space-x-2 border border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600 disabled:bg-gray-400 disabled:border-gray-400 disabled:hover:text-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Project Proposal</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm tracking-wide font-light text-gray-700">
              © 2025 THIRUMURUGAN SUBRAMANIYAN • AI RESEARCH ENGINEER • ALL RIGHTS RESERVED
            </p>
            <p className="text-xs mt-1 tracking-wide text-gray-500">
              READY FOR PROJECTS • FULL-STACK DEVELOPMENT • AI/ML SOLUTIONS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartProject;