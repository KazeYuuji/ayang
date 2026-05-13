'use client'

import React, { useState, useEffect, useRef } from 'react'
import Confetti from '@/components/Confetti'
import BirthdayCake from '@/components/BirthdayCake'
import CuteCharacters from '@/components/CuteCharacters'

export default function Home() {
  const [isOpened, setIsOpened] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isOpened) {
      setShowAnimation(true)
    }
  }, [isOpened])

  useEffect(() => {
    // Calculate days until birthday (May 22)
    const today = new Date()
    const currentYear = today.getFullYear()
    const birthdayDate = new Date(currentYear, 4, 22) // Month is 0-indexed, so 4 = May

    // If birthday has passed this year, calculate for next year
    if (today > birthdayDate) {
      birthdayDate.setFullYear(currentYear + 1)
    }

    const timeDiff = birthdayDate.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    setDaysUntilBirthday(daysDiff)
  }, [])

  // Crystal Clear Endless Loop Synthesizer
  const playHappyBirthday = async () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      // Speed up the tempo to be more pleasant and lively
      const tempo = 0.42;
      const loopBeats = 24;
      const totalDuration = loopBeats * tempo;

      const offlineCtx = new (window.OfflineAudioContext || (window as any).webkitOfflineAudioContext)(2, 44100 * totalDuration, 44100);

      const playNote = (freq: number, type: OscillatorType, startTime: number, duration: number, vol: number) => {
        if (!freq) return;
        const osc = offlineCtx.createOscillator();
        const gain = offlineCtx.createGain();
        osc.type = type;
        osc.frequency.value = freq;

        osc.connect(gain);
        gain.connect(offlineCtx.destination);

        // Ultra-clean envelope to prevent any popping or clicking noises
        osc.start(startTime);
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(vol, startTime + 0.05); // Very smooth attack
        gain.gain.setValueAtTime(vol, startTime + duration - 0.05); // Hold steady
        gain.gain.linearRampToValueAtTime(0, startTime + duration); // Very smooth release to exact 0
        osc.stop(startTime + duration + 0.1);
      };

      const notes = [
        { f: 392.00, d: 0.5 }, { f: 392.00, d: 0.5 },
        { f: 440.00, d: 1 }, { f: 392.00, d: 1 }, { f: 523.25, d: 1 },
        { f: 493.88, d: 2 }, { f: 392.00, d: 0.5 }, { f: 392.00, d: 0.5 },
        { f: 440.00, d: 1 }, { f: 392.00, d: 1 }, { f: 587.33, d: 1 },
        { f: 523.25, d: 2 }, { f: 392.00, d: 0.5 }, { f: 392.00, d: 0.5 },
        { f: 783.99, d: 1 }, { f: 659.25, d: 1 }, { f: 523.25, d: 1 },
        { f: 493.88, d: 1 }, { f: 440.00, d: 2 },
        { f: 698.46, d: 0.5 }, { f: 698.46, d: 0.5 }, { f: 659.25, d: 1 }, { f: 523.25, d: 1 },
        { f: 587.33, d: 1 }, { f: 523.25, d: 1 }
      ];

      let mTime = 0;
      notes.forEach(note => {
        playNote(note.f, 'triangle', mTime, note.d * tempo, 0.2);
        playNote(note.f, 'sine', mTime, note.d * tempo, 0.2);
        mTime += note.d * tempo;
      });

      const bassRoots = [
        { f: 98.00, t: 1 }, { f: 73.42, t: 4 }, { f: 73.42, t: 7 }, { f: 98.00, t: 10 },
        { f: 98.00, t: 13 }, { f: 65.41, t: 16 }, { f: 65.41, t: 19 }, { f: 73.42, t: 22 }
      ];
      bassRoots.forEach(b => {
        playNote(b.f, 'triangle', b.t * tempo, tempo * 1.5, 0.25);
      });

      const chordMeasures = [
        { c: [196, 246.94, 293.66], t: 1 }, { c: [146.83, 220, 277.18], t: 4 }, { c: [146.83, 220, 277.18], t: 7 },
        { c: [196, 246.94, 293.66], t: 10 }, { c: [196, 246.94, 293.66], t: 13 }, { c: [130.81, 164.81, 196], t: 16 },
        { c: [130.81, 164.81, 196], t: 19 },
      ];
      chordMeasures.forEach(m => {
        m.c.forEach(f => playNote(f, 'sine', (m.t + 1) * tempo, tempo * 0.8, 0.08));
        m.c.forEach(f => playNote(f, 'sine', (m.t + 2) * tempo, tempo * 0.8, 0.08));
      });
      [196, 246.94, 293.66].forEach(f => playNote(f, 'sine', 23 * tempo, tempo * 0.8, 0.08));

      const renderedBuffer = await offlineCtx.startRendering();

      const realCtx = new AudioContext();
      const source = realCtx.createBufferSource();
      source.buffer = renderedBuffer;
      source.loop = true;

      // Connect directly to output for maximum clarity (no effects)
      source.connect(realCtx.destination);
      source.start();

    } catch (e) {
      console.log("Audio API failed:", e);
    }
  };

  useEffect(() => {
    // Calculate days until birthday (May 22)
    const today = new Date()
    const currentYear = today.getFullYear()
    const birthdayDate = new Date(currentYear, 4, 22) // Month is 0-indexed, so 4 = May

    // If birthday has passed this year, calculate for next year
    if (today > birthdayDate) {
      birthdayDate.setFullYear(currentYear + 1)
    }

    const timeDiff = birthdayDate.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    setDaysUntilBirthday(daysDiff)
  }, [])

  return (
    <React.Fragment>
      {!isOpened ? (
        <main className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 px-4">
          <div className="text-center animate-bounce-custom">
            <button
              onClick={() => {
                playHappyBirthday();
                setIsOpened(true);
              }}
              className="group relative"
            >
              <div className="text-8xl sm:text-9xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💌
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-pink-200">
                <span className="text-pink-600 font-bold text-xl sm:text-2xl">Buka Surat Ini 💕</span>
              </div>
            </button>
          </div>
        </main>
      ) : (
        <main className="min-h-[100dvh] w-full relative overflow-x-hidden flex flex-col justify-center items-center py-8">

          {/* Animated background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 opacity-80"></div>
            <div className="absolute top-0 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 -right-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4 sm:px-8">
            {/* Confetti effect */}
            <Confetti />

            {/* Cute characters */}
            <CuteCharacters />

            {/* Main content container */}
            <div
              className={`text-center max-w-2xl w-full transform transition-all duration-1000 ${showAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
            >
              {/* Birthday Cake */}
              <BirthdayCake />

              {/* Main heading */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-gradient animate-rainbow-text drop-shadow-lg leading-tight px-2"
                style={{
                  textShadow: '0 4px 6px rgba(236, 72, 153, 0.3)',
                }}
              >
                🎉 HAPPY BIRTHDAY! 🎉
              </h1>

              {/* Subtitle with date */}
              <div className="mb-4 sm:mb-6">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-600 mb-1 animate-pulse">
                  🌟 May 22 🌟
                </p>
                <p className="text-sm sm:text-lg text-pink-500">
                  Selamat ulang tahun Syasha, ayanggg yang paling berharga bagi sayang 💝 ✨
                </p>
              </div>

              {/* Decorative line */}
              <div className="flex justify-center items-center gap-4 mb-4 sm:mb-6">
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent to-pink-400 rounded-full"></div>
                <div className="text-xl sm:text-2xl">✨</div>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-l from-transparent to-pink-400 rounded-full"></div>
              </div>

              {/* Countdown */}
              {daysUntilBirthday > 0 && (
                <div className="mb-4 sm:mb-6 text-center bg-white/40 backdrop-blur-sm rounded-full py-2 px-6 inline-block border border-pink-200">
                  <p className="text-xs sm:text-sm text-pink-600 font-medium">H- {daysUntilBirthday} menuju hari ulang tahun! 🎂</p>
                </div>
              )}

              {/* Call to action */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowLetter(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:from-pink-500 hover:to-pink-600 transition-all transform hover:scale-105 active:scale-95 border-2 border-white"
                >
                  💌 Surat untuk ayang yang tercinta
                </button>
              </div>

              {/* Decorative elements */}
              <div className="mt-8 flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl animate-bounce">
                <span className="animate-float">🎈</span>
                <span className="animate-float" style={{ animationDelay: '0.3s' }}>
                  🎉
                </span>
                <span className="animate-float" style={{ animationDelay: '0.6s' }}>
                  🧸
                </span>
                <span className="animate-float" style={{ animationDelay: '0.9s' }}>
                  🎈
                </span>
              </div>
            </div>
          </div>

          {/* Floating hearts background effect */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                💕
              </div>
            ))}
          </div>

          {/* Letter Modal */}
          {showLetter && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink-900/40 backdrop-blur-sm">
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl transform transition-all animate-scaleIn relative border-4 border-pink-200 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setShowLetter(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-center mb-6">
                  <span className="text-5xl">💌</span>
                </div>

                <div className="prose prose-pink text-gray-700 text-center">
                  <h2 className="text-2xl font-bold text-pink-600 mb-4 font-poppins">Teruntuk Kamu yang Spesial,</h2>
                  <p className="mb-4 leading-relaxed">
                    Selamat ulang tahun ayang! 🎂 Terima kasih udah menjadi sosok yang luar biasa dan selalu membawa kebahagiaan.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Doa sayang untuk ayang, semoga di usia yang baru ini, ayang selalu diberikan kesehatan, kelancaran dalam setiap langkah ayang, dan kebahagiaan yang ngga ada habisnya. Jangan pernah lupa untuk tersenyum hari ini ya cantik!
                  </p>
                  <p className="font-semibold text-pink-500 mt-6">
                    With all my love and best wishes, <br />
                    💕
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setShowLetter(false)}
                    className="px-6 py-2 bg-pink-100 text-pink-600 font-semibold rounded-full hover:bg-pink-200 transition-colors"
                  >
                    Tutup Surat
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}
    </React.Fragment>
  )
}
