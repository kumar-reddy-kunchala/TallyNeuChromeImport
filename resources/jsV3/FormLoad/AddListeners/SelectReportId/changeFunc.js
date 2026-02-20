import { StartFunc as showControls } from "./showControls.js";
import { StartFunc as hideControls } from "./hideControls.js";

let StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;
    const jVarLocalSelectValue = jVarLocalCurrentTarget.value;

    showControls();

    switch (jVarLocalSelectValue) {
        case "ItemCategories":
        case "ItemGroups":
        case "ItemsWithGroups":
            hideControls();

            break;
        default:

            break;
    };
};

export { StartFunc };