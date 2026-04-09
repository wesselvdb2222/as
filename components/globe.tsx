"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const CITIES: [number, number][] = [
  [51.5, -0.1],
  [52.3, 4.9],
  [40.7, -74.0],
  [48.8, 2.35],
  [35.7, 139.7],
  [1.35, 103.8],
  [25.2, 55.3],
  [28.6, 77.2],
  [-33.9, 151.2],
  [34.0, -118.2],
]

const ARC_PAIRS = [
  [0, 2], [1, 2], [2, 3], [4, 5],
  [5, 6], [6, 7], [8, 4], [9, 2],
  [0, 6], [3, 5],
]

function latLngToVec3(lat: number, lng: number, r = 1.02) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  )
}

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = 380, H = 380
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 3.2

    // Lights
    scene.add(new THREE.DirectionalLight(0xffffff, 1.5).translateX(5).translateY(3).translateZ(5))
    scene.add(new THREE.AmbientLight(0x334466, 0.8))

    // Atmosphere (not in rotating group — stays fixed)
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(1.15, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0x4488ff,
        transparent: true,
        opacity: 0.06,
        side: THREE.BackSide,
      })
    ))

    // Rotating group — everything rotates together
    const group = new THREE.Group()
    scene.add(group)

    // Globe sphere
    const loader = new THREE.TextureLoader()
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshPhongMaterial({
        map: loader.load("https://unpkg.com/three-globe/example/img/earth-night.jpg"),
        bumpMap: loader.load("https://unpkg.com/three-globe/example/img/earth-topology.png"),
        bumpScale: 0.05,
        specular: new THREE.Color(0x111133),
        shininess: 25,
        emissive: new THREE.Color(0x0a0a1a),
      })
    )
    group.add(sphere)

    // City markers
    CITIES.forEach(([lat, lng]) => {
      const pos = latLngToVec3(lat, lng, 1.015)

      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.018, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x8a4fff })
      )
      dot.position.copy(pos)
      group.add(dot)

      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.025, 0.035, 24),
        new THREE.MeshBasicMaterial({
          color: 0x8a4fff,
          transparent: true,
          opacity: 0.6,
          side: THREE.DoubleSide,
        })
      )
      ring.position.copy(pos)
      ring.lookAt(0, 0, 0)
      group.add(ring)
    })

    // Arcs
    const arcLines: THREE.Line[] = []
    ARC_PAIRS.forEach(([a, b]) => {
      const start = latLngToVec3(CITIES[a][0], CITIES[a][1])
      const end   = latLngToVec3(CITIES[b][0], CITIES[b][1])
      const mid   = start.clone().add(end).normalize().multiplyScalar(1.5)
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      const line  = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)),
        new THREE.LineBasicMaterial({ color: 0x8a4fff, transparent: true, opacity: 0.45 })
      )
      group.add(line)
      arcLines.push(line)
    })

    // Animate
    let frame: number
    let t = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      t += 0.003
      group.rotation.y = t
      arcLines.forEach((l, i) => {
        ;(l.material as THREE.LineBasicMaterial).opacity =
          0.2 + 0.4 * Math.abs(Math.sin(t * 0.7 + i * 0.5))
      })
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full select-none">
      <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div ref={mountRef} className="relative z-10" style={{ width: 380, height: 380 }} />
    </div>
  )
}
