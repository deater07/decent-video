/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'decent-twerk-web',
    environment: environment,
    baseURL: '/decent-twerk-web',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        'ember-htmlbars': true,
        "ember-htmlbars-block-params": true,
        "ember-routing-transitioning-classes": true,
        "ember-htmlbars-inline-if-helper": true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    cloudinary: {
      cloudName: "conrad-personal",
      apiKey: "187814196291842",
      apiHost: "//api.cloudinary.com/v1_1/",
      imageHost: "//res.cloudinary.com/conrad-personal/image/upload/",
      uploadPreset: "ltvgd0tm"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.baseURL = '/decent-video'
  }

  if (environment === 'production') {

  }

  return ENV;
};
