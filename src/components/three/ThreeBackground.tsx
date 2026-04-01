'use client'

import { useEffect, useRef } from 'react'

export default function ThreeBackground(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let isDisposed = false
    let animationId: number

    const init = async (): Promise<void> => {
      const THREE = await import('three')
      if (isDisposed) return

      // ── Renderer ────────────────────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      // ── Scene & Camera ───────────────────────────────────────────────────────
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
      camera.position.z = 30

      // ── Paper scraps ─────────────────────────────────────────────────────────
      const paperColors = [0xfdfaf3, 0xf5f0e8, 0xfff8ee, 0xf0ebe0, 0xfaf5ec]
      const paperScraps: THREE.Mesh[] = []

      for (let i = 0; i < 28; i++) {
        const w = 1.2 + Math.random() * 3.5
        const h = 0.8 + Math.random() * 2.5
        const geo = new THREE.PlaneGeometry(w, h)
        const mat = new THREE.MeshBasicMaterial({
          color: paperColors[Math.floor(Math.random() * paperColors.length)],
          transparent: true,
          opacity: 0.08 + Math.random() * 0.12,
          side: THREE.DoubleSide,
        })
        const mesh = new THREE.Mesh(geo, mat)

        mesh.position.set(
          (Math.random() - 0.5) * 55,
          (Math.random() - 0.5) * 35,
          (Math.random() - 0.5) * 20 - 5,
        )
        mesh.rotation.z = (Math.random() - 0.5) * Math.PI * 0.6
        mesh.rotation.x = (Math.random() - 0.5) * 0.5
        mesh.userData = {
          floatSpeed: 0.003 + Math.random() * 0.006,
          floatAmplitude: 0.4 + Math.random() * 0.8,
          floatOffset: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.001,
          originY: mesh.position.y,
        }

        scene.add(mesh)
        paperScraps.push(mesh)
      }

      // ── Red particles ────────────────────────────────────────────────────────
      const buildParticleSystem = (
        count: number,
        color: number,
        size: number,
        spread: [number, number, number],
      ): THREE.Points => {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
          positions[i * 3] = (Math.random() - 0.5) * spread[0]
          positions[i * 3 + 1] = (Math.random() - 0.5) * spread[1]
          positions[i * 3 + 2] = (Math.random() - 0.5) * spread[2]
        }
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const mat = new THREE.PointsMaterial({
          color,
          size,
          transparent: true,
          opacity: 0.5,
          sizeAttenuation: true,
        })
        return new THREE.Points(geo, mat)
      }

      const redParticles = buildParticleSystem(280, 0xa6171c, 0.12, [80, 50, 30])
      const goldParticles = buildParticleSystem(160, 0xc8a84b, 0.08, [70, 45, 25])

      scene.add(redParticles)
      scene.add(goldParticles)

      // ── Mouse tracking ───────────────────────────────────────────────────────
      const onMouseMove = (e: MouseEvent): void => {
        mouseRef.current = {
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: -(e.clientY / window.innerHeight - 0.5) * 2,
        }
      }
      window.addEventListener('mousemove', onMouseMove, { passive: true })

      // ── Resize ───────────────────────────────────────────────────────────────
      const onResize = (): void => {
        if (isDisposed) return
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize, { passive: true })

      // ── Animate ──────────────────────────────────────────────────────────────
      let t = 0
      const animate = (): void => {
        if (isDisposed) return
        animationId = requestAnimationFrame(animate)
        t += 0.01

        // Paper scraps float
        for (const scrap of paperScraps) {
          const ud = scrap.userData as {
            floatSpeed: number
            floatAmplitude: number
            floatOffset: number
            rotSpeed: number
            originY: number
          }
          scrap.position.y =
            ud.originY + Math.sin(t * ud.floatSpeed * 100 + ud.floatOffset) * ud.floatAmplitude
          scrap.rotation.z += ud.rotSpeed
        }

        // Particle drift
        redParticles.rotation.y = t * 0.015
        redParticles.rotation.x = t * 0.008
        goldParticles.rotation.y = -t * 0.012
        goldParticles.rotation.x = t * 0.006

        // Mouse parallax on camera
        const mx = mouseRef.current.x
        const my = mouseRef.current.y
        camera.position.x += (mx * 3 - camera.position.x) * 0.04
        camera.position.y += (my * 2 - camera.position.y) * 0.04
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }

      animate()

      // ── Cleanup ──────────────────────────────────────────────────────────────
      return (): void => {
        isDisposed = true
        cancelAnimationFrame(animationId)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)

        for (const scrap of paperScraps) {
          scrap.geometry.dispose()
          ;(scrap.material as THREE.Material).dispose()
        }

        ;(redParticles.geometry as THREE.BufferGeometry).dispose()
        ;(redParticles.material as THREE.Material).dispose()
        ;(goldParticles.geometry as THREE.BufferGeometry).dispose()
        ;(goldParticles.material as THREE.Material).dispose()

        renderer.dispose()
      }
    }

    let cleanup: (() => void) | undefined

    init()
      .then((fn) => {
        cleanup = fn
      })
      .catch((err: unknown) => {
        console.error('[ThreeBackground] init error:', err)
      })

    return (): void => {
      isDisposed = true
      cancelAnimationFrame(animationId)
      cleanup?.()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}
