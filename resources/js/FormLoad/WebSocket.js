import { StartFunc as FromTally } from "./openCompanies/FromTally.js";
import { StartFunc as xml2json } from "../xml2json.js";
import { StartFunc as getFromKey } from "./AddListeners/ShowAId/Ledgers/getFromKey.js";

// let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS = "wss://join.keshavsoft.biz";

// if (location.protocol === "https:") {
//     jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
// }
// if (location.protocol === "http:") {
//     jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
// }

let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

const parseXml = (xml) => {
    var dom = null;
    if (window.DOMParser) {
        try {
            dom = (new DOMParser()).parseFromString(xml, "text/xml");
        }
        catch (e) { dom = null; }
    }
    else if (window.ActiveXObject) {
        try {
            dom = new ActiveXObject('Microsoft.XMLDOM');
            dom.async = false;
            if (!dom.loadXML(xml)) // parse error ..

                window.alert(dom.parseError.reason + dom.parseError.srcText);
        }
        catch (e) { dom = null; }
    }
    else
        alert("cannot parse xml string!");
    return dom;
};

let jFLocalEstablishWebSocket = () => {

    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = (event) => {
        webSocket.send("k1");
    };

    webSocket.onmessage = (event) => {
        if (event.data === "Hello") {
            FromTally().then(FromTally => {
                FromTally.text().then(TallyData => {
                    console.log("TallyData : ", TallyData);
                    let dom = parseXml(TallyData);
                    console.log("dom` : ", dom);
                    let jVarLocalJson = xml2json(dom, "");
                    console.log("jVarLocalJson : ", jVarLocalJson);

                    getFromKey().then(k1 => {
                        console.log("k1 : ", k1);
                    });
                });
            });
        };

        console.log("event : ", event.data);
    };;

    webSocket.onclose = function (e) {
    };
};


StartFunc();