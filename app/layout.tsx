import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatAssistant from '@/components/ChatAssistant'
import { asset } from '@/lib/asset'

export const metadata: Metadata = {
  title: 'Outshift Design',
  description: 'Meet Outshift, Cisco\'s product design team driving ideation and alignment across AI, security, and network incubation initiatives.',
  openGraph: {
    type: 'website',
    title: 'Outshift Design — Cisco\'s Product Design Team',
    description: 'Meet Outshift, Cisco\'s product design team driving ideation and alignment across AI, security, and network incubation initiatives.',
    url: 'https://vaesposito.github.io/outshift-design/',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outshift Design — Cisco\'s Product Design Team',
    description: 'Meet Outshift, Cisco\'s product design team driving ideation and alignment across AI, security, and network incubation initiatives.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

const themeScript = `(function(){var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark')}})();`

// Decorative CSS background images live in globals.css as var(--bg-*).
// They are defined here so the basePath is applied for GitHub Pages.
const bgVars = `:root{
  --bg-section: url('${asset('/images/section.svg')}');
  --bg-section-inverted: url('${asset('/images/section-inverted.svg')}');
  --bg-section-dark: url('${asset('/images/section-darkmode.svg')}');
  --bg-section-inverted-dark: url('${asset('/images/section-inverted-darkmode.svg')}');
  --bg-blob-violet: url('${asset('/images/round-violet.svg')}');
  --bg-blob-orange: url('${asset('/images/round-orange.svg')}');
  --bg-blob-blue: url('${asset('/images/round-blue.svg')}');
}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href={asset('/images/favicon.svg')} />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <style dangerouslySetInnerHTML={{ __html: bgVars }} />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          {children}
          <Footer />
          <ChatAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}
