import React, { useState } from 'react'
import { useAccountHook } from 'src/store/accountContext'
import { erc20ABI, useAccount, useChainId, useContractRead, useContractWrite } from 'wagmi'
import { DAI_ADDRESSES, SPOKE_ADDRESSES } from 'src/config/addresses'
import { SPOKE } from 'src/config/abi/spoke'
import { BigNumber, FixedNumber } from 'ethers'
import GoldCoin from '../gold-coin'
import SilverCoin from '../silver-coin'

const Transfer = () => {
  const { metalType } = useAccountHook()
  const chainId = useChainId()
  const { address } = useAccount()

  const [amountToTransfer, setAmountToTransfer] = useState(0)
  const [destChain, setDestinationChain] = useState(2153201998)

  const { data: feeToMint } = useContractRead({
    address: SPOKE_ADDRESSES[chainId as 888 | 137] as `0x${string}`,
    abi: SPOKE,
    functionName: 'estimateFee',
    args: [destChain, 250000],
    watch: true
  })

  const {
    // data,
    write: writeMintMetal,
    isSuccess: isSuccessMintMetal,
    isLoading: isLoadingMintMetal
  } = useContractWrite({
    address: SPOKE_ADDRESSES[chainId as 888 | 137] as `0x${string}`,
    abi: SPOKE,
    functionName: 'transferTokensCrossChain',
    args: [metalType == 'GOLD' ? 0 : 1, destChain, address, amountToTransfer * 10 ** 18],
    value: feeToMint
  })

  return (
    <div className="form-wrapper max-w-[31rem] [ flex justify-center items-center ]">
      <form
        className="signup-form w-[31rem]
       
               rounded-2xl
               text-[#1A2421]
               backdrop-blur-md
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white to-white ]
               [ border-[1px] border-solid border-black-400 border-opacity-60 ]
               [ drop-shadow-[0_35px_35px_rgba(244,187,68,0.5)] ]"
      >
        <label
          html-for="text"
          className="form-label relative block mb-2 text-black/50 focus-within:text-[#333] "
        >
          {metalType === 'GOLD' ? <GoldCoin /> : <SilverCoin />}
          <input
            className="form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ border-[1px] border-solid border-black-400 border-opacity-60 ]
                    [ bg-white focus:bg-black/25  ] 
                    [ text-[#333] focus:text-black ]"
            type="number"
            placeholder={
              metalType === 'GOLD'
                ? 'Enter Amount of Gold To Buy in Grams'
                : 'Enter Amount of Silver To Buy in Grams'
            }
            value={amountToTransfer}
            onChange={(e) => {
              setAmountToTransfer(Number(e.target.value))
            }}
          />
        </label>

        <select
          id="metals"
          className="py-3 px-10 font-semibold font-poppins bg-[#ffc300] border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value={'GOLD'} onClick={() => setDestinationChain(2153201998)}>
            Wanchain
          </option>
          <option value={'SILVER'} onClick={() => setDestinationChain(2147484614)}>
            Polygon
          </option>
        </select>
        <button
          type="button"
          className="py-2 px-4 mt-4 font-poppins flex justify-center items-center  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-black"
          onClick={async () => {
            await writeMintMetal()
          }}
        >
          Transfer GOLDSMITH TOKENS
        </button>
      </form>
    </div>
  )
}

export default Transfer
