"use strict";

const cpr = require('cpr');

function cp(from, to, options) {
  var o = options || {};
  return new Promise((resolve, reject) => {
    cpr(from, to, o, (err, files) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

function endsWith(s, suffix) {
    return s.indexOf(suffix, s.length - suffix.length) !== -1;
};

const matchJS = /^.*\.js(\.map)?$/i;
const js = (src) => matchJS.test(src);

const file = (f, src) => endsWith(src, f) || endsWith(src, f + '.map');

Promise.all([
  cp('node_modules/core-js/client/', 'docs/vendor/core-js/client/', { filter: js }),
  cp('node_modules/zone.js/dist/zone.min.js', 'docs/vendor/zone.js/dist/zone.min.js'),
  cp('node_modules/reflect-metadata/', 'docs/vendor/reflect-metadata/', { filter: js }),
  cp('node_modules/systemjs/dist/', 'docs/vendor/systemjs/dist/', { filter: file.bind(null, 'system.js') }),
  cp('node_modules/@angular/', 'docs/vendor/@angular/', { filter: js }),
  cp('node_modules/rxjs/', 'docs/vendor/rxjs/', { filter: js }),
  cp('systemjs.config.js', 'docs/systemjs.config.js'),
  cp('index.html', 'docs/index.html'),
]).catch((err) => {
  console.log(err);
})