import { StartFunc as StartFuncFromFilterPeriod } from "../Common/FilterPeriod/entryFile.js";
const CommonKeyName = "SALES";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    await StartFuncFromFilterPeriod({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Transactions/Sales/BatchDate.xml",
        inColumnsArray: ColumnsJson
    });
};

export { StartFunc };