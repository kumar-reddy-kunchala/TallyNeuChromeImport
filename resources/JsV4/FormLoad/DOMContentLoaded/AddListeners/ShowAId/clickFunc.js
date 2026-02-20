import { StartFunc as StartFuncFromToTally } from "./toTally.js";

let StartFunc = async () => {
    const LocalFromFetch = await StartFuncFromToTally();
    alert(LocalFromFetch.status);
};

export { StartFunc }; 92