import { StartFunc as ShowFilters } from "./ShowFilters/EntryFile.js";
import { StartFunc as StartFuncShowInTable } from "../ShowInTable/EntryFile.js";

const StartFunc = () => {
    // jFLocalInitialize();
    StartFuncShowInTable({ inDataToShow: jVarGlobalPresentViewData })
    ShowFilters();
};

export { StartFunc };
