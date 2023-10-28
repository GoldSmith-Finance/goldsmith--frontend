import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Buy from 'src/components/buy-tokens/BuyTokens'

import { ConnectContainer } from 'src/components/styles'
import { useAccountHook } from 'src/store/accountContext'

const HomePage = () => {
  const { isAuthenticated, userInfo } = useAccountHook()
  console.log('userInfo', userInfo)

  return (
    <>
      <Box display="flex" flexDirection="column" gap={3}>
        <h2>home</h2>
      </Box>
    </>
  )
}

export default HomePage
