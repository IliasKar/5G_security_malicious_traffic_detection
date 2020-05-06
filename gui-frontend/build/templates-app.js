angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<section id=\"home\" class=\"container-fluid\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <div class=\"row\" ng-show=\"hasGraph\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <h4>Select capture</h4>\n" +
    "                    <div class=\"list-group\">\n" +
    "                        <button type=\"button\" ng-class=\"{'active': element.subject === currentSubject}\" ng-click=\"showGraph($index)\" class=\"list-group-item list-group-item-action\" ng-repeat=\"element in graphElements track by $index\">\n" +
    "                            <i class=\"fa fa-arrow\"></i> {{element.subject.split(\" \")[0]}}\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-10 bordered\">\n" +
    "                    <button ng-if=\"currentSubject !== '' && graphContainer\" class=\"btn btn-md btn-default pos-absolute top-right\" style=\"z-index: 99999;\" ng-click=\"downloadGraph()\"><i class=\"fa fa-download\"></i> Download</button>\n" +
    "                    <div class=\"pos-absolute top-left applications-class\">\n" +
    "                        <i><strong>{{numberOfPings}}</strong> messages sent <br />\n" +
    "                        from {{currentSubject.split(\" \")[1]}}<i>\n" +
    "                    </div>\n" +
    "                    <div class='my-legend pos-absolute bottom-left'>\n" +
    "                        <div class='legend-title'>\n" +
    "                            Number of messages exchanged\n" +
    "                        </div>\n" +
    "                        <div class='legend-scale'>\n" +
    "                            <ul class='legend-labels'>\n" +
    "                                <li><span style='background:#a6b6bf;'></span>1</li>\n" +
    "                                <li><span style='background:#026ba8;'></span>2 - 10</li>\n" +
    "                                <li><span style='background:#9c5917;'></span>10 - 50</li>\n" +
    "                                <li><span style='background:#4f1704;'></span>50 - 100</li>\n" +
    "                                <li><span style='background:#a80202;'></span>> 100</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"hasGraph\" id=\"container\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);
