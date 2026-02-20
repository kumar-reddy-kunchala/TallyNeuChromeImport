const StartFunc = () => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");
    console.log("jVarLocalFiltersBodyId : ", jVarLocalFiltersBodyId);
    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = "Voucher Numbers";

    let jVarLocalSelect = clone.querySelector("select");
    jVarLocalSelect.id = "VoucherNumberFilterId";

    const unique = [...new Set(jVarGlobalPresentViewData.map((item) => {
        // return {
        //     text: item.VOUCHERNUMBER,
        //     value: item.VOUCHERNUMBER
        // }
        return item.VOUCHERNUMBER
    }))];

    // jVarLocalSelect.innerHTML = unique.map(t => '<option value="' + t + '">' + t + '</option>');

    jVarLocalFiltersBodyId.appendChild(clone);

    let jVarLocalVoucherNumberFilterId = document.getElementById("VoucherNumberFilterId");
    // jVarLocalVoucherNumberFilterId.loadOptions();
    jFLocalPopulateSelect({ inData: unique });
};

const StartFunc = () => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");
    console.log("jVarLocalFiltersBodyId : ", jVarLocalFiltersBodyId);
    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = "Voucher Numbers";

    let jVarLocalSelect = clone.querySelector("select");
    jVarLocalSelect.id = "VoucherNumberFilterId";

    const unique = [...new Set(jVarGlobalPresentViewData.map((item) => {
        // return {
        //     text: item.VOUCHERNUMBER,
        //     value: item.VOUCHERNUMBER
        // }
        return item.VOUCHERNUMBER
    }))];

    // jVarLocalSelect.innerHTML = unique.map(t => '<option value="' + t + '">' + t + '</option>');

    jVarLocalFiltersBodyId.appendChild(clone);

    let jVarLocalVoucherNumberFilterId = document.getElementById("VoucherNumberFilterId");
    // jVarLocalVoucherNumberFilterId.loadOptions();
    jFLocalPopulateSelect({ inData: unique });
};

const jFLocalPopulateSelect = ({ inData }) => {
    const jVarLocalSelect = document.getElementById('VoucherNumberFilterId')

    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    $('#VoucherNumberFilterId').chosen();
};

export { StartFunc };
