import { StartFunc as CommonFuncs } from "../Common/WithFilters/EntryFile.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

const CommonKeyName = "SALES";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTallyData = await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Transactions/Sales/BatchDate.xml",
        inColumnsArray: ColumnsJson
    });
    let jVarLocalDataToShow = JSON.parse(jVarLocalTallyData).ENVELOPE[CommonKeyName];
    let jVarLocalNewData = jFLocalBatchWise({ inData: jVarLocalDataToShow });
    console.log("jVarLocalNewData : ", jVarLocalDataToShow, jVarLocalNewData);
    BuildBsTable({
        inData: jVarLocalNewData,
        inColumnsArray: ColumnsJson
    });
};

const jFLocalBatchWise = ({ inData }) => {
    let jVarLocalNewArray = [];

    inData.forEach(LoopBillLine => {
        if (Array.isArray(LoopBillLine.BATCHDETAILS)) {
            LoopBillLine.BATCHDETAILS.forEach(LoopBatchDetails => {
                let jVarLoopInsideBatchArray = jFLocalMoreBatches({ inBatchDetails: LoopBatchDetails });

                jVarLoopInsideBatchArray.forEach(element => {
                    let jVarlLoopInsideObject = { ...LoopBillLine, BATCHITEM: LoopBatchDetails.BATCHITEM, ...element };
                    jVarLocalNewArray.push(jVarlLoopInsideObject);
                });
            });
        } else {
            jVarLocalNewArray.push({
                ...LoopBillLine,
                ...jFLocalMoreBatches({ inBatchDetails: LoopBillLine.BATCHDETAILS })
            });
        };
    });

    return jVarLocalNewArray;
};

const jFLocalMoreBatches = ({ inBatchDetails }) => {
    let jVarLocalBatchNames = inBatchDetails.BATCHNAME.split(",");
    let jVarLocalBatchQtys = inBatchDetails.BATCHQTY.split(",");
    let jVarLocalBatchRates = inBatchDetails.BATCHRATE.split(",");
    let jVarLocalBatchAmounts = inBatchDetails.BATCHAMOUNT.split(",");

    let jVarLocalBatchArray = jVarLocalBatchNames.map((element, LoopIndex) => {
        return {
            BATCHNAME: element,
            BATCHQTY: jVarLocalBatchQtys[LoopIndex],
            BatchQtyOnly: jVarLocalBatchQtys[LoopIndex].split(" ")[0],
            BATCHRATE: jVarLocalBatchRates[LoopIndex],
            BATCHAMOUNT: jVarLocalBatchAmounts[LoopIndex]
        }
    });
    console.log("bbbbbbb : ", jVarLocalBatchArray);
    return jVarLocalBatchArray;
};

export { StartFunc };