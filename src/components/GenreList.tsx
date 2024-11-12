import useGenres, { Genre } from "@/Hooks/useGenres";
import getCroppedImageUrl from "@/Services/getCroppedImageUrl";
import { Heading, HStack, Image, Link, List, Spinner,Text } from "@chakra-ui/react";


interface Probs {
  onSelectGenre: (genre: Genre | null) => void ;
  selecedGenre : Genre | null ;
}

const GenreList = ({ onSelectGenre , selecedGenre}: Probs) => {
  const { data, isLoadding, error } = useGenres();

  if (error) return null;
  if (isLoadding) return <Spinner />;
  return (
    <>
    <Heading size='4xl' paddingBottom={5}>
      <Link onClick={() => onSelectGenre(null)}>Genre</Link>
    </Heading>
    
    <List.Root variant="plain">
      
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit='cover'
            />
            <Link
              fontSize="lg"
              fontWeight={genre.id === selecedGenre?.id ? 'bold' : 'normal'}
              variant="plain"
              onClick={() => onSelectGenre(genre)}
              whiteSpace='normal'
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
