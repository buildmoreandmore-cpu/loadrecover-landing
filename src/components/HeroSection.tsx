'use client'

import { useState } from 'react'

export function HeroSection() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { email, phone })
    // You can integrate with your backend API here
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            {/* Truck Logo */}
            <svg className="w-10 h-8" viewBox="0 0 48 32" fill="none">
              {/* Truck Cab */}
              <rect x="2" y="8" width="12" height="16" rx="2" fill="#FF6B35" />
              {/* Truck Trailer */}
              <rect x="16" y="6" width="28" height="18" rx="2" fill="#FF6B35" />
              {/* Truck Wheels */}
              <circle cx="8" cy="26" r="3" fill="#FF6B35" />
              <circle cx="38" cy="26" r="3" fill="#FF6B35" />
              {/* Wheel Details */}
              <circle cx="8" cy="26" r="1.5" fill="white" />
              <circle cx="38" cy="26" r="1.5" fill="white" />
              {/* Cab Window */}
              <rect x="4" y="10" width="8" height="6" rx="1" fill="white" />
            </svg>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900">Load</span>
            <span className="text-2xl font-bold text-orange-500">Recover</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="font-semibold">1-800-RECOVER</span>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              24/7 Emergency Recovery — Never Let Freight Sit Again
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Recover Freight Fast — 24/7 Verified Drivers Ready Now
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Stop delays, recover abandoned loads, and keep freight moving. Instant dispatch, nationwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">10K+</div>
                <div className="text-blue-200 text-sm">Verified Drivers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">24hr</div>
                <div className="text-blue-200 text-sm">Avg Recovery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                See How It Works
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Recovery in 60 Seconds</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                See Live Demo
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Trusted by FreightCorp, LogiMax, TransGlobal & 15,000+ drivers nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Logos Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-600 mb-8">Trusted by leading logistics companies nationwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-gray-400 font-bold text-lg">FreightCorp</div>
            <div className="text-gray-400 font-bold text-lg">LogiMax</div>
            <div className="text-gray-400 font-bold text-lg">TransGlobal</div>
            <div className="text-gray-400 font-bold text-lg">CargoLink</div>
          </div>
        </div>
      </div>
    </section>
  )
}