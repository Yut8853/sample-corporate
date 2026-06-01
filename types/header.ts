export interface NavigationItem {
  name: string
  nameJa: string
  href: string
}

export interface UseHeaderStateResult {
  closeMobileMenu: () => void
  isMobileMenuOpen: boolean
  isScrolled: boolean
  toggleMobileMenu: () => void
}
