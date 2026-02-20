const StartFunc = ({ inBillWise }) => {
    let jVarLocalinBillWise = inBillWise;
    let jVarLocalBatchWiseArray = [];
    console.log("11111111111: ", inBillWise.length);
    jVarLocalinBillWise.forEach(element => {
        if ("BATCHDETAILS" in element) {
            if (Array.isArray(element.BATCHDETAILS)) {
                console.log("vvvvv : ",);

                element.BATCHDETAILS.forEach(LoopBatch => {
                    if (LoopBatch["BATCHQTY"] === null) {
                        jVarLocalBatchWiseArray.push({
                            ...element,
                            ...LoopBatch,
                            BatchQtyOnly: "---"
                        });
                    } else {
                        jVarLocalBatchWiseArray.push({
                            ...element,
                            ...LoopBatch,
                            BatchQtyOnly: LoopBatch["BATCHQTY"].split(" ")[0]
                        });
                    };
                });
            } else {
                jVarLocalBatchWiseArray.push({
                    ...element,
                    ...element.BATCHDETAILS,
                    BatchQtyOnly: element.BATCHDETAILS["BATCHQTY"].split(" ")[0]
                });

            };
        };
    });
    console.log("22222222: ", jVarLocalBatchWiseArray.length);
    return jVarLocalBatchWiseArray;
};

export { StartFunc };