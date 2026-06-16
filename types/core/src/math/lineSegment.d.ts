import type { XYZ } from "./xyz";
export interface LineSegmentOptions {
    start: XYZ;
    end: XYZ;
}
export declare class LineSegment {
    readonly start: XYZ;
    readonly end: XYZ;
    constructor(options: LineSegmentOptions);
    distanceToPoint(point: XYZ): number;
    /**
     * Calculates the shortest distance between this line segment and another line segment.
     *
     * This method computes the closest points on both segments and returns the distance
     * between them along with the parametric coordinates of the closest points.
     *
     * Algorithm:
     * 1. Compute direction vectors u and v for both segments
     * 2. Calculate the discriminant D = |u|²|v|² - (u·v)² which determines if segments are parallel
     * 3. Handle parallel and non-parallel cases separately
     * 4. Clamp parameters to [0,1] to stay within segment bounds
     *
     * @param right - The other line segment to compute distance to
     * @returns Object containing:
     *   - pointOnThis: Closest point on this segment
     *   - pointOnRight: Closest point on the other segment
     *   - distance: Euclidean distance between the closest points
     *   - sc: Parametric coordinate of closest point on this segment (0=start, 1=end)
     *   - tc: Parametric coordinate of closest point on other segment (0=start, 1=end)
     */
    distanceTo(right: LineSegment): {
        pointOnThis: XYZ;
        pointOnRight: XYZ;
        distance: number;
        sc: number;
        tc: number;
    };
    private calculateParameters;
    private calculateParallelSegments;
    private calculateNonParallelSegments;
    private checkParameterConstraints;
}
