import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { ConnectedContainer } from 'src/components/styles'

type AuthenticateMessageProps = {
  message: string
  onConnect: () => void
}

function AuthenticateMessage({ message, onConnect }: AuthenticateMessageProps) {
  return (
    <ConnectedContainer
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      minHeight={265}
    >
      <Typography variant="h4" component="h3" fontWeight="700">
        {message}
      </Typography>

      <button
        type="button"
        onClick={onConnect}
        className="w-60 py-2 px-4 mt-20 font-poppins flex justify-center items-center  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-black"
      >
        GET STARTED
      </button>
    </ConnectedContainer>
  )
}

export default AuthenticateMessage
