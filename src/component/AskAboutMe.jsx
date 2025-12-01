import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { FaHome, FaLinkedin, FaGithub, FaPaperPlane, FaRobot, FaUser, FaTimes, FaBriefcase, FaGraduationCap, FaCode, FaCloud, FaDatabase } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiHackerrank } from 'react-icons/si';

// Typing Animation Component
const TypingAnimation = ({ text, speed = 30, onComplete }) => {
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
    <span>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-1 h-4 bg-blue-600 ml-1 animate-pulse"></span>
      )}
    </span>
  );
};

const AskAboutMe = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const messagesEndRef = useRef(null);

  const categories = {
    all: { name: 'All Questions', icon: <FaBriefcase /> },
    technical: { name: 'Technical Skills', icon: <FaCode /> },
    experience: { name: 'Experience', icon: <FaBriefcase /> },
    education: { name: 'Education', icon: <FaGraduationCap /> },
    cloud: { name: 'Cloud & DevOps', icon: <FaCloud /> },
    database: { name: 'Database', icon: <FaDatabase /> }
  };

  const defaultQuestions = [
    {
      text: "What's your experience with AI and Machine Learning?",
      category: 'technical'
    },
    {
      text: "Tell me about your full-stack development skills",
      category: 'technical'
    },
    {
      text: "What cloud platforms and services are you proficient in?",
      category: 'cloud'
    },
    {
      text: "Can you describe your experience with databases?",
      category: 'database'
    },
    {
      text: "What are your key projects and achievements?",
      category: 'experience'
    },
    {
      text: "What's your current availability and location preference?",
      category: 'experience'
    },
    {
      text: "Tell me about your educational background",
      category: 'education'
    },
    {
      text: "What are your salary expectations?",
      category: 'experience'
    },
    {
      text: "Do you have experience with DevOps and CI/CD?",
      category: 'cloud'
    },
    {
      text: "What programming languages are you most comfortable with?",
      category: 'technical'
    },
    {
      text: "What's your experience with large language models?",
      category: 'technical'
    },
    {
      text: "Can you describe your experience with Azure and AWS services?",
      category: 'cloud'
    }
  ];

  const knowledgeBase = {
    "experience with ai and machine learning": `I have extensive experience in AI and Machine Learning, with expertise in:

🤖 **Large Language Models & RAG Systems**
- Fine-tuning and deploying LLMs for specific use cases
- Building Retrieval-Augmented Generation (RAG) systems
- Implementing vector databases and semantic search

🔬 **Computer Vision & NLP**
- Image classification and object detection
- Natural Language Processing applications
- Model optimization and performance tuning

🛠️ **Frameworks & Tools**
- PyTorch, TensorFlow, and Hugging Face
- Azure OpenAI, AWS Bedrock, Google Gemini
- MLOps and model deployment pipelines`,

    "full-stack development skills": `My full-stack development expertise includes:

⚡ **Backend Development**
- Python (FastAPI, Django, Flask)
- Node.js, Express.js
- REST API design and microservices architecture
- Authentication and authorization systems

🎨 **Frontend Development**
- React.js with TypeScript/JavaScript
- Modern CSS frameworks (Tailwind CSS)
- Responsive web design
- State management and performance optimization

🔗 **System Integration**
- Real-time applications with WebSockets
- Third-party API integrations
- Message queues and background tasks`,

    "cloud platforms and services": `I'm proficient in multiple cloud platforms:

☁️ **Microsoft Azure**
- Azure OpenAI Service and Cognitive Services
- Azure Functions for serverless computing
- Azure Storage, Key Vault, and App Service
- Azure DevOps for CI/CD pipelines

🌩️ **Amazon Web Services**
- AWS Bedrock for foundation models
- S3, EC2, Lambda, and CloudFront
- IAM and security best practices
- CloudFormation for infrastructure as code

🐳 **Containerization & DevOps**
- Docker containerization
- Kubernetes orchestration
- CI/CD pipeline implementation
- Monitoring and logging solutions`,

    "experience with databases": `My database expertise covers:

🗄️ **SQL Databases**
- PostgreSQL, MySQL, SQL Server
- Database design and normalization
- Query optimization and indexing
- Transactions and ACID properties

📊 **NoSQL & Vector Databases**
- MongoDB for document storage
- Vector databases for AI applications
- Data modeling for scalability
- Performance monitoring and tuning

🔧 **Data Management**
- ETL processes and data pipelines
- Database migration strategies
- Backup and recovery procedures
- Data security and compliance`,

    "key projects and achievements": `Some notable projects and achievements:

🚀 **AI-Powered Chatbot Systems**
- Developed enterprise-grade chatbot solutions with RAG architecture
- Integrated multiple AI models for enhanced performance
- Achieved 95% accuracy in query responses

💼 **Scalable Web Applications**
- Built full-stack applications serving thousands of users
- Implemented microservices architecture for better scalability
- Reduced response times by 60% through optimization

☁️ **Cloud AI Solutions**
- Deployed AI models on Azure and AWS cloud platforms
- Implemented automated scaling and monitoring
- Reduced infrastructure costs by 40%

🛠️ **Open Source Contributions**
- Active contributor to technical communities
- Published reusable components and libraries
- Mentored junior developers`,

    "current availability and location preference": `📍 **Location & Availability**

🏙️ **Current Location**: Velachery, Chennai, Tamil Nadu
🏠 **Permanent Location**: Salem, Tamil Nadu
🕒 **Notice Period**: Available to join within a month
🚀 **Work Preference**: Ready to relocate for the right opportunity
💼 **Work Mode**: Open to remote, hybrid, or onsite arrangements

I'm actively seeking challenging roles where I can contribute to innovative projects and continue growing professionally.`,

    "educational background": `🎓 **Educational Qualifications**

**Bachelor's Degree** in Computer Science
- Strong foundation in algorithms and data structures
- Focus on software engineering principles
- Continuous learning through online courses and certifications

📚 **Continuous Learning**
- Regular participation in coding competitions
- Completed advanced courses in AI/ML
- Active member of technical communities
- Stay updated with latest industry trends`,

    "salary expectations": `💰 **Compensation Expectations**

I'm seeking competitive compensation that reflects:
- Market standards for AI Research Engineer roles
- The scope and responsibilities of the position
- Company location and compensation structure
- Overall benefits package and growth opportunities

I believe in fair compensation that matches the value I bring to the organization. Let's discuss this based on the specific role requirements and expectations.`,

    "experience with devops and ci/cd": `🔄 **DevOps & CI/CD Expertise**

🔧 **CI/CD Pipelines**
- GitLab CI/CD, GitHub Actions, Azure DevOps
- Automated testing and deployment strategies
- Infrastructure as Code with Terraform
- Environment management and deployment automation

🐳 **Containerization**
- Docker for application containerization
- Kubernetes for container orchestration
- Helm charts for deployment management
- Container security best practices

📊 **Monitoring & Operations**
- Application performance monitoring
- Log aggregation and analysis
- Alerting and incident response
- Performance optimization`,

    "programming languages": `💻 **Programming Languages**

🐍 **Python** - *Advanced*
- AI/ML development and data science
- Backend API development
- Automation scripts and tools
- Web scraping and data processing

🌐 **JavaScript/TypeScript** - *Advanced*
- Frontend development with React
- Node.js backend services
- Type-safe development practices
- Modern ES6+ features

🗃️ **SQL** - *Advanced*
- Complex query optimization
- Database design and management
- Performance tuning
- Data analysis and reporting

🎨 **HTML/CSS** - *Advanced*
- Semantic HTML structure
- Modern CSS frameworks (Tailwind)
- Responsive design principles
- Cross-browser compatibility`,

    "large language models": `🧠 **Large Language Models Expertise**

🔬 **Model Development & Fine-tuning**
- Experience with GPT, Llama, and other transformer architectures
- Fine-tuning models for specific domains and tasks
- Parameter-efficient fine-tuning techniques
- Model evaluation and performance metrics

🚀 **RAG Systems Implementation**
- Vector database integration (Pinecone, Chroma)
- Semantic search and retrieval optimization
- Context management and prompt engineering
- Multi-modal AI applications

⚡ **Production Deployment**
- Model serving and API development
- Scalability and performance optimization
- Monitoring and maintenance
- Cost optimization strategies`
  };

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm here to provide detailed information about Thirumurugan's professional background, skills, and experience. Feel free to ask specific questions about his technical expertise, projects, or career preferences. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        isTyping: false
      }
    ]);
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const filteredQuestions = activeCategory === 'all' 
    ? defaultQuestions 
    : defaultQuestions.filter(q => q.category === activeCategory);

  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputMessage.trim();
    
    if (!textToSend) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date(),
      isTyping: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      const response = generateResponse(textToSend.toLowerCase());
      
      // Add bot message with typing state
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        isTyping: true
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      setIsTyping(true);

      // Simulate typing completion
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === botMessage.id 
              ? { ...msg, isTyping: false }
              : msg
          )
        );
        setIsTyping(false);
      }, Math.min(response.length * 20, 3000)); // Max 3 seconds typing
    }, 1000);
  };

  const generateResponse = (userInput) => {
    // Check for exact matches in knowledge base
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (userInput.includes(key)) {
        return response;
      }
    }

    // Check for related keywords with improved matching
    const keywordMap = {
      'ai': "experience with ai and machine learning",
      'machine learning': "experience with ai and machine learning",
      'llm': "large language models",
      'language model': "large language models",
      'full stack': "full-stack development skills",
      'frontend': "full-stack development skills",
      'backend': "full-stack development skills",
      'cloud': "cloud platforms and services",
      'azure': "cloud platforms and services",
      'aws': "cloud platforms and services",
      'database': "experience with databases",
      'sql': "experience with databases",
      'mongodb': "experience with databases",
      'project': "key projects and achievements",
      'achievement': "key projects and achievements",
      'portfolio': "key projects and achievements",
      'available': "current availability and location preference",
      'location': "current availability and location preference",
      'relocate': "current availability and location preference",
      'education': "educational background",
      'degree': "educational background",
      'qualification': "educational background",
      'salary': "salary expectations",
      'compensation': "salary expectations",
      'pay': "salary expectations",
      'devops': "experience with devops and ci/cd",
      'ci/cd': "experience with devops and ci/cd",
      'docker': "experience with devops and ci/cd",
      'programming': "programming languages",
      'language': "programming languages",
      'python': "programming languages",
      'javascript': "programming languages"
    };

    for (const [keyword, responseKey] of Object.entries(keywordMap)) {
      if (userInput.includes(keyword)) {
        return knowledgeBase[responseKey];
      }
    }

    return "Thank you for your question. I'm designed to provide detailed information about Thirumurugan's professional background, including his technical skills, project experience, educational qualifications, and career preferences. Could you please ask about specific aspects of his professional profile?";
  };

  const handleQuickQuestionClick = (question) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm here to provide detailed information about Thirumurugan's professional background, skills, and experience. Feel free to ask specific questions about his technical expertise, projects, or career preferences. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        isTyping: false
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans antialiased flex flex-col">
      
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div 
                    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
                    onClick={() => navigate('/')}
                  >
                    <div className="w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-[10px] tracking-tighter">TS</span>
                    </div>
                    <span className="absolute text-white font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-gray-900 font-bold text-xl leading-tight tracking-tighter">THIRUMURUGAN S</div>
                  <div className="text-gray-600 text-xs font-light tracking-widest uppercase">AI Research Engineer</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={clearChat}
                className="flex items-center space-x-2 bg-white text-gray-700 hover:bg-gray-900 hover:text-white border border-gray-300 hover:border-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                <FaTimes className="w-4 h-4" />
                <span className="hidden sm:inline">Clear Chat</span>
              </button>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 bg-gray-900 text-white hover:bg-white hover:text-gray-900 border border-gray-900 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaHome className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-2xl shadow-sm group hover:shadow-md transition-all duration-300 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 text-lg font-semibold tracking-wide">Professional Profile Assistant</span>
            </div>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Get detailed information about technical skills, project experience, and professional background
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Sidebar - Question Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="text-gray-900 font-semibold text-lg mb-4 flex items-center">
                  <FaBriefcase className="w-5 h-5 text-gray-600 mr-2" />
                  Question Categories
                </h3>
                <div className="space-y-2">
                  {Object.entries(categories).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeCategory === key
                          ? 'bg-gray-900 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                      }`}
                    >
                      <span className={`${activeCategory === key ? 'text-white' : 'text-gray-500'}`}>
                        {category.icon}
                      </span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[600px] flex flex-col">
                
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                          message.sender === 'user'
                            ? 'bg-gray-900 text-white rounded-br-none'
                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-3">
                          {message.sender === 'bot' ? (
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <FaRobot className="w-4 h-4 text-blue-600" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <FaUser className="w-4 h-4 text-gray-600" />
                            </div>
                          )}
                          <span className="text-sm font-medium">
                            {message.sender === 'bot' ? 'Profile Assistant' : 'You'}
                          </span>
                        </div>
                        
                        {message.sender === 'bot' && message.isTyping ? (
                          <div className="text-sm leading-relaxed">
                            <TypingAnimation 
                              text={message.text}
                              speed={15}
                              onComplete={() => {}}
                            />
                          </div>
                        ) : (
                          <div className="text-sm leading-relaxed whitespace-pre-line">
                            {message.text}
                          </div>
                        )}
                        
                        <div className={`text-xs mt-3 ${
                          message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-none p-4 max-w-xs shadow-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaRobot className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium">Processing...</span>
                        </div>
                        <div className="flex space-x-1 mt-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  <h4 className="text-gray-700 font-semibold text-sm mb-3 flex items-center">
                    <FaBriefcase className="w-4 h-4 text-gray-500 mr-2" />
                    Suggested Questions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                    {filteredQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestionClick(question.text)}
                        disabled={isLoading || isTyping}
                        className="text-left text-xs bg-white border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-sm"
                      >
                        {question.text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about technical skills, project experience, or professional background..."
                      disabled={isLoading || isTyping}
                      className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-gray-900 placeholder-gray-500 text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim() || isLoading || isTyping}
                      className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2 shadow-lg"
                    >
                      <FaPaperPlane className="w-4 h-4" />
                      <span className="hidden sm:inline">Send</span>
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs mt-2 text-center">
                    {isTyping ? "Assistant is typing..." : "Ask specific questions about professional qualifications and experience"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAboutMe;