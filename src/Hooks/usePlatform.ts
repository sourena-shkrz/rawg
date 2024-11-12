import useData from "./useData";
import { platform } from "./useGames";

// export interface platform {
//     id : number;
//     name : string;
//     slug : string;
// }

const usePaltform = () => useData<platform>('/platforms/lists/parents');

export default usePaltform;