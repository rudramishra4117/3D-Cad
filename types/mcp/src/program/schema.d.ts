import { z } from "zod";
export declare const Vec3: z.ZodObject<
    {
        x: z.ZodNumber;
        y: z.ZodNumber;
        z: z.ZodNumber;
    },
    z.core.$strip
>;
export declare const ShapeRef: z.ZodObject<
    {
        ref: z.ZodString;
    },
    z.core.$strip
>;
export declare const OpSchema: z.ZodDiscriminatedUnion<
    [
        z.ZodObject<
            {
                op: z.ZodLiteral<"box">;
                id: z.ZodString;
                dx: z.ZodNumber;
                dy: z.ZodNumber;
                dz: z.ZodNumber;
                at: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"sphere">;
                id: z.ZodString;
                radius: z.ZodNumber;
                at: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"cylinder">;
                id: z.ZodString;
                radius: z.ZodNumber;
                height: z.ZodNumber;
                at: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                axis: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"cone">;
                id: z.ZodString;
                radius: z.ZodNumber;
                height: z.ZodNumber;
                at: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                axis: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"pyramid">;
                id: z.ZodString;
                dx: z.ZodNumber;
                dy: z.ZodNumber;
                dz: z.ZodNumber;
                at: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"rect">;
                id: z.ZodString;
                dx: z.ZodNumber;
                dy: z.ZodNumber;
                at: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"circle">;
                id: z.ZodString;
                radius: z.ZodNumber;
                at: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"polygon">;
                id: z.ZodString;
                points: z.ZodArray<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"line">;
                id: z.ZodString;
                start: z.ZodObject<
                    {
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                        z: z.ZodNumber;
                    },
                    z.core.$strip
                >;
                end: z.ZodObject<
                    {
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                        z: z.ZodNumber;
                    },
                    z.core.$strip
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"arc">;
                id: z.ZodString;
                center: z.ZodObject<
                    {
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                        z: z.ZodNumber;
                    },
                    z.core.$strip
                >;
                start: z.ZodObject<
                    {
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                        z: z.ZodNumber;
                    },
                    z.core.$strip
                >;
                angle: z.ZodNumber;
                normal: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"polyline">;
                id: z.ZodString;
                points: z.ZodArray<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                closed: z.ZodDefault<z.ZodBoolean>;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"extrude">;
                id: z.ZodString;
                section: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                length: z.ZodNumber;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"revolve">;
                id: z.ZodString;
                profile: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                angle: z.ZodDefault<z.ZodNumber>;
                axisOrigin: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                axisDirection: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"boolean">;
                id: z.ZodString;
                kind: z.ZodEnum<{
                    cut: "cut";
                    fuse: "fuse";
                    common: "common";
                }>;
                a: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                b: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"sweep">;
                id: z.ZodString;
                profile: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                path: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                round: z.ZodDefault<z.ZodBoolean>;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"pipe">;
                id: z.ZodString;
                path: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                radius: z.ZodNumber;
                thickness: z.ZodOptional<z.ZodNumber>;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"move">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                dx: z.ZodDefault<z.ZodNumber>;
                dy: z.ZodDefault<z.ZodNumber>;
                dz: z.ZodDefault<z.ZodNumber>;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"rotate">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                angle: z.ZodNumber;
                axis: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                center: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"mirror">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                planeNormal: z.ZodObject<
                    {
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                        z: z.ZodNumber;
                    },
                    z.core.$strip
                >;
                planeOrigin: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"array">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                mode: z.ZodDefault<
                    z.ZodEnum<{
                        linear: "linear";
                        circular: "circular";
                    }>
                >;
                count: z.ZodDefault<z.ZodNumber>;
                spacing: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                center: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                axis: z.ZodOptional<
                    z.ZodObject<
                        {
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            z: z.ZodNumber;
                        },
                        z.core.$strip
                    >
                >;
                angle: z.ZodDefault<z.ZodNumber>;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"loft">;
                id: z.ZodString;
                sections: z.ZodArray<
                    z.ZodObject<
                        {
                            ref: z.ZodString;
                        },
                        z.core.$strip
                    >
                >;
                isSolid: z.ZodDefault<z.ZodBoolean>;
                isRuled: z.ZodDefault<z.ZodBoolean>;
                continuity: z.ZodDefault<
                    z.ZodEnum<{
                        c0: "c0";
                        g1: "g1";
                        c1: "c1";
                        g2: "g2";
                        c2: "c2";
                        c3: "c3";
                        cn: "cn";
                    }>
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"to_face">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"shell">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                thickness: z.ZodNumber;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"fillet">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                radius: z.ZodNumber;
            },
            z.core.$strip
        >,
        z.ZodObject<
            {
                op: z.ZodLiteral<"chamfer">;
                id: z.ZodString;
                input: z.ZodObject<
                    {
                        ref: z.ZodString;
                    },
                    z.core.$strip
                >;
                distance: z.ZodNumber;
            },
            z.core.$strip
        >,
    ],
    "op"
