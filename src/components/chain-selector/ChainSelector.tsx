import chains from 'src/chains/chains'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccountHook } from 'src/store/accountContext'

const ChainSelector = () => {
  const { chain, setChainId } = useAccountHook()

  return (
    <div>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated')

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      className="py-3 px-10 font-semibold font-poppins bg-[#ffc300] border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      onClick={openConnectModal}
                      type="button"
                    >
                      Connect Wallet
                    </button>
                  )
                }

                if (chain.unsupported) {
                  return (
                    <button
                      className="py-3 px-10 font-semibold font-poppins bg-[#ffc300] border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      onClick={openChainModal}
                      type="button"
                    >
                      Wrong network
                    </button>
                  )
                }

                return (
                  <button
                    className="py-3 px-4 font-semibold font-poppins bg-[#ffc300] border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    onClick={openChainModal}
                    style={{ display: 'flex', gap: 12 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </div>

                    <div>{account.displayName}</div>
                  </button>
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </div>
  )
}

export default ChainSelector
