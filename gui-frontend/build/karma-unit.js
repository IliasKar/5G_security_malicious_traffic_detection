module.exports = function ( karma ) {
  karma.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-cookies/angular-cookies.js',
      'node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
      'node_modules/angular-ui-utils/modules/route/route.js',
      'node_modules/angular-breadcrumb/dist/angular-breadcrumb.js',
      'node_modules/sigma/src/sigma.core.js',
      'node_modules/sigma/src/conrad.js',
      'node_modules/sigma/src/utils/sigma.utils.js',
      'node_modules/sigma/src/utils/sigma.polyfills.js',
      'node_modules/sigma/src/sigma.settings.js',
      'node_modules/sigma/src/classes/sigma.classes.dispatcher.js',
      'node_modules/sigma/src/classes/sigma.classes.configurable.js',
      'node_modules/sigma/src/classes/sigma.classes.graph.js',
      'node_modules/sigma/src/classes/sigma.classes.camera.js',
      'node_modules/sigma/src/classes/sigma.classes.quad.js',
      'node_modules/sigma/src/classes/sigma.classes.edgequad.js',
      'node_modules/sigma/src/captors/sigma.captors.mouse.js',
      'node_modules/sigma/src/captors/sigma.captors.touch.js',
      'node_modules/sigma/src/renderers/sigma.renderers.canvas.js',
      'node_modules/sigma/src/renderers/sigma.renderers.webgl.js',
      'node_modules/sigma/src/renderers/sigma.renderers.svg.js',
      'node_modules/sigma/src/renderers/sigma.renderers.def.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.labels.def.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.hovers.def.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.nodes.def.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.def.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.curve.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.arrow.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.curvedArrow.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.def.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.curve.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.arrow.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.curvedArrow.js',
      'node_modules/sigma/src/renderers/canvas/sigma.canvas.extremities.def.js',
      'node_modules/sigma/src/middlewares/sigma.middlewares.rescale.js',
      'node_modules/sigma/src/middlewares/sigma.middlewares.copy.js',
      'node_modules/sigma/src/misc/sigma.misc.animation.js',
      'node_modules/sigma/src/misc/sigma.misc.bindEvents.js',
      'node_modules/sigma/src/misc/sigma.misc.bindDOMEvents.js',
      'node_modules/sigma/src/misc/sigma.misc.drawHovers.js',
      'node_modules/sigma/plugins/sigma.renderers.parallelEdges/utils.js',
      'node_modules/sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curvedArrow.js',
      'node_modules/sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curvedArrow.js',
      'node_modules/sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curve.js',
      'node_modules/sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.labels.curve.js',
      'node_modules/sigma/plugins/sigma.layout.forceAtlas2/supervisor.js',
      'node_modules/sigma/plugins/sigma.layout.forceAtlas2/worker.js',
      'node_modules/sigma/plugins/sigma.renderers.customShapes/shape-library.js',
      'node_modules/sigma/plugins/sigma.renderers.customShapes/sigma.renderers.customShapes.js',
      'node_modules/html2canvas/dist/html2canvas.js',
      'build/templates-app.js',
      'build/templates-common.js',
      'node_modules/angular-mocks/angular-mocks.js',
      
      'src/**/*.js',
      'src/**/*.coffee',
    ],
    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-phantomjs-launcher', 'karma-coffee-preprocessor' ],
    preprocessors: {
      '**/*.coffee': 'coffee',
    },

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /**
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'PhantomJS'//, 'Firefox'
    ]
  });
};
