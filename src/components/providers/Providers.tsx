import '@rainbow-me/rainbowkit/styles.css'
import { Chain, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AccountHookProvider } from 'src/store/accountContext'
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { polygon, optimism, arbitrum } from 'viem/chains'

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

const apothem: Chain = {
  id: 51,
  name: 'Apothem',
  network: 'XDC',
  iconUrl:
    'https://static.wixstatic.com/media/9296c5_93002a44908b4edf93f7356fb9b62505~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/XDC.png',

  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'XDC',
    symbol: 'TXDC'
  },
  rpcUrls: {
    public: { http: ['https://rpc.apothem.network'] },
    default: { http: ['https://rpc.apothem.network'] }
  },
  blockExplorers: {
    default: { name: 'Apothem Explorer', url: 'https://explorer.apothem.network/' },
    etherscan: { name: 'Apothem Explorer', url: 'https://explorer.apothem.network/' }
  },
  testnet: true
}

const wanchain_testnet: Chain = {
  id: 999,
  name: 'Wanchain Testnet',
  network: 'Wanchain',
  iconUrl:
    'https://static.wixstatic.com/media/9296c5_baa08fd32afd43cdbc2da4c2932828de~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WAN.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Wanchain',
    symbol: 'WAN'
  },
  rpcUrls: {
    public: { http: ['https://gwan-ssl.wandevs.org:46891'] },
    default: { http: ['https://gwan-ssl.wandevs.org:46891'] }
  },
  blockExplorers: {
    default: { name: 'WanScan', url: 'https://testnet.wanscan.org/' },
    etherscan: { name: 'WanScan', url: 'https://testnet.wanscan.org/' }
  },
  testnet: true
}

const { chains, publicClient } = configureChains([apothem, wanchain_testnet], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'GoldSmith Finance',
  projectId: '224a04c9b1c5a31a4ab2991c84b8ce4f',
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

theme = createTheme(theme)

const Providers = ({ children }: { children: JSX.Element }) => {
  const clientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <AccountHookProvider>{children}</AccountHookProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}

export default Providers
