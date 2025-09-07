'use client'

import { useState, useEffect } from 'react'

export function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      const shouldShow = window.scrollY > 300
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    // Scroll to top or trigger action
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <button
          onClick={handleClick}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 font-bold text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg"
        >
          <span>Recover Freight Now</span>
          <span>🚚</span>
        </button>
      </div>

      {/* Desktop Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <button
          onClick={handleClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-3"
        >
          <span>Recover Freight Now</span>
          <span className="text-2xl">🚚</span>
        </button>
      </div>

      {/* Emergency Contact Floating Button - Desktop Only */}
      <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
        <a
          href="tel:1-800-RECOVER"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>Emergency</span>
        </a>
      </div>

      {/* Overlay for mobile sticky CTA to prevent content overlap */}
      <div className="h-16 md:hidden" />
    </>
  )
}