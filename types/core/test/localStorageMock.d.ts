export declare const mockLocalStorage: () => {
    getItem: (key: string) => string;
    setItem: (key: string, value: string) => void;
    removeItem: (key: string) => boolean;
    clear: () => void;
    readonly length: number;
    key: (index: number) => string;
};
