"use client"

import dynamic from 'next/dynamic'

const WebGLSection = dynamic(
  () => import('@/components/webgl-section').then(mod => mod.WebGLSection),
  { ssr: false }
)

export function WebGLWrapper() {
  return <WebGLSection />
}
