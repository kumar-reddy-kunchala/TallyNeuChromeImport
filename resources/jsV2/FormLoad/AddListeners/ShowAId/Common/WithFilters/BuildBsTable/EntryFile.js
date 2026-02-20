import { StartFunc as StartFuncTableTag } from "./TableTag.js";
const tableName = "tableBS";

const StartFunc = ({ inData, inColumnsArray }) => {
    StartFuncTableTag();
    jFLocalInitialize({ inData, inColumnsArray });
};

const jFLocalInitialize = ({ inData, inColumnsArray }) => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("destroy").bootstrapTable({
        exportDataType: "all",
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
        data: inData,
        columns: inColumnsArray
    });
};

export { StartFunc };
