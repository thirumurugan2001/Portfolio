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
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-[#333333] shadow-sm shadow-[#8267ec]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div 
                  className="w-10 h-10 bg-[#8267ec] rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.5)]"
                  onClick={() => navigate('/')}
                >
                  <div className="w-6 h-6 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[#8267ec] font-bold text-[10px] tracking-tighter">TS</span>
                  </div>
                  <span className="absolute text-white font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-xl leading-tight tracking-tight">THIRUMURUGAN S</div>
                <div className="text-gray-300 text-xs font-medium tracking-wider opacity-90 uppercase">AI Research Engineer</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 tracking-wide relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8267ec] to-[#9d8aee] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-2">
              <button 
                onClick={handleRNDClick}
                className="bg-gradient-to-r from-[#8267ec] to-[#9d8aee] text-white hover:from-[#111111] hover:to-[#333333] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] border border-[#8267ec]/20 whitespace-nowrap"
              >
                Research
              </button>
              <button 
                onClick={handleAskAboutMeClick}
                className="bg-gradient-to-r from-[#111111] to-[#333333] text-white hover:from-[#8267ec] hover:to-[#9d8aee] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] border border-[#111111]/10 whitespace-nowrap"
              >
                Ask About Me
              </button>
              <button 
                onClick={handleStartProjectClick}
                className="bg-gradient-to-r from-[#8267ec] to-[#9d8aee] text-white hover:from-[#111111] hover:to-[#333333] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] border border-[#8267ec]/20 whitespace-nowrap"
              >
                Start Project
              </button>
              <button 
                onClick={handleHireMeClick}
                className="bg-[#8267ec] text-white hover:bg-white hover:text-[#8267ec] border border-[#8267ec] px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] whitespace-nowrap"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2 transition-colors duration-300"
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
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-[#333333] shadow-lg shadow-[#8267ec]/10">
            <div className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-300 hover:text-white py-3 px-4 font-medium text-sm transition-all duration-300 border-l-2 border-transparent hover:border-[#8267ec] hover:bg-[#111111] rounded-r-lg text-left"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-[#333333] mt-2">
                <button 
                  onClick={handleRNDClick}
                  className="bg-gradient-to-r from-[#8267ec] to-[#9d8aee] text-white hover:from-[#111111] hover:to-[#333333] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                >
                  Research
                </button>
                <button 
                  onClick={handleAskAboutMeClick}
                  className="bg-gradient-to-r from-[#111111] to-[#333333] text-white hover:from-[#8267ec] hover:to-[#9d8aee] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                >
                  Ask About Me
                </button>
                <button 
                  onClick={handleStartProjectClick}
                  className="bg-gradient-to-r from-[#8267ec] to-[#9d8aee] text-white hover:from-[#111111] hover:to-[#333333] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                >
                  Start Project
                </button>
                <button 
                  onClick={handleHireMeClick}
                  className="bg-[#8267ec] text-white hover:bg-white hover:text-[#8267ec] py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                >
                  Hire Me
                </button>
              </div>
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-[#333333] mt-4">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#8267ec] transition-colors duration-300 p-2 rounded-full hover:bg-[#111111]"
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