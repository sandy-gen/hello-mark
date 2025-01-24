import React from 'react'
import Navigation from '@/components/Navigation'

const features = [
  {
    title: "Secure Gaming",
    description: "State-of-the-art encryption and security measures to protect your data and funds.",
    icon: "🔒"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you with any questions.",
    icon: "💬"
  },
  {
    title: "Fair Play",
    description: "Certified random number generator and regular audits ensure fair gaming.",
    icon: "✅"
  },
  {
    title: "Fast Payouts",
    description: "Quick and hassle-free withdrawals with multiple payment options.",
    icon: "💸"
  }
]

export default function About() {
  return (
    <main className="min-h-screen bg-indigo-900">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Poker Dice</h1>
          <p className="text-xl text-gray-300">
            Founded in 2024, Poker Dice has become one of the leading online poker platforms,
            offering a secure and exciting gaming experience to players worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-indigo-950/50 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-indigo-950/50 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1M+</div>
              <div className="text-gray-300">Active Players</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$10M+</div>
              <div className="text-gray-300">Monthly Payouts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
    </main>
  )
} 