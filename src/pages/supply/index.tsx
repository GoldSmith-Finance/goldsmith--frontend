import { Typography } from '@mui/material'
import { utils } from 'ethers'
import { useState } from 'react'

import AuthenticateMessage from 'src/components/authenticate-message/AuthenticateMessage'
import { ConnectContainer } from 'src/components/styles'
import Supply from 'src/components/supply/Supply'
import { useAccountHook } from 'src/store/accountContext'

const transferAmount = 0.01

const SupplyPage = () => {
  const {
    chainId,
    chain,
    connect,

    isAuthenticated
  } = useAccountHook()

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
        // <Box display="flex" gap={3}>
        //   {/* safe Account */}
        //   <SafeAccount flex={1} />

        //   {/* Relay Transaction */}
        //   <ConnectedContainer
        //     display="flex"
        //     flex={2}
        //     flexDirection="column"
        //     gap={2}
        //     alignItems="flex-start"
        //     flexShrink={0}
        //   >
        //     <Typography fontWeight="700">Relayed transaction</Typography>

        //     {/* Gelato status label */}
        //     {gelatoTaskId && (
        //       <GelatoTaskStatusLabel
        //         gelatoTaskId={gelatoTaskId}
        //         chainId={chainId}
        //         setTransactionHash={setTransactionHash}
        //         transactionHash={transactionHash}
        //       />
        //     )}

        //     {isRelayerLoading && <LinearProgress sx={{ alignSelf: 'stretch' }} />}

        //     {!isRelayerLoading && !gelatoTaskId && (
        //       <>
        //         <Typography fontSize="14px">
        //           Check the status of your relayed transaction.
        //         </Typography>

        //         {/* send fake transaction to Gelato relayer */}
        //         <Button
        //           startIcon={<SendIcon />}
        //           variant="contained"
        //           disabled={!hasNativeFunds}
        //           onClick={relayTransaction}
        //         >
        //           Send Transaction
        //         </Button>

        //         {!hasNativeFunds && (
        //           <Typography color="error">
        //             Insufficient funds. Send some funds to the Safe Account
        //           </Typography>
        //         )}

        //         {!hasNativeFunds && chain?.faucetUrl && (
        //           <Link href={chain.faucetUrl} target="_blank">
        //             Request 0.5 {chain.token}.
        //           </Link>
        //         )}
        //       </>
        //     )}

        //     {/* Transaction details */}
        //     <Stack gap={0.5} display="flex" flexDirection="column">
        //       <Typography>
        //         Transfer {transferAmount} {chain?.token}
        //       </Typography>

        //       {safeSelected && (
        //         <Stack gap={0.5} display="flex" flexDirection="row">
        //           <AddressLabel address={safeSelected} showCopyIntoClipboardButton={false} />

        //           <ArrowRightAltRoundedIcon />

        //           <AddressLabel address={safeSelected} showCopyIntoClipboardButton={false} />
        //         </Stack>
        //       )}
        //     </Stack>
        //   </ConnectedContainer>
        // </Box>
        <Supply />
      )}
    </>
  )
}

export default SupplyPage
