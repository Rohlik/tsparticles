import type { IInline } from "../Interfaces/IInline";
import { InlineArrangement, InlineArrangementAlt } from "../../Enums";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";

/**
 * @category Polygon Mask Plugin
 */
export class Inline implements IInline, IOptionLoader<IInline> {
    arrangement: InlineArrangement | keyof typeof InlineArrangement | InlineArrangementAlt;

    constructor() {
        this.arrangement = InlineArrangement.onePerPoint;
    }

    load(data?: RecursivePartial<IInline>): void {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    }
}
