import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - MiraclePlay',
  description: 'MiraclePlay Management',
}

export default async function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return children
}
