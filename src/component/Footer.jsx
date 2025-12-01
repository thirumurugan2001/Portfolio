import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/thirumurugan-subramaniyan-a62351212/' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/thirumurugan2001' },
    { icon: <SiCodechef className="w-5 h-5" />, name: 'CodeChef', url: 'https://www.codechef.com/users/thiru2001' },
    { icon: <FaHackerrank className="w-5 h-5" />, name: 'HackerRank', url: 'https://www.hackerrank.com/profile/thirusubramaniy1' },
    { icon: <SiLeetcode className="w-5 h-5" />, name: 'LeetCode', url: 'https://leetcode.com/u/thirusubramaniyan2001/' },
  ];

  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Experience', section: 'experience' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      type: 'Current Location',
      value: 'Velachery, Chennai, Tamil Nadu'
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      type: 'Permanent Location',
      value: 'Salem, Tamil Nadu'
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      type: 'Email',
      value: 'thirusubramaniyan2001@gmail.com',
      href: 'mailto:thirusubramaniyan2001@gmail.com'
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      type: 'Primary Contact',
      value: '+91 - 7339225958',
      href: 'tel:+917339225958'
    },
  ];

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#d3d3d3] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-2">
            {/* Logo with same animation as header */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div 
                  className="w-12 h-12 bg-[#0b090a] rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-md"
                  onClick={handleLogoClick}
                >
                  <div className="w-8 h-8 bg-[#ba181b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[#ffffff] font-bold text-xs tracking-tighter">TS</span>
                  </div>
                  <span className="absolute text-[#ffffff] font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                </div>
              </div>
              <div>
                <div className="text-[#0b090a] font-bold text-xl leading-tight tracking-tight">THIRUMURUGAN S</div>
                <div className="text-[#161a1d] text-sm font-medium tracking-wider opacity-90 uppercase">AI Research Engineer</div>
              </div>
            </div>

            <p className="text-[#161a1d] opacity-80 text-sm leading-relaxed max-w-md">
              Specializing in AI-powered solutions, LLM fine-tuning, and cloud-native applications. 
              Transforming complex business challenges into scalable, intelligent systems through 
              cutting-edge technology and innovative engineering.
            </p>
            
            {/* Professional Badge - Matching header style */}
            <div className="inline-flex items-center px-5 py-2.5 bg-[#0b090a] rounded-full group hover:bg-[#ba181b] transition-all duration-300 cursor-pointer shadow-md">
              <div className="w-2 h-2 bg-[#ba181b] rounded-full mr-3 animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:bg-[#0b090a]"></div>
              <span className="text-[#ffffff] text-sm font-medium tracking-wide group-hover:text-[#ffffff]">AVAILABLE FOR FREELANCE WORK</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#0b090a] font-bold text-lg tracking-tight border-b border-[#ba181b] pb-2">NAVIGATION</h3>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.section)}
                  className="text-[#161a1d] opacity-80 hover:opacity-100 text-sm text-left transition-all duration-200 hover:translate-x-2 transform flex items-center group"
                >
                  <div className="w-1.5 h-1.5 bg-[#ba181b] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-[#0b090a] font-bold text-lg tracking-tight border-b border-[#ba181b] pb-2">CONTACT</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="text-[#ba181b] opacity-90 mt-0.5 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0b090a] opacity-80 text-xs font-medium uppercase tracking-wide">{contact.type}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-[#161a1d] text-sm hover:text-[#ba181b] transition-colors duration-200 break-words block mt-1"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-[#161a1d] text-sm break-words mt-1">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d3d3d3] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-[#0b090a] opacity-100 text-sm tracking-wide font-light">
              © 2025 THIRUMURUGAN SUBRAMANIYAN • AI RESEARCH & DEVELOPMENT • ALL RIGHTS RESERVED
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0b090a] opacity-80 hover:text-[#ba181b] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;