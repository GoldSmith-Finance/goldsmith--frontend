import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'

import { useAccountHook } from 'src/store/accountContext'
import isContractAddress from 'src/utils/isContractAddress'

import { Typography } from '@mui/material'
import ConnectedWalletLabel from 'src/components/connected-wallet-label/ConnectedWalletLabel'

import { ConnectContainer, ConnectedContainer } from 'src/components/styles'

type OnRampKitDemoProps = {
  setStep: (newStep: number) => void
}

const AccountPage = () => {
  const { web3Provider, chain, isAuthenticated, connect } = useAccountHook()

  return (
    <>
      {!isAuthenticated ? (
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
      ) : (
        <Box display="flex" flexDirection="row" gap={3}>
          {/* owner ID */}
          <ConnectedContainer flex={1}>
            <Typography fontWeight="700">Owner ID</Typography>

            <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
              Your Owner account signs transactions to unlock your assets.
            </Typography>

            {/* Owner details */}
            <ConnectedWalletLabel />
          </ConnectedContainer>
        </Box>
      )}
    </>
  )
}

export default AccountPage
