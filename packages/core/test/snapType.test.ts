import { type ObjectSnapType, ObjectSnapTypes, ObjectSnapTypeUtils } from "../src";

test("test SnapType", () => {
    const ts = (ObjectSnapTypes.endPoint | ObjectSnapTypes.midPoint) as ObjectSnapType;
    expect(ObjectSnapTypeUtils.hasType(ts, ObjectSnapTypes.center)).toBeFalsy();
    expect(ObjectSnapTypeUtils.hasType(ts, ObjectSnapTypes.midPoint)).toBeTruthy();
});
