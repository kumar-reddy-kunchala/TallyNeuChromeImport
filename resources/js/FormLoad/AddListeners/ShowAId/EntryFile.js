import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("ShowAId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };