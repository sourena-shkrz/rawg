import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";



function App() {
  return (
    <Grid
      dir="ltr"
      templateAreas={{
        base : '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      gridTemplateColumns={{ 
        base : '1fr',
        lg : "200px 1fr",
       }}
    >
      <GridItem area="nav">
        <Navbar /> 
        
      </GridItem>
      
      <GridItem area="aside"  hideBelow='lg' paddingX="10px" paddingY='20px'>
        <Text fontSize='24px'>Genre</Text>
         <GenreList/>
      </GridItem>

      <GridItem area="main" >
        <Text fontSize='72px'>Top picks</Text>
        <Text fontSize='20px'>Based on your ratings</Text>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
