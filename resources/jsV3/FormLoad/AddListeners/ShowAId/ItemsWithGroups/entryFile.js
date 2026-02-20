import { StartFunc as CommonFuncs } from "../CommonFuncs/EntryFile.js";
const CommonKeyName = "STOCKITEMS";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Masters/Items/WithGroups.xml",
        inColumnsArray: ColumnsJson
    });
};

export { StartFunc };