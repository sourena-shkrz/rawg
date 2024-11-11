import useGenres from "@/Hooks/useGenres";
import getCroppedImageUrl from "@/Services/getCroppedImageUrl";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";


const GenreList = () => {
  const { data, isLoadding, error } = useGenres();
  

  if (error) return null;
  if (isLoadding) return <Spinner/>
  return (
    <List.Root variant="plain">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
