'use strict';
angular.module('app.home', ['ui.router']).config(function config($stateProvider) {
    $stateProvider.state('mwc', {
        'url': '/home?type',
        'views': {
            'main': {
                'controller': 'AnomalyDetectionController',
                'templateUrl': 'home/home.tpl.html'
            }
        },
        'data': {
            'pageTitle': 'Nokia | Anomaly Detection'
        },
        'ncyBreadcrumb': {
            'label': '{{homeBreadCrumb}}'
        }
    });
}).controller('AnomalyDetectionController', function AnomalyDetectionController($scope, graphElements, $timeout) {
    $scope.jsonInputContainer = true;
    $scope.subjectsContainer = false;
    $scope.graphContainer = false;
    $scope.graphContainer = true;
    $scope.hasGraph = false;
    $scope.graphElements = "";
    $scope.currentSubject = "";
    $scope.numberOfPings = 0;
    // $scope.numberOfPingsPerMachine = 0;
    $scope.isFirstload = true;
    var sigmaContainer;

    sigma.classes.graph.addMethod('neighbors', function(nodeId) {
        var i,
            neighbors = {},
            index = this.allNeighborsIndex.get(nodeId).keyList() || {};
        for (i = 0; i < index.length; i++) {
            neighbors[index[i]] = this.nodesIndex.get(index[i]);
        }
        return neighbors;
    });

    $scope.getGraph = function() {
        graphElements.get({},
            function(response) {
                // success
                $scope.graphElements = response["results"];
                $scope.hasGraph = true;
                $scope.subjectsContainer = true;
                $scope.graphContainer = true;
                $scope.showGraph(0)
            },
            function(response) {
                // error
                console.log(response);
            });
    }

    $scope.showGraph = function(index) {
        console.log(index)
        $scope.loadGraph($scope.graphElements[index]);
        $scope.currentSubject = $scope.graphElements[index]["subject"];
        $scope.numberOfPings = $scope.graphElements[index]["number_of_packets"];
    }

    $scope.loadGraph = function(graph) {
        if (!$scope.isFirstload) {
            sigmaContainer.graph.clear();
            sigmaContainer.refresh();
        } else {
            $scope.isFirstload = false;
        }

        sigmaContainer = new sigma({
            renderer: {
                container: document.getElementById('container'),
                type: 'canvas'
            },
            settings: {
                minArrowSize: 13,
                maxEdgeSize: 1,
                maxNodeSize: 10,
                nodeHoverColor: "node",
                labelHoverColor: "node",
                singleHover: true,
                // labelSize: 20,
                edgeHoverExtremities: true,
                drawLabels: false,
                hideEdgesOnMove: true,
                enableCamera: false,
                zoomMin: 1,
                zoomMax: 1,
            }
        });

        // load the graph
        sigmaContainer.graph.read(graph);
        // draw the graph
        sigmaContainer.refresh();

        sigmaContainer.startForceAtlas2();
        $timeout(function() {
            sigmaContainer.killForceAtlas2()
        }, 1000);

        sigmaContainer.bind("overNode", function(e) {
            /*
            if (e.data.node.id !== 'botnet') {
                $timeout(function() {
                    // $scope.numberOfPingsPerMachine = e.data.node.count;
                }, 500);
            }
            */
        });

        sigmaContainer.bind("outNode", function(e) {
            /*
            $timeout(function() {
                // $scope.numberOfPingsPerMachine = 0;
            }, 500);
            */
        });
    }

    $scope.downloadGraph = function() {
        html2canvas(document.querySelector("#container")).then(function(canvas) {
            saveAs(canvas.toDataURL(), $scope.currentSubject + ' graph.png');
        });
    }

    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
            //simulate click
            link.click();
            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }

    $timeout(function() {
        // $scope.loadGraph($scope.graphElements, $scope.isFirstload);
        // $scope.isFirstload = false;
        $scope.getGraph();
    }, 500);
});
