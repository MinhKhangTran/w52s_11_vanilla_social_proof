const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

// create a directory named build
fs.mkdir(path.join(__dirname, "build"), { recursive: true }, (err) => {
  if (err) return console.error(err);
  console.log(`Directory in ${__dirname} created successfully`);
});

//copy html over to this directory
fs.copyFile("./index.html", "./build/index.html", (err) => {
  if (err) return console.error(err);
  console.log("html copied");
});

//copy js over to this directory
fs.copyFile("./index.js", "./build/index.js", (err) => {
  if (err) return console.error(err);
  console.log("js copied");
});

// create a directory named public
fs.mkdir(
  path.join(__dirname, "build", "public"),
  { recursive: true },
  (err) => {
    if (err) return console.error(err);
    console.log(`Directory in ${__dirname} created successfully`);
  }
);

//copy css over to this directory
fs.copyFile("./styles/global.css", "./build/public/global.css", (err) => {
  if (err) return console.error(err);
  console.log("css copied");
});

// create a directory named images
fs.mkdir(
  path.join(__dirname, "build", "images"),
  { recursive: true },
  (err) => {
    if (err) return console.error(err);
    console.log(`Directory in ${__dirname} created successfully`);
  }
);

// copy images directory with files to build
const imagePathSrc = path.join(__dirname, "images");
const imagePathDest = path.join(__dirname, "build", "images");
fse
  .copy(imagePathSrc, imagePathDest)
  .then(() => {
    console.log("image folder copied");
  })
  .catch((err) => {
    console.error(err);
  });
