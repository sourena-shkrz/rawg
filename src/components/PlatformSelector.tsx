import usePaltform from "@/Hooks/usePlatform"
import { Button } from "./ui/button"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu"


const PlatformSelector = () => {
const {data, error} = usePaltform();
if (error) return null;
  return (
    <MenuRoot>
    <MenuTrigger asChild>
      <Button variant="outline" size="sm">
        Plafroms
      </Button>
    </MenuTrigger>
    <MenuContent>
        {data.map(platform => 
            <MenuItem key={platform.id} value={platform.slug}>{platform.name}</MenuItem>
        )}
      
    </MenuContent>
  </MenuRoot>
  )
}

export default PlatformSelector