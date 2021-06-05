const { src, watch, dest } = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const { config } = require("../config");

const buildTemplates = () => {
  const { pagesPath, templatesPath, destPath } = config.templates;
  return src(pagesPath + "**/*.+(html|njk)")
    .pipe(
      nunjucksRender({
        path: [templatesPath]
      })
    )
    .pipe(dest(destPath));
};

const watchTemplates = () => {
  const { pagesPath, templatesPath } = config.templates;
  const pages = pagesPath + "**/*.+(html|njk)";
  const templates = templatesPath + "**/*.+(html|njk)";
  console.log("Watching Nunjucks Templates files started...".green);
  return watch([pages, templates], buildTemplates);
};

exports.buildTemplates = buildTemplates;
exports.watchTemplates = watchTemplates;
