import useGames from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GameCardsSkeleton from "./GameCardsSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/Hooks/useGenres";

interface Probs {
  selectedGenre : Genre | null;
}

const GameGrid = ({selectedGenre}:Probs) => {
  const { data, error, isLoadding } = useGames( selectedGenre);
  const skeletons = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 , xl:5}}
        gap="5"
        padding="10px"
        
      >
        {isLoadding &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={'s'+skeleton}>
              <GameCardsSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={'g'+game.id}>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
