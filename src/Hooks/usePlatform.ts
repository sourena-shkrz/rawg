// un commnet when need to fech Platform Online
// import useData from "./useData";
// import { platform } from "./useGames";

import platform from "@/data/platform";

// export interface platform {
//     id : number;
//     name : string;
//     slug : string;
// }


// un commnet when need to fech Platform Online
// const usePaltform = () => useData<platform>('/platforms/lists/parents');

const usePaltform = () => ({data : platform, isLoadding : false, error:null})

export default usePaltform;