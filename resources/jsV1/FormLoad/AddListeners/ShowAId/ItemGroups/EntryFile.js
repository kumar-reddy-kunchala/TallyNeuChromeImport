import { StartFunc as xml2json } from "../../../../xml2json.js";
import { StartFunc as FromTally } from "./FromTally/EntryFile.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalTallyStatus = await FromTally();

    if (jVarLocalTallyStatus.status === 200) {
        let jVarLocalResponseText = await jVarLocalTallyStatus.text();

        const jVarLocalReplaced = jVarLocalResponseText.replaceAll("&#4;", "");

        let dom = parseXml(jVarLocalReplaced);
        let jVarLocalJson = xml2json(dom, "");

        BuildBsTable({ inData: JSON.parse(jVarLocalJson).ENVELOPE.ITEMGROUPS });
    };
};

function parseXml(xml) {
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

export { StartFunc };