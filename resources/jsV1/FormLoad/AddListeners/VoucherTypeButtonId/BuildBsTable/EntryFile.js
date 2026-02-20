const tableName = "tableBS";

const StartFunc = ({ inData }) => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", inData);
};

export { StartFunc };
