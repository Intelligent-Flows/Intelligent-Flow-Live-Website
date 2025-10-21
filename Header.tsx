import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/IntelliFlow Logo Face  copy.jpg" 
              alt="Intelligent Flows Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-white">
                Intelligent <span className="text-pink-400">Flows</span>
              </h1>
              <p className="text-xs text-cyan-400">AI Automation Agency</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-center">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;