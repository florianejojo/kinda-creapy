"use client"
import React, { useEffect, useRef, useState } from "react"

interface Pixel {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  draw: (ctx: CanvasRenderingContext2D) => void
  divide: () => Pixel[]
}

const createPixel = (x: number, y: number, vx: number, vy: number, color: string): Pixel => {
  return {
    x,
    y,
    vx,
    vy,
    color,
    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, 0.5, 0.5)
    },
    divide() {
      const shouldDivide = Math.random() < 0.01 // 1% chance to divide
      if (shouldDivide) {
        return [
          createPixel(
            this.x,
            this.y,
            this.vx + Math.random() - 0.5,
            this.vy + Math.random() - 0.5,
            this.color,
          ),
          createPixel(
            this.x,
            this.y,
            this.vx + Math.random() - 0.5,
            this.vy + Math.random() - 0.5,
            this.color,
          ),
        ]
      } else {
        return [this]
      }
    },
  }
}

export const AlgoBlood: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const pixelsRef = useRef<Pixel[]>([])
  const [pixelColor, setPixelColor] = useState("brown")

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Creates first pixel
    pixelsRef.current = [
      createPixel(canvas.width / 2, canvas.height, 0.1, -0.1, pixelColor), // vy negative to go up
    ]

    function draw() {
      if (!ctx) return
      const newPixels: Pixel[] = []
      pixelsRef.current.forEach((pixel) => {
        pixel.draw(ctx)
        pixel.x += pixel.vx
        pixel.y += pixel.vy
        newPixels.push(...pixel.divide())
      })
      pixelsRef.current = newPixels
      rafRef.current = window.requestAnimationFrame(draw)
    }

    rafRef.current = window.requestAnimationFrame(draw)

    const colorTimeout = setTimeout(() => {
      setPixelColor("black")
    }, 1000 * 5)

    const drawingTimeout = setTimeout(() => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }, 11 * 1000)

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
      clearTimeout(drawingTimeout)
      clearTimeout(colorTimeout)
    }
  }, [isClient])

  return (
    <canvas
      ref={canvasRef}
      width={isClient ? window.innerWidth : 0}
      height={isClient ? window.innerHeight : 0}
      className="bg-inherit fixed z-0"
    />
  )
}
