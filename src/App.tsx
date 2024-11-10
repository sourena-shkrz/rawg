import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";



function App() {
  return (
    <Grid
      dir="ltr"
      templateAreas={{
        base : '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <Navbar /> 
        
      </GridItem>
      
      <GridItem area="aside"  hideBelow='lg' >
         
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
