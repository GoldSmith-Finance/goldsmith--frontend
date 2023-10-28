import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ethers, utils } from 'ethers'
import Chain from 'src/models/chain'
import getChain from 'src/utils/getChain'
import { initialChain } from 'src/chains/chains'
import usePolling from 'src/hooks/usePolling'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
type accountHookContextValue = {
  chainId: string
  userInfo: string
  chain?: Chain
  metalType?: string
  isAuthenticated: boolean
  web3Provider?: ethers.providers.Web3Provider
  connect: () => void
  disconnect: () => void
  setChainId: (chainId: string) => void
  setMetalType: (metalType: string) => void
}

const initialState = {
  isAuthenticated: false,
  connect: () => {},
  disconnect: () => {},
  setChainId: () => {},
  setMetalType: () => {},
  metalType: 'GOLD',
  userInfo: '',
  chainId: initialChain.id
}

const accountHookContext = createContext<accountHookContextValue>(initialState)

const useAccountHook = () => {
  const context = useContext(accountHookContext)

  if (!context) {
    throw new Error('useaccountHook should be used within a accountHook Provider')
  }

  return context
}

const AccountHookProvider = ({ children }: { children: JSX.Element }) => {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector()
  })
  const { disconnect } = useDisconnect()
  // owner address from the email  (provided by web3Auth)

  // safes owned by the user
  const [safes, setSafes] = useState<string[]>([])
  const [userInfo, setUserInfo] = useState<any>({})

  // chain selected
  const [chainId, setChainId] = useState<string>(() => {
    // if (isMoneriumRedirect()) {
    //   return '0x5'
    // }

    return initialChain.id
  })
  const [metalType, setMetalType] = useState<string>(() => {
    // if (isMoneriumRedirect()) {
    //   return '0x5'
    // }

    return 'GOLD'
  })
  // web3 provider to perform signatures
  const [web3Provider, setWeb3Provider] = useState<ethers.providers.Web3Provider>()

  const isAuthenticated = isConnected
  const chain = getChain(chainId) || initialChain

  // reset React state when you switch the chain
  useEffect(() => {
    setUserInfo('')

    setChainId(chain.id)

    setWeb3Provider(undefined)
  }, [chain])

  const state = {
    chainId,
    chain,
    safes,
    userInfo,
    metalType,
    connect,
    disconnect,

    isAuthenticated,

    web3Provider,

    setChainId,

    setMetalType
  }

  return <accountHookContext.Provider value={state}>{children}</accountHookContext.Provider>
}

export { useAccountHook, AccountHookProvider }
