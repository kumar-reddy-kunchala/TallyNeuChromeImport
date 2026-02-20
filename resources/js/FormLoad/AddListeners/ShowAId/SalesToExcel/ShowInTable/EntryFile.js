import ColumnsJson from '../columns.json' with {type: 'json'};

const tableName = "tableBS";

const StartFunc = ({ inDataToShow }) => {
    jFLocalInitialize({ inDataToShow });
};

const jFLocalInitialize = ({ inDataToShow }) => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("destroy").bootstrapTable({
        toolbar: "#toolbar",
        search: "true",
        searchable: "true",
        showColumns: "true",
        shoColumnsToggleAll: "true",
        showExport: "true",
        showFooter: "true",
        showFullscreen: "true",
        data: inDataToShow,
        columns: jFLocalGetVisibleColumns()
    });
};

const jFLocalGetVisibleColumns = () => {
    let jVarLocalAllColumns = ColumnsJson;

    let jVarVisibleColumns = jVarLocalAllColumns.filter(element => {
        return ("visible" in element) === false || element.visible;
    });

    return jVarVisibleColumns;
};

export { StartFunc };
