import React from 'react'
import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <main className="min-h-screen bg-indigo-900">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Have questions? We&apos;d love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">support@pokerdice.com</p>
                </div>
                
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-300">Available 24/7 through our platform</p>
                </div>
                
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">Office</h3>
                  <p className="text-gray-300">
                    123 Poker Street<br />
                    Las Vegas, NV 89101<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Twitter</a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Facebook</a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-800 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-800 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-800 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
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