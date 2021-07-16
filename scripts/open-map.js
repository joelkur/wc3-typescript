const { execFile } = require("child_process");
const path = require("path");
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("mapconfig.json").toString());
let buildMap = "";
let exeFile = "";

if (process.argv.length === 2) {
  buildMap = path.join(config.output.dir, config.output.filename);
  console.log(`Running map file ${buildMap}`);
  exeFile = config.executables.game;
} else if (process.argv[2] === "--we") {
  buildMap = config.map;
  console.log(`Opening world editor with map file ${buildMap}`);
  exeFile = config.executables.worldEditor;
}

const map = path.join(process.cwd(), buildMap);
execFile(exeFile, ["-loadfile", map, ...config.executables.launchArguments]);
