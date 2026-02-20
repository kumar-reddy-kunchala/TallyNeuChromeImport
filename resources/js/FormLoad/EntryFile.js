import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncCheckTally } from "./CheckTally/EntryFile.js";
import { StartFunc as openCompanies } from "./openCompanies/EntryFile.js";

let StartFunc = () => {
    jFLocalShowToday();
    StartFuncAddListeners();

    StartFuncCheckTally().then(() => {
        openCompanies().then(() => {
        });
    });
};

const jFLocalShowToday = () => {
    jFLocalToInputFromDateId(new Date());
    jFLocalToInputToDateId(new Date());
};

let jFLocalToInputFromDateId = (inValue) => {
    let jVarLocalHtmlId = 'FromDateId';
    let jVarLocalFromDateId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalFromDateId === null === false) {
        jVarLocalFromDateId.valueAsDate = inValue;
    };
};

let jFLocalToInputToDateId = (inValue) => {
    let jVarLocalHtmlId = 'ToDateId';
    let jVarLocalToDateId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalToDateId === null === false) {
        jVarLocalToDateId.valueAsDate = inValue;
    };
};

export { StartFunc };