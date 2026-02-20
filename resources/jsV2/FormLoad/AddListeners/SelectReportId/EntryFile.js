import { StartFunc as changeFunc } from "./changeFunc.js";

let StartFunc = () => {
    document.getElementById("SelectReportId").addEventListener("change", changeFunc);
};

export { StartFunc };