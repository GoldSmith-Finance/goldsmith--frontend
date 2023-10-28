import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Buy from 'src/components/buy-tokens/BuyTokens'

import { ConnectContainer } from 'src/components/styles'
import { useAccountHook } from 'src/store/accountContext'

const BuyPage = () => {
  const { connect, isAuthenticated, userInfo } = useAccountHook()
  console.log('userInfo', userInfo)

  return (
    <>
      {isAuthenticated ? (
        // <Box display="flex" gap={3}>
        //   {/* safe Account */}

        // </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Buy />
        </Box>
      ) : (
        <ConnectContainer display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h4" component="h3" fontWeight="700">
            Login to get started
          </Typography>

          <button
            type="button"
            onClick={connect}
            className="w-60 py-2 px-4 mt-20 font-poppins flex justify-center items-center  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-black"
          >
            GET STARTED
          </button>
        </ConnectContainer>
      )}
    </>
  )
}

export default BuyPage
