import { StartFunc as buttonClick } from "./buttonClick.js";

const StartFunc = () => {
    let jVarLocalTableOptions = $("#tableBS").bootstrapTable("getOptions");
    let jVarLocalTitle = jVarLocalTableOptions.columns[0][0].title;
    let jVarLocalField = jVarLocalTableOptions.columns[0][0].field;

    const unique = [...new Set(jVarGlobalPresentViewData.map((item) => {
        return item[jVarLocalField];
    }))];

    jFLocalInsertRow({
        inLabel: jVarLocalTitle,
        inData: unique,
        inField: jVarLocalField
    });
};

const jFLocalInsertRow = ({ inLabel, inData, inField }) => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");
    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    jFLocalShowLabel({ inLabel, inClone: clone });
    jFLocalShowColumnIndex({ inClone: clone, inColumnIndex: 0 });
    jFLocalShowColumnField({ inField, inClone: clone });

    let jVarLocalSelect = clone.querySelector("select");
    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    let jVarLocalButton = clone.querySelector("button");
    jVarLocalButton.addEventListener('click', buttonClick);

    jVarLocalFiltersBodyId.appendChild(clone);

    $(jVarLocalFiltersBodyId.children[0].querySelector("select")).chosen();
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
