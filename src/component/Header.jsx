import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/thirumurugan-subramaniyan-a62351212/' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/thirumurugan2001' },
    { icon: <SiCodechef className="w-5 h-5" />, name: 'CodeChef', url: 'https://www.codechef.com/users/thiru2001' },
    { icon: <FaHackerrank className="w-5 h-5" />, name: 'HackerRank', url: 'https://www.hackerrank.com/profile/thirusubramaniy1' },
    { icon: <SiLeetcode className="w-5 h-5" />, name: 'LeetCode', url: 'https://leetcode.com/u/thirusubramaniyan2001/' },
  ];

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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

  const handleRNDClick = () => {
    navigate('/research-development');
    setIsMenuOpen(false);
  };

  const handleAskAboutMeClick = () => {
    navigate('/ask-about-me');
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
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
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-[#161a1d] hover:text-[#0b090a] font-medium text-sm transition-all duration-300 tracking-wide relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ba181b] to-[#e5383b] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-2">
              <button 
                onClick={handleRNDClick}
                className="bg-gradient-to-r from-[#ba181b] to-[#e5383b] text-white hover:from-[#0b090a] hover:to-[#161a1d] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#ba181b]/20 whitespace-nowrap"
              >
                Research
              </button>
              <button 
                onClick={handleAskAboutMeClick}
                className="bg-gradient-to-r from-[#0b090a] to-[#161a1d] text-white hover:from-[#ba181b] hover:to-[#e5383b] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#0b090a]/10 whitespace-nowrap"
              >
                Ask About Me
              </button>
              <button 
                onClick={handleStartProjectClick}
                className="bg-gradient-to-r from-[#ba181b] to-[#e5383b] text-white hover:from-[#0b090a] hover:to-[#161a1d] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#ba181b]/20 whitespace-nowrap"
              >
                Start Project
              </button>
              <button 
                onClick={handleHireMeClick}
                className="bg-[#0b090a] text-white hover:bg-[#ba181b] hover:text-white border border-[#0b090a] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#ffffff] backdrop-blur-lg border-b border-[#d3d3d3] shadow-lg">
            <div className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-[#161a1d] hover:text-[#0b090a] py-3 px-4 font-medium text-sm transition-all duration-300 border-l-2 border-transparent hover:border-[#ba181b] hover:bg-[#f5f3f4] rounded-r-lg text-left"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-[#d3d3d3] mt-2">
                <button 
                  onClick={handleRNDClick}
                  className="bg-gradient-to-r from-[#ba181b] to-[#e5383b] text-white hover:from-[#0b090a] hover:to-[#161a1d] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
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
                  onClick={handleStartProjectClick}
                  className="bg-gradient-to-r from-[#ba181b] to-[#e5383b] text-white hover:from-[#0b090a] hover:to-[#161a1d] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                >
                  Start Project
                </button>
                <button 
                  onClick={handleHireMeClick}
                  className="bg-[#0b090a] text-white hover:bg-[#ba181b] py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                >
                  Hire Me
                </button>
              </div>
              
              {/* Mobile Social Links */}
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
  );
};

export default Header;