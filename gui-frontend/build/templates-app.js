angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<section id=\"home\" class=\"container-fluid\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <div class=\"row\">\n" +
    "                <!--\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h4 class=\"heading-level-2\">\n" +
    "                        <i class=\"fa fa-upload\"></i>\n" +
    "                        Import Netflow Data\n" +
    "                        <small ng-show=\"jsonInputContainer\"><a href=\"\" ng-click=\"jsonInputContainer = !jsonInputContainer\"><span><i class=\"fa fa-minus-circle\"></i></span> Hide</a></small>\n" +
    "                        <small ng-show=\"!jsonInputContainer\"><a href=\"\" ng-click=\"jsonInputContainer = !jsonInputContainer\"><span><i class=\"fa fa-plus-circle\"></i></span> Show</a></small>\n" +
    "                    </h4>\n" +
    "                    <div ng-show=\"jsonInputContainer\">\n" +
    "                        <form class=\"form-group\" ng-submit=\"getGraph()\">\n" +
    "                            <!-- required=\"true\" ng-model=\"jsonInput\" -/->\n" +
    "                            <textarea  class=\"form-control rounded-0 graph-input\" id=\"graph_exploer_json_input\" rows=\"7\">{\"key\": \"value\"}</textarea>\n" +
    "                            <br />\n" +
    "                            <button type=\"submit\" class=\"btn btn-primary btn-md\">\n" +
    "                            <i class=\"fa fa-gear\"></i> Process\n" +
    "                        </button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                -->\n" +
    "                <!--\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h4 class=\"heading-level-2\">\n" +
    "                        <i class=\"fa fa-envelope\"></i>\n" +
    "                        Email Subjects\n" +
    "                        <small ng-show=\"subjectsContainer\"><a href=\"\" ng-click=\"subjectsContainer = !subjectsContainer\"><span><i class=\"fa fa-minus-circle\"></i></span> Hide</a></small>\n" +
    "                        <small ng-show=\"!subjectsContainer\"><a href=\"\" ng-click=\"subjectsContainer = !subjectsContainer\"><span><i class=\"fa fa-plus-circle\"></i></span> Show</a></small>\n" +
    "                    </h4>\n" +
    "                    <div ng-show=\"subjectsContainer\">\n" +
    "                        <div ng-if=\"graphElements === ''\" class=\"alert alert-info graph-alert\" role=\"alert\">\n" +
    "                            <strong>Info!</strong> No data to show. Please, submit the Graph Explorer json.\n" +
    "                        </div>\n" +
    "                        <ul class=\"list-inline\">\n" +
    "                            <li class=\"subject-list\" ng-repeat=\"graph in graphElements['result']\">\n" +
    "                                <a href='' ng-class=\" { 'active' : graph['subject'] === currentSubject } \" class=\"list-group-item subject-list-link\" ng-click=\"loadGraph(graph);\">{{graph[\"subject\"]}}</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                -->\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h4 class=\"heading-level-2\">\n" +
    "                        <i class=\"fa fa-link\"></i>\n" +
    "                        Graph\n" +
    "                        <small ng-show=\"graphContainer\"><a href=\"\" ng-click=\"graphContainer = !graphContainer\"><span><i class=\"fa fa-minus-circle\"></i></span> Hide</a></small>\n" +
    "                        <small ng-show=\"!graphContainer\"><a href=\"\" ng-click=\"graphContainer = !graphContainer\"><span><i class=\"fa fa-plus-circle\"></i></span> Show</a></small>\n" +
    "                    </h4>\n" +
    "                    <button ng-if=\"currentSubject !== '' && graphContainer\" class=\"btn btn-sm btn-default pull-right\" ng-click=\"downloadGraph()\"><i class=\"fa fa-download\"></i> Download</button>\n" +
    "                    <div id=\"graph-container\" ng-show=\"graphContainer\">\n" +
    "                        <div ng-if=\"graphElements === ''\" class=\"alert alert-info graph-alert\" role=\"alert\">\n" +
    "                            <strong>Info!</strong> No data to show. Please, submit the Graph Explorer json.\n" +
    "                        </div>\n" +
    "                        <h4>\n" +
    "                            <!--\n" +
    "                            <span ng-if=\"currentSubject !== ''\" class=\"label label-primary text-center\">Subject: {{currentSubject}}</span>\n" +
    "                            -->\n" +
    "                            <span ng-if=\"numberOfPackets !== ''\" class=\"label label-primary text-center\">{{numberOfPings}} messages sent by botnet to the machines within ten minutes on 2011/08/17, 14:24:20 to 14:34:20</span>\n" +
    "                            <span ng-if=\"numberOfPingsPerMachine !== '' && numberOfPingsPerMachine > 0\" class=\"label label-danger text-center\">Received {{numberOfPingsPerMachine}} message<span ng-if=\"numberOfPingsPerMachine > 1\">s</span> from botnet</span>\n" +
    "                            <!--\n" +
    "                            <span class=\"label label-primary text-center\">Initiator: {{initiator}}</span>\n" +
    "                            -->\n" +
    "                        </h4>\n" +
    "                        <!-- ng-show=\"hasGraph\" -->\n" +
    "                        <div id=\"container\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);
