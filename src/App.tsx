import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/NavBar";



function App() {
  return (
    <Grid
      templateAreas={{
        base : '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <Navbar /> 
        
      </GridItem>
      
      <GridItem area="aside" bg="blue" hideBelow='lg' >
        aside
      </GridItem>

      <GridItem area="main" bg="gold">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
