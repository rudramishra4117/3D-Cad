import type { XYZ } from "@dronecad/core";
/**
 * Compute arc geometry from 3 points on a circle.
 * A: arc start, B: point on arc path, C: arc end.
 * Returns the center, normal, start point, and signed angle (degrees) for ArcNode.
 */
export declare function computeArcFromPoints(
    A: XYZ,
    B: XYZ,
    C: XYZ,
):
    | {
          center: XYZ;
          normal: XYZ;
          start: XYZ;
          D: number;
          angle: number;
      }
    | undefined;
/**
 * Compute circle geometry from 3 points.
 * A: arc start, B: point on arc path, C: arc end.
 */
export declare function computeCircleFromPoints(
    A: XYZ,
    B: XYZ,
    C: XYZ,
):
    | {
          center: XYZ;
          D: number;
          normal: XYZ;
          xvec: XYZ;
          yvec: XYZ;
      }
    | undefined;
