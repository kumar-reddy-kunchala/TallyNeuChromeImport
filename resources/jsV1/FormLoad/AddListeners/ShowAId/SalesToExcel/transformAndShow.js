import { StartFunc as StartFuncShowInTable } from "./ShowInTable/EntryFile.js";
import { StartFunc as StartFuncPrepareData } from "./PrepareData/EntryFile.js";

let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    let jVarLocalArray = StartFuncPrepareData({ inDataToShow: jVarLocalDataToShow });

    StartFuncShowInTable({ inDataToShow: jVarLocalArray });
};

export { StartFunc };