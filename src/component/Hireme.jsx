import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { FaHome, FaLinkedin, FaGithub, FaHackerrank, FaNetworkWired, FaFileUpload, FaCheck, FaTimes, FaRobot, FaSync, FaBars, FaTimes as FaClose, FaUser, FaBuilding, FaGlobe } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiHackerrank } from 'react-icons/si';
import API_URLS from './ApiURL';

// Toast Component
const Toast = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const borderColor = type === 'success' ? 'border-green-400' : 'border-red-400';
  
  return (
    <div className={`fixed top-20 right-4 z-50 ${bgColor} border ${borderColor} text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-slideIn`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {type === 'success' ? (
            <FaCheck className="w-5 h-5 mr-2" />
          ) : (
            <FaTimes className="w-5 h-5 mr-2" />
          )}
          <span className="font-medium">{message}</span>
        </div>
        <button 
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 transition-colors"
        >
          <FaTimes className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Text extraction utility functions
class TextExtractionUtils {
  // Extract text from PDF file
  static async extractTextFromPDF(file, organizationName = '') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          // For PDF files, we'll use a simulated extraction since actual PDF parsing requires libraries
          // In a real implementation, you would use pdf.js or similar library
          const simulatedText = await this.simulatePDFExtraction(file, organizationName);
          resolve(simulatedText);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read PDF file'));
      reader.readAsArrayBuffer(file);
    });
  }

  // Extract text from Word document
  static async extractTextFromWord(file, organizationName = '') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          // For Word documents, simulate text extraction
          // In a real implementation, you would use mammoth.js or similar library
          const simulatedText = this.simulateWordExtraction(file, organizationName);
          resolve(simulatedText);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read Word document'));
      reader.readAsArrayBuffer(file);
    });
  }

  // Extract text from text file
  static async extractTextFromText(file, organizationName = '') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        // Enhance text content with organization name if provided
        const enhancedContent = organizationName ? 
          content.replace(/\[Organization\]/g, organizationName) : 
          content;
        resolve(enhancedContent);
      };
      reader.onerror = () => reject(new Error('Failed to read text file'));
      reader.readAsText(file);
    });
  }

  // Simulate PDF text extraction (replace with actual PDF.js implementation)
  static async simulatePDFExtraction(file, organizationName = '') {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return `
EXTRACTED JOB DESCRIPTION FROM PDF

Position: AI Research Engineer
Company: ${organizationName || 'Technology Company'}

Job Summary:
We are seeking a skilled AI Research Engineer with expertise in machine learning, deep learning, and natural language processing. The ideal candidate will have hands-on experience with Python, PyTorch, TensorFlow, and cloud platforms.

Key Responsibilities:
- Develop and implement machine learning models for various applications
- Work with large datasets and implement data processing pipelines
- Collaborate with cross-functional teams to deploy AI solutions
- Research and implement state-of-the-art AI algorithms
- Optimize model performance and scalability

Technical Requirements:
- Strong proficiency in Python programming
- Experience with PyTorch and TensorFlow frameworks
- Knowledge of cloud platforms (AWS, Azure, or GCP)
- Familiarity with REST API development
- Experience with database systems (SQL, PostgreSQL)
- Understanding of DevOps practices and CI/CD pipelines

Qualifications:
- Bachelor's or Master's degree in Computer Science or related field
- 2+ years of experience in AI/ML development
- Strong problem-solving skills and analytical thinking

This is a sample extracted text from the uploaded PDF file. The actual content would be extracted using PDF parsing libraries.
    `.trim();
  }

  // Simulate Word document text extraction
  static simulateWordExtraction(file, organizationName = '') {
    return `
EXTRACTED JOB DESCRIPTION FROM WORD DOCUMENT

Job Title: Senior AI Engineer
Organization: ${organizationName || 'Innovative Tech Company'}

Role Overview:
We are looking for an experienced AI Engineer to join our dynamic team. The candidate should have strong background in artificial intelligence, machine learning, and software development.

Key Skills Required:
- Python programming and FastAPI development
- Machine Learning and Deep Learning frameworks
- Cloud services (Azure OpenAI, AWS Bedrock)
- React frontend development experience
- Database management (PostgreSQL, MySQL)
- Docker and Kubernetes containerization
- Natural Language Processing (NLP)
- Computer Vision applications

Primary Responsibilities:
- Design and develop AI-powered applications
- Implement and fine-tune machine learning models
- Collaborate with data scientists and product teams
- Deploy and maintain AI solutions in production
- Conduct research and implement new AI technologies

Education and Experience:
- Degree in Computer Science, AI, or related field
- 3+ years of professional experience in AI development
- Portfolio of successful AI projects

This content was extracted from the uploaded Word document. Actual implementation would use proper Word document parsing.
    `.trim();
  }

  // Main extraction function that routes to appropriate method
  static async extractTextFromFile(file, organizationName = '') {
    const fileType = file.type;
    
    try {
      if (fileType === 'application/pdf') {
        return await this.extractTextFromPDF(file, organizationName);
      } else if (fileType === 'application/msword' || 
                 fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        return await this.extractTextFromWord(file, organizationName);
      } else if (fileType === 'text/plain') {
        return await this.extractTextFromText(file, organizationName);
      } else {
        throw new Error('Unsupported file type');
      }
    } catch (error) {
      console.error('Text extraction error:', error);
      throw new Error(`Failed to extract text from file: ${error.message}`);
    }
  }
}

