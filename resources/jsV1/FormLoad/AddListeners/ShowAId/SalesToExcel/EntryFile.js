import { StartFunc as CommonFuncs } from "../Common/WithFilters/EntryFile.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncPrepareData } from "./PrepareData/EntryFile.js";
import { StartFunc as StartFuncTransformAndShow } from "./transformAndShow.js";
import { StartFunc as StartFuncShowFilters } from "./BuildBsTable/ShowFilters/EntryFile.js";

const CommonKeyName = "SALES";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTallyData = await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Transactions/Sales/BatchDate.xml",
        inColumnsArray: ColumnsJson
    });

    let jVarLocalDataToShow = JSON.parse(jVarLocalTallyData).ENVELOPE[CommonKeyName];
    // let jVarLocalArray = StartFuncPrepareData({ inDataToShow: jVarLocalDataToShow });
    jVarGlobalPresentViewData = jVarLocalDataToShow;

    // BuildBsTable();
    StartFuncTransformAndShow({ inDataToShow: jVarLocalDataToShow });
    StartFuncShowFilters();
};

export { StartFunc };