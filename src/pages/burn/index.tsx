import { useEffect, useState } from 'react'
import { useAccountHook } from 'src/store/accountContext'
import isContractAddress from 'src/utils/isContractAddress'
import AuthenticateMessage from 'src/components/authenticate-message/AuthenticateMessage'
import Sell from 'src/components/sell-tokens/SellTokens'
import { Typography } from '@mui/material'
import { ConnectContainer } from 'src/components/styles'

const BurnPage = () => {
  const {
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
        // <Box display="flex" gap={3} alignItems="flex-wrap">
        //   {/* safe Account */}
        //   <SafeAccount flex={1} minHeight={265} />

        //   {/* Provider widget */}
        //   <ConnectedContainer flex={2} minHeight={265}>
        //     <Tabs
        //       value={tabsValue}
        //       onChange={handleTabChange}
        //       aria-label="basic tabs example"
        //       sx={{ marginTop: '-15px' }}
        //     >
        //       <Tab label="Monerium" sx={{ fontWeight: 'bold' }} />
        //       <Tab label="Stripe" sx={{ fontWeight: 'bold' }} />
        //     </Tabs>

        //     {tabsValue === 0 && (
        //       <>
        //         {moneriumInfo ? (
        //           <MoneriumInfo moneriumInfo={moneriumInfo} onLogout={closeMoneriumFlow} />
        //         ) : (
        //           <>
        //             {!chain?.isMoneriumPaymentsEnabled ? (
        //               <MoneriumChainWarning onUpdateChain={() => setStep(0)} />
        //             ) : (
        //               <MoneriumDeploySafeAccount
        //                 isSafeDeployed={isSafeDeployed}
        //                 onDeploy={() => setStep(3)}
        //               />
        //             )}
        //             <Tooltip title="Login">
        //               <Button
        //                 startIcon={<LoginIcon />}
        //                 variant="contained"
        //                 onClick={() => startMoneriumFlow()}
        //                 disabled={!chain?.isMoneriumPaymentsEnabled || !isSafeDeployed}
        //               >
        //                 Login
        //                 {!chain?.isMoneriumPaymentsEnabled && ' (only in Goerli chain)'}
        //               </Button>
        //             </Tooltip>
        //           </>
        //         )}
        //       </>
        //     )}

        //     {tabsValue === 1 && (
        //       <>
        //         <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
        //           This widget is on testmode, you will need to use{' '}
        //           <Link
        //             href="https://docs.safe.global/learn/safe-core-account-abstraction-sdk/onramp-kit#considerations-and-limitations"
        //             target="_blank"
        //           >
        //             fake data
        //           </Link>{' '}
        //           in order to simulate the process. Available only in the United States.
        //         </Typography>

        //         {!showStripeWidget ? (
        //           <Tooltip title={'buy USDC to your Safe address using Stripe payment provider'}>
        //             {/* Buy USDC with our OnRamp kit */}
        //             <Button
        //               startIcon={<WalletIcon />}
        //               variant="contained"
        //               onClick={async () => {
        //                 setShowStripeWidget(true)
        //                 await openStripeWidget()
        //               }}
        //               disabled={!chain?.isStripePaymentsEnabled}
        //             >
        //               Buy USDC
        //               {!chain?.isStripePaymentsEnabled ? ' (only in Mumbai chain)' : ''}
        //             </Button>
        //           </Tooltip>
        //         ) : (
        //           <Stack display="flex" flexDirection="column" alignItems="center" gap={1}>
        //             <Tooltip title={'close Stripe Widget'}>
        //               <IconButton
        //                 size="small"
        //                 color="primary"
        //                 sx={{ alignSelf: 'flex-end' }}
        //                 onClick={async () => {
        //                   setShowStripeWidget(false)
        //                   await closeStripeWidget()
        //                 }}
        //               >
        //                 <CloseIcon fontSize="small" />
        //               </IconButton>
        //             </Tooltip>

        //             {/* Stripe root widget */}
        //             <div id="stripe-root"></div>
        //           </Stack>
        //         )}
        //       </>
        //     )}
        //   </ConnectedContainer>
        // </Box>
        <Sell />
      )}
    </>
  )
}

export default BurnPage
