import { StartFunc as ReadXml } from "./ReadXml.js";
import { StartFunc as addFilters } from "./addFilters.js";

let StartFunc = async () => {
    try {
        let jVarLocalXml = await ReadXml();
        // console.log("jVarLocalXml : ", jVarLocalXml);
        let jVarLocalAlteredXml = addFilters({ inXml: jVarLocalXml });

        const config = {
            method: 'POST',
            body: jVarLocalAlteredXml
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