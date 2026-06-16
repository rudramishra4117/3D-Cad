export interface IHighlightable {
    highlight(): void;
    unhighlight(): void;
}

export function isHighlightable(value: any): value is IHighlightable {
    return value && typeof value.highlight === "function" && typeof value.unhighlight === "function";
}
