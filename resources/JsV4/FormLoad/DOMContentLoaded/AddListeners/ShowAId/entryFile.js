import { StartFunc as StartFuncClickFunc } from "./clickFunc.js";

let StartFunc = () => {
    document.getElementById("ShowAId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };