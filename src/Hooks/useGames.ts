import useData from "./useData";
import { Genre } from "./useGenres";

export interface platform {
  id : number ,
  name : string,
  slug : string,
}

export interface Games {
    id: number;
    name: string;
    slug: string;
    metacritic : number;
    background_image : string;
    parent_platforms : {platform : platform}[]
  }


const useGames = (selectedGenre : Genre | null) =>useData<Games>('/games',{params :{genres : selectedGenre?.id}}, [selectedGenre?.id]);
export default useGames;