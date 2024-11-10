import apiClient from "@/Services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

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
  interface FetchGamesRespoonse {
    count: number;
    next: string;
    previous: string;
    results: Games[];
  }

const useGames = () =>{
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
    const [isLoadding, setIsLoadding] = useState(false);
  
    useEffect(() => {
    
        const controller = new AbortController();   
        setIsLoadding(true);
        apiClient
            .get<FetchGamesRespoonse>("/games", {signal: controller.signal})
            .then((res) =>{
               setGames(res.data.results);
               setIsLoadding(false);
              })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoadding(false);
              });
        return () => controller.abort();
      
    },[]);

    return {games, error, isLoadding};
}
export default useGames;