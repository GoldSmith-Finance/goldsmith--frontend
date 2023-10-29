import { useAccountHook } from 'src/store/accountContext'
import Burn from 'src/components/burn-tokens/BurnTokens'
import { Box, Typography } from '@mui/material'

const BurnPage = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={3}>
        <Burn />
      </Box>
    </>
  )
}

export default BurnPage
