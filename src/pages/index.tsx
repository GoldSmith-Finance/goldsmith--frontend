import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Mint from 'src/components/mint-tokens/MintTokens'

import { ConnectContainer } from 'src/components/styles'
import { useAccountHook } from 'src/store/accountContext'

const MintPage = () => {
  const { connect, isAuthenticated, userInfo } = useAccountHook()

  return (
    <>
      <Box display="flex" flexDirection="column" gap={3}>
        <Mint />
      </Box>
    </>
  )
}

export default MintPage
