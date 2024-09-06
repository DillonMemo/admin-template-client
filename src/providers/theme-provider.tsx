'use client'

import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div style={{ visibility: 'hidden' }}>{children}</div>
  return <>{children}</>
}
