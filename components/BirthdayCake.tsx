'use client'

import React from 'react'

export default function BirthdayCake() {
  return (
    <div className="flex justify-center items-center mb-4">
      <div className="relative animate-float flex items-center justify-center">
        <span 
          className="text-[120px] sm:text-[150px] leading-none drop-shadow-[0_10px_25px_rgba(236,72,153,0.5)] select-none"
          role="img" 
          aria-label="Birthday Cake"
        >
          🎂
        </span>
      </div>
    </div>
  )
}
