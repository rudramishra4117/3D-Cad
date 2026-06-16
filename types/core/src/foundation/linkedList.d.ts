export declare class LinkedList<T> {
    private _head;
    get head(): T | undefined;
    private _tail;
    get tail(): T | undefined;
    private _size;
    get size(): number;
    push(...items: T[]): void;
    insert(index: number, item: T): void;
    remove(item: T): void;
    removeAt(index: number): void;
    private removeNode;
    private nodeAt;
    clear(): void;
    reverse(): void;
    [Symbol.iterator](): IterableIterator<T>;
}
