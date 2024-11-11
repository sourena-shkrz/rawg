import useGenres, { Genre } from "@/Hooks/useGenres";
import getCroppedImageUrl from "@/Services/getCroppedImageUrl";
import { HStack, Image, Link, List, Spinner,Text } from "@chakra-ui/react";

interface Probs {
  onSelectGenre: (genre: Genre | null) => void ;
}

const GenreList = ({ onSelectGenre }: Probs) => {
  const { data, isLoadding, error } = useGenres();

  if (error) return null;
  if (isLoadding) return <Spinner />;
  return (
    <>
    <Link fontSize="24px" onClick={() => onSelectGenre(null)}>Genre</Link>
    <List.Root variant="plain">
      
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link
              fontSize="lg"
              variant="plain"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
    </>
  );
};

export default GenreList;
