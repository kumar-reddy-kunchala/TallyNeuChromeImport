import { StartFunc as SelectedOptions } from "./SelectedOptions.js";
import { StartFunc as StartFuncTransformAndShow } from "../ShowAId/SalesToExcel/transformAndShow.js";
import { StartFunc as StartFuncApplyFilters } from "./applyFilters.js";

let StartFunc = () => {
    debugger;
    // const jVarLocalFilterObject = SelectedOptions();

    // const jVarLocalFilteredData = _.filter(jVarGlobalPresentViewData, jVarLocalFilterObject);
    // console.log("jVarLocalFilteredData : ", jVarLocalFilteredData);

    // const jVarLocalFilterObject = SelectedOptions();

    const jVarLocalFilteredData = StartFuncApplyFilters();
    // console.log("jVarLocalFilteredData : ", jVarLocalFilteredData);

    StartFuncTransformAndShow({ inDataToShow: jVarLocalFilteredData });
};

export { StartFunc };