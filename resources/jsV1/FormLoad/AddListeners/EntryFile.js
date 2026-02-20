import { StartFunc as ShowAId } from "./ShowAId/EntryFile.js";
import { StartFunc as ApplyFilterId } from "./ApplyFilterId/EntryFile.js";
import { StartFunc as VoucherTypeButtonId } from "./VoucherTypeButtonId/EntryFile.js";
import { StartFunc as SelectReportId } from "./SelectReportId/EntryFile.js";

let StartFunc = () => {
    ShowAId();
    ApplyFilterId();
    VoucherTypeButtonId();
    SelectReportId();
};

export { StartFunc };