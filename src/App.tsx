import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";



function App() {
  return (
    <Grid
      dir="rtl"
      templateAreas={{
        base : '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <Navbar /> 
        
      </GridItem>
      
      <GridItem area="aside"  hideBelow='lg' >
        aside 
      </GridItem>

      <GridItem area="main" >
        <Text>لیست بازی ها</Text>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
