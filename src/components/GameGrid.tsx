import useGames from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GameCardsSkeleton from "./GameCardsSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoadding } = useGames();
  const skeletons = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        gap="5"
        padding="10px"
      >
        {isLoadding &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardsSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
