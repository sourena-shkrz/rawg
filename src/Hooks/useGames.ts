import useData from "./useData";

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


const useGames = () =>useData<Games>('/games');
export default useGames;