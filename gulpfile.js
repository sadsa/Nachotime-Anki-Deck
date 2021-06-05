/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in gulp/tasks. Any file in that folder gets automatically
 * required by the loop in ./gulp/index.js (required below).
 *
 * To add a new task, simply add a new task file to gulp/tasks.
 */

global.isProd = false;

const { series } = require("gulp");
const { buildTemplates, watchTemplates } = require("./gulp/tasks/templates");
const { copyStyles } = require("./gulp/tasks/styles");

function build(cb) {
  buildTemplates();
  cb();
}

exports.build = build;
exports.copyStyles = copyStyles;
exports.default = series(build, copyStyles, watchTemplates);
