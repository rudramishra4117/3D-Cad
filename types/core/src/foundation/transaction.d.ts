import type { IDocument } from "../document";
import { type IHistoryRecord } from "./history";
export declare class Transaction {
    readonly document: IDocument;
    readonly name: string;
    private static readonly _transactionMap;
    constructor(document: IDocument, name: string);
    static add(document: IDocument, record: IHistoryRecord): void;
    static addToHistory(document: IDocument, record: IHistoryRecord): void;
    static execute(document: IDocument, name: string, action: () => void): void;
    static executeAsync(document: IDocument, name: string, action: () => Promise<void>): Promise<void>;
    start(name?: string): void;
    commit(): void;
    rollback(): void;
}
