import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchBox from "./SearchBox";

interface Probs {
  onSerach : (searchText : string) => void;
}


const Navbar = ({onSerach} : Probs) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" p="2" />
      <SearchBox onSerach={onSerach} />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
