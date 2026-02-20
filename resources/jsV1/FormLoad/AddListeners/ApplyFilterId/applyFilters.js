let StartFunc = () => {
    const jVarLocalSelects = document.getElementById("FiltersBodyId").querySelectorAll("select[data-columnname]");
    let jVarLocalFilteredData = jVarGlobalPresentViewData;

    jVarLocalSelects.forEach((userItem) => {
        const LoopInsideToFilterValues = $(userItem).chosen().val();

        jVarLocalFilteredData = jVarLocalFilteredData.filter(element => {
            return LoopInsideToFilterValues.includes(element[userItem.dataset.columnname]);
        });
    });

    return jVarLocalFilteredData;
};

export { StartFunc };