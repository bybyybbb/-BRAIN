"use client"

import { useState } from "react"
import { Copy, Check, Twitter, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "Contract Address Coming Soon..."

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("Contract address will be available soon!")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-brain"></div>
          <span className="font-bold text-xl text-gradient-brain">$BRAIN</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
            About
          </a>
          <a href="#docs" className="text-gray-600 hover:text-primary transition-colors">
            Docs
          </a>
          <a href="#roadmap" className="text-gray-600 hover:text-primary transition-colors">
            Roadmap
          </a>
          <a href="#community" className="text-gray-600 hover:text-primary transition-colors">
            Community
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer transition-colors" />
          </a>
          <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer transition-colors" />
          </a>
          <Globe className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer transition-colors" />
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">BORN LIVE</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                JUST A <span className="text-gradient-brain">BRAIN.</span>
                <br />
                HATCHED ON
                <br />
                <span className="text-gradient-brain">SOLANA.</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 max-w-md">What if the next big thing... was just a brain?</p>

            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <code className="text-sm font-mono text-gray-700 flex-1 truncate italic">{contractAddress}</code>
              <Button size="sm" variant="outline" onClick={copyToClipboard} className="shrink-0 bg-transparent">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-brain hover:opacity-90 text-white px-8"
                onClick={() => alert("Trading will be available once contract is deployed!")}
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent"
                onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
              >
                Join Community
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              </a>
              <Globe className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 animate-float">
                <Image
                  src="/brain-logo.png"
                  alt="$BRAIN Logo"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-brain opacity-20 rounded-full blur-3xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">About $BRAIN</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            $BRAIN is more than just a memecoin - it's a revolution in thinking. Born on Solana, $BRAIN represents the
            collective intelligence of the crypto community. With lightning-fast transactions and minimal fees, $BRAIN
            is designed to be the smartest choice in the meme space.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl">Lightning Fast</h3>
              <p className="text-gray-600">Built on Solana for instant transactions</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">🧠</span>
              </div>
              <h3 className="font-bold text-xl">Smart Community</h3>
              <p className="text-gray-600">Powered by collective intelligence</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">💎</span>
              </div>
              <h3 className="font-bold text-xl">Diamond Hands</h3>
              <p className="text-gray-600">Built for long-term holders</p>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">Documentation</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-200">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold">Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Comprehensive documentation including tokenomics, smart contract details, and integration guides will be
                available soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-gradient-brain text-center">Roadmap</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-gradient-brain rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Launch Phase</h3>
                <p className="text-gray-600">Token deployment, initial community building, and social media presence</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  In Progress
                </span>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Community Growth</h3>
                <p className="text-gray-600">DEX listings, marketing campaigns, and community events</p>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Ecosystem Expansion</h3>
                <p className="text-gray-600">Partnerships, utility development, and platform integrations</p>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Future
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gradient-brain">Join the Community</h2>
          <p className="text-lg text-gray-600">
            Connect with fellow $BRAIN holders and stay updated on the latest developments
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://t.me/+5JUFhHohSIQ0YWVk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-colors group"
            >
              <div className="space-y-4">
                <MessageCircle className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl">Telegram</h3>
                <p className="text-gray-600">Join our active community chat</p>
              </div>
            </a>
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-colors group"
            >
              <div className="space-y-4">
                <Twitter className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl">X (Twitter)</h3>
                <p className="text-gray-600">Follow for updates and announcements</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-brain"></div>
            <span className="font-bold text-xl text-gradient-brain">$BRAIN</span>
          </div>
          <p className="text-gray-400">Just a brain. Hatched on Solana.</p>
          <div className="flex items-center justify-center gap-6">
            <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </a>
            <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 $BRAIN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
