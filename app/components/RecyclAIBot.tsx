'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import dotLottie player to avoid SSR issues
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => ({ default: mod.DotLottieReact })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-green-100 rounded-full animate-pulse flex items-center justify-center">
        <span className="text-4xl">🤖</span>
      </div>
    )
  }
)

interface RecyclAIBotProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export default function RecyclAIBot({ className = '', size = 'large' }: RecyclAIBotProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-48 h-48 md:w-64 md:h-64'
  }

  if (!isMounted) {
    return (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
        <div className="w-full h-full bg-green-100 rounded-full animate-pulse flex items-center justify-center">
          <span className="text-4xl">🤖</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <DotLottieReact
        src="/lottie/recylai.lottie"
        loop
        autoplay
        className="w-full h-full"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          filter: 'drop-shadow(0 4px 12px rgba(34, 197, 94, 0.15))'
        }}
      />
    </div>
  )
}