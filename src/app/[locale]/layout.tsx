import type { Metadata } from 'next'
import localFont from 'next/font/local'
import RootProvider from '@/providers'
import Header from '@/components/header'

const pretendard = localFont({
  src: '../../font/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard-std',
})

export const metadata: Metadata = {
  title: 'MiraclePlay',
  description: 'MiraclePlay Management',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale} className={`${pretendard.variable}`}>
      <head></head>
      <body>
        <RootProvider>
          <Header />
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
