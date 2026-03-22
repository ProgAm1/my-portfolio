import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".png"));

async function processImages() {
  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace(".png", ".webp"));
    
    console.log(`Converting ${file} to WebP...`);
    await sharp(input)
      .webp({ quality: 80, effort: 6 })
      .toFile(output);
    console.log(`✔ Finished ${file.replace(".png", ".webp")}`);
  }
}

processImages().catch(console.error);
