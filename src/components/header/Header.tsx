import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { useRouter } from 'next/router'
import React from 'react'
import { useAccountHook } from 'src/store/accountContext'
import { useTheme } from 'src/store/themeContext'
import ChainSelector from '../chain-selector/ChainSelector'
import MetalSelector from '../metal-selector/metalSelector'

type HeaderProps = {
  setMetal: (newMetal: string) => void
}

function Header({ setMetal }: HeaderProps) {
  const { switchThemeMode, isDarkTheme } = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const router = useRouter()

  const { chain } = useAccountHook()

  return (
    <AppBar
      style={{
        backgroundColor: 'white',
        boxShadow: 'none',
        marginTop: '10px',
        marginBottom: '10px',
        alignItems: 'center',
        padding: '10px 0px 20px',
        borderBottom: '3px solid #ffad4a'
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* App Logo */}
          <img
            onClick={() => router.push('/')} // go to Home
            id="app-logo-header"
            src="/assets/GOLDSMITH.png"
            alt="app logo"
            width={100}
          />
          <h2
            className="text-2xl font-semibold  font-poppins
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-[#FC2E20] via-[#ffad4a] to̦-[#FD7F20]
            ml-10
            animate-text"
          >
            GoldSmith DeFi
          </h2>

          <Box display="flex" alignItems="center" justifyContent="flex-end" flexGrow={1} gap={1}>
            {/* chain label */}
            {chain && (
              <>
                <Box display="flex" justifyContent="flex-end" alignItems="center">
                  <ChainSelector />
                </Box>
                <Box display="flex" justifyContent="flex-end" alignItems="center">
                  <MetalSelector />
                </Box>
              </>
            )}

            {/* Switch Theme mode button */}
            {/* <Tooltip title="Switch Theme mode">
              <IconButton
                sx={{ marginLeft: 2 }}
                size="large"
                color="inherit"
                aria-label="switch theme mode"
                edge="end"
                onClick={switchThemeMode}
              >
                {isDarkTheme ? <LightThemeIcon /> : <DarkThemeIcon />}
              </IconButton>
            </Tooltip> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
