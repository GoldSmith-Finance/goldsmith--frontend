import { useRouter } from 'next/router'

type NavMenuProps = {
  activePath: string
  setPath: (newPath: string) => void
}

const NavMenu = ({ activePath, setPath }: NavMenuProps) => {
  const router = useRouter()

  return (
    <div
      className=" flex flex-col w-[17rem] px-[20px] py-[20px] [ border-[2px] border-solid border-black-400 border-opacity-10 rounded-2xl ]"
      role="group"
      aria-label="Button group"
    >
      <button
        onClick={() => {
          router.push('/')
          setPath('')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group "
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === '' ? 'bg-[#ffc300]' : 'bg-white-400 '
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === '' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === '' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>

        <span className="relative text-black-400 font-poppins font-semibold">MINT</span>
      </button>
      <button
        onClick={() => {
          router.push('/burn')
          setPath('burn')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group "
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === 'burn' ? 'bg-[#ffc300]' : 'bg-white-400 '
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === 'burn' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === 'burn' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>

        <span className="relative text-black-400 font-poppins font-semibold">BURN</span>
      </button>
      <button
        onClick={() => {
          router.push('/transfer')
          setPath('transfer')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group "
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === 'transfer' ? 'bg-[#ffc300]' : 'bg-white-400 '
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === 'transfer' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === 'transfer' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>

        <span className="relative text-black-400 font-poppins font-semibold">TRANSFER</span>
      </button>
      {/* <button
        onClick={() => {
          router.push('/supply')
          setPath('supply')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group"
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === 'supply' ? 'bg-[#ffc300]' : 'white'
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === 'supply' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === 'supply' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>
        <span className="relative text-black-400 font-poppins font-semibold">SUPPLY</span>
      </button>
      <button
        onClick={() => {
          router.push('/borrow')
          setPath('borrow')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group"
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === 'borrow' ? 'bg-[#ffc300]' : 'white'
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === 'borrow' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === 'borrow' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>
        <span className="relative text-black-400 font-poppins font-semibold">BORROW</span>
      </button>
      <button
        onClick={() => {
          router.push('/repay')
          setPath('repay')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group"
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === 'repay' ? 'bg-[#ffc300]' : 'white'
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === 'repay' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === 'repay' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>
        <span className="relative text-black-400 font-poppins font-semibold">REPAY</span>
      </button>
      <button
        onClick={() => {
          router.push('/unsupply')
          setPath('unsupply')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group"
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === 'unsupply' ? 'bg-[#ffc300]' : 'white'
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === 'unsupply' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === 'unsupply' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>
        <span className="relative text-black-400 font-poppins font-semibold">UNSUPPLY</span>
      </button>
      <button
        onClick={() => {
          router.push('/misc')
          setPath('misc')
        }}
        className="[ border-[1px] border-solid border-black-400 border-opacity-60 rounded-2xl ] mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-5 overflow-hidden font-medium  rounded-lg shadow-md group"
      >
        <span
          className={`absolute top-0 left-0 w-96 h-96 -mt-40 -ml-2 transition-all duration-700 ${
            activePath === 'misc' ? 'bg-[#ffc300]' : 'white'
          } rounded-full blur-md ease`}
        ></span>
        <span
          className={
            'absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'
          }
        >
          <span
            className={`absolute bottom-0 left-0 w-64 h-64 -ml-20 ${
              activePath === 'misc' ? 'bg-[#ffad4a]' : 'white'
            } rounded-full blur-md`}
          ></span>
          <span
            className={`absolute bottom-0 right-0 w-64 h-64 -mr-20 ${
              activePath === 'misc' ? 'bg-[#facc15]' : 'white'
            } rounded-full blur-md`}
          ></span>
        </span>
        <span className="relative text-black-400 font-poppins font-semibold">MISC</span>
      </button> */}
    </div>
  )
}

export default NavMenu
