import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Probs {
    children : ReactNode;
}
const GameCardContainer = ({children}:Probs) => {
  return (
    <Box  >
        {children}
    </Box>
  )
}

export default GameCardContainer