import usePaltform from "@/Hooks/usePlatform"
import { Button } from "./ui/button"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu"
import { platform } from "@/Hooks/useGames";


interface Probs {
  onSelecedPlaform : (platform:platform | null) => void;
  selectedPlatform : platform | null;
}

const PlatformSelector = ({onSelecedPlaform , selectedPlatform} : Probs) => {
const {data, error} = usePaltform();
if (error) return null;
  return (
    <MenuRoot>
    <MenuTrigger asChild>
      <Button variant="outline" size="sm">
        {selectedPlatform ? selectedPlatform.name : 'Select Platform'}
      </Button>
    </MenuTrigger>
    <MenuContent>
        {/* <MenuItem onClick={()=>onSelecedPlaform(null)} key='all' value=''>All</MenuItem> */}
        {data.map(platform => 
            <MenuItem onClick={()=>onSelecedPlaform(platform)} key={platform.id} value={platform.name}>{platform.name}</MenuItem>
        )}
    </MenuContent>
  </MenuRoot>
  )
}

export default PlatformSelector