import { StartFunc as firstColumn } from "./firstColumn.js";

const StartFunc = () => {
    // $(`#VoucherTypeFilterId`).chosen();
    const jVarLocalSelect = document.getElementById("FiltersBodyId");
    jVarLocalSelect.innerHTML = "";

    firstColumn();
};

export { StartFunc };
