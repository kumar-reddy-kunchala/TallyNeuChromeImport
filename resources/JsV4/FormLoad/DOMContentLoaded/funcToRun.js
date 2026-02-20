// import { StartFunc as StartFuncCheckTally } from "./CheckTally/EntryFile.js";
// import { StartFunc as openCompanies } from "./openCompanies/EntryFile.js";
// import { StartFunc as StartFuncFromImport } from "./import.js";
// import { StartFunc as StartFuncFromToTally } from "./toTally.js";
import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromPullMasters } from "./pullMasters.js";

let StartFunc = () => {
    // StartFuncCheckTally().then(() => {
    //     openCompanies().then(() => {
    //     });
    // });
    // LocalFuncPrepareSelect();
    // StartFuncFromImport();
    StartFuncFromPullMasters().then();
    StartFuncFromAddListeners();
    // debugger;
    // StartFuncFromToTally().then();
};

const LocalFuncPrepareSelect = async () => {
    // Fetch XML file
    const response = await fetch("./masters.xml");
    const xmlText = await response.text();
    // debugger;
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
