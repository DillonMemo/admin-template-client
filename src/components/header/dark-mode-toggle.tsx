import { Toggle } from './styles'
import { useRecoilState } from 'recoil'
import { themeModeState } from '@/recoil/theme-atom'
import { useCallback } from 'react'

interface Props {}

export default function DarkModeToggle({}: Props) {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState)

  const onToggleTheme = useCallback(() => {
    const mode = themeMode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', mode)
    setThemeMode(mode)
  }, [themeMode, setThemeMode])

  return <Toggle type="checkbox" checked={themeMode === 'dark'} onChange={onToggleTheme} />
}
