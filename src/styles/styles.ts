import styled, { createGlobalStyle, CSSProperties } from 'styled-components'
import themes from './theme'
import { Skeleton } from 'antd'
import { StyleHTMLAttributes } from 'react'

export const WIDTH = '5rem'
export const EXPANDED_WIDTH = '16.5rem'

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`

export const { $3xs, $2xs, xs, sm, md, lg, xl, $2xl, $3xl } = {
  $3xs: '@media (max-width: 20rem)', // 320px
  $2xs: '@media (max-width: 32rem)', // 512px
  xs: '@media (max-width: 48rem)', // 768px
  sm: '@media (max-width: 62rem)', // 992px
  md: '@media (max-width: 64rem)', // 1024px
  lg: '@media (max-width: 80rem)', // 1280px
  xl: '@media (max-width: 90rem)', // 1440px
  $2xl: '@media (max-width: 120rem)', // 1920px
  $3xl: '@media (max-width: 160rem)', // 2560px
}

/**
 * key: _xx(%) percent
 * value: convert to hex
 */
export const opacityHex = {
  _0: '00',
  _10: '16',
  _20: '32',
  _30: '48',
  _40: '64',
  _50: '80',
  _60: '96',
  _70: 'aa',
  _80: 'cc',
  _90: 'ee',
}

export type ThemeMode = keyof typeof themes
// export type StyleMode = {
//   toggleStyle: (mode: ThemeMode) => void
//   theme: ThemeMode
// }

export const GlobalStyles = createGlobalStyle`
    :root {
        --status-indicator-size: 10px;
        --status-indicator-animation-duration: 2s;
        --status-indicator-color: #d8e2e9;
        --status-indicator-color-semi: rgba(216,226,233,0.5);
        --status-indicator-color-transparent: rgba(216,226,233,0);
        --status-indicator-color-active: #0095ff;
        --status-indicator-color-active-semi: rgba(0,149,255,0.5);
        --status-indicator-color-active-transparent: rgba(0,149,255,0);
        --status-indicator-color-positive: #4bd28f;
        --status-indicator-color-positive-semi: rgba(75,210,143,0.5);
        --status-indicator-color-positive-transparent: rgba(75,210,143,0);
        --status-indicator-color-intermediary: #fa0;
        --status-indicator-color-intermediary-semi: rgba(255,170,0,0.5);
        --status-indicator-color-intermediary-transparent: rgba(255,170,0,0);
        --status-indicator-color-negative: #ff4d4d;
        --status-indicator-color-negative-semi: rgba(255,77,77,0.5);
        --status-indicator-color-negative-transparent: rgba(255,77,77,0);
    }

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body {
        font-family: var(--font-pretendard-std);
        background-color: var(--color-body);
    }

    main {
        min-height: 100vh;
        padding: 7.75rem 2rem 0;
        background-color: var(--color-body);

        margin-left: 16rem;

        color: var(--text-color-normal);

        ${lg} {
            margin-left: ${WIDTH};
        }
        ${xs} {
            margin-left: 0;
            padding: 7.75rem 1.2rem 0;
        }
    }

    a {
        outline: none;
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      color: inherit;
    }
    p {
      margin: 0;
      padding: 0;
    }
    /** 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(34, 45, 50, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(34, 45, 50, 1);
    }

    /** 커스텀 클래스 */
    .flex {
        display: flex;
    }
    .align-center {
        align-items: center;
    }

    .m-p-0\! {
        ${xs} {
            padding: 0 !important;
        }

    }   
`

export const SkeletonStyle: { style: CSSProperties } = {
  style: {
    background:
      'linear-gradient(90deg, rgba(128, 128, 128, 0.1) 25%, rgba(128, 128, 128, 0.2) 37%, rgba(128, 128, 128, 0.1) 63%)',
    backgroundSize: '400% 100%',
  },
}
