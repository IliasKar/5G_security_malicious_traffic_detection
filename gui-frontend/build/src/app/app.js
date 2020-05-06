'use strict';
angular.module('fe-client', [
    'ngResource',
    'ngCookies',
    'services',
    'ncy-angular-breadcrumb',
    'templates-app',
    'templates-common',
    'modal',
    'scroll-top',
    'ui.router',
    'ui.bootstrap',
    'directives',
    'filters',
    'app.home'
]).config(function myAppConfig(
    $httpProvider, $urlRouterProvider, $locationProvider, $breadcrumbProvider) {

    $httpProvider.defaults.useXDomain = true;
    // $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // redirect to home
    $urlRouterProvider.otherwise('/home');
    // prefix
    $locationProvider.html5Mode(false).hashPrefix('!');
    // breadcrumb template
    $breadcrumbProvider.setOptions({
        'templateUrl': 'helpers/breadcrumb/breadcrumb.tpl.html'
    });
}).run(function run($rootScope, $state, $timeout) {
    /**
     * Close alert
     *
     * @param {int} index
     * @returns {undefined}
     */
    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.splice(index, 1);
    };
    // set $state to rootScope
    $rootScope.$state = $state;
    // breadcrumb titles
    $timeout(function() {
        $rootScope.homeBreadCrumb = 'Nokia | Anomaly Detection';
    }, 500);
}).controller('AppCtrl', function AppCtrl(
    $scope, $rootScope, $window, $timeout) {
    // state change start
    $scope.$on('$stateChangeStart', function(
        event, toState, toParams, fromState, fromParams) {
        // scroll to top whenever a page is changed
        $window.scrollTo(0, 0);
        // clear alerts
        $rootScope.alerts = [];
    });
    // state change success
    $scope.$on('$stateChangeSuccess', function(
        event, toState, toParams, fromState, fromParams) {
        // set page title
        if (angular.isDefined(toState.data.pageTitle)) {
            $timeout(function() {
                $scope.pageTitle = toState.data.pageTitle;
            }, 100);
        }
    });
});
