import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("VoucherTypeButtonId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };