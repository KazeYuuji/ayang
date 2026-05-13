'use client'

import React from 'react'

export default function CuteCharacters() {
  const characters = [
    {
      emoji: '🎉',
      name: 'Party Popper',
      position: 'top-10 left-5',
      delay: '0s',
    },
    {
      emoji: '🎊',
      name: 'Confetti Ball',
      position: 'top-20 right-8',
      delay: '0.5s',
    },
    {
      emoji: '🎈',
      name: 'Balloon',
      position: 'bottom-32 left-10',
      delay: '1s',
    },
    {
      emoji: '🎁',
      name: 'Gift',
      position: 'bottom-40 right-12',
      delay: '0.3s',
    },
    {
      emoji: '⭐',
      name: 'Star',
      position: 'top-1/3 left-1/4',
      delay: '0.7s',
    },
    {
      emoji: '✨',
      name: 'Sparkles',
      position: 'top-1/4 right-1/4',
      delay: '0.2s',
    },
    {
      emoji: '🌟',
      name: 'Glowing Star',
      position: 'bottom-1/3 left-1/3',
      delay: '0.9s',
    },
    {
      emoji: '🦄',
      name: 'Unicorn',
      position: 'bottom-20 right-1/4',
      delay: '0.4s',
    },
  ]

  return (
    <>
      {characters.map((char, index) => (
        <div
          key={index}
          className={`fixed ${char.position} text-4xl sm:text-5xl md:text-6xl animate-float pointer-events-none`}
          style={{
            animationDelay: char.delay,
            zIndex: -5,
          }}
        >
          {char.emoji}
        </div>
      ))}
    </>
  )
}
