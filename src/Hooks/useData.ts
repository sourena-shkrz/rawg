import apiClient from "@/Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse <T>{
    count : number;
    results : T[]
}
const useData = <T>(endpoint : string , requestConfig? : AxiosRequestConfig, deps? : any[]) =>{
    const [data, setGames] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoadding, setIsLoadding] = useState(false);
  
    useEffect(() => {
    
        const controller = new AbortController();   
        setIsLoadding(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, {signal: controller.signal,...requestConfig})
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
      
    },deps ? [...deps] : []);

    return {data, error, isLoadding};
}

export default useData;