import chains from 'src/chains/chains'
import { useAccountHook } from 'src/store/accountContext'

const ChainSelector = () => {
  const { chain, setChainId } = useAccountHook()

  return (
    <div>
      <select
        id="chains"
        onChange={(event) => setChainId(event.target.value as string)}
        className="py-3 px-10 font-semibold font-poppins bg-[#ffc300] border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
      >
        {chains.map((chain) => (
          <option value={chain.id} onClick={() => setChainId(chain.id)}>
            {chain.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ChainSelector
