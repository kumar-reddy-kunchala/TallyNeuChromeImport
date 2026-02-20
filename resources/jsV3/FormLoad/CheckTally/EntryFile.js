import { StartFunc as showWifi } from "./showWifi.js";
import { StartFunc as hideWifi } from "./hideWifi.js";

const jVarCommonTallyUrl = "http://localhost:9000/";

let StartFunc = async () => {
    let jVarLocalTallyStatus = await FromTally();

    if (jVarLocalTallyStatus) {
        showWifi();
        hideWifi();
        // jFLocalDisplayShowImageWifiId();

        return;
    };
};

let FromTally = async () => {
    let jVarLocalTallyUrl = jVarCommonTallyUrl;

    try {
        let jVarLocalResponse = await fetch(jVarLocalTallyUrl);

        if (jVarLocalResponse.status === 200) {
            return await true;
        };
    } catch (error) {
        return await false;
    };
};

export { StartFunc };