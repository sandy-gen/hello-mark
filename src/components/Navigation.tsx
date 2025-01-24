"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-indigo-950/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 transform transition-transform group-hover:scale-110">
              <Image 
                src="/images/logo.svg" 
                alt="Poker Dice Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">Poker Dice</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors relative group">
                Home
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/games" className="text-white hover:text-yellow-400 transition-colors relative group">
                Games
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 transition-colors relative group">
                About
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors relative group">
                Contact
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>
            
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Play Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6 transition-transform duration-200"
              style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }}
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-2">
            <Link 
              href="/" 
              className="text-white hover:text-yellow-400 transition-colors px-2 py-1 hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/games" 
              className="text-white hover:text-yellow-400 transition-colors px-2 py-1 hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Games
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-yellow-400 transition-colors px-2 py-1 hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-yellow-400 transition-colors px-2 py-1 hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all w-full">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 