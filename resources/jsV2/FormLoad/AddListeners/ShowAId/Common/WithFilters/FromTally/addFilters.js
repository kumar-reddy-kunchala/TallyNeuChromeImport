let StartFunc = ({ inXml }) => {
    try {
        let jVarLocalXml = inXml;

        let jVarLocalCompanyName = jFLocalSelectCompanyId();
        let jVarLocalFromDate = jFLocalFromDateId();
        let jVarLocalToDate = jFLocalToDateId();
        // console.log("jVarLocalXml : ", jVarLocalXml, jVarLocalFromDate, jVarLocalFromDate.split("-").reverse().join("-"));
        let jVarLocalChangeFromDate = jVarLocalXml.replace("KeshavSoft_FromDate", jVarLocalFromDate.split("-").reverse().join("-"));
        let jVarLocalChangeToDate = jVarLocalChangeFromDate.replace("KeshavSoft_ToDate", jVarLocalToDate.split("-").reverse().join("-"));
        let jVarLocalAfterReplace = jVarLocalChangeToDate.replace("KeshavSoft_CompanyName", jVarLocalCompanyName);

        return jVarLocalAfterReplace;
    } catch (error) {
        return false;
    };
};

let jFLocalToDateId = () => {
    let jVarLocalToDateId = 'ToDateId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToDateId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFromDateId = () => {
    let jVarLocalFromDateId = 'FromDateId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFromDateId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalSelectCompanyId = () => {
    let jVarLocalSelectCompanyId = 'SelectCompanyId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSelectCompanyId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };