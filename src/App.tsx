import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./Hooks/useGames";
import SortOrder from "./components/SortOrder";

export interface GameQuery {
  genre : Genre | null ,
  platform : platform | null
}


function App() {
 const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      dir="ltr"
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="aside" hideBelow="lg" paddingX="10px" paddingY="20px">
        <GenreList selecedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})} />
      </GridItem>

      <GridItem area="main">
        <Text fontSize="72px">Top picks</Text>
        <Text fontSize="20px">
          Based on your ratings{" "}
          {gameQuery.genre ? "span on Genre : " + gameQuery.genre.name : null}
        </Text>
        <HStack gap={2} paddingLeft={2} marginBottom={5}>
          <PlatformSelector  selectedPlatform={gameQuery.platform} onSelecedPlaform={(platform)=>setGameQuery({...gameQuery,platform})} />
          <SortOrder />
        </HStack>
        
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
  );
}

export default App;
