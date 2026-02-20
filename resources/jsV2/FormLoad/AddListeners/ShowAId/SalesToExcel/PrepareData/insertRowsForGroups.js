import emptyRowJson from './emptyRow.json' with {type: 'json'};

const StartFunc = ({ inDataAsArray }) => {
    const jFLocalFromBatchTotals = jFLocalBatchTotals({ inDataAsArray });

    const jVarLocalTotalRow = Object.assign({}, emptyRowJson);

    jVarLocalTotalRow.BATCHAMOUNT = jFLocalFromBatchTotals.BatchAmountTotal;
    jVarLocalTotalRow.BatchQtyOnly = jFLocalFromBatchTotals.BatchQtyTotal;

    jFLocalFromBatchTotals.newArray.push(jVarLocalTotalRow);

    return jFLocalFromBatchTotals.newArray;
};

const jFLocalBatchTotals = ({ inDataAsArray }) => {
    let jVarLocalDataAsArray = inDataAsArray;
    let jVarLocalArray = [];
    let jVarLocalBatchAmountTotal = 0;
    let jVarLocalBatchQtyTotal = 0;

    for (const [key, value] of Object.entries(jVarLocalDataAsArray)) {
        const jVarLocalBatchHead = Object.assign({}, emptyRowJson);
        jVarLocalBatchHead.BATCHNAME = key;

        jVarLocalArray.push(jVarLocalBatchHead);

        jVarLocalArray.push(...value);

        const jVarLocalBatchTotalRow = Object.assign({}, emptyRowJson);

        jVarLocalBatchTotalRow.BATCHAMOUNT = jFLocalBatchTotal({ inDataAsArray: value });
        jVarLocalBatchTotalRow.BatchQtyOnly = jFLocalBatchQtyOnly({ inDataAsArray: value });

        jVarLocalBatchAmountTotal += parseFloat(jVarLocalBatchTotalRow.BATCHAMOUNT);
        jVarLocalBatchQtyTotal += parseFloat(jVarLocalBatchTotalRow.BatchQtyOnly);

        jVarLocalArray.push(jVarLocalBatchTotalRow);
        jVarLocalArray.push(emptyRowJson);
        jVarLocalArray.push(emptyRowJson);
    };

    return {
        newArray: jVarLocalArray,
        BatchAmountTotal: jVarLocalBatchAmountTotal,
        BatchQtyTotal: jVarLocalBatchQtyTotal
    };
};

const jFLocalBatchTotal = ({ inDataAsArray }) => {
    const jVarLocalAmountArray = inDataAsArray.map(element => {
        return element.BATCHAMOUNT.replaceAll(",", "");
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

export { StartFunc };