const fs = require("fs");
const path = require("path");
const luamin = require("luamin");

const config = JSON.parse(fs.readFileSync("mapconfig.json").toString());
const tsconfig = JSON.parse(fs.readFileSync("tsconfig.json").toString());
const fileContent = (file) => fs.readFileSync(file).toString();

const mapLuaFile = (mapStr) => path.join(mapStr, "war3map.lua");

const mapFile = path.join(process.cwd(), config.map);
const luaBundle = path.join(process.cwd(), tsconfig.tstl.luaBundle);

console.log(`Generating map file from ${mapFile} and ${luaBundle}`);

let content = fileContent(mapLuaFile(mapFile)) + fileContent(luaBundle);
if (config.output.minify) content = luamin.minify(content);

function copyDirectory(rootDir, outputDir) {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  fs.readdirSync(rootDir).forEach((file) => {
    if (fs.lstatSync(path.join(rootDir, file)).isDirectory())
      copyDirectory(path.join(rootDir, file), path.join(outputDir, file));
    else fs.copyFileSync(path.join(rootDir, file), path.join(outputDir, file));
  });
}

const outputMapFile = path.join(
  process.cwd(),
  config.output.dir,
  config.output.filename
);

copyDirectory(mapFile, outputMapFile);
fs.writeFileSync(mapLuaFile(outputMapFile), content);

console.log(`Generated map file at ${outputMapFile}`);
