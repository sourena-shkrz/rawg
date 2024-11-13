// un commnet when need to fech Genre Online
// import useData from "./useData";

import genre from "@/data/genre";



export interface Genre {
    id : number;
    name : string;
    image_background : string;

}

// un commnet when need to fech Genre Online
// const useGenres = () => useData<Genre>('/genres');
const useGenres = () =>({data : genre , isLoadding : false , error:null})

export default useGenres;