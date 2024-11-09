import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "./components/NavBar";



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
      
      <GridItem area="aside" bg="blue" hideBelow='lg' >
        aside 
      </GridItem>

      <GridItem area="main" bg="gold">
        <Text>تست فونت</Text>
      </GridItem>
    </Grid>
  );
}

export default App;
