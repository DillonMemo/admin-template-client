import AntdProvider from './antd-provider'
import NextIntlProvider from './next-intl-provider'
import RecoilProvider from './recoil-provider'
import StyledComponentsProvider from './styled-components-provider'
import ThemeProvider from './theme-provider'

export default function RootProvider({ children }: React.PropsWithChildren) {
  return (
    <NextIntlProvider>
      <AntdProvider>
        <RecoilProvider>
          <StyledComponentsProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </StyledComponentsProvider>
        </RecoilProvider>
      </AntdProvider>
    </NextIntlProvider>
  )
}
