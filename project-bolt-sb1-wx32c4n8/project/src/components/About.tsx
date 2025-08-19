import React from 'react';
import { Brain, Target, Lightbulb, Rocket, Shield, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Technology",
      description: "Built on Solana's lightning-fast blockchain with intelligent tokenomics designed for sustainable growth."
    },
    {
      icon: Target,
      title: "Clear Vision",
      description: "Revolutionizing the memecoin space by combining humor with serious utility and community-driven development."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pioneering new approaches to community engagement and token utility in the decentralized finance ecosystem."
    },
    {
      icon: Rocket,
      title: "Growth Focused",
      description: "Strategic partnerships and marketing initiatives designed to maximize holder value and community expansion."
    },
    {
      icon: Shield,
      title: "Security Priority",
      description: "Audited smart contracts and transparent operations ensure your investment is protected and secure."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Every major decision is made with community input, ensuring $BRAIN evolves according to holder needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$BRAIN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            $BRAIN isn't just another memecoin. We're building the smartest community in crypto, 
            where intelligence meets opportunity and every holder becomes part of something bigger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Smart Choice</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In a world full of mindless memecoins, $BRAIN stands out as the intelligent choice. 
              We combine the viral nature of memes with serious blockchain technology and a 
              community that actually thinks before they act.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is simple: create a sustainable, community-driven ecosystem where 
              smart investors can grow their wealth while having fun. We're not just riding 
              the wave – we're creating it.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Think Smart, Invest Smarter</div>
                <div className="text-gray-600">Join the revolution of intelligent memecoins</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <Brain className="w-16 h-16 mb-6 opacity-80" />
              <h4 className="text-2xl font-bold mb-4">Why $BRAIN?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Solana-based for ultra-fast transactions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Community-governed development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Transparent and audited smart contracts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Deflationary tokenomics model
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;