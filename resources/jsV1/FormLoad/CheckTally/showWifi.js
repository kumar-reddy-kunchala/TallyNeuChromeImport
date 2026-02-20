let StartFunc = async () => {
    jFLocalDisplayShowImageWifiId();
    jFLocalChangeColour();
};

let jFLocalDisplayShowImageWifiId = () => {
    let jVarLocalHtmlId = 'ImageWifiId';
    let jVarLocalImageWifiId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalImageWifiId === null === false) {
        jVarLocalImageWifiId.style.display = '';
    };
};

const jFLocalChangeColour = () => {
    let jVarLocalImageWifiId = document.getElementById('ImageWifiId');
    let jVarLocalSvg = jVarLocalImageWifiId.querySelector("svg");

    jVarLocalSvg.classList.remove("text-danger");
    jVarLocalSvg.classList.add("text-success");
};

export { StartFunc };