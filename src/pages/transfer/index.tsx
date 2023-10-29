import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Transfer from 'src/components/transfer-tokens/TransferTokens'

import { ConnectContainer } from 'src/components/styles'
import { useAccountHook } from 'src/store/accountContext'

const MintPage = () => {
  const { connect, isAuthenticated, userInfo } = useAccountHook()

  return (
    <>
      <Box display="flex" flexDirection="column" gap={3}>
        <Transfer />
      </Box>
    </>
  )
}

export default MintPage
