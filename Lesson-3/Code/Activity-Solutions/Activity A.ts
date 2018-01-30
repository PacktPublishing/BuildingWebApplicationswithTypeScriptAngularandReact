$ mkdir note-app && cd note-app && npm init -y
$ npm install phaethon typescript gulp gulp-typescript gulp-sourcemaps @types/node --save

$ cat tsconfig.json
{ 
  "compilerOptions": { 
    "target": "es5", 
    "module": "commonjs", 
    "moduleResolution": "node",
    "lib": ["es2015", "dom"],
    "types": ["node"]
  } 
} 

$ cat gulpfile.js
var gulp = require("gulp");
var typescript = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var tsProject = typescript.createProject("tsconfig.json");

gulp.task("default", function() {
  return gulp
    .src(["lib/**/*.ts"])
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

$ cat lib/server.ts
import { Server, ServerResponse } from "phaethon";
const server = new Server();
server.listener = request => new ServerResponse("Hello");
server.listenHttp(8800);

$ .\node_modules\.bin\gulp
[11:52:17] Using gulpfile ~\git\gisenberg\phaethon-demo\gulpfile.js
[11:52:17] Starting 'default'...
[11:52:18] Finished 'default' after 1.18 s

$ cat dist/server.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phaethon_1 = require("phaethon");
var server = new phaethon_1.Server();
server.listener = function (request) { return new phaethon_1.ServerResponse("Hello"); };
server.listenHttp(8800);

//# sourceMappingURL=server.js.map

$ node dist/server.js
$ curl http://localhost:8800
Hello
