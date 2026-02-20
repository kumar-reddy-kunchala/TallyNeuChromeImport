const CommonHtmlId = "VoucherNumberFilterId";

const StartFunc = () => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");

    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = "Voucher Types";

    let jVarLocalSelect = clone.querySelector("select");
    jVarLocalSelect.id = CommonHtmlId;

    const jVarLocalFiltered = jFLocalVoucherTypeFilter();

    const unique = [...new Set(jVarLocalFiltered.map((item) => {
        return item.VOUCHERNUMBER
    }))];

    jVarLocalFiltersBodyId.appendChild(clone);

    jFLocalPopulateSelect({ inData: unique });
};

const jFLocalVoucherTypeFilter = () => {
    let jVarLocalTypes = $(`#VoucherTypeFilterId`).val();

    const jVarLocalFiltered = jVarGlobalPresentViewData.filter((item) => {
        return item.VOUCHERNUMBER
    });

    return jVarLocalFiltered;
};

const jFLocalPopulateSelect = ({ inData }) => {
    const jVarLocalSelect = document.getElementById(CommonHtmlId)

    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    // $(`#${CommonHtmlId}`).chosen();
};

export { StartFunc };
