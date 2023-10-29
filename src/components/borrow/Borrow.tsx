import { Button, Hidden, IconButton, Stack, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useAccountHook } from 'src/store/accountContext'
import WalletIcon from '@mui/icons-material/AccountBalanceWalletRounded'

import CloseIcon from '@mui/icons-material/CloseRounded'
import GoldCoin from '../gold-coin'
import SilverCoin from '../silver-coin'

const Borrow = () => {
  const {
    web3Provider,

    metalType,

    chain,
    isAuthenticated,
    connect
  } = useAccountHook()

  React.useEffect(() => {}, [])

  return (
    <div
      className="form-wrapper 
       
         [ flex justify-center items-center ]"
    >
      <form
        className="signup-form
       
               rounded-2xl
               text-[#1A2421]
               backdrop-blur-md
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white to-white ]
               [ border-[1px] border-solid border-black-400 border-opacity-60 ]
               [ drop-shadow-[0_35px_35px_rgba(244,187,68,0.5)] ]"
      >
        {/* <Tooltip title={'buy USDC to your Safe address using Stripe payment provider'}>

          <button
            type="button"
            className="py-2 px-4 mt-2 font-poppins flex justify-center items-center  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-black"
            onClick={async () => {
              const result = await openStripeWidget()
              console.log(result)
              result && setSession(result)
              window.location.href = result
            }}
            disabled={!chain?.isStripePaymentsEnabled}
          >
            BUY USDC
           
          </button>
        </Tooltip> */}

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
            type="email"
            name="email"
            id="email"
            placeholder={metalType === 'GOLD' ? 'GST' : 'SST'}
          />
        </label>
        <span className="font-poppins text-black">
          {metalType === 'GOLD' ? 'Gold' : 'Silver'} Balance: 0{' '}
          {metalType === 'GOLD' ? 'GST' : 'SST'}
        </span>

        <div className="flex flex-row gap-2 -ml-2 mt-4">
          <label
            html-for="text"
            className="form-label relative block mb-2 text-black/50 focus-within:text-[#333]"
          ></label>
          <span className="font-poppins text-transparent">You will recieve: 0</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5%"
            height="5%"
            version="1.1"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            visibility="hidden"
            clipRule="evenodd"
            viewBox="0 0 26.666 26.666"
          >
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                fill="#F5AC37"
                fillRule="nonzero"
                d="M13.333 0c7.364 0 13.333 5.97 13.333 13.333 0 7.364 -5.969 13.333 -13.333 13.333C5.97 26.666 0 20.697 0 13.333 0 5.97 5.97 0 13.333 0z"
              />
              <path
                fill="#FEFEFD"
                fillRule="nonzero"
                d="M13.825 14.275H18.891c0.108 0 0.159 0 0.167 -0.142a9.685 9.685 0 0 0 0 -1.55c0 -0.1 -0.05 -0.142 -0.158 -0.142h-10.083c-0.125 0 -0.158 0.041 -0.158 0.158v1.483c0 0.191 0 0.191 0.2 0.191h4.967zM18.492 10.708a0.162 0.162 0 0 0 0 -0.116c-0.085 -0.184 -0.185 -0.36 -0.301 -0.525a4.251 4.251 0 0 0 -0.617 -0.775 2.045 2.045 0 0 0 -0.383 -0.375 5.99 5.99 0 0 0 -2.5 -1.267 6.215 6.215 0 0 0 -1.417 -0.15H8.799c-0.125 0 -0.142 0.05 -0.142 0.158v2.958c0 0.125 0 0.158 0.158 0.158H18.432s0.083 -0.017 0.1 -0.067h-0.041zm0 5.3a1.945 1.945 0 0 0 -0.426 0H8.825c-0.125 0 -0.167 0 -0.167 0.167v2.892c0 0.133 0 0.167 0.167 0.167h4.267c0.204 0.016 0.408 0.001 0.608 -0.041a6.352 6.352 0 0 0 1.809 -0.4 3.311 3.311 0 0 0 0.608 -0.283h0.058a5.414 5.414 0 0 0 2.325 -2.341s0.058 -0.126 -0.007 -0.159zM6.983 20.733V16.125c0 -0.109 0 -0.125 -0.133 -0.125h-1.808c-0.1 0 -0.142 0 -0.142 -0.133v-1.583h1.933c0.108 0 0.15 0 0.15 -0.142v-1.567c0 -0.1 0 -0.125 -0.133 -0.125h-1.808c-0.1 0 -0.142 0 -0.142 -0.133V10.851c0 -0.092 0 -0.116 0.133 -0.116h1.792c0.125 0 0.158 0 0.158 -0.158V6.085c0 -0.133 0 -0.167 0.167 -0.167h6.25a9.522 9.522 0 0 1 1.35 0.15 8.146 8.146 0 0 1 2.608 0.967 7.35 7.35 0 0 1 1.466 1.133 8.03 8.03 0 0 1 0.892 1.108c0.262 0.4 0.48 0.828 0.651 1.275a0.217 0.217 0 0 0 0.249 0.175h1.492c0.191 0 0.191 0 0.2 0.184v1.367c0 0.133 -0.05 0.167 -0.184 0.167h-1.15c-0.116 0 -0.15 0 -0.142 0.15 0.046 0.508 0.046 1.017 0 1.525 0 0.142 0 0.158 0.159 0.158h1.316c0.058 0.075 0 0.15 0 0.226 0.008 0.097 0.008 0.194 0 0.291v1.009c0 0.142 -0.041 0.184 -0.167 0.184h-1.575a0.208 0.208 0 0 0 -0.242 0.158 6.664 6.664 0 0 1 -1.75 2.55c-0.283 0.255 -0.581 0.495 -0.892 0.716 -0.334 0.192 -0.658 0.392 -1 0.55a9.01 9.01 0 0 1 -1.967 0.625 10.254 10.254 0 0 1 -1.95 0.158H6.981v-0.008z"
              />
            </g>
          </svg>{' '}
        </div>

        <button
          type="button"
          className="py-2 px-4 mt-20 font-poppins flex justify-center items-center  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-black"
        >
          BORROW GOLDSMITH TOKENS
        </button>
      </form>
    </div>
  )
}

export default Borrow
