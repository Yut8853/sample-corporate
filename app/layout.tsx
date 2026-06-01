import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: {
    default: 'NEXUS CREATIVE | Creating Digital Excellence',
    template: '%s | NEXUS CREATIVE'
  },
  description: 'NEXUS CREATIVEは、最先端のデジタル体験を創造するクリエイティブスタジオです。Web制作、システム開発、ブランディングを通じて、ビジネスの未来を共に描きます。',
  keywords: ['Web制作', 'システム開発', 'デジタルマーケティング', 'クリエイティブ', 'ブランディング', 'UX/UIデザイン'],
  authors: [{ name: 'NEXUS CREATIVE' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'NEXUS CREATIVE',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
