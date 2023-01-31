import replace from 'gulp-replace';
import plumber from 'gulp-plumber'; // handle errors
import notify from 'gulp-notify'; // show errors in window notifications
import browsersync from 'browser-sync'; // open and reload browser

export const plugins = {
  replace,
  plumber,
  notify,
  browsersync
};
