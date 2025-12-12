import React, { useState, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import API_URLS from "./ApiURL";

// Color Constants
const COLORS = {
  primary: "#8267ec",
  black: "#000000",
  white: "#ffffff",
  grayLight: "#f5f5f5",
  grayDark: "#1a1a1a",
  grayBorder: "#333333",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const swipeBtnRef = useRef(null);
  const swipeContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 5000);
  };

  const validateForm = () => {
    if (!formData.Name.trim()) {
      showNotification("Please enter your name.", "error");
      return false;
    }
    if (!formData.Email.trim()) {
      showNotification("Please enter your email address.", "error");
      return false;
    }
    if (!formData.Phone.trim()) {
      showNotification("Please enter your phone number.", "error");
      return false;
    }
    if (!formData.Message.trim()) {
      showNotification("Please enter your message.", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        Name: formData.Name,
        ContactNumber: formData.Phone,
        ContactMail: formData.Email,
        Query: formData.Message,
      };

      const response = await fetch(API_URLS.CONTACT.MESSAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.Status) {
        showNotification(
          result.message ||
            "Thank you for reaching out! Your message has been successfully sent.",
          "success"
        );
        setFormData({ Name: "", Email: "", Phone: "", Message: "" });
      } else {
        showNotification(
          result.message ||
            "Failed to send your message. Please try again later.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification(
        "Network error. Please check your connection and try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualEmail = () => {
    if (!validateForm()) {
      return;
    }

    const subject = "Inquiry from Thirumurugan Portfolio";
    const body = `
      Hello Thirumurugan Subramaniyan,
      I would like to inquire about your skills and experience. Below are my details:
      Name: ${formData.Name}
      Email: ${formData.Email}
      Phone: ${formData.Phone}
      Message: ${formData.Message}
      Looking forward to your response.`;

    const mailtoLink = `mailto:thirusubramaniyan2001@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (swipeBtnRef.current) {
      swipeBtnRef.current.style.cursor = "grabbing";
      swipeBtnRef.current.style.transition = "none";
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !swipeBtnRef.current || !swipeContainerRef.current)
      return;

    const touchX = e.touches[0].clientX;
    const containerRect = swipeContainerRef.current.getBoundingClientRect();
    const buttonWidth = swipeBtnRef.current.offsetWidth;

    let x = touchX - containerRect.left - buttonWidth / 2;
    x = Math.max(0, Math.min(x, containerRect.width - buttonWidth));

    swipeBtnRef.current.style.left = `${x}px`;
    setCurrentX(x);
  };

  const handleTouchEnd = () => {
    if (!isDragging || !swipeBtnRef.current || !swipeContainerRef.current)
      return;

    const containerRect = swipeContainerRef.current.getBoundingClientRect();
    const buttonWidth = swipeBtnRef.current.offsetWidth;
    const threshold = containerRect.width - buttonWidth - 20;

    if (currentX >= threshold) {
      // Successfully swiped to the end
      swipeBtnRef.current.style.left = `${containerRect.width - buttonWidth}px`;
      swipeBtnRef.current.style.backgroundColor = "#10b981"; // Success green

      setTimeout(() => {
        const phoneNumber = "7339225958";
        const message = encodeURIComponent(
          "Hi! I'd like to contact you about your AI and development services."
        );
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        // Reset after a delay
        setTimeout(() => {
          if (swipeBtnRef.current) {
            swipeBtnRef.current.style.left = "0px";
            swipeBtnRef.current.style.backgroundColor = COLORS.primary;
            swipeBtnRef.current.style.transition =
              "left 0.3s ease, background-color 0.3s ease";
          }
        }, 1000);
      }, 300);
    } else {
      // Not swiped enough, reset position
      swipeBtnRef.current.style.left = "0px";
      swipeBtnRef.current.style.transition = "left 0.3s ease";
    }

    setIsDragging(false);
    if (swipeBtnRef.current) {
      swipeBtnRef.current.style.cursor = "grab";
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (swipeBtnRef.current) {
      swipeBtnRef.current.style.cursor = "grabbing";
      swipeBtnRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !swipeBtnRef.current || !swipeContainerRef.current)
      return;

    const containerRect = swipeContainerRef.current.getBoundingClientRect();
    const buttonWidth = swipeBtnRef.current.offsetWidth;

    let x = e.clientX - containerRect.left - buttonWidth / 2;
    x = Math.max(0, Math.min(x, containerRect.width - buttonWidth));

    swipeBtnRef.current.style.left = `${x}px`;
    setCurrentX(x);
  };

  const handleMouseUp = () => {
    if (!isDragging || !swipeBtnRef.current || !swipeContainerRef.current)
      return;

    const containerRect = swipeContainerRef.current.getBoundingClientRect();
    const buttonWidth = swipeBtnRef.current.offsetWidth;
    const threshold = containerRect.width - buttonWidth - 20;

    if (currentX >= threshold) {
      // Successfully swiped to the end
      swipeBtnRef.current.style.left = `${containerRect.width - buttonWidth}px`;
      swipeBtnRef.current.style.backgroundColor = "#10b981"; // Success green

      setTimeout(() => {
        const phoneNumber = "7339225958";
        const message = encodeURIComponent(
          "Hi! I'd like to contact you about your AI and development services."
        );
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        // Reset after a delay
        setTimeout(() => {
          if (swipeBtnRef.current) {
            swipeBtnRef.current.style.left = "0px";
            swipeBtnRef.current.style.backgroundColor = COLORS.primary;
            swipeBtnRef.current.style.transition =
              "left 0.3s ease, background-color 0.3s ease";
          }
        }, 1000);
      }, 300);
    } else {
      // Not swiped enough, reset position
      swipeBtnRef.current.style.left = "0px";
      swipeBtnRef.current.style.transition = "left 0.3s ease";
    }

    setIsDragging(false);
    if (swipeBtnRef.current) {
      swipeBtnRef.current.style.cursor = "grab";
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Notification Toast */}
        {notification.show && (
          <div
            className={`fixed top-4 right-4 z-50 flex items-center space-x-3 p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 transform ${
              notification.show
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{
              backgroundColor:
                notification.type === "success" ? "#111111" : "#111111",
              borderColor:
                notification.type === "success" ? "#10b981" : "#ef4444",
              color: "#ffffff",
            }}
          >
            {notification.type === "success" ? (
              <FaCheckCircle className="w-5 h-5 text-[#10b981]" />
            ) : (
              <FaExclamationCircle className="w-5 h-5 text-[#ef4444]" />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
            <button
              onClick={() =>
                setNotification({ show: false, message: "", type: "" })
              }
              className="transition-opacity ml-2 text-gray-400 hover:text-white"
            >
              &times;
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-16">
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
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#5f5297ff] to-violet-900 text-transparent bg-clip-text">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For more information or inquiries about my skills and experience,
            please feel free to get in touch with me.
          </p>
          <div className="mt-6 text-gray-300">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <FaEnvelope className="w-5 h-5 text-[#8267ec]" />
              <span title="drop a mail">thirusubramaniyan2001@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FaPhone className="w-5 h-5 text-[#8267ec]" />
              <span title="Call on">+91- 73392 25958</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(130,103,236,0.15)] transition-all duration-300 bg-[#111111] border border-[#333333]">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 bg-black border border-[#8267ec] group-hover:bg-[#8267ec]">
                    <FaEnvelope className="w-6 h-6 text-[#8267ec] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:thirusubramaniyan2001@gmail.com"
                      className="font-medium hover:text-[#8267ec] transition-colors text-white"
                    >
                      thirusubramaniyan2001@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 bg-black border border-[#8267ec] group-hover:bg-[#8267ec]">
                    <FaPhone className="w-6 h-6 text-[#8267ec] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+917339225958"
                      className="font-medium hover:text-[#8267ec] transition-colors text-white"
                    >
                      +91 - 73392 25958
                    </a>
                  </div>
                </div>

                {/* WhatsApp Swipe */}
                <div className="mt-8">
                  <p className="text-sm mb-4 text-gray-400">
                    Quick connect on WhatsApp
                  </p>
                  <div
                    ref={swipeContainerRef}
                    className="relative rounded-full h-14 cursor-pointer overflow-hidden select-none bg-black border border-[#8267ec]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-400">
                        Swipe to chat on WhatsApp
                      </span>
                    </div>
                    <div
                      ref={swipeBtnRef}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      className="absolute left-0 top-0 w-16 h-14 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-all shadow-lg bg-[#8267ec]"
                      style={{
                        transition:
                          "left 0.3s ease, background-color 0.3s ease",
                      }}
                    >
                      <FaWhatsapp className="text-xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(130,103,236,0.1)] transition-all duration-300 bg-[#111111] border border-[#333333]">
              <h4 className="font-semibold mb-3 text-white">
                Why Work With Me?
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8267ec]"></div>
                  <span>AI-powered solutions tailored to your needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8267ec]"></div>
                  <span>Fast response time and clear communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8267ec]"></div>
                  <span>Professional and reliable service delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(130,103,236,0.15)] transition-all duration-300 bg-[#111111] border border-[#333333]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center space-x-2 text-gray-300">
                  <FaUser className="w-4 h-4 text-[#8267ec]" />
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none transition-all bg-black border border-[#333333] text-white focus:border-[#8267ec] focus:shadow-[0_0_15px_rgba(130,103,236,0.2)]"
                  required
                />
              </div>

              {/* Contact Info Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center space-x-2 text-gray-300">
                    <FaPhone className="w-4 h-4 text-[#8267ec]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none transition-all bg-black border border-[#333333] text-white focus:border-[#8267ec] focus:shadow-[0_0_15px_rgba(130,103,236,0.2)]"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center space-x-2 text-gray-300">
                    <FaEnvelope className="w-4 h-4 text-[#8267ec]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none transition-all bg-black border border-[#333333] text-white focus:border-[#8267ec] focus:shadow-[0_0_15px_rgba(130,103,236,0.2)]"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center space-x-2 text-gray-300">
                  <FaComment className="w-4 h-4 text-[#8267ec]" />
                  <span>Your Message</span>
                </label>
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleInputChange}
                  placeholder="Type your message here . . . ."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none transition-all resize-none bg-black border border-[#333333] text-white focus:border-[#8267ec] focus:shadow-[0_0_15px_rgba(130,103,236,0.2)]"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Send Message Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed scale-100"
                      : "hover:scale-105 hover:shadow-[0_0_20px_rgba(130,103,236,0.4)]"
                  } bg-[#8267ec] text-white border-[#8267ec]`}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = "#ffffff";
                      e.target.style.color = "#8267ec";
                      e.target.style.borderColor = "#8267ec";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = "#8267ec";
                      e.target.style.color = "#ffffff";
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Send Email Button */}
                <button
                  type="button"
                  onClick={handleManualEmail}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(130,103,236,0.3)] bg-black text-[#8267ec] border-[#8267ec]"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#8267ec";
                    e.target.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "#8267ec";
                  }}
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
