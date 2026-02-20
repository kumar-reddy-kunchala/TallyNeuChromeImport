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

    jVarGlobalPresentViewData = jFLocalBatchWise({ inData: jVarLocalDataToShow });

    BuildBsTable({
        inData: jVarGlobalPresentViewData,
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
            let jVarLoopInsideBatchArray = jFLocalMoreBatches({ inBatchDetails: LoopBillLine.BATCHDETAILS });

            jVarLoopInsideBatchArray.forEach(element => {
                let jVarlLoopInsideObject = { ...LoopBillLine, BATCHITEM: LoopBillLine.BATCHDETAILS.BATCHITEM, ...element };
                jVarLocalNewArray.push(jVarlLoopInsideObject);
            });
            
            // jVarLocalNewArray.push({
            //     ...LoopBillLine,
            //     ...jFLocalMoreBatches({ inBatchDetails: LoopBillLine.BATCHDETAILS })
            // });
        };
    });

    return jVarLocalNewArray;
};

const jFLocalMoreBatches = ({ inBatchDetails }) => {
    let jVarLocalBatchArray = [];

    if (inBatchDetails === undefined) {
        return jVarLocalBatchArray;
    };

    if (inBatchDetails.BATCHQTY === null === false) {
        let jVarLocalBatchNames = inBatchDetails.BATCHNAME.split(", ");
        let jVarLocalBatchQtys = inBatchDetails.BATCHQTY.split(", ");
        let jVarLocalBatchRates = inBatchDetails.BATCHRATE.split(", ");
        let jVarLocalBatchAmounts = inBatchDetails.BATCHAMOUNT.split(", ");

        jVarLocalBatchArray = jVarLocalBatchQtys.map((element, LoopIndex) => {
            return jFLocalPrepareRow({
                inLoopElement: element,
                inBatchNames: jVarLocalBatchNames[LoopIndex],
                inBatchQtys: element,
                inBatchRates: jVarLocalBatchRates[LoopIndex],
                inBatchAmounts: jVarLocalBatchAmounts[LoopIndex]
            });
        });
    };

    return jVarLocalBatchArray;
};

const jFLocalPrepareRow = ({ inLoopElement, inBatchNames, inBatchQtys, inBatchRates, inBatchAmounts }) => {
    let jVarReturnObject = {
        BATCHNAME: "",
        BATCHQTY: "",
        BatchQtyOnly: "",
        BATCHRATE: "",
        BATCHAMOUNT: ""
    };

    let jVarLocalBatchNames = inBatchNames;
    let jVarLocalBatchQtys = inBatchQtys;
    let jVarLocalBatchRates = inBatchRates;
    let jVarLocalBatchAmounts = inBatchAmounts;

    if (jVarLocalBatchQtys === null === false) {
        jVarReturnObject.BATCHNAME = jVarLocalBatchNames;
        jVarReturnObject.BATCHQTY = inLoopElement;
        jVarReturnObject.BatchQtyOnly = inLoopElement.split(" ")[0];
        jVarReturnObject.BATCHRATE = jVarLocalBatchRates;
        jVarReturnObject.BATCHAMOUNT = jVarLocalBatchAmounts;
    };

    return jVarReturnObject;
};

export { StartFunc };