import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material'

export const ConnectContainer = styled(Box)<{
  theme?: Theme
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ;
  padding: 50px;
`
)

export const ConnectedContainer = styled(Box)<{
  theme?: Theme
}>(
  ({ theme }) => `
  width: 325px;
  
  border-radius: 10px;
  border: 1px solid ;
  padding: 40px 32px;  
`
)
