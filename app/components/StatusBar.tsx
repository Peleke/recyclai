'use client'

import { useState, useEffect } from 'react'

interface StatusItem {
  id: string
  icon: string
  label: string
  status: 'complete' | 'progress' | 'pending'
  details: string
}

const statusItems: StatusItem[] = [
  {
    id: 'nextjs',
    icon: '⚡',
    label: 'Next.js 16',
    status: 'complete',
    details: 'Next.js 16 with Turbopack initialized and running'
  },
  {
    id: 'engine',
    icon: '🔄',
    label: 'Core Engine',
    status: 'progress',
    details: 'Building core consultation engine...'
  },
  {
    id: 'epic1',
    icon: '🏗️',
    label: 'Epic 1',
    status: 'progress',
    details: 'Foundation & Infrastructure in progress'
  }
]

export default function StatusBar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Only show in non-production environments
  const isProduction = process.env.NODE_ENV === 'production' ||
                       process.env.ENVIRONMENT === 'prod' ||
                       process.env.ENVIRONMENT === 'production' ||
                       process.env.ENVIRONMENT?.startsWith('prod')

  // Keyboard shortcut to toggle status bar (Ctrl/Cmd + `)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === '`') {
        event.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (isProduction) {
    return null
  }

  // Show minimal toggle button when hidden
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all duration-200 z-50 text-xs"
        title="Show status bar (Ctrl/Cmd + `)"
      >
        📊
      </button>
    )
  }

  const getStatusColor = (status: StatusItem['status']) => {
    switch (status) {
      case 'complete': return 'text-green-600'
      case 'progress': return 'text-yellow-600'
      case 'pending': return 'text-gray-400'
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-50 border-t border-green-200 px-4 py-2 pb-4 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-green-700">Development Status:</span>
          <div className="flex items-center space-x-3">
            {statusItems.map((item) => (
              <div
                key={item.id}
                className="relative flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="text-sm">{item.icon}</span>
                <span className={`text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.label}
                </span>

                {/* Hover popout */}
                {hoveredItem === item.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-10">
                    {item.details}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600">Live</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors px-2 py-1 rounded hover:bg-green-100"
            title="Hide status bar (Ctrl/Cmd + `)"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}