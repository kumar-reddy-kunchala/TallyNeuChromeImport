let StartFunc = () => {
    let jVarLocalHtmlId = 'PeriodColId';
    let jVarLocalPeriodColId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalPeriodColId === null === false) {
        jVarLocalPeriodColId.style.display = '';
    };
};

export { StartFunc };