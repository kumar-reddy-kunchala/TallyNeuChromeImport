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

let StartFunc1 = () => {

    return $("#VoucherNumberFilterId").val();
    // FiltersBodyId
    const jVarLocalSelect = document.getElementById("VoucherTypeSelectId");

    const jVarLocalSelectedOptions = Array.from(jVarLocalSelect.options).filter(function (option_element) {
        let option_text = option_element.text;
        let option_value = option_element.value;
        let is_option_selected = option_element.selected;

        return is_option_selected;
    });

    const jVarLocalSelected = jVarLocalSelectedOptions.map(element => {
        return element.value;
    });

    return jVarLocalSelected;
};

export { StartFunc };