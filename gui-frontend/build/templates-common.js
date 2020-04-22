angular.module('templates-common', ['helpers/modal/modal.tpl.html']);

angular.module("helpers/modal/modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("helpers/modal/modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    {{'CONFIRM_PROCEED_MODAL' | translate}}\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"ok()\" ng-bind=\" 'YES' | translate \"></button>\n" +
    "    <button class=\"btn btn-warning\" ng-click=\"cancel()\" ng-bind=\" 'NO' | translate \"></button>\n" +
    "</div>\n" +
    "");
}]);
