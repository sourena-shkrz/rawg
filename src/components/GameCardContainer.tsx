import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Probs {
    children : ReactNode;
}
const GameCardContainer = ({children}:Probs) => {
  return (
    <Box width="338px" >
        {children}
    </Box>
  )
}

export default GameCardContainer