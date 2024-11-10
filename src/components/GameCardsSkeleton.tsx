import { HStack, Skeleton, Stack } from "@chakra-ui/react"
import { SkeletonCircle, SkeletonText } from "./ui/skeleton"


const GameCardsSkeleton = () => {
  return (

    <Stack gap="2" maxW="sm"  >
        <Skeleton height="200px"  rounded='5px' />
      <HStack width="full">
        <SkeletonText noOfLines={2} />
      </HStack>
      
    </Stack>
    
  )
}

export default GameCardsSkeleton