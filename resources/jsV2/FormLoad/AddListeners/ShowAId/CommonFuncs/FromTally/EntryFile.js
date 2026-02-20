import { StartFunc as ReadXml } from "./ReadXml.js";

let StartFunc = async ({ inXmlPath }) => {
    try {
        let jVarLocalXml = await ReadXml({ inXmlPath });

        let jVarLocalCompanyName = jFLocalSelectCompanyId();

        let jVarLocalAfterReplace = jVarLocalXml.replace("KeshavSoft_CompanyName", jVarLocalCompanyName);

        const config = {
            method: 'POST',
            body: jVarLocalAfterReplace
        };

        let jVarLocalResponse = await fetch("http://localhost:9000/", config);

        return await jVarLocalResponse;
    } catch (error) {
        return await false;
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