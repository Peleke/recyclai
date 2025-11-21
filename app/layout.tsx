import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RecyclAI - Expert Recycling Guidance',
  description: 'Expert recycling guidance through intelligent conversation. Get personalized disposal advice for any item.',
  keywords: ['recycling', 'waste disposal', 'environmental', 'AI', 'sustainability'],
  authors: [{ name: 'RecyclAI Team' }],
  creator: 'RecyclAI',
  publisher: 'RecyclAI',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#22c55e',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-192x192.png',
  },
  openGraph: {
    title: 'RecyclAI - Expert Recycling Guidance',
    description: 'Expert recycling guidance through intelligent conversation. Get personalized disposal advice for any item.',
    url: 'https://recyclai.app',
    siteName: 'RecyclAI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RecyclAI - Expert Recycling Guidance',
    description: 'Expert recycling guidance through intelligent conversation. Get personalized disposal advice for any item.',
    creator: '@recyclai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root" className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">♻️</span>
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">RecyclAI</h1>
                </div>
                <p className="text-sm text-gray-600 hidden sm:block">
                  Expert recycling guidance through intelligent conversation
                </p>
              </div>
            </div>
          </header>

          <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          <footer className="bg-gray-50 border-t border-gray-200 py-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">
                © 2024 RecyclAI. Helping make recycling accessible and educational.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}