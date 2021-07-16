# Warcraft 3 typescript project

A template for mapmaking warcraft 3 maps in typescript. Requires [node](https://nodejs.org/en/) to be installed.

## Configuration

Configuration is done in `mapconfig.json` file. In order to work, map scripting language must be set to lua and the map must be saved as an directory.

``` json
{
  "map": "./maps/example.w3x",  // Path to the map file
  "output": {                   // Configuration for output file
    "dir": "./build",           // Path to directory where generated file is generated
    "filename": "output.w3x",   // Generated filename
    "minify": true              // Use luamin to minify output lua file?
  },
  "extract": {                  // optional, can be used to extract map variables to typescript
    "dir": "./src",             // Path to directory where map variables will be declared
    "filename": "map.d.ts",     // Filename for typescript declarations (must end with .d.ts)
    "exportAsObject": {         // optional, can be used to generate typescript file with objects containing map variables
      "dir": "./src",           // Path to directory where generated file will be
      "filename": "mapdata.ts"  // Filename for typescript variables
    }
  },
  "executables": {              // Game executables, used to open map from terminal
    "game": "C:\\Program Files\\Warcraft III\\_retail_\\x86_64\\Warcraft III.exe", // Full path to Warcraft III.exe  
    "worldEditor": "C:\\Program Files\\Warcraft III\\_retail_\\x86_64\\World Editor.exe", // Full path to World Editor.exe
    "launchArguments": [ // Arguments to open the game with
      "-launch",
      "-windowmode",
      "windowed"
    ]
  }
}
```

## Scripts

`npm run build` generates map containing typescript code converted to lua added to the maps default lua file.

`npm run open` opens the map in game.

`npm run open:we` opens the map in world editor.

`npm run extract` extracts all found variables from the map and converts them to typescript.