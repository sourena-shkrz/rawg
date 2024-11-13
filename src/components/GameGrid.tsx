import useGames from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GameCardsSkeleton from "./GameCardsSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";


interface Probs {
  gameQuery : GameQuery,
}

const GameGrid = ({gameQuery}:Probs) => {
  const { data, error, isLoadding } = useGames( gameQuery);
  const skeletons = ["1", "2", "3", "4", "5", "6", "7", "8","10","11", "12", "13", "14", "15", "16", "17", "18","19","20"];
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
