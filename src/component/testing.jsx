  {/* Chatbot Section */}
          <div className="mb-16">
            <div className="bg-white border border-black rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Chatbot Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <FaRobotIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-black tracking-tight">Research Assistant</h2>
                      <p className="text-black opacity-80 text-sm">AI-powered help for research inquiries</p>
                    </div>
                  </div>
                  <p className="text-black opacity-80 mb-4 leading-relaxed">
                    Have questions about my research work, collaboration opportunities, or technical expertise? 
                    Chat with my AI assistant for instant answers and guidance.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {quickQuestions.map((question, index) => (
                      <span
                        key={index}
                        className="bg-white border border-black text-black opacity-80 px-3 py-1 rounded-full text-sm"
                      >
                        {question}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="flex-1 w-full max-w-md">
                  <div className="bg-white border border-black rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Chat Header */}
                    <div className="bg-white border-b border-black px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        <div>
                          <h3 className="text-black font-semibold text-sm">Research Assistant</h3>
                          <p className="text-black opacity-80 text-xs">Online - Ask me anything</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div 
                      ref={chatContainerRef}
                      className="h-48 overflow-y-auto p-4 space-y-3"
                    >
                      {chatMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs px-3 py-2 rounded-2xl ${
                              msg.type === 'user'
                                ? 'bg-black text-white rounded-br-none'
                                : 'bg-white border border-black text-black rounded-bl-none'
                            }`}
                          >
                            <div className="whitespace-pre-line text-sm">
                              {msg.message}
                            </div>
                            <div className="text-xs opacity-70 mt-1 text-right">
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Loading Indicator */}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-black text-black px-3 py-2 rounded-2xl rounded-bl-none">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-black">
                      <form onSubmit={handleSendMessage} className="flex space-x-2">
                        <input
                          type="text"
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder="Ask about research, collaboration..."
                          className="flex-1 bg-white border border-black rounded-lg px-3 py-2 text-black placeholder-black placeholder-opacity-50 focus:outline-none focus:border-black transition-all duration-300 text-sm"
                          disabled={isLoading}
                        />
                        <button
                          type="submit"
                          disabled={isLoading || !userInput.trim()}
                          className="bg-black text-white hover:bg-white hover:text-black border border-black disabled:bg-black disabled:opacity-50 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-1 text-sm"
                        >
                          <FaPaperPlane className="w-3 h-3" />
                          <span>Send</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
