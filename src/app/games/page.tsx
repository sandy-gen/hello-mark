import React from 'react'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const games = [
  {
    title: "Texas Hold'em",
    description: "The most popular poker variant worldwide. Play against players from around the globe.",
    image: "/images/games/texas-holdem.webp",
    players: "2-9 players",
    minBet: "$1",
    features: ["Multi-table tournaments", "Cash games", "Sit & Go"]
  },
  {
    title: "Omaha",
    description: "A complex and exciting variant with four hole cards. Perfect for strategic players.",
    image: "/images/games/omaha.webp",
    players: "2-9 players",
    minBet: "$2",
    features: ["Pot-limit games", "Hi/Lo split", "Deep strategy"]
  },
  {
    title: "Seven Card Stud",
    description: "A classic poker variant that tests your memory and observation skills.",
    image: "/images/games/seven-card-stud.webp",
    players: "2-8 players",
    minBet: "$1",
    features: ["Fixed limit", "Hi/Lo split", "Traditional play"]
  },
  {
    title: "Speed Poker",
    description: "Fast-paced action with quick rounds. Perfect for players on the go.",
    image: "/images/games/speed-poker.webp",
    players: "2-6 players",
    minBet: "$0.50",
    features: ["Quick fold", "Fast action", "Mobile optimized"]
  }
]

export default function Games() {
  return (
    <main className="min-h-screen bg-indigo-900">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Games</h1>
          <p className="text-xl text-gray-300">
            Choose from our selection of popular poker variants, each offering unique gameplay and excitement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div 
              key={index} 
              className="group glass-card hover:bg-white/20 p-6 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{game.description}</p>
              
              {/* Features */}
              <div className="space-y-2 mb-4">
                {game.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                  {game.players}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                  </svg>
                  Min Bet: {game.minBet}
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                Play Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
    </main>
  )
} 