/* jshint node: true */
'use strict';

module.exports = {
  name: 'materialize',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Thin.woff2', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Thin.woff', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Thin.ttf', { destDir: 'font/roboto' });

    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Light.woff2', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Light.woff', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Light.ttf', { destDir: 'font/roboto' });

    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Regular.woff2', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Regular.woff', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Regular.ttf', { destDir: 'font/roboto' });

    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Medium.woff2', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Medium.woff', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Medium.ttf', { destDir: 'font/roboto' });

    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Bold.woff2', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Bold.woff', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/Materialize/dist/font/roboto/Roboto-Bold.ttf', { destDir: 'font/roboto' });

    app.import(app.bowerDirectory + '/Materialize/dist/js/materialize.js');
  }
};
