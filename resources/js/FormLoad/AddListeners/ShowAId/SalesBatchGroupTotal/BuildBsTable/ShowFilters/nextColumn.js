import { StartFunc as insertNewRow } from "./insertNewRow.js";

const StartFunc = ({ inColumnIndex, inFilteredData }) => {
    let jVarLocalColumnIndex = inColumnIndex;
    let jVarLocalTableOptions = $("#tableBS").bootstrapTable("getOptions");
    let jVarLocalColumn = jVarLocalTableOptions.columns[0][inColumnIndex];
    let jVarLocalTitle = jVarLocalColumn.title;
    let jVarLocalField = jVarLocalColumn.field;

    // let data = jFLocalFilterRows({ inPresentRowIndex: jVarLocalColumnIndex });
    // console.log("data : ", data);

    // let data = $("#tableBS").bootstrapTable('getData', { unfiltered: true });

    const unique = [...new Set(inFilteredData.map((item) => {
        return item[jVarLocalField];
    }))];

    jFLocalRemoveBottomRows({ inPresentRowIndex: jVarLocalColumnIndex });

    insertNewRow({
        inLabel: jVarLocalTitle,
        inData: unique,
        inColumnIndex: jVarLocalColumnIndex,
        inField: jVarLocalField
    });
};

const jFLocalFilterRows = ({ inPresentRowIndex }) => {
    const jVarLocalRows = document.getElementById("FiltersBodyId").querySelectorAll(".row");
    var div_array = [...jVarLocalRows]; // converts NodeList to Array
    let jVarLocalFilteredArray = jVarGlobalPresentViewData;

    div_array.forEach(div => {
        if (parseInt(div.dataset.columnindex) < parseInt(inPresentRowIndex)) {
            let jVarLocalClosestRow = div.closest(".row");

            let jVarLocalSelect = jVarLocalClosestRow.querySelector("select");
            let jVarLocalSelected = $(jVarLocalSelect).val();
            jVarLocalFilteredArray = jVarLocalFilteredArray.filter(element => {
                return jVarLocalSelected.includes(element[div.dataset.columnname]);
            });
        };
    });

    return jVarLocalFilteredArray;
};

const jFLocalRemoveBottomRows = ({ inPresentRowIndex }) => {
    const jVarLocalRows = document.getElementById("FiltersBodyId").querySelectorAll(".row");
    var div_array = [...jVarLocalRows]; // converts NodeList to Array

    div_array.forEach(div => {
        if (parseInt(div.dataset.columnindex) >= parseInt(inPresentRowIndex)) {
            div.remove();
        };
    });
};

export { StartFunc };
