import type { RibbonTabProfile } from "@dronecad/core";

export const DefaultRibbon: RibbonTabProfile[] = [
    {
        tabName: "ribbon.tab.model",
        groups: [
            {
                groupName: "ribbon.group.2d", // Sketches
                items: ["create.line", "create.circle", "create.arc", "create.polygon"],
                collapsedItems: [
                    "create.point",
                    "create.ellipse",
                    "create.bezier",
                    "create.arc2point",
                    "create.arc3point",
                    "create.regularPolygon",
                ],
            },
            {
                groupName: "ribbon.group.3d", // Primitives
                items: ["create.box", "create.cylinder", "create.sphere"],
                collapsedItems: ["create.cone", "create.pyramid", "create.rect"],
            },
            {
                groupName: "ribbon.group.draw", // Complex 3D / Props
                items: ["create.extrude", "create.loft", "create.sweep", "create.revol"],
                collapsedItems: ["create.pipe", "create.thickSolid", "create.offset", "create.section"],
            },
            {
                groupName: "ribbon.group.converter",
                items: [
                    ["convert.toWire", "convert.toFace", "convert.toSolid", "convert.toShell"],
                    "convert.curveProjection",
                ],
            },
            {
                groupName: "ribbon.group.boolean",
                items: [["boolean.cut", "boolean.join", "boolean.common"]],
            },
            {
                groupName: "ribbon.group.modify",
                items: [
                    ["modify.fillet", "modify.chamfer"],
                    ["modify.move", "modify.rotate", "modify.mirror"],
                    ["modify.trim", "modify.split", "modify.break"],
                ],
                collapsedItems: [
                    "modify.array",
                    "modify.sew",
                    "modify.explode",
                    "modify.simplifyShape",
                    "create.copyShape",
                    "create.group",
                    "create.folder",
                    "modify.deleteNode",
                    "modify.removeShapes",
                    "modify.removeFeature",
                ],
            },
            {
                groupName: "ribbon.group.measure",
                items: [["measure.length", "measure.angle", "measure.select"]],
            },
            {
                groupName: "ribbon.group.workingPlane",
                items: [
                    "workingPlane.toggleDynamic",
                    ["workingPlane.set", "workingPlane.alignToPlane", "workingPlane.fromSection"],
                ],
            },
            {
                groupName: "ribbon.group.importExport",
                items: ["file.import", "file.export"],
            },
        ],
    },
    {
        tabName: "ribbon.tab.manager",
        groups: [
            {
                groupName: "ribbon.group.act",
                items: ["act.alignCamera"],
            },
            {
                groupName: "ribbon.group.selection",
                items: ["modify.brushAdd", "modify.brushRemove", "modify.brushClear"],
            },
            {
                groupName: "ribbon.group.other",
                items: ["test.performance", "wechat.group"],
            },
        ],
    },
];
