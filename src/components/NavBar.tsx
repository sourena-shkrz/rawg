import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.png"
import { ColorModeButton } from './ui/color-mode'
import SearchBox from './SearchBox'

const Navbar = () => {
  return (
   <HStack justifyContent='space-between'>
      <Image src={logo} boxSize='60px' p='2'/>
      <SearchBox/>
      <ColorModeButton />
   </HStack>
  )
}

export default Navbar