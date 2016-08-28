(function (global) {
  var SystemJS = global.SystemJS;

  var map = {
    'app': 'app',

    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs/bundles/Rx.umd.min.js',
    'rxjs/add/operator/map': 'vendor/rxjs/bundles/Rx.umd.min.js',
    'rxjs/Rx': 'vendor/rxjs/bundles/Rx.umd.min.js',
    'rxjs/Subject': 'vendor/rxjs/bundles/Rx.umd.min.js',
    'rxjs/observable/PromiseObservable': 'vendor/rxjs/bundles/Rx.umd.min.js',
    'rxjs/add/observable/fromEvent': 'vendor/rxjs/bundles/Rx.umd.min.js',
    'rxjs/operator/toPromise': 'vendor/rxjs/bundles/Rx.umd.min.js',
    'rxjs/Observable': 'vendor/rxjs/bundles/Rx.umd.min.js',
  };

  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' }
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
    packages: packages,
    paths: {
      'rxjs/Subject': 'vendor/rxjs/bundles/Rx.umd.js'
    }
  });
})(this);