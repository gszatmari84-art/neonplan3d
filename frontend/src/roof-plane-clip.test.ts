import { test } from "node:test";
import { strict as assert } from "node:assert";
import { clipRoofPlane } from "./roof-sections.ts";

test("clipRoofPlane clips a sloped roof along a diagonal", () => {
  const face: [number, number, number][] = [
    [0, 0, 4],
    [4, 0, 4],
    [4, 4, 8],
    [0, 4, 8],
  ];

  const result = clipRoofPlane(face, 1, 1, -4);

  assert.ok(result.length >= 3);

  for (const [u, v, y] of result) {
    assert.ok(u + v >= 4 - 1e-8);
    assert.ok(Math.abs(y - (4 + v)) < 1e-8);
  }

  assert.ok(result.some(([u, v, y]) =>
    Math.abs(u - 4) < 1e-8 &&
    Math.abs(v) < 1e-8 &&
    Math.abs(y - 4) < 1e-8
  ));
});
