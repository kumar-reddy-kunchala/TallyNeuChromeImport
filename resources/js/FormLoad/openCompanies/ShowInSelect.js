let StartFunc = ({ inJsonArray }) => {
    let jVarLocalFromTally = JSON.parse(inJsonArray);
    // debugger
    // console.log("jVarLocalFromTally : ", jVarLocalFromTally);

    let jVarLocalSelectCompanyId = document.getElementById('SelectCompanyId');

    jVarLocalSelectCompanyId.innerHTML = "";

    if (Array.isArray(jVarLocalFromTally.ENVELOPE.COMPANIES)) {
        jFLocalIfArray({ inJsonArray: jVarLocalFromTally.ENVELOPE.COMPANIES });
        return;
    };

    jFLocalIfNotArray({ inJsonObject: jVarLocalFromTally.ENVELOPE.COMPANIES });
};

let jFLocalIfArray = ({ inJsonArray }) => {
    let jVarLocalSelectCompanyId = document.getElementById('SelectCompanyId');

    jVarLocalSelectCompanyId.innerHTML = "";

    inJsonArray.forEach(element => {
        jVarLocalSelectCompanyId.options.add(
            new Option(element.COMPANYNAME, element.COMPANYNAME)
        )
    });
};

let jFLocalIfNotArray = ({ inJsonObject }) => {
    let jVarLocalSelectCompanyId = document.getElementById('SelectCompanyId');

    jVarLocalSelectCompanyId.innerHTML = "";

    jVarLocalSelectCompanyId.options.add(
        new Option(inJsonObject.COMPANYNAME, inJsonObject.COMPANYNAME)
    );
};

export { StartFunc };