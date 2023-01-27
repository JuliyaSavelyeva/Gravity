import { app } from '../../gulpfile.js';
import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import VersionNumber from 'gulp-version-number';

export const html = () =>
  app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
//     .pipe(app.plugins.replace(/@@webRoot\//g, 'img/'))
    .pipe(webpHtmlNosvg())
    .pipe(versionNumber({
      value: '%DT%',
      append: {
        key: '-v',
        cover: 0,
        to: ['css', 'js'],
        },
      output: {
        file: 'gulp/version.json'
        }
      })
    .pipe(app.gulp.dest(app.path.build.html))
