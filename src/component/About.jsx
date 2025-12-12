import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  FaLightbulb,
} from "react-icons/fa";
import {
  MdWork,
  MdSchool,
  MdPrecisionManufacturing,
  MdApi,
} from "react-icons/md";
import { SiTensorflow, SiOpenai } from "react-icons/si";

// Color Constants
const COLORS = {
  primary: "#8267ec",
  black: "#000000",
  white: "#ffffff",
  grayLight: "#f5f5f5",
  grayDark: "#1a1a1a",
  grayBorder: "#333333",
};

const About = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const achievements = [
    {
      number: "2+",
      label: "Years Experience",
      icon: <MdWork className="text-2xl" />,
    },
    {
      number: "20+",
      label: "Projects Completed",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      number: "10+",
      label: "AI Solutions",
      icon: <FaMicrochip className="text-2xl" />,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <FaShieldAlt className="text-2xl" />,
    },
    {
      number: "50K+",
      label: "Lines of Clean Code",
      icon: <FaLaptopCode className="text-2xl" />,
    },
  ];

  const duplicatedAchievements = [...achievements, ...achievements];

  // Navigation handler
  const handleGetInTouch = () => {
    navigate("/hire-me");
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Auto-Sliding Achievements Carousel */}
        <div className="relative mb-20">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden py-6">
            {duplicatedAchievements.map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-[220px] text-center p-6 bg-[#111111] border border-[#333333] rounded-xl hover:shadow-[0_0_25px_rgba(130,103,236,0.15)] transition-all duration-300 group hover:border-[#8267ec]"
              >
                <div className="text-[#8267ec] flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <div
                className="group inline-flex items-center px-4 py-2 bg-[#8267ec] text-white 
             border border-[#8267ec] rounded-full mb-6 
             hover:bg-white hover:text-black 
             transition-all duration-300 transform hover:scale-105 
             shadow-md hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]"
              >
                <div
                  className="w-2 h-2 bg-white rounded-full mr-3 
               transition-colors duration-300 group-hover:bg-black"
                ></div>

                <span className="text-sm font-medium tracking-wide transition-colors duration-300">
                  PROFESSIONAL PROFILE
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Transforming Ideas into{" "}
                <span className="bg-gradient-to-r from-[#5f5297ff] to-violet-900 text-transparent bg-clip-text">
                  Intelligent Solutions
                </span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed tracking-wide max-w-3xl">
                A dedicated Software Engineer from Chennai with a strong
                foundation in AI-powered software development. Passionate about
                building intelligent and impactful digital systems that solve
                real-world problems through innovative technology and clean,
                scalable code.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white tracking-tight flex items-center">
                <div className="w-10 h-10 bg-[#8267ec] rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                  <MdPrecisionManufacturing className="text-white text-lg" />
                </div>
                Core Competencies
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AI & Machine Learning */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-[#111111] border border-[#333333] rounded-xl hover:border-[#8267ec] transition-all duration-300">
                    <div className="w-12 h-12 bg-[#8267ec] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <FaBrain className="text-white text-xl" />
                    </div>
                    <h4 className="text-white font-semibold text-lg">
                      AI & Machine Learning
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        skill: "AI Agents & Autonomous Systems",
                        icon: <FaRobot className="w-4 h-4" />,
                      },
                      {
                        skill: "LLM Fine-tuning",
                        icon: <SiOpenai className="w-4 h-4" />,
                      },
                      {
                        skill: "RAG Systems",
                        icon: <FaNetworkWired className="w-4 h-4" />,
                      },
                      {
                        skill: "Computer Vision",
                        icon: <FaEye className="w-4 h-4" />,
                      },
                      {
                        skill: "Natural Language Processing",
                        icon: <FaLanguage className="w-4 h-4" />,
                      },
                      {
                        skill: "PyTorch & TensorFlow",
                        icon: <SiTensorflow className="w-4 h-4" />,
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-4 text-gray-300 text-sm group hover:text-white transition-colors p-2 rounded-lg hover:bg-[#8267ec]/10"
                      >
                        <div className="text-[#8267ec] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Development & Cloud */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-[#111111] border border-[#333333] rounded-xl hover:border-[#8267ec] transition-all duration-300">
                    <div className="w-12 h-12 bg-[#8267ec] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <FaCloud className="text-white text-xl" />
                    </div>
                    <h4 className="text-white font-semibold text-lg">
                      Development & Cloud
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        skill: "Python & JavaScript",
                        icon: <FaLaptopCode className="w-4 h-4" />,
                      },
                      {
                        skill: "Azure OpenAI Services",
                        icon: <FaServer className="w-4 h-4" />,
                      },
                      {
                        skill: "AWS Bedrock & SageMaker",
                        icon: <FaCloud className="w-4 h-4" />,
                      },
                      {
                        skill: "FastAPI & React.js",
                        icon: <MdApi className="w-4 h-4" />,
                      },
                      {
                        skill: "CI/CD Pipelines",
                        icon: <FaCogs className="w-4 h-4" />,
                      },
                      {
                        skill: "Microservices Architecture",
                        icon: <FaNetworkWired className="w-4 h-4" />,
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-4 text-gray-300 text-sm group hover:text-white transition-colors p-2 rounded-lg hover:bg-[#8267ec]/10"
                      >
                        <div className="text-[#8267ec] group-hover:scale-110 transition-transform">
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
            <div className="bg-[#111111] border border-[#333333] rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                <div className="w-10 h-10 bg-[#8267ec] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                Education
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#8267ec] rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MdSchool className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    B.E Computer Science and Engineering
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Karpagam Academy of Higher Education
                  </p>
                  <p className="text-gray-400 text-sm">
                    Coimbatore, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="bg-[#111111] border border-[#333333] rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(130,103,236,0.1)] transition-all duration-300 hover:border-[#8267ec] group">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                <div className="w-10 h-10 bg-[#8267ec] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <FaUsers className="text-white text-lg" />
                </div>
                Leadership & Teamwork
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#8267ec] rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaAward className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Former NCC Cadet with demonstrated leadership abilities and
                    strong team collaboration experience. Proven track record of
                    leading projects and mentoring junior developers.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-black border border-[#8267ec] rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(130,103,236,0.2)] transition-all duration-300 group">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                <div className="w-10 h-10 bg-[#8267ec] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <FaLightbulb className="text-white text-lg" />
                </div>
                Innovation Philosophy
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#8267ec]/20 border border-[#8267ec] rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-[#8267ec] text-xs font-bold">IP</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "I believe in solving complex problems by combining
                    analytical thinking with creative innovation, designing
                    solutions that not only scale efficiently but also inspire
                    meaningful change."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-[#8267ec] to-[#9d8aee] rounded-2xl p-6 text-center hover:shadow-[0_0_30px_rgba(130,103,236,0.3)] transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-3">
                Ready to Collaborate?
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Let's discuss how we can transform your ideas into intelligent
                solutions.
              </p>
              <button
                className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]"
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
