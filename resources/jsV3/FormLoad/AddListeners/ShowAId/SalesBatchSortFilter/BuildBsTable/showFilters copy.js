const tableName = "tableBS";

const StartFunc = () => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");
    console.log("jVarLocalFiltersBodyId : ", jVarLocalFiltersBodyId);
    const clone = jVarLocalTemplateRow.content.cloneNode(true);
    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = "kkkkkkkkk";

    jVarLocalFiltersBodyId.appendChild(clone);
};

export { StartFunc };
