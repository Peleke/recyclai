'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  className?: string
  onComplete?: () => void
  delay?: number
  speed?: number
}

export default function TypewriterText({
  text,
  className = '',
  onComplete,
  delay = 0,
  speed = 100
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => setStarted(true), delay)
      return () => clearTimeout(delayTimeout)
    } else {
      setStarted(true)
    }
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, started, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-full bg-green-500 ml-1 animate-pulse">
        {currentIndex < text.length ? '|' : ''}
      </span>
    </span>
  )
}