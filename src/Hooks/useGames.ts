import { GameQuery } from "@/App";
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


const useGames = (
  gameQuery : GameQuery,
) =>
  useData<Games>('/games',{
    params :{
      genres : gameQuery.genre?.id,
      platforms :gameQuery.platform?.id
    }},[
      gameQuery
    ]);
export default useGames;