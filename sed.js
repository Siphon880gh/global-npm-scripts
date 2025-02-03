const fs = require('fs');
const path = require('path');

console.log("Manual-Check:")
console.log("Make sure you're running this like so:");
console.log("npm run sed --prefix ~/npm/ -- `pwd` <STRING_1> <STRING_2>")

const args = process.argv.slice(2); // node sed.js ${pwd} <STRING_1> <STRING_2>

console.log(process.argv);
// process.exit();

if(args.length < 3) {
  console.error("Usage: npm run replace -- `pwd`<STRING_1> <STRING_2>");
  process.exit(1);
}

const STRING_1 = args[1];
const STRING_2 = args[2];

if (!STRING_1 || !STRING_2) {
  console.error("Usage: npm run replace -- <STRING_1> <STRING_2>");
  console.error("The -- forwards arguments to the script");
  process.exit(1);
}

const ignoredDirs = ['node_modules', '.git']; // Skip these directories
// const rootDir = process.cwd(); // Use current working directory
const rootDir = args[0]; // Use current working directory



const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!ignoredDirs.includes(file)) { // Skip ignored directories
        walkDir(fullPath, callback);
      }
    } else if (fullPath.endsWith('.php') || fullPath.endsWith('.html')) {
      callback(fullPath);
    }
  });
};

walkDir(rootDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(new RegExp(STRING_1, 'g'), STRING_2);
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
});

console.log(`Replaced "${STRING_1}" with "${STRING_2}" in all .php and .html files in ${rootDir}.`);
