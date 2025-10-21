import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/IntelliFlow Logo Face  copy.jpg" 
                alt="Intelligent Flows Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  Intelligent <span className="text-pink-400">Flows</span>
                </h3>
                <p className="text-xs text-cyan-400">AI Automation Agency</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Where Intelligent Solutions Meet Seamless Automation. We specialize in developing customized AI chatbots and professional websites that streamline workflows, boost productivity, and grow your business.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:intelli.flow@outlook.com" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="tel:+27812884614" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Phone className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://wa.me/27692105583" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">AI Chatbots</span></li>
              <li><span className="text-gray-400">Website Development</span></li>
              <li><span className="text-gray-400">Hybrid Packages</span></li>
              <li><span className="text-gray-400">Custom Solutions</span></li>
              <li><span className="text-gray-400">Maintenance & Support</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Intelligent Flows. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Experience the Future of Efficiency!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;