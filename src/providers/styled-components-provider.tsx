'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { GlobalStyles } from '@/styles/styles'
import { useRecoilValue } from 'recoil'
import { themeModeState } from '@/recoil/theme-atom'

export default function StyledComponentsProvider({ children }: React.PropsWithChildren) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
  const themeMode = useRecoilValue(themeModeState)

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()

    return <>{styles}</>
  })

  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty('--theme-mode', themeMode)
    root.style.setProperty('--color-body', themeMode === 'light' ? '#dfdfdf' : '#283046')
    root.style.setProperty(
      '--color-primary-contrast',
      themeMode === 'light' ? '#F2F2F2' : '#1B1F24'
    )
    root.style.setProperty('--color-primary-normal', themeMode === 'light' ? '#a6a6a6' : '#4A5868')
    root.style.setProperty('--color-primary-most', themeMode === 'light' ? '#8c8c8c' : '#3A4452')
    root.style.setProperty('--color-primary-strong', themeMode === 'light' ? '#707070' : '#222831')
    root.style.setProperty('--color-primary-weak', themeMode === 'light' ? '#ececec' : '#384656')
    root.style.setProperty(
      '--color-primary-assistive',
      themeMode === 'light' ? '#b3b3b3' : '#5C6A7A'
    )
    root.style.setProperty('--text-color-normal', themeMode === 'light' ? '#1B1F24' : '#F2F2F2')
  }, [themeMode])

  if (typeof window !== 'undefined') {
    return <>{children}</>
  }
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyles />

      {children}
    </StyleSheetManager>
  )
}
