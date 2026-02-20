import { StartFunc as buttonClick } from "./buttonClick.js";

const StartFunc = ({ inLabel, inData, inField, inColumnIndex }) => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");
    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    jFLocalShowLabel({ inLabel, inClone: clone });
    jFLocalShowColumnIndex({ inClone: clone, inColumnIndex });
    jFLocalShowColumnField({ inField, inClone: clone });

    let jVarLocalSelect = clone.querySelector("select");
    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    let jVarLocalButton = clone.querySelector("button");
    jVarLocalButton.addEventListener('click', buttonClick);

    jVarLocalFiltersBodyId.appendChild(clone);

    $(jVarLocalFiltersBodyId.children[inColumnIndex].querySelector("select")).chosen();
};

const jFLocalShowLabel = ({ inLabel, inClone }) => {
    const clone = inClone;

    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = inLabel;
};

const jFLocalShowColumnIndex = ({ inColumnIndex, inClone }) => {
    const clone = inClone;

    let jVarLocalOrderItemsCategoryClass = clone.querySelector(".row");
    jVarLocalOrderItemsCategoryClass.dataset.columnindex = inColumnIndex;
};

const jFLocalShowColumnField = ({ inField, inClone }) => {
    const clone = inClone;

    let jVarLocalOrderItemsCategoryClass = clone.querySelector(".row");
    jVarLocalOrderItemsCategoryClass.dataset.columnname = inField;
};

export { StartFunc };
