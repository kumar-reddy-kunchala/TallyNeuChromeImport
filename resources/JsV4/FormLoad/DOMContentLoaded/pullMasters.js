const StartFunc = async () => {
    let LocalFromTally = await LocalFuncFromTally();
    const xmlText = await LocalFromTally.text();
    debugger;
    // Parse XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    // Get all LEDGERS nodes
    const ledgers = xmlDoc.querySelectorAll("LEDGERS");

    // Create select
    const select = document.getElementById("SelectReportId");

    // Loop ledgers
    ledgers.forEach(ledger => {

        const name = ledger.querySelector("LEDGERNAME")?.textContent;
        const guid = ledger.querySelector("GUID")?.textContent;

        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;

        select.appendChild(option);
    });
};

const LocalFuncFromTally = async () => {
    try {
        const response = await fetch("./export.xml");
        let xmlText = await response.text();

        const config = {
            method: 'POST',
            body: xmlText
        };

        let jVarLocalResponse = await fetch("http://localhost:9000/", config);

        return await jVarLocalResponse;
    } catch (error) {
        return await false;
    };
};

export { StartFunc };
