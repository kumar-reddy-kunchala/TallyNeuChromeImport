let StartFunc = () => {
    jFLocalPeriodColId();
    jFLocalDisplayNoneFiltersDynamicId();
};

let jFLocalPeriodColId = () => {
    let jVarLocalHtmlId = 'PeriodColId';
    let jVarLocalPeriodColId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalPeriodColId === null === false) {
        jVarLocalPeriodColId.style.display = "none";
    };
};

let jFLocalDisplayNoneFiltersDynamicId = () => {
    let jVarLocalHtmlId = 'FiltersDynamicId';
    let jVarLocalFiltersDynamicId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalFiltersDynamicId === null === false) {
        jVarLocalFiltersDynamicId.style.display = 'none';
    };
};

export { StartFunc };