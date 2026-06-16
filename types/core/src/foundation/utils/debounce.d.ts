export declare const debounce: <F extends (...args: any[]) => void, P extends Parameters<F>>(
    fun: F,
    ms: number,
) => (...args: P) => void;
