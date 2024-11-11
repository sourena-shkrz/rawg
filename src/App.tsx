import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelecedGenre] = useState<Genre | null>(null);

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
        <GenreList selecedGenre={selectedGenre} onSelectGenre={(genre) => setSelecedGenre(genre)} />
      </GridItem>

      <GridItem area="main">
        <Text fontSize="72px">Top picks</Text>
        <Text fontSize="20px">
          Based on your ratings{" "}
          {selectedGenre ? "span on Genre : " + selectedGenre.name : null}
        </Text>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
