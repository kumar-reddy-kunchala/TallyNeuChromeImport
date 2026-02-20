let StartFunc = () => {
    const jVarLocalSelects = document.getElementById("FiltersBodyId").querySelectorAll("select[data-columnname]");
    let jVarLocalFilterObject = {};

    jVarLocalSelects.forEach((userItem) => {
        const k1 = $(userItem).chosen().val();
        jVarLocalFilterObject[userItem.dataset.columnname] = userItem.value;
        // console.log("sssssss : ", userItem.dataset.columnname, userItem.value);
    });

    return jVarLocalFilterObject;
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