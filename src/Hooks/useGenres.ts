import apiClient from "@/Services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genres {
    id : number;
    name : string;
}
interface FetchGenresResponse {
    count : number;
    results : Genres[]
}
const useGenres = () =>{
    const [genres, setGames] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoadding, setIsLoadding] = useState(false);
  
    useEffect(() => {
    
        const controller = new AbortController();   
        setIsLoadding(true);
        apiClient
            .get<FetchGenresResponse>("/genres", {signal: controller.signal})
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

    return {genres, error, isLoadding};
}

export default useGenres;