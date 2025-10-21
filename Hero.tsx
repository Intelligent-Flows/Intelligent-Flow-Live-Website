import React from 'react';
import { Globe, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              AI Powered Business Solutions
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Revolutionize</span>
                <br />
                <span className="text-white">Your Business</span>
                <br />
                <span className="text-white">with </span>
                <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Intelligent</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">AI Automation</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Custom AI Chatbots & Websites that streamline workflows, boost productivity, and grow your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all">
                View Services
              </a>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* AI Chatbots Card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all group">
                <div className="w-12 h-12 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src="/IntelliFlow Logo Face  copy.jpg" 
                    alt="AI Chatbots" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Chatbots</h3>
                <p className="text-gray-400 text-sm mb-4">Intelligent customer support</p>
                <div className="text-cyan-400 text-sm font-semibold">From R3,000</div>
              </div>

              {/* Websites Card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 hover:border-pink-400 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Websites</h3>
                <p className="text-gray-400 text-sm mb-4">Professional digital presence</p>
                <div className="text-pink-400 text-sm font-semibold">From R5,000</div>
              </div>

              {/* Complete Automation Card - Spans both columns */}
              <div className="sm:col-span-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Complete Automation</h3>
                <p className="text-gray-300 text-sm">End-to-end business solutions</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full blur-xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-xl opacity-10"></div>
          </div>
        </div>

        {/* Experience Tagline */}
        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            EXPERIENCE THE FUTURE OF EFFICIENCY!
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Where Intelligent Solutions Meet Seamless Automation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;