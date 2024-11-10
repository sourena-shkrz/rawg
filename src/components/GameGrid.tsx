import useGames from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GameCardsSkeleton from "./GameCardsSkeleton";

const GameGrid = () => {
  const { games, error, isLoadding } = useGames();
  const skeletons = ['1','2','3','4','5','6','7','8'];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm:1 , md:2 , lg:3 , xl :4 }} gap="5" padding='10px'>
        {isLoadding && skeletons.map(skeleton => <GameCardsSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
