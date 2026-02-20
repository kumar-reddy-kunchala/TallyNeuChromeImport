import { StartFunc as nextColumn } from "./nextColumn.js";
const CommonTableName = "tableBS";

const StartFunc = (evt) => {
    let jVarLocalCurrentTaget = evt.currentTarget;
    let jVarLocalClosestRow = jVarLocalCurrentTaget.closest(".row");
    let jVarLocalPresentColumnIndex = jVarLocalClosestRow.dataset.columnindex;

    let jVarLocalFilteredData = jFLocalFilterRows({ inPresentRowIndex: parseInt(jVarLocalPresentColumnIndex) });

    var $table = $(`#${CommonTableName}`);

    $table.bootstrapTable("load", jVarLocalFilteredData);
    $table.bootstrapTable("selectPage", 1);

    nextColumn({
        inColumnIndex: parseInt(jVarLocalPresentColumnIndex) + 1,
        inFilteredData: jVarLocalFilteredData
    });
};

const jFLocalFilterRows = ({ inPresentRowIndex }) => {
    const jVarLocalRows = document.getElementById("FiltersBodyId").querySelectorAll(".row");
    var div_array = [...jVarLocalRows]; // converts NodeList to Array
    let jVarLocalFilteredArray = jVarGlobalPresentViewData;

    div_array.forEach(div => {
        if (parseInt(div.dataset.columnindex) <= parseInt(inPresentRowIndex)) {
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

export { StartFunc };
