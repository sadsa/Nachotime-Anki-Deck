const { src, dest } = require("gulp");
const { config } = require("../config");

function copyStyles(cb) {
  const { basePath, destPath } = config.styles;
  console.log("Copying styles into static site...".green);
  src(`${basePath}*.css`).pipe(dest(destPath));
  cb();
}

exports.copyStyles = copyStyles;
