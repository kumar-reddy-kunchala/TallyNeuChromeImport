const CommonHtmlId = "VoucherTypeFilterId";

const StartFunc = () => {
    const unique = [...new Set(jVarGlobalPresentViewData.map((item) => {
        return item.VOUCHERTYPE
    }))];

    jFLocalPopulateSelect({ inData: unique });
};

const jFLocalPopulateSelect = ({ inData }) => {
    const jVarLocalSelect = document.getElementById(CommonHtmlId)

    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    $(`#${CommonHtmlId}`).chosen();
};

export { StartFunc };
