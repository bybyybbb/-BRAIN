import React from 'react';
import { Brain, Twitter, Send, MessageCircle, ExternalLink, Shield, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "How to Buy", href: "#how-to-buy" },
    { name: "Community", href: "#community" }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/BRAIN__LET",
      handle: "@BRAIN__LET"
    },
    {
      name: "Telegram",
      icon: Send,
      href: "#",
      handle: "t.me/BrainCommunity"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "#",
      handle: "discord.gg/brain"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-10 h-10 text-purple-400" />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                $BRAIN
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              The smartest memecoin on Solana. Join our community of intelligent investors 
              and be part of the future of decentralized finance.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
              <Shield className="w-4 h-4" />
              <span>Audited Smart Contracts</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <ExternalLink className="w-4 h-4" />
              <span>Verified on Solscan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Community</h3>
            <ul className="space-y-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-gray-400">{social.handle}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contract Address */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="font-semibold mb-2">Contract Address</h4>
                <code className="text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded">
                  Coming Soon - Will be published at launch
                </code>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Always verify on:</div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-purple-400">Official Social Media</span>
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} $BRAIN. All rights reserved. Built with 🧠 by the community.
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
            >
              Back to Top ↑
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>contact@brain.com</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Disclaimer: $BRAIN is a memecoin created for entertainment purposes. 
            Cryptocurrency investments carry risk. Please do your own research and never invest more than you can afford to lose. 
            This is not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;