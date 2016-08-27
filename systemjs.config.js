(function (global) {
  var SystemJS = global.SystemJS;

  var map = {
    'app': 'app',

    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
  };

  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var angularPackages = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
  ];

  angularPackages.forEach(pkg => packages['@angular/' + pkg] = { main: 'bundles/' + pkg + '.umd.min.js', defaultExtension: 'js' });

  SystemJS.config({
    map: map,
    packages: packages
  });
})(this);