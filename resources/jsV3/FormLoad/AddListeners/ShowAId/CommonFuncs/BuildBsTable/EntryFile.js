const tableName = "tableBS";

const StartFunc = ({ inData, inColumnsArray }) => {
    jFLocalInitialize({ inData, inColumnsArray });
};

const jFLocalInitialize = ({ inData, inColumnsArray }) => {
    var $table = $(`#${tableName}`);

    // $table.bootstrapTable("destroy").bootstrapTable({
    //     toolbar: "#toolbar",
    //     exportDataType: "all",
    //     exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
    //     data: inData,
    //     columns: inColumnsArray
    // });

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
        columns: inColumnsArray
    });
};



// $table.bootstrapTable("destroy").bootstrapTable({
//     toolbar: "#toolbar",
//     pagination: "true",
//     search: "true",
//     searchable: "true",
//     showColumns: "true",
//     shoColumnsToggleAll: "true",
//     showExport: "true",
//     showFooter: "true",
//     showPaginationSwitch: "true",
//     showFullscreen: "true",
//     data: inData,
//     columns: jFLocalGetVisibleColumns()
// });

export { StartFunc };
