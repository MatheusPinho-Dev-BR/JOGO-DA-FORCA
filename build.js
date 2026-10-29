"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");

const publicDirectory = path.join(__dirname, "public");
const outputDirectory = path.join(__dirname, "dist");
const publicFiles = ["index.html", "script.js", "style.css"];

async function build() {
  await fs.rm(outputDirectory, { recursive: true, force: true });
  await fs.mkdir(outputDirectory, { recursive: true });

  for (const file of publicFiles) {
    const source = path.join(publicDirectory, file);
    const destination = path.join(outputDirectory, file);
    await fs.access(source);
    await fs.copyFile(source, destination);
  }

  console.log(`Build concluído: ${publicFiles.join(", ")} -> dist/`);
}

build().catch((error) => {
  console.error("Não foi possível preparar os ficheiros para deploy:", error);
  process.exitCode = 1;
});
