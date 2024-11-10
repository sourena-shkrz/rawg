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
  
    useEffect(() => {
    
        const controller = new AbortController();   

        apiClient
            .get<FetchGamesRespoonse>("/games", {signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)});
        return () => controller.abort();
      
    },[]);

    return {games, error};
}
export default useGames;