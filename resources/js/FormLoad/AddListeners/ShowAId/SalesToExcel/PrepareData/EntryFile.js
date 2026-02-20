import emptyRowJson from './emptyRow.json' with {type: 'json'};

let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;

    const jVarLocalBatchLines = jFLocalBatchWise({ inData: jVarLocalDataToShow });
    const jVarLocalGroupedData = jFLocalGroupByBatch({ inData: jVarLocalBatchLines });

    let jVarLocalArray = jFLocalInsertRowsForGroups({ inDataAsArray: jVarLocalGroupedData });

    return jVarLocalArray;
};

const jFLocalInsertRowsForGroups = ({ inDataAsArray }) => {
    let jVarLocalDataAsArray = inDataAsArray;
    let jVarLocalArray = [];

    for (const [key, value] of Object.entries(jVarLocalDataAsArray)) {
        const jVarLocalBatchHead = Object.assign({}, emptyRowJson);
        jVarLocalBatchHead.BATCHNAME = key;

        jVarLocalArray.push(jVarLocalBatchHead);

        jVarLocalArray.push(...value);

        const jVarLocalBatchTotalRow = Object.assign({}, emptyRowJson);

        jVarLocalBatchTotalRow.BATCHAMOUNT = jFLocalBatchTotal({ inDataAsArray: value });
        jVarLocalBatchTotalRow.BatchQtyOnly = jFLocalBatchQtyOnly({ inDataAsArray: value });

        jVarLocalArray.push(jVarLocalBatchTotalRow);
        jVarLocalArray.push(emptyRowJson);
        jVarLocalArray.push(emptyRowJson);
    };

    return jVarLocalArray;
};

const jFLocalBatchTotal = ({ inDataAsArray }) => {
    const jVarLocalAmountArray = inDataAsArray.map(element => {
        return element.BATCHAMOUNT.replace(",", "");
    });

    var sum = jVarLocalAmountArray.reduce(function (a, b) { return parseFloat(a) + parseFloat(b); }, 0);

    return sum.toFixed(2);
};

const jFLocalBatchQtyOnly = ({ inDataAsArray }) => {
    const jVarLocalAmountArray = inDataAsArray.map(element => {
        return element.BatchQtyOnly;
    });

    var sum = jVarLocalAmountArray.reduce(function (a, b) { return parseFloat(a) + parseFloat(b); }, 0);

    return sum.toFixed(3);
};

const jFLocalGroupByBatch = ({ inData }) => {
    const result = Object.groupBy(inData, ({ BATCHNAME }) => BATCHNAME);

    return result;
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