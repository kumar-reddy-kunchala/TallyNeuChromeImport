const StartFunc = async () => {
    // Fetch XML file
    const response = await fetch("./import.xml");
    let xmlText = await response.text();
    // debugger;
    const LocalReplacedText = xmlText.replaceAll("KSCutomerName", "A S Varma, Tallarevu");


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
        option.value = guid;
        option.textContent = name;

        select.appendChild(option);
    });
};

export { StartFunc };
