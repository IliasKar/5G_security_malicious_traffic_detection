/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    /**
     * The `build_dir` folder is where our projects are compiled during
     * development and the `compile_dir` folder is where our app resides once it's
     * completely built.
     */
    build_dir: 'build',
    compile_dir: 'bin',
    proxy: 'http://10.144.1.10:8080',
    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`src/common`) template HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file, `less` is our main stylesheet, and `unit` contains our
     * app's unit tests.
     */
    app_files: {
        js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
        jsunit: ['src/**/*.spec.js'],
        coffee: ['src/**/*.coffee', '!src/**/*.spec.coffee'],
        coffeeunit: ['src/**/*.spec.coffee'],
        atpl: ['src/app/**/*.tpl.html'],
        ctpl: ['src/common/**/*.tpl.html'],
        html: ['src/index.html'],
        less: 'src/less/main.less',
        fonts: ['src/fonts/*']
    },
    lang_files: {
        json: ['src/languages/**/*.json']
    },
    /**
     * This is a collection of files used during testing only.
     */
    test_files: {
        js: [
            'node_modules/angular-mocks/angular-mocks.js'
        ]
    },
    /**
     * This is the same as `app_files`, except it contains patterns that
     * reference vendor code (`node_modules/`) that we need to place into the build
     * process somewhere. While the `app_files` property ensures all
     * standardized files are collected for compilation, it is the user's job
     * to ensure non-standardized (i.e. vendor-related) files are handled
     * appropriately in `vendor_files.js`.
     *
     * The `vendor_files.js` property holds files to be automatically
     * concatenated and minified with our project source files.
     *
     * The `vendor_files.css` property holds any CSS files to be automatically
     * included in our app.
     *
     * The `vendor_files.assets` property holds any assets to be copied along
     * with our app's assets. This structure is flattened, so it is not
     * recommended that you use wildcards.
     */
    vendor_files: {
        js: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-cookies/angular-cookies.js',
            'node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
            'node_modules/angular-ui-utils/modules/route/route.js',
            'node_modules/angular-breadcrumb/dist/angular-breadcrumb.js', //,
            // 'node_modules/cytoscape/dist/cytoscape.js',
            // 'node_modules/cytoscape-node-html-label/dist/*min.js',
            // 'node_modules/sigma-bower-master/*.min.js',
            // 'node_modules/sigma-bower-master/plugins/*.min.js'

            /*
            // Core:
            'node_modules/sigma/src/sigma.core.js',
            // 'node_modules/sigma/src/sigma.export.js',

            // Utils:
            'node_modules/sigma/src/conrad.js',
            'node_modules/sigma/src/utils/sigma.utils.js',
            'node_modules/sigma/src/utils/sigma.polyfills.js',
            'node_modules/sigma/src/sigma.settings.js',


            // Main classes:
            'node_modules/sigma/src/classes/*.js',
            // 'node_modules/sigma/src/sigma.settings.js',
            // 'node_modules/sigma/src/classes/sigma.classes.dispatcher.js',
            // 'node_modules/sigma/src/classes/sigma.classes.configurable.js',
            // 'node_modules/sigma/src/classes/sigma.classes.graph.js',
            // 'node_modules/sigma/src/classes/sigma.classes.camera.js',
            // 'node_modules/sigma/src/classes/sigma.classes.quad.js',
            // 'node_modules/sigma/src/classes/sigma.classes.edgequad.js',

            // Captors:
            'node_modules/sigma/src/captors/*.js',
            // 'node_modules/sigma/src/captors/sigma.captors.mouse.js',
            // 'node_modules/sigma/src/captors/sigma.captors.touch.js',

            // Renderers:
            'node_modules/sigma/src/renderers/*.js',
            'node_modules/sigma/src/renderers/canvas/*.js',
            'node_modules/sigma/src/renderers/svg/*.js',
            'node_modules/sigma/src/renderers/webgl/*.js',
            // 'node_modules/sigma/src/renderers/sigma.renderers.canvas.js',
            // 'node_modules/sigma/src/renderers/sigma.renderers.webgl.js',
            // 'node_modules/sigma/src/renderers/sigma.renderers.svg.js',
            // 'node_modules/sigma/src/renderers/sigma.renderers.def.js',

            // Sub functions per engine:
            // 'node_modules/sigma/src/renderers/webgl/sigma.webgl.nodes.def.js',
            // 'node_modules/sigma/src/renderers/webgl/sigma.webgl.nodes.fast.js',
            // 'node_modules/sigma/src/renderers/webgl/sigma.webgl.edges.def.js',
            // 'node_modules/sigma/src/renderers/webgl/sigma.webgl.edges.fast.js',
            // 'node_modules/sigma/src/renderers/webgl/sigma.webgl.edges.arrow.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.labels.def.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.hovers.def.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.nodes.def.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.def.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.dotCurve.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.arrow.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.dotCurvedArrow.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.def.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.curve.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.arrow.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edgehovers.curvedArrow.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.extremities.def.js',
            // 'node_modules/sigma/src/renderers/canvas/sigma.canvas.edges.labels.curvedArrow.js',
            // 'node_modules/sigma/src/renderers/svg/sigma.svg.utils.js',
            // 'node_modules/sigma/src/renderers/svg/sigma.svg.nodes.def.js',
            // 'node_modules/sigma/src/renderers/svg/sigma.svg.edges.def.js',
            // 'node_modules/sigma/src/renderers/svg/sigma.svg.edges.curve.js',
            // 'node_modules/sigma/src/renderers/svg/sigma.svg.labels.def.js',
            // 'node_modules/sigma/src/renderers/svg/sigma.svg.hovers.def.js',

            // Middlewares:
            'node_modules/sigma/src/middlewares/*.js',
            // 'node_modules/sigma/src/middlewares/sigma.middlewares.rescale.js',
            // 'node_modules/sigma/src/middlewares/sigma.middlewares.copy.js',

            // Misc:
            'node_modules/sigma/src/misc/*.js',
            // 'node_modules/sigma/src/misc/sigma.misc.animation.js',
            // 'node_modules/sigma/src/misc/sigma.misc.bindEvents.js',
            // 'node_modules/sigma/src/misc/sigma.misc.bindDOMEvents.js',
            // 'node_modules/sigma/src/misc/sigma.misc.drawHovers.js',

            // Plugins
            'node_modules/sigma/plugins/sigma.exporters.svg/*.js',
            */

            // 'node_modules/sigma/src/sigma.core.js',
            // 'node_modules/sigma/src/conrad.js',

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
            'node_modules/sigma/plugins/sigma.layout.neiborhoods/sigma.layout.neiborhoods.js',
            'node_modules/sigma/plugins/sigma.renderers.customShapes/shape-library.js',
            'node_modules/sigma/plugins/sigma.renderers.customShapes/sigma.renderers.customShapes.js',

            // html2canvas
            'node_modules/html2canvas/dist/html2canvas.js',

            // mustache
            // 'node_modules/mustache/mustache.js',
        ],
        css: [],
        fonts: [
            'node_modules/font-awesome/fonts/*',
            // 'node_modules/ionicons/fonts/*',
            'node_modules/bootstrap/fonts/*'
        ],
        assets: [
            'graph_parser/*.json'
        ]
    },
};
