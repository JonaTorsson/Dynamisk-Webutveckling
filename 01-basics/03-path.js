/**
 * Path
 */

console.log("Abs path dir:", __dirname);
console.log("Abs path file:", __filename);

const path = require('path');

const file_wo_path = path.basename(__filename)      // kommer visa 03-path.js
console.log("Filename without path:", file_wo_path);

const file_ext = path.extname(__filename);          // kommer visa .js
console.log("My extensaion is:", file_ext);

const parts = path.parse(__filename);               // kommer dela upp mapparna/filerna separat
console.log("All my parts:", parts);