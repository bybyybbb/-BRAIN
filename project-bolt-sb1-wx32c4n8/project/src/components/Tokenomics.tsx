import React from 'react';
import { PieChart, Lock, Users, Zap, TrendingUp, Shield } from 'lucide-react';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      category: "Community & Rewards",
      percentage: 40,
      color: "from-purple-500 to-purple-600",
      icon: Users,
      description: "Reserved for community rewards, airdrops, and holder incentives"
    },
    {
      category: "Liquidity Pool",
      percentage: 30,
      color: "from-blue-500 to-blue-600",
      icon: Zap,
      description: "Locked liquidity to ensure stable trading and price stability"
    },
    {
      category: "Development & Marketing",
      percentage: 20,
      color: "from-indigo-500 to-indigo-600",
      icon: TrendingUp,
      description: "Funding for continuous development and strategic marketing"
    },
    {
      category: "Team & Advisors",
      percentage: 10,
      color: "from-purple-600 to-blue-600",
      icon: Shield,
      description: "Team allocation with vesting schedule for long-term commitment"
    }
  ];

  const features = [
    {
      title: "Deflationary Mechanism",
      description: "2% of every transaction is burned, reducing total supply over time",
      icon: "🔥"
    },
    {
      title: "Holder Rewards",
      description: "3% of transactions redistributed to all $BRAIN holders automatically",
      icon: "💎"
    },
    {
      title: "Liquidity Lock",
      description: "Liquidity locked for 2 years ensuring long-term stability",
      icon: "🔒"
    },
    {
      title: "Anti-Whale Protection",
      description: "Maximum transaction limits prevent market manipulation",
      icon: "🛡️"
    }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tokenomics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our tokenomics are designed with intelligence and sustainability in mind. 
            Every aspect has been carefully crafted to benefit long-term holders and ensure project growth.
          </p>
        </div>

        {/* Token Info */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 mb-16 border border-purple-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1B</div>
              <div className="text-gray-600">Total Supply</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">SOL</div>
              <div className="text-gray-600">Blockchain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5%</div>
              <div className="text-gray-600">Transaction Tax</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2 Years</div>
              <div className="text-gray-600">Liquidity Lock</div>
            </div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Token Distribution</h3>
            <div className="space-y-6">
              {tokenomicsData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-full`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{item.category}</span>
                      <span className="text-2xl font-bold text-gray-900">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <PieChart className="w-16 h-16 mb-6 opacity-80" />
              <h4 className="text-2xl font-bold mb-6">Fair Distribution</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Community Focus</span>
                  <span className="font-bold">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Development</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team (Vested)</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="border-t border-white/20 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span>Total Supply</span>
                    <span>1,000,000,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <Lock className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Secure & Transparent</h3>
            <p className="text-lg mb-6 opacity-90">
              All tokenomics are enforced by smart contracts and can be verified on-chain. 
              No hidden allocations, no surprises – just smart, transparent economics.
            </p>
            <a
              href="https://solscan.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Contract
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;