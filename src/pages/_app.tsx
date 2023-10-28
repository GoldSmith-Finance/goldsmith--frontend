import Box from '@mui/material/Box'

import { useCallback, useEffect, useState } from 'react'
import Header from 'src/components/header/Header'
import Providers from 'src/components/providers/Providers'
import BorrowPage from 'src/pages/borrow'
import BuyPage from 'src/pages/buy'
import SellPage from 'src/pages/burn'
import type { AppProps } from 'next/app'
import AccountPage from './account'
import SupplyPage from './supply'
import './globals.css'
import { useAccountHook } from '../store/accountContext'

import NavMenu from '../components/nav-menu/NavMenu'

import { useRouter } from 'next/router'
import HomePage from './HomePage'

function MyApp({ Component, pageProps }: AppProps) {
  const { setChainId, setMetalType } = useAccountHook()
  const [activePath, setActivePath] = useState('')

  const router = useRouter()
  const url = router.asPath
  const paths = url
  const path = paths[paths.length - 1]

  useEffect(() => {}, [setChainId])

  const setPath = useCallback((newPath: string) => {
    setActivePath(newPath)
  }, [])

  return (
    <Providers>
      <>
        {/* App header */}
        <Header setMetal={setMetalType} />

        <Box
          flexGrow={1}
          display="flex"
          gap={10}
          alignItems="flex-start"
          justifyContent="start"
          maxWidth="1200px"
          margin="80px auto 42px auto"
          flexDirection={'row'}
        >
          <NavMenu setPath={setPath} activePath={activePath} />
          <Component {...pageProps} />

          {/* Active Step Component */}

          {/* <ActiveStepComponent setStep={setStep} metal={activeType} /> */}
        </Box>
      </>
    </Providers>
  )
}

export default MyApp

const steps = [
  {
    component: BuyPage
  },
  {
    component: SellPage
  },
  {
    component: BorrowPage
  },
  {
    component: SupplyPage
  },
  {
    component: AccountPage
  }
]
