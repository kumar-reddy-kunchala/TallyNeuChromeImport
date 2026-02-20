const tableName = "tableBS";

const StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTaget = inCurrentTarget;
    let jVarLocalClosestRow = jVarLocalCurrentTaget.closest(".row");

    let jVarLocalColumnName = jVarLocalClosestRow.dataset.columnname;

    let jVarLocalSelect = jVarLocalClosestRow.querySelector("select");
    let jVarLocalSelected = $(jVarLocalSelect).val();
    let data = $("#tableBS").bootstrapTable('getData', { unfiltered: true });

    if (jVarLocalSelected.length > 0) {
        jFLocalIfSelected({
            inSelectedArray: jVarLocalSelected,
            inColumNname: jVarLocalColumnName,
            inPresentData: data
        });
    } else {
        jFLocalIfNoneSelected({ inPresentData: data });
    };
};

const jFLocalIfSelected = ({ inSelectedArray, inColumNname, inPresentData }) => {
    let jVarLocalColumnName = inColumNname;
    let jVarLocalSelected = inSelectedArray;

    const jVarLocalFilteredRows = inPresentData.filter(element => {
        return jVarLocalSelected.includes(element[jVarLocalColumnName]);
    });

    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", jVarLocalFilteredRows);
};

const jFLocalIfNoneSelected = ({ inPresentData }) => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", inPresentData);
};

export { StartFunc };
