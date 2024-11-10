import { Badge } from "@chakra-ui/react"

interface Probs {
    metacritic : number
}

const CriticScoore = ({metacritic}: Probs) => {
  let color=metacritic >85 ? 'green': metacritic>60 ? 'yellow' : '';
  return (
    <Badge colorPalette={color} variant="solid" fontSize='18px'>{metacritic}</Badge>
  )
}

export default CriticScoore