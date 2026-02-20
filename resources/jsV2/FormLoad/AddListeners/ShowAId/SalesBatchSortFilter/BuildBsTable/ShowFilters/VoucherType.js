const CommonHtmlId = "VoucherTypeFilterId";

const StartFunc = () => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");

    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = "Voucher Types";

    let jVarLocalSelect = clone.querySelector("select");
    jVarLocalSelect.id = CommonHtmlId;

    const unique = [...new Set(jVarGlobalPresentViewData.map((item) => {
        return item.VOUCHERTYPE
    }))];

    jVarLocalFiltersBodyId.appendChild(clone);

    jFLocalPopulateSelect({ inData: unique });
};

const jFLocalPopulateSelect = ({ inData }) => {
    const jVarLocalSelect = document.getElementById(CommonHtmlId)

    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    $(`#${CommonHtmlId}`).chosen();
};

export { StartFunc };
