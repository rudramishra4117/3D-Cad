# NIELIT Drone CAD

NIELIT Drone CAD is a modern, browser-based 3D Computer-Aided Design (CAD) application. It runs locally using WebAssembly and WebGL, allowing you to design and edit 3D models right in your browser without the need for cloud servers or heavy desktop installations.

## Features

- **Modeling Tools**: Create basic shapes (boxes, cylinders, cones, spheres).
- **Advanced Operations**: Boolean operations (union, difference, intersection), extrusion, sweeping, lofting, and offset surfaces.
- **Snapping & Tracking**: Precisely snap to geometric features (points, edges, faces, midpoints) with dynamic workplanes.
- **Editing Tools**: Chamfer, fillet, trim, break, split.
- **Transformations**: Translate, rotate, scale, and mirror geometry.
- **Export Formats**: Standardized support for CAD formats including STEP and STL.
- **Customizable UI**: Choose between Light/Dark mode and swap between Solidworks/Blender 3D navigation schemes.

## Getting Started

To run the application locally, you'll need [Node.js](https://nodejs.org/) installed.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to `http://localhost:8080` (or the port provided in your terminal).

### Build for Production

To build an optimized bundle for production deployment:

```bash
npm run build
```

The output will be placed in the `dist` directory.

## Controls

The 3D Viewport allows configuring controls through the "Settings" menu on the top right. 

**Solidworks Mode (Default):**
- **Rotate:** Middle Mouse Button
- **Pan:** Shift + Middle Mouse Button

**Blender Mode:**
- **Rotate:** Middle Mouse Button
- **Pan:** Shift + Middle Mouse Button (zoom behavior differs)

## Architecture

This project leverages:
- **TypeScript** for robust typing.
- **Three.js** for rendering WebGL graphics.
- **OpenCascade (OCCT) via WebAssembly** for powerful mathematical geometry processing.
- **Rspack** for lightning-fast bundling.
