import type { IDocument } from "./document";
import { HistoryObservable } from "./foundation";
import { XY } from "./math";
export interface TextureOptions {
    document: IDocument;
}
export declare class Texture extends HistoryObservable {
    constructor(options: TextureOptions);
    get image(): string;
    set image(value: string);
    get wrapS(): number;
    set wrapS(value: number);
    get wrapT(): number;
    set wrapT(value: number);
    get rotation(): number;
    set rotation(value: number);
    get offset(): XY;
    set offset(value: XY);
    get repeat(): XY;
    set repeat(value: XY);
    get center(): XY;
    set center(value: XY);
}
export interface MaterialOptions {
    document: IDocument;
    name: string;
    color: number | string;
    id?: string;
}
export declare class Material extends HistoryObservable {
    vertexColors: boolean;
    transparent: boolean;
    readonly id: string;
    get name(): string;
    set name(value: string);
    get color(): number | string;
    set color(value: number | string);
    get opacity(): number;
    set opacity(value: number);
    get map(): Texture;
    set map(value: Texture);
    constructor(options: MaterialOptions);
    clone(): Material;
}
export interface PhongMaterialOptions extends MaterialOptions {}
export declare class PhongMaterial extends Material {
    constructor(options: PhongMaterialOptions);
    get specular(): number | string;
    set specular(value: number | string);
    get shininess(): number;
    set shininess(value: number);
    get emissive(): number | string;
    set emissive(value: number | string);
    get specularMap(): Texture;
    set specularMap(value: Texture);
    get bumpMap(): Texture;
    set bumpMap(value: Texture);
    get normalMap(): Texture;
    set normalMap(value: Texture);
    get emissiveMap(): Texture;
    set emissiveMap(value: Texture);
}
export interface PhysicalMaterialOptions extends MaterialOptions {}
export declare class PhysicalMaterial extends Material {
    constructor(options: PhysicalMaterialOptions);
    get metalness(): number;
    set metalness(value: number);
    get metalnessMap(): Texture;
    set metalnessMap(value: Texture);
    get roughness(): number;
    set roughness(value: number);
    get roughnessMap(): Texture;
    set roughnessMap(value: Texture);
    get emissive(): number | string;
    set emissive(value: number | string);
    get bumpMap(): Texture;
    set bumpMap(value: Texture);
    get normalMap(): Texture;
    set normalMap(value: Texture);
    get emissiveMap(): Texture;
    set emissiveMap(value: Texture);
}
