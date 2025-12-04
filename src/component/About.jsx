import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaLaptopCode, 
  FaAward, 
  FaMicrochip, 
  FaRocket, 
  FaShieldAlt, 
  FaBrain, 
  FaCloud, 
  FaRobot, 
  FaCogs, 
  FaNetworkWired,
  FaEye,
  FaLanguage,
  FaServer,
  FaGraduationCap,
  FaUsers,
  FaLightbulb
} from 'react-icons/fa';
import { MdWork, MdSchool, MdPrecisionManufacturing, MdApi } from 'react-icons/md';
import { SiTensorflow, SiOpenai } from 'react-icons/si';

const About = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); 
  const achievements = [
    { number: '3+', label: 'Years Experience', icon: <MdWork className="text-2xl" /> },
    { number: '20+', label: 'Projects Completed', icon: <FaRocket className="text-2xl" /> },
    { number: '10+', label: 'AI Solutions', icon: <FaMicrochip className="text-2xl" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FaShieldAlt className="text-2xl" /> },
    { number: '100K+', label: 'Lines of Clean Code', icon: <FaLaptopCode className="text-2xl" /> }
  ];

  const duplicatedAchievements = [...achievements, ...achievements];

  // Navigation handler
  const handleGetInTouch = () => {
    navigate('/hire-me');
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">

        {/* Auto-Sliding Achievements Carousel */}
        <div className="relative mb-20">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden py-6"
          >
            {duplicatedAchievements.map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-[220px] text-center p-6 bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl hover:shadow-lg transition-all duration-300 group hover:border-[#ba181b]"
              >
                <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-[#0b090a] mb-2">{achievement.number}</div>
                <div className="text-[#161a1d] text-sm font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#0b090a] rounded-full">
                <div className="w-2 h-2 bg-[#ba181b] rounded-full mr-3"></div>
                <span className="text-[#ffffff] text-sm font-medium tracking-wide">PROFESSIONAL PROFILE</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0b090a] tracking-tight leading-tight">
                Transforming Ideas into <span className="text-[#ba181b]">Intelligent Solutions</span>
              </h2>
              
              <p className="text-lg text-[#161a1d] leading-relaxed tracking-wide max-w-3xl">
                A dedicated Software Engineer from Chennai with a strong foundation in AI-powered software development.
                Passionate about building intelligent and impactful digital systems that solve real-world problems through
                innovative technology and clean, scalable code.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-[#0b090a] tracking-tight flex items-center">
                <div className="w-10 h-10 bg-[#0b090a] rounded-lg flex items-center justify-center mr-4">
                  <MdPrecisionManufacturing className="text-[#ba181b] text-lg" />
                </div>
                Core Competencies
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AI & Machine Learning */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl">
                    <div className="w-12 h-12 bg-[#0b090a] rounded-lg flex items-center justify-center">
                      <FaBrain className="text-[#ba181b] text-xl" />
                    </div>
                    <h4 className="text-[#0b090a] font-semibold text-lg">AI & Machine Learning</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: 'AI Agents & Autonomous Systems', icon: <FaRobot className="w-4 h-4" /> },
                      { skill: 'LLM Fine-tuning', icon: <SiOpenai className="w-4 h-4" /> },
                      { skill: 'RAG Systems', icon: <FaNetworkWired className="w-4 h-4" /> },
                      { skill: 'Computer Vision', icon: <FaEye className="w-4 h-4" /> },
                      { skill: 'Natural Language Processing', icon: <FaLanguage className="w-4 h-4" /> },
                      { skill: 'PyTorch & TensorFlow', icon: <SiTensorflow className="w-4 h-4" /> }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4 text-[#161a1d] text-sm group hover:text-[#0b090a] transition-colors p-2 rounded-lg hover:bg-[#ba181b]/5">
                        <div className="text-[#ba181b] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Development & Cloud */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl">
                    <div className="w-12 h-12 bg-[#0b090a] rounded-lg flex items-center justify-center">
                      <FaCloud className="text-[#ba181b] text-xl" />
                    </div>
                    <h4 className="text-[#0b090a] font-semibold text-lg">Development & Cloud</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: 'Python & JavaScript', icon: <FaLaptopCode className="w-4 h-4" /> },
                      { skill: 'Azure OpenAI Services', icon: <FaServer className="w-4 h-4" /> },
                      { skill: 'AWS Bedrock & SageMaker', icon: <FaCloud className="w-4 h-4" /> },
                      { skill: 'FastAPI & React.js', icon: <MdApi className="w-4 h-4" /> },
                      { skill: 'CI/CD Pipelines', icon: <FaCogs className="w-4 h-4" /> },
                      { skill: 'Microservices Architecture', icon: <FaNetworkWired className="w-4 h-4" /> }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4 text-[#161a1d] text-sm group hover:text-[#0b090a] transition-colors p-2 rounded-lg hover:bg-[#ba181b]/5">
                        <div className="text-[#ba181b] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Side Cards */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
              <h3 className="text-[#0b090a] font-semibold text-lg mb-4 flex items-center">
                <div className="w-10 h-10 bg-[#0b090a] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <FaGraduationCap className="text-[#ba181b] text-lg" />
                </div>
                Education
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#ba181b] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <MdSchool className="text-[#ffffff] text-sm" />
                </div>
                <div>
                  <h4 className="text-[#0b090a] font-semibold mb-1">B.E Computer Science and Engineering</h4>
                  <p className="text-[#161a1d] text-sm">Karpagam Academy of Higher Education</p>
                  <p className="text-[#161a1d]/70 text-sm">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
              <h3 className="text-[#0b090a] font-semibold text-lg mb-4 flex items-center">
                <div className="w-10 h-10 bg-[#0b090a] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <FaUsers className="text-[#ba181b] text-lg" />
                </div>
                Leadership & Teamwork
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#ba181b] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <FaAward className="text-[#ffffff] text-sm" />
                </div>
                <div>
                  <p className="text-[#161a1d] text-sm leading-relaxed">
                    Former NCC Cadet with demonstrated leadership abilities and strong team collaboration experience.
                    Proven track record of leading projects and mentoring junior developers.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-[#0b090a] border border-[#0b090a] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-[#ffffff] font-semibold text-lg mb-4 flex items-center">
                <div className="w-10 h-10 bg-[#ba181b] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <FaLightbulb className="text-[#ffffff] text-lg" />
                </div>
                Innovation Philosophy
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#f5f3f4] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-[#0b090a] text-xs font-bold">IP</span>
                </div>
                <div>
                  <p className="text-[#b1a7a6] text-sm leading-relaxed italic">
                    "I believe in solving complex problems by combining analytical thinking with creative innovation, 
                    designing solutions that not only scale efficiently but also inspire meaningful change."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-[#ba181b] to-[#e5383b] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#ffffff] font-semibold text-lg mb-3">Ready to Collaborate?</h3>
              <p className="text-[#ffffff] text-sm mb-4">
                Let's discuss how we can transform your ideas into intelligent solutions.
              </p>
              <button 
                className="bg-[#0b090a] text-[#ffffff] px-6 py-2 rounded-lg font-medium hover:bg-[#161a1d] transition-colors"
                onClick={handleGetInTouch}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;