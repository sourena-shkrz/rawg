import { Games } from "@/Hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";


interface Probs {
  game: Games;
}

const GameCards = ({ game }: Probs) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap={2} paddingTop={2}>
        <Card.Header padding={0}>
          {/* <PlatformIconList platforms ={game.parent_platforms.map(p => p.platform)}/> */}
          <PlatformIconList  platforms={game.parent_platforms.map(p => p.platform)}/>
        </Card.Header>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCards;
