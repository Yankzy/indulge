const fs = require("fs"); 
const path = require("path");

const scriptDir = "App";
const reactDir = "build";

//Copy react index.html to App
fs.copyFileSync(path.resolve(__dirname, reactDir, "index.html"), path.resolve(__dirname, scriptDir, "index.html"))