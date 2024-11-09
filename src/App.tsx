import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base : '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav" bg="red">
        Nav
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
