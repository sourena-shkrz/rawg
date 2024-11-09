import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.png"
import { ColorModeButton } from './ui/color-mode'

const Navbar = () => {
  return (
   <HStack justifyContent='space-between'>
      <Image src={logo} boxSize='60px' p='2'/>
      
      <ColorModeButton />
   </HStack>
  )
}

export default Navbar