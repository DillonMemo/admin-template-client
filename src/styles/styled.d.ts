import { CSSProperties } from 'styled-components'

// export interface StyledProps<T = {}> extends T {
//   theme: ThemeConstant
// }
// export type ThemeConstant = {
//   '--theme-mode': 'light' | 'dark'
//   '--color-body': CSSProperties['color']
//   '--color-primary-contrast': CSSProperties['color']
//   '--color-primary-normal': CSSProperties['color']
//   '--color-primary-most': CSSProperties['color']
//   '--color-primary-strong': CSSProperties['color']
//   '--color-primary-weak': CSSProperties['color']
//   '--color-primary-assistive': CSSProperties['color']
// }

declare module 'styled-components' {
  export interface DefaultTheme {
    '--theme-mode': 'light' | 'dark'
    '--color-body': CSSProperties['color']
    '--color-primary-contrast': CSSProperties['color']
    '--color-primary-normal': CSSProperties['color']
    '--color-primary-most': CSSProperties['color']
    '--color-primary-strong': CSSProperties['color']
    '--color-primary-weak': CSSProperties['color']
    '--color-primary-assistive': CSSProperties['color']
  }
}
