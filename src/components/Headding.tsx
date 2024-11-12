import { GameQuery } from "@/App"
import { Heading } from "@chakra-ui/react";

interface Probs {
    gameQuery: GameQuery;
}
const Headding = ({gameQuery} : Probs) => {
 const headTile=`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading size='6xl' paddingBottom={10}>{headTile}</Heading>
  )
}

export default Headding