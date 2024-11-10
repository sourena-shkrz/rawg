import { HStack, Skeleton, Stack } from "@chakra-ui/react"
import {  SkeletonText } from "./ui/skeleton"


const GameCardsSkeleton = () => {
  return (

    <Stack  >
        <Skeleton height="200px"   rounded='5px' />
      <HStack width="full">
        <SkeletonText noOfLines={2} />
      </HStack>
      
    </Stack>
    
  )
}

export default GameCardsSkeleton