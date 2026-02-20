import { StartFunc as StartFuncTransformAndShow } from "../ShowAId/SalesToExcel/transformAndShow.js";
import { StartFunc as StartFuncApplyFilters } from "./applyFilters.js";

let StartFunc = () => {
    const jVarLocalFilteredData = StartFuncApplyFilters();

    StartFuncTransformAndShow({ inDataToShow: jVarLocalFilteredData });
};

export { StartFunc };