import { Games } from "@/Hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScoore from "./CriticScoore";
import getCroppedImageUrl from "@/Services/getCroppedImageUrl";


interface Probs {
  game: Games;
}

const GameCards = ({ game }: Probs) => {
  return (
    <Card.Root overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body gap={2} paddingTop={2}>
        <Card.Header padding={0}>
          <HStack justifyContent='space-between'>
            <PlatformIconList  platforms={game.parent_platforms.map(p => p.platform)}/>
            <CriticScoore metacritic={game.metacritic} />
          </HStack>
        </Card.Header>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCards;
