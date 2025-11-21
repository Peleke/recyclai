'use client'

import { useState } from 'react'
import RecyclAIBot from '@/components/RecyclAIBot'
import TypewriterText from '@/components/TypewriterText'

export default function HomePage() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showBot, setShowBot] = useState(false)
  const [showCTA, setShowCTA] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 pb-8">
        {/* Main headline with typewriter */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <TypewriterText
              text="Hey, there! I'm RecyclAI."
              onComplete={() => setTimeout(() => setShowSubtitle(true), 300)}
              speed={80}
            />
          </h1>
          <p
            className={`text-lg text-gray-600 max-w-2xl transition-all duration-1000 ${
              showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            onTransitionEnd={() => {
              if (showSubtitle) {
                setTimeout(() => {
                  setShowBot(true)
                  setShowCTA(true)
                }, 400)
              }
            }}
          >
            Let's be green together.
          </p>
        </div>

        {/* RecyclAI Bot Centerpiece */}
        <div
          className={`mb-8 transition-all duration-800 ${
            showBot ? 'opacity-100 translate-y-0 animate-slide-in-from-bottom' : 'opacity-0 translate-y-16'
          }`}
        >
          <RecyclAIBot size="large" className="mx-auto" />
        </div>

        {/* Call to action with drop-in animation */}
        <div
          className={`text-center transition-all duration-600 ${
            showCTA ? 'opacity-100 translate-y-0 animate-drop-in' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Let's get started
            </h2>
            <p className="text-gray-600 mb-6">
              Skip the confusion and get straight answers about proper disposal.
            </p>
            <button className="w-full py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to push footer below fold */}
      <div className="h-32"></div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Horizontal icons with popouts */}
          <div className="flex justify-center space-x-8 mb-6">
            {/* AI Expert System */}
            <div className="relative group">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-xl">🧠</span>
              </div>
              {/* Popout */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                AI Expert System
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

            {/* Location-Aware */}
            <div className="relative group">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-xl">📍</span>
              </div>
              {/* Popout */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                Location-Aware
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

            {/* Educational */}
            <div className="relative group">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-xl">🌱</span>
              </div>
              {/* Popout */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                Educational
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-green-100 text-sm leading-relaxed mb-4">
              Advanced AI with deep environmental knowledge, trained specifically to provide guidance specific to your area's programs, with local recycling centers and disposal options.
            </p>
            <p className="text-green-200 text-xs">
              © 2024 RecyclAI. Making recycling accessible and educational for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}