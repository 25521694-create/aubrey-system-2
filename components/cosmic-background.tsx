"use client"

import { useEffect, useMemo, useRef } from "react"

/** Deterministic [0,1) from index — same on server and client (unlike Math.random()). */
function stable01(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453123
  return x - Math.floor(x)
}

export function CosmicBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  const lightRayProps = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        height: 40 + stable01(i, 1) * 40,
        delay: stable01(i, 2) * 4,
        opacity: 0.2 + stable01(i, 3) * 0.3,
      })),
    []
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create streaming particles
    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"
      
      // Random position across the bottom
      const startX = Math.random() * 100
      const height = 50 + Math.random() * 150 // Random height 50-200px
      const duration = 3 + Math.random() * 4 // 3-7 seconds
      const delay = Math.random() * 2
      
      particle.style.left = `${startX}%`
      particle.style.bottom = "0"
      particle.style.height = `${height}px`
      particle.style.animationDuration = `${duration}s`
      particle.style.animationDelay = `${delay}s`
      
      container.appendChild(particle)
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove()
      }, (duration + delay) * 1000)
    }

    // Create particles continuously
    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        createParticle()
      }
    }, 200)

    // Create initial batch
    for (let i = 0; i < 50; i++) {
      createParticle()
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="cosmic-bg" ref={containerRef}>
      {/* Central glow */}
      <div className="central-glow" />
      
      {/* Light rays emanating from center bottom */}
      {lightRayProps.map((props, i) => {
        const angle = -60 + i * 3 // Spread from -60 to 60 degrees
        return (
          <div
            key={i}
            className="light-ray"
            style={{
              height: `${props.height}vh`,
              transform: `translateX(-50%) rotate(${angle}deg)`,
              animationDelay: `${props.delay}s`,
              opacity: props.opacity,
            }}
          />
        )
      })}
      
      {/* Ambient glow spots */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(0, 150, 255, 0.15) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-20 left-1/4 w-[300px] h-[300px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 180, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-[300px] h-[300px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 180, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  )
}
