import React, { useEffect, useRef, useState } from 'react';
import { 
  FaCertificate, 
  FaAward, 
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCode,
  FaCloud,
  FaPython,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaGraduationCap,
  FaFileExcel,
  FaBullhorn,
  FaLaptopCode,
  FaBookOpen
} from 'react-icons/fa';
import { MdVerified, MdSecurity } from 'react-icons/md';

const Certifications = () => {
  const scrollRef = useRef(null);

  const certifications = [
    { 
      name: 'Information Security Management Systems', 
      url: 'https://drive.google.com/file/d/15WxRBZdffdfbRFUgiIYKYW3-B41HUFGq/view',
      icon: <MdSecurity className="text-3xl" />,
      category: 'Security',
      color: 'from-[#ba181b] to-[#e5383b]',
      issuer: 'ISO/IEC 27001',
      date: '2023',
      verified: true
    },
    { 
      name: 'The Complete HTML5 Course: From Beginning to Expert', 
      url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-457fea19-7f76-474c-b31f-83a9d1c91675.pdf',
      icon: <FaCode className="text-3xl" />,
      category: 'Web Development',
      color: 'from-[#0b090a] to-[#161a1d]',
      issuer: 'Udemy',
      date: '2023',
      verified: true
    },
    { 
      name: 'Engineering Virtual Program', 
      url: 'https://drive.google.com/file/d/1HwRpNV-30MUhD68o6DCXcoNFvKpp831H/view',
      icon: <FaGraduationCap className="text-3xl" />,
      category: 'Engineering',
      color: 'from-[#ba181b] to-[#e5383b]',
      issuer: 'Forage',
      date: '2023',
      verified: true
    },
    { 
      name: 'Introduction to HTML5', 
      url: 'https://drive.google.com/file/d/1Hrim-NSH01UtZPtDyzEO1zDTvUskdaJh/view',
      icon: <FaCode className="text-3xl" />,
      category: 'Web Development',
      color: 'from-[#0b090a] to-[#161a1d]',
      issuer: 'University of Michigan',
      date: '2022',
      verified: true
    },
    { 
      name: 'Introduction to Programming Using HTML and CSS', 
      url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-01d038ed-4f91-40cc-91f9-a35bb2576d4d.pdf',
      icon: <FaCode className="text-3xl" />,
      category: 'Programming',
      color: 'from-[#ba181b] to-[#e5383b]',
      issuer: 'Udemy',
      date: '2023',
      verified: true
    },
    { 
      name: 'SAR Application for flood hazard mapping and monitoring', 
      url: 'https://drive.google.com/file/d/1KNqCwdU4CwCX3QqzqYCoIdWPvuh3am_I/view',
      icon: <FaCloud className="text-3xl" />,
      category: 'Remote Sensing',
      color: 'from-[#0b090a] to-[#161a1d]',
      issuer: 'European Space Agency',
      date: '2023',
      verified: true
    },
    { 
      name: 'Engineering: Undergraduate & Masters Asia Virtual Experience Program', 
      url: 'https://drive.google.com/file/d/14tzoESk1cbO2V9g3DUDOLHA04a_ech6r/view',
      icon: <FaGraduationCap className="text-3xl" />,
      category: 'Engineering',
      color: 'from-[#ba181b] to-[#e5383b]',
      issuer: 'Forage',
      date: '2023',
      verified: true
    },
    { 
      name: 'Microsoft Excel - Basic Excel/ Advanced Excel Formulas', 
      url: 'https://drive.google.com/file/d/14SsYcIWeZMLU1EablvRJkz9Or3R3gD7R/view',
      icon: <FaFileExcel className="text-3xl" />,
      category: 'Data Analysis',
      color: 'from-[#0b090a] to-[#161a1d]',
      issuer: 'Udemy',
      date: '2023',
      verified: true
    },
    { 
      name: 'Python Data Structures', 
      url: 'https://drive.google.com/file/d/18agvlpH9hj_XDsmr1COiFTcXBkM63_Ls/view',
      icon: <FaPython className="text-3xl" />,
      category: 'Python',
      color: 'from-[#ba181b] to-[#e5383b]',
      issuer: 'University of Michigan',
      date: '2022',
      verified: true
    },
    { 
      name: 'Python for Data Science, AI & Development', 
      url: 'https://drive.google.com/file/d/1O9kdk9Yzc2W5s9bq8todhzGnRcFDtNv7/view',
      icon: <FaRobot className="text-3xl" />,
      category: 'AI & Data Science',
      color: 'from-[#0b090a] to-[#161a1d]',
      issuer: 'IBM',
      date: '2023',
      verified: true
    },
    { 
      name: 'TCS iON Career Edge - Young Professional', 
      url: 'https://drive.google.com/file/d/18nkGjAiWiQSBDIkOZ31gl_HyBwBUZOD0/view',
      icon: <FaAward className="text-3xl" />,
      category: 'Professional',
      color: 'from-[#ba181b] to-[#e5383b]',
      issuer: 'TCS iON',
      date: '2023',
      verified: true
    },
    { 
      name: 'Programming for Everybody (Getting Started with Python)', 
      url: 'https://drive.google.com/file/d/10AwjZW81Jf5IFYfcl1pGrBKlaCMD13_N/view',
      icon: <FaPython className="text-3xl" />,
      category: 'Python',
      color: 'from-[#0b090a] to-[#161a1d]',
      issuer: 'University of Michigan',
      date: '2022',
      verified: true
    },
    { 
      name: 'The fundamentals of Digital Marketing', 
      url: 'https://drive.google.com/file/d/13KZDpicLvXBH7NFKA5hrZ6KAnCcy8w_T/view',
      icon: <FaBullhorn className="text-3xl" />,
      category: 'Marketing',
      color: 'from-[#ba181b] to-[#e5383b]',
      issuer: 'Google',
      date: '2023',
      verified: true
    },
    { 
      name: 'Automation Anywhere Certified Advanced RPA Professional', 
      url: 'https://drive.google.com/file/d/10A26yY8diLAVTJVvoB4dWj5toK78hdY2/view',
      icon: <FaRobot className="text-3xl" />,
      category: 'RPA',
      color: 'from-[#0b090a] to-[#161a1d]',
      issuer: 'Automation Anywhere',
      date: '2023',
      verified: true
    }
  ];

  const duplicatedCertifications = [...certifications, ...certifications];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

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

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);


  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Same style as Projects */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#ba181b] border border-[#0b090a] rounded-full mb-4">
            <div className="w-2 h-2 bg-[#0b090a] rounded-full mr-3"></div>
            <span className="text-[#ffffff] text-sm font-medium tracking-wide">
              CREDENTIALS & ACHIEVEMENTS
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-[#0b090a] tracking-tight mb-3">
            Professional <span className="text-[#ba181b]">Certifications</span>
          </h2>
          
          <p className="text-lg text-[#161a1d] max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications in AI, cloud computing, web development, 
            and data science showcasing continuous learning and technical excellence.
          </p>
        </div>

        {/* Stats Bar - Same style as Projects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <FaCertificate className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">{certifications.length}</div>
            <div className="text-[#161a1d] text-sm font-medium">Total Certifications</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <FaRobot className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">5+</div>
            <div className="text-[#161a1d] text-sm font-medium">AI & Data Science</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <FaCode className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">4+</div>
            <div className="text-[#161a1d] text-sm font-medium">Web Development</div>
          </div>
          
          <div className="bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#ba181b] group">
            <div className="text-[#ba181b] flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <MdVerified className="text-3xl" />
            </div>
            <div className="text-3xl font-bold text-[#0b090a] mb-1">100%</div>
            <div className="text-[#161a1d] text-sm font-medium">Verified</div>
          </div>
        </div>

        {/* Auto-Sliding Certifications Carousel - Same style as Projects */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
          
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden py-6"
          >
            {duplicatedCertifications.map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] bg-[#f5f3f4] border border-[#d3d3d3] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:border-[#ba181b] hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-br ${cert.color} p-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
                  
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="text-[#ffffff] group-hover:scale-110 transition-transform">
                      {React.cloneElement(cert.icon, { className: 'text-2xl' })}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-[#ffffff] text-xs font-semibold">{cert.category}</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center">
                    <MdVerified className="text-[#ffffff] text-lg mr-2" />
                    <span className="text-[#ffffff] text-xs font-medium">{cert.verified ? 'Verified Certificate' : 'Certificate'}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <h3 className="text-[#0b090a] font-bold text-base mb-2 leading-tight min-h-[48px] group-hover:text-[#ba181b] transition-colors">
                    {cert.name}
                  </h3>
                  
                  {/* Certificate Details */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-[#161a1d] mb-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-[#ba181b] rounded-full"></div>
                        <span className="font-medium">Issuer:</span>
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-[#ba181b] rounded-full"></div>
                        <span className="font-medium">Date:</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="pt-3 border-t border-[#d3d3d3]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FaShieldAlt className="text-[#ba181b] text-xs" />
                        <span className="text-[#161a1d] text-xs font-medium">
                          {cert.verified ? 'Digitally Verified' : 'Pending Verification'}
                        </span>
                      </div>
                      
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-[#0b090a] text-[#ffffff] px-3 py-1.5 rounded-lg hover:bg-[#ba181b] transition-all duration-300 group/button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-xs font-medium">View</span>
                        <FaExternalLinkAlt className="text-xs group-hover/button:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ba181b] rounded-xl pointer-events-none transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Same style as Projects */}
        <div className="text-center mt-12">
          <div className="bg-[#0b090a] border border-[#0b090a] rounded-2xl p-6 max-w-2xl mx-auto hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-[#ffffff] font-semibold text-lg mb-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#ba181b] rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                <FaBookOpen className="text-[#0b090a] text-lg" />
              </div>
              <span className="italic">Commitment to Continuous Learning</span>
            </h3>
            <div className="flex items-start space-x-4">
              <div>
                <p className="text-[#d3d3d3] text-sm leading-relaxed mb-4 italic">
                  These certifications represent my dedication to staying current with 
                  evolving technologies and maintaining expertise in cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;