// AI Analysis Service
class AIAnalysisService {
  constructor() {
    this.endpoint = "https://models.inference.ai.azure.com";
    this.model = "gpt-4";
  }

  async analyzeJobDescription(jobDescription, skills) {
    const prompt = this.createAnalysisPrompt(jobDescription, skills);
    
    try {
      const analysis = await this.simulateAIAnalysis(prompt);
      return analysis;
    } catch (error) {
      console.error('AI Analysis error:', error);
      return this.getFallbackAnalysis(jobDescription, skills);
    }
  }

  createAnalysisPrompt(jobDescription, skills) {
    const skillList = skills.flatMap(group => group.items).join(', ');
    
    return `
    Analyze the job description and match it with the candidate's skills. Provide a detailed analysis with:

    JOB DESCRIPTION:
    ${jobDescription}

    CANDIDATE SKILLS:
    ${skillList}

    Please provide analysis in this JSON format:
    {
      "matchPercentage": number,
      "summary": "brief overall match summary",
      "strengths": ["skill1", "skill2", ...],
      "missingSkills": ["skill1", "skill2", ...],
      "recommendations": ["suggestion1", "suggestion2", ...],
      "categoryAnalysis": {
        "AI & Machine Learning": { match: number, details: string },
        "Backend Technologies": { match: number, details: string },
        "Cloud & Services": { match: number, details: string },
        "Frontend Technologies": { match: number, details: string },
        "Databases": { match: number, details: string },
        "Tools & DevOps": { match: number, details: string },
        "Data Science": { match: number, details: string }
      }
    }
    `;
  }

  async simulateAIAnalysis(prompt) {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const jobDescription = prompt.split('JOB DESCRIPTION:')[1]?.split('CANDIDATE SKILLS:')[0] || '';
    const skillsText = prompt.split('CANDIDATE SKILLS:')[1] || '';
    
    const lowerJD = jobDescription.toLowerCase();
    const allSkills = this.extractSkillsFromText(skillsText);
    
    const matchedSkills = allSkills.filter(skill => 
      lowerJD.includes(skill.toLowerCase())
    );
    
    const matchPercentage = Math.round((matchedSkills.length / allSkills.length) * 100);
    
    const categoryAnalysis = this.generateCategoryAnalysis(lowerJD);
    
    return {
      matchPercentage,
      summary: this.generateSummary(matchPercentage, matchedSkills.length, allSkills.length),
      strengths: matchedSkills.slice(0, 8),
      missingSkills: allSkills.filter(skill => !matchedSkills.includes(skill)).slice(0, 6),
      recommendations: this.generateRecommendations(matchPercentage, matchedSkills, allSkills),
      categoryAnalysis
    };
  }

  extractSkillsFromText(skillsText) {
    return skillsText.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
  }

