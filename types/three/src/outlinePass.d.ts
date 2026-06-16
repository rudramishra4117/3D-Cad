export class OutlinePass extends Pass {
    constructor(scene: any, camera: any);
    renderScene: any;
    renderCamera: any;
    visibleEdgeColor: Color;
    hiddenEdgeColor: Color;
    usePatternTexture: boolean;
    edgeStrength: number;
    pulsePeriod: number;
    _visibilityCache: Map<any, any>;
    resolution: Vector2;
    maskBufferMaterial: MeshBasicMaterial;
    renderTargetMaskBuffer: WebGLRenderTarget<
        import("three").Texture<unknown, import("three").TextureEventMap>
    >;
    depthMaterial: MeshDepthMaterial;
    prepareMaskMaterial: ShaderMaterial;
    renderTargetDepthBuffer: WebGLRenderTarget<
        import("three").Texture<unknown, import("three").TextureEventMap>
    >;
    edgeDetectionMaterial: ShaderMaterial;
    renderTargetEdgeBuffer1: WebGLRenderTarget<
        import("three").Texture<unknown, import("three").TextureEventMap>
    >;
    overlayMaterial: ShaderMaterial;
    copyUniforms: {
        tDiffuse: import("three").IUniform;
        opacity: import("three").IUniform;
    };
    materialCopy: ShaderMaterial;
    _oldClearColor: Color;
    oldClearAlpha: number;
    fsQuad: FullScreenQuad;
    tempPulseColor1: Color;
    tempPulseColor2: Color;
    textureMatrix: Matrix4;
    setSize(width: any, height: any): void;
    updateTextureMatrix(): void;
    render(renderer: any, writeBuffer: any, readBuffer: any, deltaTime: any, maskActive: any): void;
    getPrepareMaskMaterial(): ShaderMaterial;
    getEdgeDetectionMaterial(): ShaderMaterial;
    getOverlayMaterial(): ShaderMaterial;
}

import {
    Color,
    Matrix4,
    MeshBasicMaterial,
    MeshDepthMaterial,
    ShaderMaterial,
    Vector2,
    WebGLRenderTarget,
} from "three";
import { FullScreenQuad, Pass } from "three/examples/jsm/postprocessing/Pass.js";
