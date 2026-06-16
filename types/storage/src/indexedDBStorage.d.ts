import { type IStorage } from "@dronecad/core";
export declare class IndexedDBStorage implements IStorage {
    createDBIfNeeded(database: string, tables: string[]): Promise<void>;
    private openOrCreateDB;
    get(database: string, table: string, id: string): Promise<any>;
    put(database: string, table: string, id: string, value: any): Promise<boolean>;
    delete(database: string, table: string, id: string): Promise<boolean>;
    page(database: string, table: string, page: number): Promise<any[]>;
    private open;
    private static get;
    /**
     *
     * @param db IDBDatabase
     * @param storeName store name
     * @param page page, start with 0
     * @param count items per page
     * @returns
     */
    private static getPage;
    private static delete;
    private static put;
}
