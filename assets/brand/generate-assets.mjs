import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const brandDir = path.dirname(fileURLToPath(import.meta.url));
const masterPath = path.join(brandDir, "promptpro-icon.svg");
const master = await fs.readFile(masterPath);

const assets = [
  ["extension/icon-16.png", 16],
  ["extension/icon-32.png", 32],
  ["extension/icon-48.png", 48],
  ["extension/icon-128.png", 128],
  ["website/icon-32.png", 32],
  ["website/icon-48.png", 48],
  ["website/icon-128.png", 128],
  ["website/icon-256.png", 256],
  ["website/icon-512.png", 512],
  ["promptpro-logo-source.png", 512],
];

for (const [relativePath, size] of assets) {
  const outputPath = path.join(brandDir, relativePath);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(master).resize(size, size, { fit: "fill" }).png().toFile(outputPath);
}

console.log(`Generated ${assets.length} assets from ${path.relative(process.cwd(), masterPath)}`);
