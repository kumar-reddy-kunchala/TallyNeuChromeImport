import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("ApplyFilterId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };