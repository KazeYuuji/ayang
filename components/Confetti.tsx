'use client'

import React, { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: string
  left: number
  delay: number
  color: string
  size: number
}

export default function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const createConfetti = () => {
      const colors = [
        '#ec4899', // pink-500
        '#f472b6', // pink-400
        '#fbcfe8', // pink-200
        '#fce7f3', // pink-100
        '#fbbf24', // amber-400
        '#fcd34d', // amber-300
        '#fef3c7', // amber-100
      ]

      const newConfetti: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: `confetti-${Date.now()}-${i}`,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      }))

      setConfetti(newConfetti)

      // Remove confetti after animation completes
      setTimeout(() => {
        setConfetti([])
        // Create new confetti burst every 2 seconds
        setTimeout(createConfetti, 1000)
      }, 3500)
    }

    createConfetti()
  }, [])

  return (
    <>
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            position: 'fixed',
            left: `${piece.left}%`,
            top: '-10px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: `confetti-fall 3s ease-in forwards`,
            animationDelay: `${piece.delay}s`,
            zIndex: 1,
          }}
        />
      ))}
    </>
  )
}