>;
export declare const ProgramSchema: z.ZodObject<
    {
        ops: z.ZodArray<
            z.ZodDiscriminatedUnion<
                [
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"box">;
                            id: z.ZodString;
                            dx: z.ZodNumber;
                            dy: z.ZodNumber;
                            dz: z.ZodNumber;
                            at: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"sphere">;
                            id: z.ZodString;
                            radius: z.ZodNumber;
                            at: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"cylinder">;
                            id: z.ZodString;
                            radius: z.ZodNumber;
                            height: z.ZodNumber;
                            at: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            axis: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"cone">;
                            id: z.ZodString;
                            radius: z.ZodNumber;
                            height: z.ZodNumber;
                            at: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            axis: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"pyramid">;
                            id: z.ZodString;
                            dx: z.ZodNumber;
                            dy: z.ZodNumber;
                            dz: z.ZodNumber;
                            at: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"rect">;
                            id: z.ZodString;
                            dx: z.ZodNumber;
                            dy: z.ZodNumber;
                            at: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"circle">;
                            id: z.ZodString;
                            radius: z.ZodNumber;
                            at: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"polygon">;
                            id: z.ZodString;
                            points: z.ZodArray<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"line">;
                            id: z.ZodString;
                            start: z.ZodObject<
                                {
                                    x: z.ZodNumber;
                                    y: z.ZodNumber;
                                    z: z.ZodNumber;
                                },
                                z.core.$strip
                            >;
                            end: z.ZodObject<
                                {
                                    x: z.ZodNumber;
                                    y: z.ZodNumber;
                                    z: z.ZodNumber;
                                },
                                z.core.$strip
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"arc">;
                            id: z.ZodString;
                            center: z.ZodObject<
                                {
                                    x: z.ZodNumber;
                                    y: z.ZodNumber;
                                    z: z.ZodNumber;
                                },
                                z.core.$strip
                            >;
                            start: z.ZodObject<
                                {
                                    x: z.ZodNumber;
                                    y: z.ZodNumber;
                                    z: z.ZodNumber;
                                },
                                z.core.$strip
                            >;
                            angle: z.ZodNumber;
                            normal: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"polyline">;
                            id: z.ZodString;
                            points: z.ZodArray<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            closed: z.ZodDefault<z.ZodBoolean>;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"extrude">;
                            id: z.ZodString;
                            section: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            length: z.ZodNumber;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"revolve">;
                            id: z.ZodString;
                            profile: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            angle: z.ZodDefault<z.ZodNumber>;
                            axisOrigin: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            axisDirection: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"boolean">;
                            id: z.ZodString;
                            kind: z.ZodEnum<{
                                cut: "cut";
                                fuse: "fuse";
                                common: "common";
                            }>;
                            a: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            b: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"sweep">;
                            id: z.ZodString;
                            profile: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            path: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            round: z.ZodDefault<z.ZodBoolean>;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"pipe">;
                            id: z.ZodString;
                            path: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            radius: z.ZodNumber;
                            thickness: z.ZodOptional<z.ZodNumber>;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"move">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            dx: z.ZodDefault<z.ZodNumber>;
                            dy: z.ZodDefault<z.ZodNumber>;
                            dz: z.ZodDefault<z.ZodNumber>;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"rotate">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            angle: z.ZodNumber;
                            axis: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            center: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"mirror">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            planeNormal: z.ZodObject<
                                {
                                    x: z.ZodNumber;
                                    y: z.ZodNumber;
                                    z: z.ZodNumber;
                                },
                                z.core.$strip
                            >;
                            planeOrigin: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"array">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            mode: z.ZodDefault<
                                z.ZodEnum<{
                                    linear: "linear";
                                    circular: "circular";
                                }>
                            >;
                            count: z.ZodDefault<z.ZodNumber>;
                            spacing: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            center: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            axis: z.ZodOptional<
                                z.ZodObject<
                                    {
                                        x: z.ZodNumber;
                                        y: z.ZodNumber;
                                        z: z.ZodNumber;
                                    },
                                    z.core.$strip
                                >
                            >;
                            angle: z.ZodDefault<z.ZodNumber>;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"loft">;
                            id: z.ZodString;
                            sections: z.ZodArray<
                                z.ZodObject<
                                    {
                                        ref: z.ZodString;
                                    },
                                    z.core.$strip
                                >
                            >;
                            isSolid: z.ZodDefault<z.ZodBoolean>;
                            isRuled: z.ZodDefault<z.ZodBoolean>;
                            continuity: z.ZodDefault<
                                z.ZodEnum<{
                                    c0: "c0";
                                    g1: "g1";
                                    c1: "c1";
                                    g2: "g2";
                                    c2: "c2";
                                    c3: "c3";
                                    cn: "cn";
                                }>
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"to_face">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"shell">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            thickness: z.ZodNumber;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"fillet">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            radius: z.ZodNumber;
                        },
                        z.core.$strip
                    >,
                    z.ZodObject<
                        {
                            op: z.ZodLiteral<"chamfer">;
                            id: z.ZodString;
                            input: z.ZodObject<
                                {
                                    ref: z.ZodString;
                                },
                                z.core.$strip
                            >;
                            distance: z.ZodNumber;
                        },
                        z.core.$strip
                    >,
                ],
                "op"
            >
        >;
    },
    z.core.$strip
>;
export type Op = z.infer<typeof OpSchema>;
export type Program = z.infer<typeof ProgramSchema>;
export type Vec3 = z.infer<typeof Vec3>;
