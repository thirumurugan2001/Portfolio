import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaQuestion, FaBars, FaTimes, FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import API_URLS from './ApiURL';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const API_URL = API_URLS.CHATBOT.ABOUT;

  // Color palette
  const colors = {
    primary: '#8267ec', // Purple
    black: '#000000',
    white: '#ffffff',
    grayDark: '#1a1a1a',
    grayMedium: '#333333',
    grayLight: '#666666',
    grayVeryLight: '#999999'
  };

  // Function to parse text and convert markdown-like syntax to HTML elements
  const parseFormattedText = (text) => {
    if (!text) return '';
    
    // Parse headers (### Header)
    let parsedText = text.replace(/###\s+(.*?)(?=\n|$)/g, `<h3 class="text-lg font-bold mt-4 mb-2 text-white">$1</h3>`);
    
    // Parse bold text (**text**)
    parsedText = parsedText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
    
    // Parse bullet points (- item or * item)
    parsedText = parsedText.replace(/^-\s+(.*?)$/gm, '<li class="ml-4 list-disc">$1</li>');
    parsedText = parsedText.replace(/^\*\s+(.*?)$/gm, '<li class="ml-4 list-disc">$1</li>');
    
    // Replace newlines with breaks
    parsedText = parsedText.replace(/\n/g, '<br />');
    
    // Wrap lists in ul tags
    parsedText = parsedText.replace(/(<li class="ml-4 list-disc">.*?<\/li>)+/g, '<ul class="list-disc ml-6 my-2">$&</ul>');
    
    return <div dangerouslySetInnerHTML={{ __html: parsedText }} />;
  };

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/thirumurugan-subramaniyan-a62351212/' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/thirumurugan2001' },
    { icon: <SiCodechef className="w-5 h-5" />, name: 'CodeChef', url: 'https://www.codechef.com/users/thiru2001' },
    { icon: <FaHackerrank className="w-5 h-5" />, name: 'HackerRank', url: 'https://www.hackerrank.com/profile/thirusubramaniy1' },
    { icon: <SiLeetcode className="w-5 h-5" />, name: 'LeetCode', url: 'https://leetcode.com/u/thirusubramaniyan2001/' },
  ];

  const quickActions = [
    { id: 1, text: "Tell me about your experience as an AI Research Engineer" },
    { id: 2, text: "What are your core AI competencies and technical skills?" },
    { id: 3, text: "Can you explain your experience with RAG systems and LLM fine-tuning?" },
    { id: 4, text: "What projects have you worked on Avasoft?" }
  ];

  const recruiterQuestions = [
    { id: 1, text: "Tell me about your experience as an AI Research Engineer" },
    { id: 2, text: "What are your strongest technical skills in AI and machine learning?" },
    { id: 3, text: "Describe your experience with LangTech translation platform" },
    { id: 4, text: "What AI frameworks and tools are you proficient with?" },
    { id: 5, text: "Explain your experience with RAG systems and vector databases" },
    { id: 6, text: "Tell me about your CloudGen drag-and-drop platform" },
    { id: 7, text: "What's your experience with AWS and Azure cloud services?" },
    { id: 8, text: "Describe your educational RAG chatbot project - LFS" },
    { id: 9, text: "What programming languages are you most comfortable with?" },
    { id: 10, text: "Tell me about your Zeb Pulse AI framework review project" },
    { id: 11, text: "What's your experience with computer vision and NLP?" },
    { id: 12, text: "Describe your PDF AI automation SaaS application" },
    { id: 13, text: "How do you handle full-stack development projects?" },
    { id: 14, text: "What's your experience with DevOps and CI/CD pipelines?" },
    { id: 15, text: "Tell me about your academic background and education" },
    { id: 16, text: "What industries have you applied AI solutions to?" },
    { id: 17, text: "Describe your experience with OpenAI GPT and Google Gemini" },
    { id: 18, text: "What's your approach to machine learning deployment?" },
    { id: 19, text: "Tell me about your RPA development experience" },
    { id: 20, text: "What are your career aspirations and future goals?" }
  ];

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    if (hour < 21) return "Good evening";
    return "Good night";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Check if conversation has started
  const hasConversationStarted = messages.length > 0;

  // Welcome section typing animation
  useEffect(() => {
    if (!hasConversationStarted) {
      const greeting = getTimeBasedGreeting();
      const fullText = `${greeting}, How can I help you today?`;
      let currentText = '';
      let index = 0;

      setShowWelcome(true);
      
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          currentText += fullText[index];
          setWelcomeText(currentText);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [hasConversationStarted]);

  // API call function
  const callChatbotAPI = async (question) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Question: question
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.Status) {
        return data.data;
      } else {
        throw new Error(data.message || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  };

  // Simulate AI response with typing animation using actual API
  const simulateAIResponse = async (userMessageText) => {
    setIsLoading(true);
    
    try {
      // Start typing animation immediately
      setIsTyping(true);
      const thinkingMessage = {
        id: Date.now() + 1,
        text: "Thinking",
        isUser: false,
        timestamp: new Date(),
        isThinking: true
      };

      setMessages(prev => [...prev, thinkingMessage]);

      // Make API call
      const responseText = await callChatbotAPI(userMessageText);
      
      // Remove the "Thinking..." message and add the actual response
      setMessages(prev => prev.filter(msg => !msg.isThinking));
      
      // Create a new message for the actual response
      const responseMessage = {
        id: Date.now() + 2,
        text: "",
        isUser: false,
        timestamp: new Date(),
        isTyping: true
      };

      setMessages(prev => [...prev, responseMessage]);
      
      // Simulate typing effect with actual API response
      let currentText = "";
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < responseText.length) {
          currentText += responseText[index];
          setMessages(prev => 
            prev.map(msg => 
              msg.id === responseMessage.id 
                ? { ...msg, text: currentText, isTyping: false }
                : msg
            )
          );
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setIsLoading(false);
          
          // Update the message to remove typing state and add border
          setMessages(prev => 
            prev.map(msg => 
              msg.id === responseMessage.id 
                ? { ...msg, isTyping: false, showBorder: true }
                : msg
            )
          );
        }
      }, 20);

    } catch (error) {
      // Handle API error
      setIsLoading(false);
      setIsTyping(false);
      
      // Remove thinking and typing messages and show error
      setMessages(prev => prev.filter(msg => !msg.isThinking && !msg.isTyping));
      
      const errorMessage = {
        id: Date.now(),
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date(),
        showBorder: true
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleQuickAction = (text) => {
    if (isLoading || isTyping) return;
    
    const userMessage = {
      id: Date.now(),
      text: text,
      isUser: true,
      timestamp: new Date(),
      showBorder: true
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAIResponse(text);
    setIsMobileMenuOpen(false);
  };

  const handleRecruiterQuestion = (text) => {
    if (isLoading || isTyping) return;
    
    const userMessage = {
      id: Date.now(),
      text: text,
      isUser: true,
      timestamp: new Date(),
      showBorder: true
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAIResponse(text);
    setIsMobileMenuOpen(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || isTyping) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
      showBorder: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    simulateAIResponse(inputValue);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Check if any action is disabled
  const isActionDisabled = isLoading || isTyping;

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

  const handleRNDClick = () => {
    navigate('/research-development');
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header - Updated with Color Pattern */}
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
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 tracking-wide relative group capitalize"
                >
                  {item === 'home' ? 'Home' : 
                   item === 'about' ? 'About' : 
                   item === 'projects' ? 'Projects' : 
                   item === 'experience' ? 'Experience' : 
                   item === 'contact' ? 'Contact' : item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8267ec] to-[#9d8aee] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <button 
                  onClick={handleRNDClick}
                  className="bg-[#8267ec] text-white hover:bg-white hover:text-[#8267ec] border border-[#8267ec] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]"
                >
                  Research
                </button>
                <button 
                  onClick={handleStartProjectClick}
                  className="bg-gradient-to-r from-[#8267ec] to-[#9d8aee] text-white hover:from-white hover:to-gray-200 hover:text-[#8267ec] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)] border border-[#8267ec]/20"
                >
                  Start Project
                </button>
                <button 
                  onClick={handleHireMeClick}
                  className="bg-[#8267ec] text-white hover:bg-white hover:text-[#8267ec] border border-[#8267ec] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]"
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
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white py-3 px-4 font-medium text-sm transition-all duration-300 border-l-2 border-transparent hover:border-[#8267ec] hover:bg-[#111111] rounded-r-lg text-left capitalize"
                  >
                    {item === 'home' ? 'Home' : 
                     item === 'about' ? 'About' : 
                     item === 'projects' ? 'Projects' : 
                     item === 'experience' ? 'Experience' : 
                     item === 'contact' ? 'Contact' : item}
                  </button>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-[#333333] mt-2">
                  <button 
                    onClick={handleRNDClick}
                    className="bg-[#8267ec] text-white hover:bg-white hover:text-[#8267ec] py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                  >
                    Research
                  </button>
                  <button 
                    onClick={handleStartProjectClick}
                    className="bg-gradient-to-r from-[#8267ec] to-[#9d8aee] text-white hover:from-white hover:to-gray-200 hover:text-[#8267ec] py-3 rounded-lg font-semibold text-sm transition-all duration-300"
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

      {/* Add padding to account for fixed header */}
      <div className="pt-16 flex-1 flex overflow-hidden bg-black">
        {/* Chatbot Section */}
        <div className="flex-1 w-full md:w-4/5 flex flex-col border-r border-[#333333] bg-black">
          {/* Messages Area */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 scrollbar-hide bg-black"
          >
            {/* Default Section - Only show if conversation hasn't started */}
            {!hasConversationStarted && showWelcome && (
              <div className="max-w-4xl mx-auto w-full">
                {/* Logo Section */}
                <div className="text-center mb-4 pt-4 md:pt-6">
                  <div className="flex justify-center mb-3">
                    <div className="relative">
                      <div 
                        className="w-12 h-12 bg-[#8267ec] rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(130,103,236,0.5)]"
                        onClick={() => navigate('/')}
                      >
                        <div className="w-7 h-7 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-[#8267ec] font-bold text-[8px] tracking-tighter">TS</span>
                        </div>
                        <span className="absolute text-white font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Welcome Text */}
                  <div className="min-h-[40px] flex items-center justify-center px-2">
                    <h1 className="text-lg sm:text-xl font-bold text-center text-white">
                      {welcomeText}
                      {welcomeText.length > 0 && welcomeText.length < getTimeBasedGreeting().length + "How can I help you today?".length + 2 && (
                        <span className="animate-pulse text-[#8267ec]">|</span>
                      )}
                    </h1>
                  </div>
                  
                  <p className="text-sm mt-3 px-4 text-gray-400">
                    Choose a quick action or type your message below
                  </p>
                </div>

                {/* Quick Actions Grid */}
                {welcomeText === `${getTimeBasedGreeting()}, How can I help you today?` && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-w-2xl mx-auto px-4">
                    {quickActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => handleQuickAction(action.text)}
                        disabled={isActionDisabled}
                        className="rounded-lg p-3 text-left transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(130,103,236,0.2)] disabled:opacity-50 disabled:cursor-not-allowed border border-[#333333] bg-[#111111] hover:bg-[#8267ec] hover:border-[#8267ec]"
                      >
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-300 group-hover:text-white">
                          {action.text}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Chat Messages */}
            <div className={`space-y-4 ${!hasConversationStarted ? 'max-w-4xl mx-auto w-full' : ''}`}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 px-2 sm:px-0 ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {/* TS Logo Icon - Show on left for bot messages */}
                  {!message.isUser && (
                    <div className="flex-shrink-0 w-6 h-6 bg-[#8267ec] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-[10px] tracking-tighter">TS</span>
                    </div>
                  )}

                  {/* Message Content */}
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-lg px-3 py-2 ${
                      (message.showBorder || message.isUser) ? 'border' : ''
                    } ${message.isUser ? 'bg-[#8267ec] text-white border-[#8267ec]' : 'bg-[#111111] text-white border-[#333333]'}`}
                  >
                    {message.isThinking ? (
                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-gray-400 italic">Thinking</div>
                        <div className="flex space-x-1">
                          <div 
                            className="w-1.5 h-1.5 rounded-full bg-[#8267ec] animate-bounce"
                            style={{ animationDelay: '0ms' }}
                          ></div>
                          <div 
                            className="w-1.5 h-1.5 rounded-full bg-[#8267ec] animate-bounce"
                            style={{ animationDelay: '150ms' }}
                          ></div>
                          <div 
                            className="w-1.5 h-1.5 rounded-full bg-[#8267ec] animate-bounce"
                            style={{ animationDelay: '300ms' }}
                          ></div>
                        </div>
                      </div>
                    ) : message.isTyping ? (
                      <div className="text-sm">
                        {message.text}
                        <span className="animate-pulse text-[#8267ec]">|</span>
                      </div>
                    ) : (
                      <div className="text-xs sm:text-sm whitespace-pre-wrap">
                        {message.isUser ? message.text : parseFormattedText(message.text)}
                      </div>
                    )}
                  </div>

                  {/* User Icon - Show on right for user messages */}
                  {message.isUser && (
                    <div className="flex-shrink-0 w-6 h-6 bg-[#8267ec] rounded-full flex items-center justify-center">
                      <FaUser className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Fixed Input Area */}
          <div className="border-t border-[#333333] px-4 sm:px-6 py-4 bg-black">
            <form onSubmit={handleSendMessage} className="flex space-x-2 sm:space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Message Thiru..."
                  disabled={isActionDisabled}
                  className="w-full rounded-lg px-3 sm:px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8267ec] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base border border-[#333333] bg-[#111111] text-white placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                disabled={!inputValue.trim() || isActionDisabled}
                className="px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-[0_0_20px_rgba(130,103,236,0.5)] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap border border-[#8267ec] bg-[#8267ec] text-white hover:bg-white hover:text-[#8267ec]"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
            
            {/* Disclaimer */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500 px-2">
                AI can make mistakes. Consider checking important information.
              </p>
            </div>
          </div>
        </div>

        {/* Recruiter Questions Section */}
        <div className="hidden md:flex w-1/5 flex-col border-l border-[#333333] bg-black">
          {/* Section Header - Fixed */}
          <div className="p-4 border-b border-[#333333] bg-black">
            <div className="flex items-center space-x-2">
              <FaQuestion className="w-4 h-4 text-[#8267ec]" />
              <h2 className="text-lg font-bold text-white">Common Questions</h2>
            </div>
          </div>
          
          {/* Questions List - Scrollable with Hidden Scrollbar */}
          <div className="flex-1 overflow-y-auto scrollbar-hide bg-black">
            <div className="p-4 space-y-3">
              {recruiterQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleRecruiterQuestion(question.text)}
                  disabled={isActionDisabled}
                  className="w-full rounded-lg p-3 text-left transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(130,103,236,0.2)] disabled:opacity-50 disabled:cursor-not-allowed border border-[#333333] bg-[#111111] hover:bg-[#8267ec] hover:border-[#8267ec]"
                >
                  <p className="text-xs leading-relaxed text-gray-300 group-hover:text-white">
                    {question.text}
                  </p>
                </button>
              ))}
            </div>

            {/* Info Section */}
            <div className="p-4 border-t border-[#333333] bg-black">
              <div className="p-3 rounded-lg border border-[#333333] bg-[#111111]">
                <h3 className="text-sm font-bold mb-2 text-white">About Me</h3>
                <p className="text-xs text-gray-400">
                  Ask me about my experience, skills, projects, or anything related to AI research and engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;