  generateCategoryAnalysis(jobDescription) {
    const categories = {
      "AI & Machine Learning": ["ai", "machine learning", "deep learning", "pytorch", "tensorflow", "llm", "rag", "nlp", "computer vision"],
      "Backend Technologies": ["python", "fastapi", "django", "flask", "rest api", "microservices", "node.js", "javascript"],
      "Cloud & Services": ["azure", "aws", "cloud", "docker", "kubernetes", "ci/cd", "openai", "bedrock"],
      "Frontend Technologies": ["react", "html", "css", "javascript", "frontend", "ui/ux"],
      "Databases": ["sql", "postgresql", "mysql", "mongodb", "database", "vector database"],
      "Tools & DevOps": ["git", "devops", "automation", "web scraping", "jira", "agile"],
      "Data Science": ["pandas", "numpy", "data analysis", "statistics", "playwright"]
    };

    const analysis = {};
    
    Object.entries(categories).forEach(([category, keywords]) => {
      const matches = keywords.filter(keyword => jobDescription.includes(keyword));
      const matchPercentage = Math.round((matches.length / keywords.length) * 100);
      
      analysis[category] = {
        match: matchPercentage,
        details: matches.length > 0 ? 
          `Strong match in ${matches.slice(0, 3).join(', ')}` : 
          'Limited match found'
      };
    });

    return analysis;
  }

  generateSummary(matchPercentage, matchedCount, totalSkills) {
    if (matchPercentage >= 80) {
      return `Excellent match! ${matchedCount} out of ${totalSkills} skills align perfectly with the job requirements.`;
    } else if (matchPercentage >= 60) {
      return `Strong match with ${matchedCount} relevant skills. Good alignment with key requirements.`;
    } else if (matchPercentage >= 40) {
      return `Moderate match. ${matchedCount} skills match, consider highlighting transferable skills.`;
    } else {
      return `Basic match found. Focus on core competencies and willingness to learn new technologies.`;
    }
  }

  generateRecommendations(matchPercentage, matchedSkills, allSkills) {
    const recommendations = [];
    
    if (matchPercentage >= 70) {
      recommendations.push("Highlight your expertise in matched skills during interviews");
      recommendations.push("Emphasize project experience with these technologies");
    } else if (matchPercentage >= 50) {
      recommendations.push("Focus on your strongest matching skills in application");
      recommendations.push("Consider upskilling in key missing areas");
    } else {
      recommendations.push("Emphasize learning ability and adaptability");
      recommendations.push("Highlight transferable skills and problem-solving approach");
    }
    
    recommendations.push("Prepare specific examples of projects using matched technologies");
    recommendations.push("Research company's tech stack for better alignment");
    
    return recommendations;
  }

  getFallbackAnalysis(jobDescription, skills) {
    return {
      matchPercentage: 50,
      summary: "Basic analysis completed. For detailed insights, ensure AI service is configured.",
      strengths: skills[0]?.items.slice(0, 4) || [],
      missingSkills: skills[1]?.items.slice(0, 3) || [],
      recommendations: [
        "Review the job description carefully",
        "Highlight relevant project experience",
        "Emphasize your learning capabilities"
      ],
      categoryAnalysis: {}
    };
  }
}

