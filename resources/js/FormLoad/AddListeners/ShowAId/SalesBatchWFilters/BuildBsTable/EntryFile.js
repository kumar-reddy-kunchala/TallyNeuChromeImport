import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as ShowFilters } from "./ShowFilters/EntryFile.js";
import ColumnsJson from '../columns.json' with {type: 'json'};

const tableName = "tableBS";

const StartFunc = ({ inData }) => {
    // StartFuncTableTag();
    jFLocalInitialize({ inData });
    ShowFilters();
};

const jFLocalInitialize = ({ inData }) => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("destroy").bootstrapTable({
        toolbar: "#toolbar",
        pagination: "true",
        search: "true",
        searchable: "true",
        showColumns: "true",
        shoColumnsToggleAll: "true",
        showExport: "true",
        showFooter: "true",
        showPaginationSwitch: "true",
        showFullscreen: "true",
        data: inData,
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
