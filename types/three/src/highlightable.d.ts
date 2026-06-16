export interface IHighlightable {
    highlight(): void;
    unhighlight(): void;
}
export declare function isHighlightable(value: any): value is IHighlightable;
