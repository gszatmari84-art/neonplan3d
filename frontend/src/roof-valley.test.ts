import { test } from "node:test";
import { strict as assert } from "node:assert";
import {
  sectionGeometry,
  roofFaceIntersectionSegment,
  roofPlaneFromTriangle,
  roofFaceToWorld,
  roofFaceIntersection,
} from "./roof-sections.ts";
import type { RoofSection } from "./model.ts";

test("main roof and six-sided bay roof intersections", () => {
  const main = {
    id: "main", x0: -0.65, z0: -0.65, x1: 17.75, z1: 3.48,
    shape: "pent", axis: "x", flip: false,
    eave_a: 4.02, eave_b: 4.02,
    pitch_a: 40, pitch_b: 40, base: 6.2, overhang: 0,
  } as RoofSection;

  const bay = {
    id: "bay", x0: 3.85, z0: 3.38, x1: 11.15, z1: 10.25,
    shape: "hip", axis: "z", flip: false,
    eave_a: 4.02, eave_b: 6.02,
    pitch_a: 40, pitch_b: 40, base: 6.2, overhang: 0,
    points: [
      [3.85, 3.38], [3.85, 9.225], [5.582, 10.25],
      [9.418, 10.25], [11.15, 9.225], [11.15, 3.38],
    ],
    custom_ridge: [[7.5, 3.488], [7.5, 7.877]],
    custom_ridge_height: 7.49,
  } as RoofSection;

  const mainFaces = sectionGeometry(main, { a: 0, b: 0, u0: 0, u1: 0 }).faces.map(f => roofFaceToWorld(main, f));
  const bayFaces = sectionGeometry(bay, { a: 0, b: 0, u0: 0, u1: 0 }).faces.map(f => roofFaceToWorld(bay, f));

  console.log("MAIN FACES:", JSON.stringify(mainFaces));
  console.log("BAY FACES:", JSON.stringify(bayFaces));
  for (const [i, face] of bayFaces.entries()) {
    const [p, q, r] = face;
    const plane = roofPlaneFromTriangle(p, q, r);
    const deviations = plane
      ? face.map(([x, z, y]) =>
          Number((y - (plane.a * x + plane.b * z + plane.c)).toFixed(4))
        )
      : [];
    console.log("BAY PLANARITY:", i, JSON.stringify(deviations));
  }
  console.log("MAIN HEIGHT RANGE:",
    mainFaces.map(f => f.map(p => Number(p[2].toFixed(3))))
  );
  console.log("BAY HEIGHT RANGE:",
    bayFaces.map(f => f.map(p => Number(p[2].toFixed(3))))
  );
  console.log("MAIN XZ:",
    JSON.stringify(mainFaces.map(f => f.map(p => [p[0], p[1]])))
  );
  const intersections = mainFaces.flatMap((a, i) =>
    bayFaces.map((b, j) => ({
      mainFace: i,
      bayFace: j,
      line: roofFaceIntersection(a, b),
    }))
  ).filter(x => x.line !== null);

  console.log("Roof plane intersections:", JSON.stringify(intersections, null, 2));

  const segments = mainFaces.flatMap((a, i) =>
    bayFaces.flatMap((b, j) => {
      const segment = roofFaceIntersectionSegment(a, b);
      return segment ? [{ mainFace: i, bayFace: j, segment }] : [];
    })
  );

  console.log("VALLEY CANDIDATES:", JSON.stringify(segments, null, 2));
  assert.ok(segments.every(x =>
    x.segment.every(p => p.every(Number.isFinite))
  ));
  assert.ok(intersections.length > 0);
  for (const intersection of intersections) {
    assert.ok(intersection.line !== null);
    assert.ok(Number.isFinite(intersection.line!.a));
    assert.ok(Number.isFinite(intersection.line!.b));
    assert.ok(Number.isFinite(intersection.line!.c));
  }
});
