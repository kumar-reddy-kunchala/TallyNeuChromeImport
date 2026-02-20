const tableName = "tableBS";

const StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTaget = inCurrentTarget;
    let jVarLocalClosestRow = jVarLocalCurrentTaget.closest(".row");

    let jVarLocalColumnName = jVarLocalClosestRow.dataset.columnname;

    let jVarLocalSelect = jVarLocalClosestRow.querySelector("select");
    let jVarLocalSelected = $(jVarLocalSelect).val();
    
    if (jVarLocalSelected.length > 0) {
        jFLocalIfSelected({ inSelectedArray: jVarLocalSelected, inColumNname: jVarLocalColumnName });
    } else {
        jFLocalIfNoneSelected()
    };
};

const jFLocalIfSelected = ({ inSelectedArray, inColumNname }) => {
    let jVarLocalColumnName = inColumNname;
    let jVarLocalSelected = inSelectedArray;

    const jVarLocalFilteredRows = jVarGlobalPresentViewData.filter(element => {
        return jVarLocalSelected.includes(element[jVarLocalColumnName]);
    });

    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", jVarLocalFilteredRows);
};

const jFLocalIfNoneSelected = () => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", jVarGlobalPresentViewData);
};

export { StartFunc };
