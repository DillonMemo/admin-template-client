import type { Metadata } from 'next'
import localFont from 'next/font/local'
import RootProvider from '@/providers'
import Header from '@/components/header'
import { headers } from 'next/headers'
import { getCsrfToken } from 'next-auth/react'

const pretendard = localFont({
  src: '../../font/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard-std',
})

export const metadata: Metadata = {
  title: 'Home - MiraclePlay',
  description: 'MiraclePlay Management',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const pathname = headers().get('x-current-path')
  const csrfToken = await getCsrfToken()
  console.log('path', { pathname, csrfToken })
  return (
    <html lang={locale} className={`${pretendard.variable}`}>
      <head></head>
      <body>
        <RootProvider>
          {pathname?.includes('/signin') ? (
            children
          ) : (
            <>
              <Header />
              {children}
            </>
          )}
        </RootProvider>
      </body>
    </html>
  )
}
