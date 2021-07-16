const fs = require("fs");
const path = require("path");

const types = {
  cam: "camerasetup",
  dest: "destructable",
  item: "item",
  rct: "rect",
  snd: "sound",
  trg: "trigger",
  unit: "unit",
};

const variables = {};

const config = JSON.parse(fs.readFileSync("mapconfig.json").toString());
console.log(`Extracting map data from ${config.map}`);

const lua = fs.readFileSync(`${config.map}/war3map.lua`).toString();
const matches = lua.match(/gg_([a-z])+(_([a-z|0-9])+)*/gi);
matches.forEach((val) => {
  if (!(val in variables)) {
    variables[val] = types[val.split("_")[1]];
  }
});

let output = "";
Object.entries(variables).forEach(
  ([variable, type]) => (output += `declare const ${variable}: ${type}\n`)
);

const extractDTsFile = path.join(
  process.cwd(),
  config.extract.dir,
  config.extract.filename
);
fs.writeFileSync(extractDTsFile, output);
console.log(`Generated ${extractDTsFile}`);

let objOutput = "";
const objectKeys = {
  camerasetup: "cameras",
  destructable: "destructables",
  item: "items",
  rect: "regions",
  sound: "sounds",
  trigger: "triggers",
  unit: "units",
};
if (config.extract.exportAsObject) {
  const obj = {};
  Object.entries(variables).forEach(([variable, type]) => {
    if (!(objectKeys[type] in obj)) obj[objectKeys[type]] = {};
    obj[objectKeys[type]][variable.replace(/gg_([a-z])+_/gi, "")] = variable;
    obj[objectKeys[type]]["type"] = type;
  });
  const capitalize = (s) =>
    s.substr(0, 1).toUpperCase() + s.substr(1, s.length);
  Object.entries(obj).forEach(([key, varobj]) => {
    let out = `interface ${capitalize(key)} {\n${Object.entries(varobj)
      .filter(([k, v]) => k !== "type")
      .map(([k, v]) => `  ${k}: ${varobj.type}`)
      .join("\n")}\n}\n\n`;
    out += `export const ${key}: ${capitalize(key)} = {\n`;
    out += Object.entries(varobj)
      .filter(([k, v]) => k !== "type")
      .map(([k, v]) => `  ${k}: ${v}`)
      .join(",\n");
    out += "\n}\n\n";
    objOutput += out;
  });
  const objectFile = path.join(
    process.cwd(),
    config.extract.exportAsObject.dir,
    config.extract.exportAsObject.filename
  );
  fs.writeFileSync(objectFile, objOutput);
  console.log(`Generated ${objectFile}`);
}
