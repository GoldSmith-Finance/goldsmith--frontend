import { useAccountHook } from 'src/store/accountContext'

const MetalSelector = () => {
  const { setMetalType } = useAccountHook()
  return (
    <div>
      <select
        id="metals"
        onChange={(event) => setMetalType(event.target.value as string)}
        className="py-3 px-10 font-semibold font-poppins bg-[#ffc300] border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option value={'GOLD'} onClick={() => setMetalType('GOLD')}>
          Gold
        </option>
        <option value={'SILVER'} onClick={() => setMetalType('SILVER')}>
          Silver
        </option>
      </select>
    </div>
  )
}

export default MetalSelector
