import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AccountHookProvider } from 'src/store/accountContext'
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
  interface Palette {
    tertiary: Palette['primary']
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary']
  }
  interface PaletteColor {
    lighter?: string
    darker?: string
  }
  interface SimplePaletteColorOptions {
    lighter?: string
    darker?: string
  }
}

let theme = createTheme({
  palette: {
    primary: {
      lighter: '#F2D383',
      light: '#ffef00',
      main: '#ffdf00',
      dark: '#36454f',
      darker: '#ffdf00'
    },
    secondary: {
      lighter: '#36454f',
      light: '#36454f',
      main: '#36454f',
      dark: '#36454f',
      darker: '#36454f'
    },
    tertiary: {
      main: '#ff0000',
      contrastText: '#787878'
    },
    background: {
      default: 'white'
    },
    text: {
      primary: '#36454f'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1200,
      desktop: 1600
    }
  }
})
const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  })
})
theme = createTheme(theme)

const Providers = ({ children }: { children: JSX.Element }) => {
  const clientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig config={config}>
        <AccountHookProvider>{children}</AccountHookProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}

export default Providers
