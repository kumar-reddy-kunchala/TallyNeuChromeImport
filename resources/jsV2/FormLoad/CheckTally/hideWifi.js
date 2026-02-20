let StartFunc = () => {
    jFLocalDisplayNoneImageWifiOffId();
};

let jFLocalDisplayNoneImageWifiOffId = () => {
    let jVarLocalHtmlId = 'ImageWifiOffId';
    let jVarLocalImageWifiOffId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalImageWifiOffId === null === false) {
        jVarLocalImageWifiOffId.style.display = 'none';
    };
};

export { StartFunc };