import { type Material, Matrix4, PhongMaterial, PhysicalMaterial, type Texture, XYZ } from "@dronecad/core";
import {
    Box3,
    type Camera,
    type Object3D,
    type OrthographicCamera,
    type PerspectiveCamera,
    Color as ThreeColor,
    MeshLambertMaterial as ThreeLambertMaterial,
    Matrix4 as ThreeMatrix4,
    MeshPhongMaterial as ThreePhoneMaterial,
    MeshPhysicalMaterial as ThreePhysicalMaterial,
    Vector3,
    type Vector3Like,
} from "three";
export declare class ThreeHelper {
    static toMatrix(matrix: ThreeMatrix4): Matrix4;
    static fromMatrix(matrix: Matrix4): ThreeMatrix4;
    static toXYZ(vector: Vector3): XYZ;
    static fromXYZ(vector: Vector3Like): Vector3;
    static isPerspectiveCamera(camera: Camera): camera is PerspectiveCamera;
    static isOrthographicCamera(camera: Camera): camera is OrthographicCamera;
    static fromColor(color: number | string): ThreeColor;
    static toColor(color: ThreeColor): number;
    static findGroupIndex(
        groups: {
            start: number;
            count: number;
        }[],
        subIndex: number,
    ): number | undefined;
    static transformVector(matrix: ThreeMatrix4, vector: Vector3): Vector3;
    static getBoundingBox(object: Object3D):
        | {
              min: XYZ;
              max: XYZ;
          }
        | undefined;
    static boxCorners(box: Box3): Vector3[];
    static loadTexture(
        item: Texture | undefined,
    ): import("three").Texture<HTMLImageElement, import("three").TextureEventMap> | null;
    static parsePhysicalMaterial(material: PhysicalMaterial): ThreePhysicalMaterial;
    static parsePhongMaterial(material: PhongMaterial): ThreePhoneMaterial;
    static parseBasicMaterial(material: Material): ThreeLambertMaterial;
    static parseToThreeMaterial(
        material: Material,
    ): ThreePhysicalMaterial | ThreePhoneMaterial | ThreeLambertMaterial;
}