// API Service
class APIService {
  async submitHireMeForm(formData) {
    const payload = {
      recruiterName: formData.recruiterName,
      recruiterPhone: formData.recruiterPhone,
      recruiterMail: formData.recruiterEmail,
      designation: formData.designation,
      organizationName: formData.organizationName,
      JOBDescription: formData.jobDescription
    };

    try {
      const response = await fetch(API_URLS.HIREME.RECRUITER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  }
}

const Hireme = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    recruiterName: '',
    recruiterPhone: '',
    recruiterEmail: '',
    organizationName: '',
    designation: '',
    jobDescription: ''
  });
  const [errors, setErrors] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAIAnalyzing, setIsAIAnalyzing] = useState(false);
  const [skillMatches, setSkillMatches] = useState(null);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [activeTab, setActiveTab] = useState('basic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Color palette matching StartProject
  const colors = {
    primary: {
      dark: '#0b090a',      // Almost black
      darker: '#161a1d',    // Dark charcoal
      burgundy: {
        dark: '#a80b0dff',    // Deep burgundy
        medium: '#a4161a',  // Medium burgundy
        light: '#ba181b',   // Light burgundy
        bright: '#e5383b'   // Bright red
      }
    },
    neutral: {
      gray: '#6b7280',      // Gray for text
      lightGray: '#d3d3d3', // Light gray
      cream: '#ffffff',     // White background
      white: '#ffffff'      // Pure white
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/thirumurugan-subramaniyan-a62351212/' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/thirumurugan2001' },
    { icon: <SiCodechef className="w-5 h-5" />, name: 'CodeChef', url: 'https://www.codechef.com/users/thiru2001' },
    { icon: <FaHackerrank className="w-5 h-5" />, name: 'HackerRank', url: 'https://www.hackerrank.com/profile/thirusubramaniy1' },
    { icon: <SiLeetcode className="w-5 h-5" />, name: 'LeetCode', url: 'https://leetcode.com/u/thirusubramaniyan2001/' },
    { icon: <SiHackerrank className="w-5 h-5" />, name: 'HackerEarth', url: 'https://www.hackerearth.com/@thirumuruganSubramaniyan/' },
  ];

  const skills = [
    {
      category: "AI & Machine Learning",
      items: ["Gen AI", "RAG Systems", "Fine Tuning", "PyTorch", "TensorFlow", "LangChain", "Vector Databases", "LLM", "Machine Learning", "Computer Vision", "NLP", "Natural Language Processing"]
    },
    {
      category: "Backend Technologies",
      items: ["Python", "Flask", "Sanic", "Django", "FastAPI", "JavaScript", "REST APIs", "API Development", "Microservices", "Node.js", "TypeScript"]
    },
    {
      category: "Cloud & Services",
      items: ["Azure OpenAI", "AWS Bedrock", "Azure Cloud", "AWS Cloud", "Hugging Face", "Ollama", "Azure Functions", "AWS Lambda", "Docker", "CI/CD", "Kubernetes", "Cloud Computing"]
    },
    {
      category: "Frontend Technologies",
      items: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Development", "UI/UX"]
    },
    {
      category: "Databases",
      items: ["MS SQL", "PostgreSQL", "MySQL", "Database Design", "Performance Optimization", "SQL", "NoSQL", "MongoDB", "Vector Databases"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitLab", "CI/CD Pipelines", "Postman", "pgAdmin", "Web Scraping", "Python Automation", "Jira", "Agile", "Scrum"]
    },
    {
      category: "Data Science",
      items: ["NumPy", "Pandas", "Data Analysis", "Playwright", "Automation Testing", "Data Visualization", "Statistical Analysis"]
    }
  ];

  const aiService = new AIAnalysisService();
  const apiService = new APIService();

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 5000);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.recruiterName.trim()) {
      newErrors.recruiterName = "Recruiter name is required";
    }
    
    if (!formData.recruiterPhone.trim()) {
      newErrors.recruiterPhone = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.recruiterPhone.replace(/\D/g, ''))) {
      newErrors.recruiterPhone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.recruiterEmail.trim()) {
      newErrors.recruiterEmail = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.recruiterEmail)) {
      newErrors.recruiterEmail = "Please enter a valid email address";
    }
    
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }
    
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }
    
    if (!formData.jobDescription.trim() && !extractedText) {
      newErrors.jobDescription = "Job description is required or upload a file";
    } else if (formData.jobDescription.length < 50 && !extractedText) {
      newErrors.jobDescription = "Job description should be at least 50 characters";
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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      showToast('Please upload a PDF, Word document, or text file', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast('File size should be less than 5MB', 'error');
      return;
    }

    setUploadedFile(file);
    setIsAnalyzing(true);

    try {
      // Extract text from the uploaded file with organization name
      const extractedContent = await TextExtractionUtils.extractTextFromFile(
        file, 
        formData.organizationName
      );
      
      setExtractedText(extractedContent);
      setFormData(prev => ({
        ...prev,
        jobDescription: extractedContent
      }));
      
      // Analyze skills with the extracted content
      analyzeSkills(extractedContent);
      showToast('File uploaded and content extracted successfully!', 'success');
    } catch (error) {
      console.error('File processing error:', error);
      showToast(`Failed to process file: ${error.message}`, 'error');
      
      // Fallback to simulated content if extraction fails
      const fallbackContent = `Unable to extract text from ${file.name}. Please manually enter the job description below.`;
      setExtractedText(fallbackContent);
      setFormData(prev => ({
        ...prev,
        jobDescription: fallbackContent
      }));
    } finally {
      setIsAnalyzing(false);
    }
  };

  const analyzeSkills = (text) => {
    const lowerText = text.toLowerCase();
    const matchedSkills = {};
    const missingSkills = [];

    skills.forEach(group => {
      const categoryMatches = group.items.filter(skill => 
        lowerText.includes(skill.toLowerCase())
      );
      
      if (categoryMatches.length > 0) {
        matchedSkills[group.category] = categoryMatches;
      }

      group.items.forEach(skill => {
        if (!lowerText.includes(skill.toLowerCase())) {
          missingSkills.push(skill);
        }
      });
    });

    const totalSkills = skills.flatMap(group => group.items).length;
    const matchedCount = Object.values(matchedSkills).flat().length;
    const matchPercentage = Math.round((matchedCount / totalSkills) * 100);

    setSkillMatches({
      matchedSkills,
      missingSkills: missingSkills.slice(0, 10),
      matchPercentage,
      matchedCount,
      totalSkills
    });
  };

  const handleAIAnalysis = async () => {
    if (!formData.jobDescription.trim() && !extractedText) {
      showToast('Please provide a job description first', 'error');
      return;
    }

    setIsAIAnalyzing(true);
    setAiAnalysis(null);
    setActiveTab('ai');

    try {
      const analysis = await aiService.analyzeJobDescription(
        formData.jobDescription || extractedText,
        skills
      );
      setAiAnalysis(analysis);
    } catch (error) {
      console.error('AI Analysis failed:', error);
      showToast('AI analysis failed. Please try again.', 'error');
    } finally {
      setIsAIAnalyzing(false);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setExtractedText('');
    setSkillMatches(null);
    setAiAnalysis(null);
    setFormData(prev => ({
      ...prev,
      jobDescription: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    showToast('File removed successfully', 'success');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await apiService.submitHireMeForm(formData);
      
      if (result.statusCode === 200 && result.Status === true) {
        showToast(result.message || 'Thank you for your interest! I will get back to you soon.', 'success');
        
        // Reset form
        setFormData({
          recruiterName: '',
          recruiterPhone: '',
          recruiterEmail: '',
          organizationName: '',
          designation: '',
          jobDescription: ''
        });
        setUploadedFile(null);
        setExtractedText('');
        setSkillMatches(null);
        setAiAnalysis(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        showToast(result.message || 'Failed to send job opportunity details. Please try again.', 'error');
      }
    } catch (error) {
      console.error('API submission error:', error);
      showToast('Network error. Please check your connection and try again.', 'error');
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

  return (
    <div className="min-h-screen bg-white">
      {/* Toast Message */}
      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ show: false, message: '', type: '' })}
        />
      )}

      {/* Header - Updated with Research Button */}
      <nav className="fixed top-0 w-full bg-white backdrop-blur-lg z-50 border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div 
                    className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer shadow-md"
                    onClick={() => navigate('/')}
                  >
                    <div className="w-6 h-6 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-[10px] tracking-tighter">TS</span>
                    </div>
                    <span className="absolute text-white font-bold text-sm tracking-tighter group-hover:opacity-0 transition-opacity duration-300">TS</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-gray-900 font-bold text-xl leading-tight tracking-tight">THIRUMURUGAN S</div>
                  <div className="text-gray-700 text-xs font-medium tracking-wider opacity-90 uppercase">AI Research Engineer</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-all duration-300 tracking-wide relative group capitalize"
                >
                  {item === 'home' ? 'Home' : 
                   item === 'about' ? 'About' : 
                   item === 'projects' ? 'Projects' : 
                   item === 'experience' ? 'Experience' : 
                   item === 'contact' ? 'Contact' : item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              {/* Action Buttons - Updated with Research Button */}
              <div className="flex items-center space-x-3 ml-4">
                <button 
                  onClick={handleRNDClick}
                  className="bg-gradient-to-r from-[#ba181b] to-[#e5383b] text-white hover:from-[#0b090a] hover:to-[#161a1d] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#ba181b]/20"
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
                  onClick={handleStartProjectClick}
                  className="bg-gradient-to-r from-[#ba181b] to-[#e5383b] text-white hover:from-[#0b090a] hover:to-[#161a1d] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#ba181b]/20"
                >
                  Start Project
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-gray-900 p-2 transition-colors duration-300"
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
            <div className="md:hidden absolute top-16 left-0 w-full bg-white backdrop-blur-lg border-b border-gray-300 shadow-lg">
              <div className="flex flex-col space-y-1 p-4">
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-700 hover:text-gray-900 py-3 px-4 font-medium text-sm transition-all duration-300 border-l-2 border-transparent hover:border-red-600 hover:bg-gray-50 rounded-r-lg text-left capitalize"
                  >
                    {item === 'home' ? 'Home' : 
                     item === 'about' ? 'About' : 
                     item === 'projects' ? 'Projects' : 
                     item === 'experience' ? 'Experience' : 
                     item === 'contact' ? 'Contact' : item}
                  </button>
                ))}
                
                {/* Mobile Action Buttons - Updated with Research Button */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-300 mt-2">
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
                </div>
                
                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-6 pt-4 border-t border-gray-300 mt-4">
                  {socialLinks.slice(0, 3).map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-50"
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

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Section - Contact Information & Job Opportunity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Information */}
            <div className="space-y-6">
              {/* Professional Badge */}
              <div className="relative inline-block">
                <div 
                  className="professional-badge inline-flex items-center px-4 py-2.5 rounded-full border cursor-pointer transition-all duration-300 group bg-white"
                  style={{ 
                    borderColor: colors.primary.burgundy.medium,
                    color: colors.primary.burgundy.medium
                  }}
                >
                  <div 
                    className="badge-dot w-2 h-2 rounded-full mr-3 animate-pulse transition-all duration-300"
                    style={{ 
                      backgroundColor: colors.primary.burgundy.medium 
                    }}
                  ></div>
                  <span className="badge-text text-sm font-medium tracking-wide transition-colors duration-300">OPEN TO WORK</span>
                </div>
                
                {/* CSS for hover effect */}
                <style jsx>{`
                  .professional-badge:hover {
                    background-color: ${colors.primary.burgundy.medium} !important;
                    color: ${colors.neutral.white} !important;
                  }
                  .professional-badge:hover .badge-dot {
                    background-color: ${colors.neutral.white} !important;
                    animation: none !important;
                    transform: scale(1.1);
                  }
                  .professional-badge:hover .badge-text {
                    color: ${colors.neutral.white} !important;
                  }
                `}</style>
              </div>

              {/* Title Section with Split Colors */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  <span style={{ color: colors.primary.dark }}>Hire </span>
                  <span style={{ color: colors.primary.burgundy.dark }}>Me</span>
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-black to-red-800"></div>
                  <p className="text-xl font-light tracking-wide text-gray-700">
                    Let's build something amazing together
                  </p>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">Note:</span> I'm currently open to work opportunities and available to join within a month. I'm also ready to relocate for the right opportunity.
                </p>
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

            {/* Right Side - Job Opportunity Details */}
            <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 h-full border border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 tracking-tight text-gray-900">Job Opportunity Details</h2>
              <p className="text-gray-700 mb-4 text-sm tracking-wide">Fill in the details below and I'll get back to you soon</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="recruiterName"
                    placeholder="Recruiter Name *" 
                    value={formData.recruiterName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                      errors.recruiterName ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 placeholder-gray-500`}
                  />
                  {errors.recruiterName && (
                    <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.recruiterName}</p>
                  )}
                </div>

                <div>
                  <input 
                    type="tel" 
                    name="recruiterPhone"
                    placeholder="Recruiter Contact Number *" 
                    value={formData.recruiterPhone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                      errors.recruiterPhone ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 placeholder-gray-500`}
                  />
                  {errors.recruiterPhone && (
                    <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.recruiterPhone}</p>
                  )}
                </div>

                <div>
                  <input 
                    type="email" 
                    name="recruiterEmail"
                    placeholder="Recruiter Email Address *" 
                    value={formData.recruiterEmail}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                      errors.recruiterEmail ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 placeholder-gray-500`}
                  />
                  {errors.recruiterEmail && (
                    <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.recruiterEmail}</p>
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
                    name="designation"
                    placeholder="Designation *" 
                    value={formData.designation}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 border ${
                      errors.designation ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 placeholder-gray-500`}
                  />
                  {errors.designation && (
                    <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.designation}</p>
                  )}
                </div>

                {/* File Upload Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 text-xs font-medium tracking-wide">
                      Upload Job Description (PDF/Word/TXT)
                    </label>
                    {uploadedFile && (
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-gray-600 hover:text-gray-900 text-xs transition-all duration-300"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {!uploadedFile ? (
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-600 transition-all duration-300 cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FaFileUpload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 text-xs mb-1">Click to upload job description file</p>
                      <p className="text-gray-500 text-xs">Supports: PDF, DOC, DOCX, TXT (Max 5MB)</p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx,.txt"
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FaFileUpload className="w-4 h-4 text-gray-600" />
                          <div>
                            <p className="text-gray-900 text-xs font-medium">{uploadedFile.name}</p>
                            <p className="text-gray-600 text-xs">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • {uploadedFile.type}
                            </p>
                          </div>
                        </div>
                        {isAnalyzing ? (
                          <div className="flex items-center space-x-1">
                            <div className="animate-spin rounded-full h-3 w-3 border-2 border-red-600 border-t-transparent"></div>
                            <span className="text-gray-600 text-xs">Extracting text...</span>
                          </div>
                        ) : (
                          <span className="text-green-600 text-xs font-medium">✓ Extracted</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <textarea 
                    name="jobDescription"
                    placeholder="Job description will be auto-populated from uploaded file, or type here *" 
                    rows="6"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 bg-white rounded-lg text-sm transition-all duration-300 resize-none border ${
                      errors.jobDescription ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 placeholder-gray-500`}
                  />
                  {errors.jobDescription && (
                    <p className="text-red-500 text-xs mt-1 tracking-wide">{errors.jobDescription}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1 tracking-wide">
                    {formData.jobDescription.length} characters {extractedText && '(content from uploaded file)'}
                  </p>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl tracking-wide text-sm flex items-center justify-center space-x-2 border border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600 disabled:bg-gray-400 disabled:border-gray-400 disabled:hover:text-white"
                >
                  {isSubmitting ? (
                    <>
                      <FaSync className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section - Analysis (Full Width) */}
          <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Skills Analysis</h2>
              <button
                onClick={handleAIAnalysis}
                disabled={isAIAnalyzing || (!formData.jobDescription && !extractedText)}
                className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-red-600 border border-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAIAnalyzing ? (
                  <FaSync className="w-4 h-4 animate-spin" />
                ) : (
                  <FaRobot className="w-4 h-4" />
                )}
                <span>{isAIAnalyzing ? 'AI Analyzing...' : 'Run AI Analysis'}</span>
              </button>
            </div>

            {/* Analysis Tabs */}
            <div className="flex space-x-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('basic')}
                className={`pb-3 px-4 font-medium text-sm transition-all duration-300 ${
                  activeTab === 'basic' 
                    ? 'text-gray-900 border-b-2 border-red-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Basic Analysis
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`pb-3 px-4 font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'ai' 
                    ? 'text-gray-900 border-b-2 border-red-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <FaRobot className="w-4 h-4" />
                <span>AI-Powered Analysis</span>
              </button>
            </div>

            {/* Basic Analysis Tab */}
            {activeTab === 'basic' && (
              <div className="space-y-6">
                {skillMatches ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Match Overview */}
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">Match Overview</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-700 text-sm">Overall Match Rate</span>
                              <span className="text-gray-900 font-semibold">{skillMatches.matchPercentage}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3">
                              <div 
                                className="bg-red-600 h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skillMatches.matchPercentage}%` }}
                              ></div>
                            </div>
                            <p className="text-gray-600 text-xs mt-2">
                              {skillMatches.matchedCount} out of {skillMatches.totalSkills} skills matched
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Matched Skills by Category */}
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">Matched Skills by Category</h3>
                        <div className="space-y-3 max-h-60 overflow-y-auto">
                          {Object.entries(skillMatches.matchedSkills).map(([category, skills]) => (
                            <div key={category} className="space-y-2">
                              <h4 className="text-gray-700 text-sm font-medium">{category}</h4>
                              <div className="flex flex-wrap gap-1">
                                {skills.map((skill, index) => (
                                  <span
                                    key={index}
                                    className="bg-gray-50 text-gray-900 border border-gray-200 px-2 py-1 rounded text-xs flex items-center space-x-1"
                                  >
                                    <FaCheck className="w-2 h-2 text-red-600" />
                                    <span>{skill}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Missing Skills */}
                    {skillMatches.missingSkills.length > 0 && (
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">Potential Skill Gaps</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillMatches.missingSkills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-50 text-gray-900 border border-gray-200 px-3 py-2 rounded text-sm flex items-center space-x-1"
                            >
                              <FaTimes className="w-3 h-3 text-red-500" />
                              <span>{skill}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 text-sm">
                      Upload a job description or enter one above to see the basic skills analysis.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* AI-Powered Analysis Tab */}
            {activeTab === 'ai' && (
              <div className="space-y-6">
                {isAIAnalyzing ? (
                  <div className="text-center py-12">
                    <FaSync className="w-8 h-8 text-red-600 opacity-50 animate-spin mx-auto mb-4" />
                    <p className="text-gray-700 text-sm">AI is analyzing the job description...</p>
                    <p className="text-gray-500 text-xs mt-2">This may take a few moments</p>
                  </div>
                ) : aiAnalysis ? (
                  <div className="space-y-6">
                    {/* AI Match Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-1">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">AI Match Score</h3>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-900 mb-2">{aiAnalysis.matchPercentage}%</div>
                          <p className="text-gray-700 text-sm">{aiAnalysis.summary}</p>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-2">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">Category Analysis</h3>
                        <div className="space-y-3">
                          {Object.entries(aiAnalysis.categoryAnalysis).map(([category, data]) => (
                            <div key={category} className="flex items-center justify-between">
                              <span className="text-gray-700 text-sm flex-1">{category}</span>
                              <div className="flex items-center space-x-3 flex-1">
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                  <div 
                                    className="bg-red-600 h-2 rounded-full"
                                    style={{ width: `${data.match}%` }}
                                  ></div>
                                </div>
                                <span className="text-gray-700 text-sm w-12 text-right">{data.match}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Strengths & Recommendations */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">Key Strengths</h3>
                        <div className="flex flex-wrap gap-2">
                          {aiAnalysis.strengths.map((strength, index) => (
                            <span
                              key={index}
                              className="bg-gray-50 text-gray-900 border border-gray-200 px-3 py-2 rounded text-sm"
                            >
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">AI Recommendations</h3>
                        <ul className="text-gray-700 text-sm space-y-2">
                          {aiAnalysis.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <FaCheck className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FaRobot className="w-12 h-12 text-red-600 opacity-50 mx-auto mb-4" />
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">AI-Powered Analysis</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Get detailed insights about skills match, category analysis, and personalized recommendations.
                    </p>
                    <button
                      onClick={handleAIAnalysis}
                      disabled={!formData.jobDescription && !extractedText}
                      className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-red-600 border border-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Run AI Analysis
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-gray-700 text-sm tracking-wide font-light">
              © 2025 THIRUMURUGAN SUBRAMANIYAN • AI RESEARCH ENGINEER • ALL RIGHTS RESERVED
            </p>
            <p className="text-gray-500 text-xs mt-1 tracking-wide">
              OPEN TO OPPORTUNITIES • AVAILABLE IN 1 MONTH • READY TO RELOCATE
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Hireme;