import { Games } from "@/Hooks/useGames"
import { Card, Image } from "@chakra-ui/react"

interface Probs {
    game: Games,
}

const GameCards = ({game} : Probs) => {
  return (
    <Card.Root maxW='sm' overflow='hidden' >
        <Image src={game.background_image} alt= {game.name}/>
        <Card.Body gap={2}>
            <Card.Title>{game.name}</Card.Title>
        </Card.Body>
    </Card.Root>
    
  )
}

export default GameCards