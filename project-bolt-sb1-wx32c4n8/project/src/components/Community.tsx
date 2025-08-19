import React from 'react';
import { Twitter, MessageCircle, Send, Users, TrendingUp, Heart } from 'lucide-react';

const Community = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@BRAIN__LET",
      url: "https://x.com/BRAIN__LET",
      description: "Follow for updates, memes, and community discussions",
      color: "from-blue-500 to-blue-600",
      followers: "Growing Daily"
    },
    {
      name: "Telegram",
      icon: Send,
      handle: "t.me/BrainCommunity",
      url: "#",
      description: "Join our active community chat and get real-time updates",
      color: "from-blue-400 to-blue-500",
      followers: "24/7 Active"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      handle: "discord.gg/brain",
      url: "#",
      description: "Connect with fellow $BRAIN holders and participate in events",
      color: "from-indigo-500 to-indigo-600",
      followers: "Community Hub"
    }
  ];

  const communityStats = [
    {
      icon: Users,
      value: "10K+",
      label: "Community Members",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      value: "500%",
      label: "Growth This Month",
      color: "text-green-600"
    },
    {
      icon: Heart,
      value: "24/7",
      label: "Active Support",
      color: "text-red-500"
    }
  ];

  const communityFeatures = [
    {
      title: "Daily Alpha",
      description: "Get exclusive insights and market analysis from our research team",
      emoji: "📊"
    },
    {
      title: "Meme Contests",
      description: "Weekly meme competitions with $BRAIN rewards for the best submissions",
      emoji: "🎨"
    },
    {
      title: "AMA Sessions",
      description: "Regular Ask Me Anything sessions with the development team",
      emoji: "🎤"
    },
    {
      title: "Holder Rewards",
      description: "Exclusive perks and airdrops for long-term $BRAIN holders",
      emoji: "🎁"
    },
    {
      title: "Educational Content",
      description: "Learn about DeFi, trading strategies, and blockchain technology",
      emoji: "📚"
    },
    {
      title: "Community Governance",
      description: "Vote on important decisions and shape the future of $BRAIN",
      emoji: "🗳️"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of the smartest and most active community in the memecoin space. 
            Connect with like-minded investors, share ideas, and grow together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 h-full">
                <div className={`bg-gradient-to-r ${social.color} p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{social.name}</h3>
                <div className="text-purple-600 font-semibold mb-3">{social.handle}</div>
                <p className="text-gray-600 mb-4 leading-relaxed">{social.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{social.followers}</span>
                  <span className="text-purple-600 group-hover:translate-x-1 transition-transform duration-200">
                    Join Now →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Community Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What You'll Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Revolution?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't miss out on being part of the smartest memecoin community. 
            Join thousands of $BRAIN holders who are already thinking ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Twitter className="w-5 h-5" />
              <span>Follow on Twitter</span>
            </a>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200">
              Join Telegram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;