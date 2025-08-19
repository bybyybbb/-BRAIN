import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              $BRAIN
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => scrollToSection('how-to-buy')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              How to Buy
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Community
            </button>
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              Follow Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('tokenomics')}
                className="px-6 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors duration-200"
              >
                Tokenomics
              </button>
              <button 
                onClick={() => scrollToSection('how-to-buy')}
                className="px-6 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors duration-200"
              >
                How to Buy
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="px-6 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors duration-200"
              >
                Community
              </button>
              <div className="px-6 py-3">
                <a
                  href="https://x.com/BRAIN__LET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200"
                >
                  Follow Us
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;