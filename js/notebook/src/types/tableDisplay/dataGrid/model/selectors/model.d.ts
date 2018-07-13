import IDataModelState from "../../interface/IDataGridModelState";
import IHihglighterState from "../../interface/IHighlighterState";
export declare const selectModel: (state: any) => IDataModelState;
export declare const selectValues: (state: any) => any;
export declare const selectHasIndex: (state: any) => boolean;
export declare const selectTooltips: (state: any) => string[][];
export declare const selectCellHighlighters: (state: any) => IHihglighterState[];
export declare const selectHeadersVertical: (state: any) => boolean;
export declare const selectHeaderFontSize: (state: any) => number;
export declare const selectDataFontSize: (state: any) => number;
export declare const selectFontColor: (state: any) => string[];
export declare const selectRawColumnNames: (state: any) => string[];
export declare const selectAlignmentForColumn: (state: any, dataType: any, columnName: any) => any;
export declare const selectAlignmentForType: (state: any, dataType: any) => any;
export declare const selectAlignmentByType: (state: any, dataType: any) => import("@phosphor/widgets/lib/layout").Layout.HorizontalAlignment;
export declare const selectHasDoubleClickAction: (state: any) => boolean;
export declare const selectDoubleClickTag: (state: any) => string;
export declare const selectContextMenuItems: (state: any) => string[];
export declare const selectContextMenuTags: (state: any) => {};
export declare const selectStringFormatForType: (state: any) => {};
export declare const selectStringFormatForColumn: (state: any) => {};
export declare const selectStringFormatForTimes: (state: any) => string;
export declare const selectFormatForTimes: (state: any) => any;
export declare const selectTimeStrings: (state: any) => any;
export declare const selectRendererForColumn: (state: any, column: any) => any;
export declare const selectRendererForType: (state: any, column: any) => any;
export declare const selectTimeZone: (state: any) => string;
export declare const selectColumnTypes: (state: any) => string[];
export declare const selectColumnOrder: (state: any) => string[];
export declare const selectColumnsVisible: (state: any) => {};
export declare const selectColumnsFrozen: (state: any) => {};
