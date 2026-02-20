let StartFunc = async () => {
    try {
debugger;
        const LocalBodyData = await LocalFuncFromXml();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(LocalBodyData, "text/xml");

        const config = {
            method: 'POST',
            body: LocalBodyData
        };

        let jVarLocalResponse = await fetch("http://localhost:9000/", config);

        return await jVarLocalResponse;
    } catch (error) {
        return await false;
    };
};

const LocalFuncFromXml = async () => {
    // Fetch XML file
    const response = await fetch("./import.xml");
    let xmlText = await response.text();
    const ToAccountName = jFLocalSelectReportId();

    // debugger;
    const LocalReplacedText = xmlText.replaceAll("KSCutomerName", ToAccountName);

    return LocalReplacedText;
};

let jFLocalSelectReportId = () => {
    let jVarLocalSelectReportId = 'SelectReportId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSelectReportId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };