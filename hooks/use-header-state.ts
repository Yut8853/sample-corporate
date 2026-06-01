"use client"

import { useEffect, useState } from 'react'
import type { UseHeaderStateResult } from '@/types/header'

export function useHeaderState(): UseHeaderStateResult {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    closeMobileMenu: () => setIsMobileMenuOpen(false),
    isMobileMenuOpen,
    isScrolled,
    toggleMobileMenu: () => setIsMobileMenuOpen((current) => !current),
  }
}
