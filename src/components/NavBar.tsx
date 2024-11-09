import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
   <HStack>
      <Image src={logo} boxSize='60px' p='2'/>
      <Text>Nav Bar</Text>
   </HStack>
  )
}

export default Navbar