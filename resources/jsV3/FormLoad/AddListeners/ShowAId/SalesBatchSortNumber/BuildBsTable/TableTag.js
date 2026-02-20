import AttributesJson from './Attributes.json' with { type: "json" };
const tableName = "tableBS";

const StartFunc = () => {
    var $table = $(`#${tableName}`);

    $table.attr(AttributesJson.tableAttributes);
};

export { StartFunc };