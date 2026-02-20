import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("VoucherNumberButtonId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };