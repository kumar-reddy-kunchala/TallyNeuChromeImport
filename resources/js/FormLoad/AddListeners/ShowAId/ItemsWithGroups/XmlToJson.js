import ColumnsJson from './columns.json' with {type: 'json'};

const CommonParentTagName = "COMPANIES";

const StartFunc = ({ inXmlFromTally }) => {
    let jVarLocalItemsXml = inXmlFromTally;
    let ReturnArray = [];

    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(jVarLocalItemsXml.replaceAll("&#4;", ""), "application/xml");

        let checkboxes = doc.documentElement.querySelectorAll(CommonParentTagName);

        checkboxes.forEach(userItem => {
            let LoopInsideObject = {};

            let k1 = jFLocalLoopColumns({ inTemplateControl: userItem });

            LoopInsideObject = { ...k1 };

            ReturnArray.push(LoopInsideObject);
        });

    } catch (error) {
        console.log("error : ", error);
    };
    return ReturnArray;
};

let jFLocalLoopColumns = ({ inTemplateControl }) => {
    let LoopReturnObject = {};
    let LocalTemplateControl = inTemplateControl;

    ColumnsJson.forEach(element => {
        let LoopInsideObject = jFLocalReturnValue({
            inKeyName: element.tagName,
            inValueName: element.field, inTemplateControl: LocalTemplateControl
        });

        LoopReturnObject = {
            ...LoopReturnObject,
            ...LoopInsideObject
        };
    });

    return LoopReturnObject;
};

let jFLocalReturnValue = ({ inKeyName, inValueName, inTemplateControl }) => {
    let LocalTagName = inKeyName;
    let LocalTemplateControl = inTemplateControl;

    let jVarLocalFindTags = LocalTemplateControl.querySelectorAll(LocalTagName);
    let LoopReturnObject = {};

    if (jVarLocalFindTags.length === 1) {
        LoopReturnObject[inValueName] = jVarLocalFindTags[0].innerHTML;
    };

    if (jVarLocalFindTags.length > 1) {
        LoopReturnObject[inValueName] = [];

        jVarLocalFindTags.forEach(element => {
            LoopReturnObject[inValueName].push(element.innerHTML);
        });
    };

    return LoopReturnObject;
};

export { StartFunc };