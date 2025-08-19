import React from 'react';
import { Wallet, ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react';

const HowToBuy = () => {
  const steps = [
    {
      number: "01",
      title: "Get a Solana Wallet",
      description: "Download and set up a Solana wallet like Phantom, Solflare, or Backpack. Make sure to securely store your seed phrase.",
      icon: Wallet,
      tips: ["Phantom is beginner-friendly", "Always backup your seed phrase", "Enable security features"]
    },
    {
      number: "02",
      title: "Buy Solana (SOL)",
      description: "Purchase SOL from a centralized exchange like Binance, Coinbase, or directly through your wallet using fiat.",
      icon: Zap,
      tips: ["Keep some SOL for transaction fees", "Use reputable exchanges", "Consider DCA strategy"]
    },
    {
      number: "03",
      title: "Connect to DEX",
      description: "Visit Jupiter, Raydium, or Orca DEX and connect your Solana wallet to start trading.",
      icon: ArrowRight,
      tips: ["Always verify the website URL", "Check contract address", "Start with small amounts"]
    },
    {
      number: "04",
      title: "Swap SOL for $BRAIN",
      description: "Enter the $BRAIN contract address, set your slippage (5-12%), and swap your SOL for $BRAIN tokens.",
      icon: CheckCircle,
      tips: ["Set appropriate slippage", "Double-check contract address", "Confirm transaction details"]
    }
  ];

  const exchanges = [
    {
      name: "Jupiter",
      logo: "🪐",
      description: "Best rates aggregator",
      url: "https://jup.ag"
    },
    {
      name: "Raydium",
      logo: "⚡",
      description: "Popular Solana DEX",
      url: "https://raydium.io"
    },
    {
      name: "Orca",
      logo: "🐋",
      description: "User-friendly interface",
      url: "https://orca.so"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Buy <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$BRAIN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting $BRAIN is simple and secure. Follow our step-by-step guide to join the smartest community in crypto.
          </p>
        </div>

        {/* Contract Address */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-16 text-center">
          <div className="text-white mb-4">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <h3 className="text-xl font-bold">Official Contract Address</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <code className="text-white font-mono text-sm md:text-base break-all">
              Coming Soon - Contract will be published at launch
            </code>
          </div>
          <p className="text-white/80 text-sm mt-3">
            ⚠️ Always verify the contract address on our official social media before purchasing
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 h-full">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <step.icon className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-700 mb-2">💡 Pro Tips:</div>
                      {step.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recommended Exchanges */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recommended Exchanges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exchanges.map((exchange, index) => (
              <a
                key={index}
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {exchange.logo}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{exchange.name}</h4>
                <p className="text-gray-600 text-sm">{exchange.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-yellow-800 mb-2">Security Reminder</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Never share your private keys or seed phrase with anyone</li>
                <li>• Always double-check contract addresses before swapping</li>
                <li>• Start with small amounts when trying new platforms</li>
                <li>• Only use official links from our verified social media accounts</li>
                <li>• Be aware of slippage settings - higher volatility may require 5-12% slippage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;