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
    // $scope.hasGraph = false;
    $scope.hasGraph = true;
    // $scope.graphElements = "";
    $scope.graphElements = {
        "nodes": [{
                "count": 0,
                "color": "#FF2200",
                "label": "147.32.84.165  - Botnet",
                "y": 0,
                "x": 0,
                "id": "botnet",
                "size": 10
            },
            {
                "count": 217,
                "color": "#008cc2",
                "label": "147.32.80.9",
                "y": 0,
                "x": 0,
                "id": "target-0",
                "size": 15
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "83.133.119.197",
                "y": 0,
                "x": 1,
                "id": "target-1",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "94.63.149.152",
                "y": 0,
                "x": 1,
                "id": "target-2",
                "size": 2
            },
            {
                "count": 18,
                "color": "#008cc2",
                "label": "60.190.223.75",
                "y": 1,
                "x": 2,
                "id": "target-3",
                "size": 9
            },
            {
                "count": 5,
                "color": "#008cc2",
                "label": "195.88.191.59",
                "y": 1,
                "x": 2,
                "id": "target-4",
                "size": 2
            },
            {
                "count": 9,
                "color": "#008cc2",
                "label": "94.63.150.63",
                "y": 1,
                "x": 3,
                "id": "target-5",
                "size": 4
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "122.224.6.164",
                "y": 1,
                "x": 3,
                "id": "target-6",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "174.123.157.154",
                "y": 2,
                "x": 4,
                "id": "target-7",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "78.96.193.208",
                "y": 2,
                "x": 4,
                "id": "target-8",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "91.204.250.88",
                "y": 2,
                "x": 5,
                "id": "target-9",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "39.209.46.164",
                "y": 2,
                "x": 5,
                "id": "target-10",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "81.10.0.18",
                "y": 3,
                "x": 6,
                "id": "target-11",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "95.59.231.39",
                "y": 3,
                "x": 6,
                "id": "target-12",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "223.29.198.239",
                "y": 3,
                "x": 7,
                "id": "target-13",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "82.207.3.130",
                "y": 3,
                "x": 7,
                "id": "target-14",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "195.225.94.189",
                "y": 4,
                "x": 8,
                "id": "target-15",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "49.202.110.128",
                "y": 4,
                "x": 8,
                "id": "target-16",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "89.165.244.229",
                "y": 4,
                "x": 9,
                "id": "target-17",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "74.3.164.222",
                "y": 4,
                "x": 9,
                "id": "target-18",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "213.111.249.148",
                "y": 5,
                "x": 10,
                "id": "target-19",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "84.40.69.185",
                "y": 5,
                "x": 10,
                "id": "target-20",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "211.76.133.151",
                "y": 5,
                "x": 11,
                "id": "target-21",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "87.247.63.73",
                "y": 5,
                "x": 11,
                "id": "target-22",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "113.168.165.133",
                "y": 6,
                "x": 12,
                "id": "target-23",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "118.98.160.130",
                "y": 6,
                "x": 12,
                "id": "target-24",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "84.54.77.145",
                "y": 6,
                "x": 13,
                "id": "target-25",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "113.36.206.49",
                "y": 6,
                "x": 13,
                "id": "target-26",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "178.122.220.180",
                "y": 7,
                "x": 14,
                "id": "target-27",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "79.127.72.35",
                "y": 7,
                "x": 14,
                "id": "target-28",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "41.93.133.138",
                "y": 7,
                "x": 15,
                "id": "target-29",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "84.54.102.136",
                "y": 7,
                "x": 15,
                "id": "target-30",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "202.159.214.105",
                "y": 8,
                "x": 16,
                "id": "target-31",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "91.218.169.197",
                "y": 8,
                "x": 16,
                "id": "target-32",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "180.241.86.20",
                "y": 8,
                "x": 17,
                "id": "target-33",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "188.231.161.166",
                "y": 8,
                "x": 17,
                "id": "target-34",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "74.3.164.223",
                "y": 9,
                "x": 18,
                "id": "target-35",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "92.46.150.38",
                "y": 9,
                "x": 18,
                "id": "target-36",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "79.114.206.25",
                "y": 9,
                "x": 19,
                "id": "target-37",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "61.147.99.179",
                "y": 9,
                "x": 19,
                "id": "target-38",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "213.211.110.101",
                "y": 10,
                "x": 20,
                "id": "target-39",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "59.92.235.222",
                "y": 10,
                "x": 20,
                "id": "target-40",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "117.196.235.122",
                "y": 10,
                "x": 21,
                "id": "target-41",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "27.255.11.242",
                "y": 10,
                "x": 21,
                "id": "target-42",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "88.247.242.196",
                "y": 11,
                "x": 22,
                "id": "target-43",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "59.3.204.224",
                "y": 11,
                "x": 22,
                "id": "target-44",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "94.230.225.162",
                "y": 11,
                "x": 23,
                "id": "target-45",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "95.59.78.149",
                "y": 11,
                "x": 23,
                "id": "target-46",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "94.178.115.117",
                "y": 12,
                "x": 24,
                "id": "target-47",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "95.57.196.181",
                "y": 12,
                "x": 24,
                "id": "target-48",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "92.50.51.129",
                "y": 12,
                "x": 25,
                "id": "target-49",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "74.3.164.224",
                "y": 12,
                "x": 25,
                "id": "target-50",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "92.46.148.73",
                "y": 13,
                "x": 26,
                "id": "target-51",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "85.130.81.228",
                "y": 13,
                "x": 26,
                "id": "target-52",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "119.144.5.66",
                "y": 13,
                "x": 27,
                "id": "target-53",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "87.247.52.155",
                "y": 13,
                "x": 27,
                "id": "target-54",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "188.72.241.107",
                "y": 14,
                "x": 28,
                "id": "target-55",
                "size": 2
            },
            {
                "count": 5,
                "color": "#008cc2",
                "label": "91.220.0.52",
                "y": 14,
                "x": 28,
                "id": "target-56",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "83.229.4.202",
                "y": 14,
                "x": 29,
                "id": "target-57",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "208.110.80.34",
                "y": 14,
                "x": 29,
                "id": "target-58",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "94.100.176.20",
                "y": 15,
                "x": 30,
                "id": "target-59",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "117.213.61.195",
                "y": 15,
                "x": 30,
                "id": "target-60",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "59.103.192.72",
                "y": 15,
                "x": 31,
                "id": "target-61",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "59.48.7.168",
                "y": 15,
                "x": 31,
                "id": "target-62",
                "size": 1
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "74.125.93.27",
                "y": 16,
                "x": 32,
                "id": "target-63",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "119.154.71.9",
                "y": 16,
                "x": 32,
                "id": "target-64",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "109.107.241.175",
                "y": 16,
                "x": 33,
                "id": "target-65",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "178.123.14.199",
                "y": 16,
                "x": 33,
                "id": "target-66",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "58.42.247.165",
                "y": 17,
                "x": 34,
                "id": "target-67",
                "size": 1
            },
            {
                "count": 7,
                "color": "#008cc2",
                "label": "212.117.171.138",
                "y": 17,
                "x": 34,
                "id": "target-68",
                "size": 3
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "74.125.39.27",
                "y": 17,
                "x": 35,
                "id": "target-69",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "78.138.22.163",
                "y": 17,
                "x": 35,
                "id": "target-70",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "66.111.4.72",
                "y": 18,
                "x": 36,
                "id": "target-71",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "182.9.95.147",
                "y": 18,
                "x": 36,
                "id": "target-72",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "182.7.201.11",
                "y": 18,
                "x": 37,
                "id": "target-73",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "125.166.97.131",
                "y": 18,
                "x": 37,
                "id": "target-74",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "216.157.130.15",
                "y": 19,
                "x": 38,
                "id": "target-75",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "182.3.168.83",
                "y": 19,
                "x": 38,
                "id": "target-76",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "202.112.126.218",
                "y": 19,
                "x": 39,
                "id": "target-77",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "87.216.176.188",
                "y": 19,
                "x": 39,
                "id": "target-78",
                "size": 2
            },
            {
                "count": 8,
                "color": "#008cc2",
                "label": "204.12.208.59",
                "y": 20,
                "x": 40,
                "id": "target-79",
                "size": 4
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "198.32.64.12",
                "y": 20,
                "x": 40,
                "id": "target-80",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "27.255.56.137",
                "y": 20,
                "x": 41,
                "id": "target-81",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "87.69.122.107",
                "y": 20,
                "x": 41,
                "id": "target-82",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "87.247.53.237",
                "y": 21,
                "x": 42,
                "id": "target-83",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "202.12.27.33",
                "y": 21,
                "x": 42,
                "id": "target-84",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "193.0.14.129",
                "y": 21,
                "x": 43,
                "id": "target-85",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "192.203.230.10",
                "y": 21,
                "x": 43,
                "id": "target-86",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "14.96.120.163",
                "y": 22,
                "x": 44,
                "id": "target-87",
                "size": 2
            },
            {
                "count": 6,
                "color": "#008cc2",
                "label": "173.192.170.88",
                "y": 22,
                "x": 44,
                "id": "target-88",
                "size": 3
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "61.17.216.11",
                "y": 22,
                "x": 45,
                "id": "target-89",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "91.220.0.54",
                "y": 22,
                "x": 45,
                "id": "target-90",
                "size": 2
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "66.94.237.64",
                "y": 23,
                "x": 46,
                "id": "target-91",
                "size": 1
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "91.228.230.31",
                "y": 23,
                "x": 46,
                "id": "target-92",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "98.126.71.122",
                "y": 23,
                "x": 47,
                "id": "target-93",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "195.113.232.83",
                "y": 23,
                "x": 47,
                "id": "target-94",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "195.113.232.98",
                "y": 24,
                "x": 48,
                "id": "target-95",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "195.113.232.89",
                "y": 24,
                "x": 48,
                "id": "target-96",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "14.97.27.137",
                "y": 24,
                "x": 49,
                "id": "target-97",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "95.111.65.242",
                "y": 24,
                "x": 49,
                "id": "target-98",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "65.55.37.104",
                "y": 25,
                "x": 50,
                "id": "target-99",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "78.25.48.127",
                "y": 25,
                "x": 50,
                "id": "target-100",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "117.205.2.136",
                "y": 25,
                "x": 51,
                "id": "target-101",
                "size": 2
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "209.190.94.170",
                "y": 25,
                "x": 51,
                "id": "target-102",
                "size": 1
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "50.23.235.4",
                "y": 26,
                "x": 52,
                "id": "target-103",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "87.248.203.254",
                "y": 26,
                "x": 52,
                "id": "target-104",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "67.201.31.224",
                "y": 26,
                "x": 53,
                "id": "target-105",
                "size": 1
            },
            {
                "count": 9,
                "color": "#008cc2",
                "label": "174.36.246.56",
                "y": 26,
                "x": 53,
                "id": "target-106",
                "size": 4
            },
            {
                "count": 7,
                "color": "#008cc2",
                "label": "195.113.232.97",
                "y": 27,
                "x": 54,
                "id": "target-107",
                "size": 3
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "74.125.232.203",
                "y": 27,
                "x": 54,
                "id": "target-108",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "74.125.127.27",
                "y": 27,
                "x": 55,
                "id": "target-109",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "195.113.232.73",
                "y": 27,
                "x": 55,
                "id": "target-110",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "95.172.94.21",
                "y": 28,
                "x": 56,
                "id": "target-111",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "112.202.77.25",
                "y": 28,
                "x": 56,
                "id": "target-112",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "201.54.170.104",
                "y": 28,
                "x": 57,
                "id": "target-113",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "14.97.21.87",
                "y": 28,
                "x": 57,
                "id": "target-114",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "61.160.209.212",
                "y": 29,
                "x": 58,
                "id": "target-115",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "80.77.47.42",
                "y": 29,
                "x": 58,
                "id": "target-116",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "69.16.175.10",
                "y": 29,
                "x": 59,
                "id": "target-117",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "68.67.185.217",
                "y": 29,
                "x": 59,
                "id": "target-118",
                "size": 2
            },
            {
                "count": 4,
                "color": "#008cc2",
                "label": "68.67.185.209",
                "y": 30,
                "x": 60,
                "id": "target-119",
                "size": 2
            },
            {
                "count": 12,
                "color": "#008cc2",
                "label": "217.163.21.35",
                "y": 30,
                "x": 60,
                "id": "target-120",
                "size": 6
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "195.113.232.88",
                "y": 30,
                "x": 61,
                "id": "target-121",
                "size": 1
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "77.238.167.32",
                "y": 30,
                "x": 61,
                "id": "target-122",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "195.113.232.96",
                "y": 31,
                "x": 62,
                "id": "target-123",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "217.163.21.34",
                "y": 31,
                "x": 62,
                "id": "target-124",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "41.223.57.74",
                "y": 31,
                "x": 63,
                "id": "target-125",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "98.138.84.55",
                "y": 31,
                "x": 63,
                "id": "target-126",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "94.240.163.207",
                "y": 32,
                "x": 64,
                "id": "target-127",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "217.115.95.242",
                "y": 32,
                "x": 64,
                "id": "target-128",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "188.24.248.248",
                "y": 32,
                "x": 65,
                "id": "target-129",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "198.41.9.32",
                "y": 32,
                "x": 65,
                "id": "target-130",
                "size": 2
            },
            {
                "count": 4,
                "color": "#008cc2",
                "label": "87.248.203.253",
                "y": 33,
                "x": 66,
                "id": "target-131",
                "size": 2
            },
            {
                "count": 12,
                "color": "#008cc2",
                "label": "217.163.21.41",
                "y": 33,
                "x": 66,
                "id": "target-132",
                "size": 6
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "205.188.186.137",
                "y": 33,
                "x": 67,
                "id": "target-133",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "95.172.94.64",
                "y": 33,
                "x": 67,
                "id": "target-134",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "74.125.232.199",
                "y": 34,
                "x": 68,
                "id": "target-135",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "77.78.246.81",
                "y": 34,
                "x": 68,
                "id": "target-136",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "62.178.214.33",
                "y": 34,
                "x": 69,
                "id": "target-137",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "190.112.76.158",
                "y": 34,
                "x": 69,
                "id": "target-138",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "78.249.161.87",
                "y": 35,
                "x": 70,
                "id": "target-139",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "60.173.109.42",
                "y": 35,
                "x": 70,
                "id": "target-140",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "85.66.196.245",
                "y": 35,
                "x": 71,
                "id": "target-141",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "109.239.46.232",
                "y": 35,
                "x": 71,
                "id": "target-142",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "218.201.21.157",
                "y": 36,
                "x": 72,
                "id": "target-143",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "195.50.106.142",
                "y": 36,
                "x": 72,
                "id": "target-144",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "91.195.95.134",
                "y": 36,
                "x": 73,
                "id": "target-145",
                "size": 2
            },
            {
                "count": 5,
                "color": "#008cc2",
                "label": "65.55.37.120",
                "y": 36,
                "x": 73,
                "id": "target-146",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "207.45.187.82",
                "y": 37,
                "x": 74,
                "id": "target-147",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "97.77.237.138",
                "y": 37,
                "x": 74,
                "id": "target-148",
                "size": 2
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "98.137.54.238",
                "y": 37,
                "x": 75,
                "id": "target-149",
                "size": 1
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "66.94.236.34",
                "y": 37,
                "x": 75,
                "id": "target-150",
                "size": 1
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "98.137.54.237",
                "y": 38,
                "x": 76,
                "id": "target-151",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "112.162.106.108",
                "y": 38,
                "x": 76,
                "id": "target-152",
                "size": 2
            },
            {
                "count": 3,
                "color": "#008cc2",
                "label": "74.6.140.64",
                "y": 38,
                "x": 77,
                "id": "target-153",
                "size": 1
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "212.82.111.207",
                "y": 38,
                "x": 77,
                "id": "target-154",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "109.104.178.89",
                "y": 39,
                "x": 78,
                "id": "target-155",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "193.239.249.18",
                "y": 39,
                "x": 78,
                "id": "target-156",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "205.188.186.167",
                "y": 39,
                "x": 79,
                "id": "target-157",
                "size": 2
            },
            {
                "count": 5,
                "color": "#008cc2",
                "label": "65.55.37.88",
                "y": 39,
                "x": 79,
                "id": "target-158",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "70.86.179.240",
                "y": 40,
                "x": 80,
                "id": "target-159",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "65.167.139.62",
                "y": 40,
                "x": 80,
                "id": "target-160",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "89.37.224.167",
                "y": 40,
                "x": 81,
                "id": "target-161",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "209.85.225.27",
                "y": 40,
                "x": 81,
                "id": "target-162",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "213.123.20.90",
                "y": 41,
                "x": 82,
                "id": "target-163",
                "size": 2
            },
            {
                "count": 4,
                "color": "#008cc2",
                "label": "65.55.37.72",
                "y": 41,
                "x": 82,
                "id": "target-164",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "67.195.168.230",
                "y": 41,
                "x": 83,
                "id": "target-165",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "98.139.54.60",
                "y": 41,
                "x": 83,
                "id": "target-166",
                "size": 2
            },
            {
                "count": 2,
                "color": "#008cc2",
                "label": "64.12.90.98",
                "y": 42,
                "x": 84,
                "id": "target-167",
                "size": 1
            },
            {
                "count": 4,
                "color": "#008cc2",
                "label": "65.54.188.72",
                "y": 42,
                "x": 84,
                "id": "target-168",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "182.7.145.156",
                "y": 42,
                "x": 85,
                "id": "target-169",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "117.207.11.6",
                "y": 42,
                "x": 85,
                "id": "target-170",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "193.252.22.92",
                "y": 43,
                "x": 86,
                "id": "target-171",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "64.12.90.65",
                "y": 43,
                "x": 86,
                "id": "target-172",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "206.46.232.11",
                "y": 43,
                "x": 87,
                "id": "target-173",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "76.96.62.116",
                "y": 43,
                "x": 87,
                "id": "target-174",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "89.44.194.10",
                "y": 44,
                "x": 88,
                "id": "target-175",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "91.218.168.163",
                "y": 44,
                "x": 88,
                "id": "target-176",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "193.252.122.103",
                "y": 44,
                "x": 89,
                "id": "target-177",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "205.188.59.193",
                "y": 44,
                "x": 89,
                "id": "target-178",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "206.46.232.39",
                "y": 45,
                "x": 90,
                "id": "target-179",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "76.96.30.116",
                "y": 45,
                "x": 90,
                "id": "target-180",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "89.108.150.205",
                "y": 45,
                "x": 91,
                "id": "target-181",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "209.191.88.254",
                "y": 45,
                "x": 91,
                "id": "target-182",
                "size": 2
            },
            {
                "count": 1,
                "color": "#008cc2",
                "label": "98.139.175.225",
                "y": 46,
                "x": 92,
                "id": "target-183",
                "size": 2
            }
        ],
        "edges": [{
                "count": 217,
                "target": "target-0",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-0",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-1",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-1",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-2",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-2",
                "size": 2
            },
            {
                "count": 18,
                "target": "target-3",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-3",
                "size": 2
            },
            {
                "count": 5,
                "target": "target-4",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-4",
                "size": 2
            },
            {
                "count": 9,
                "target": "target-5",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-5",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-6",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-6",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-7",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-7",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-8",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-8",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-9",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-9",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-10",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-10",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-11",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-11",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-12",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-12",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-13",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-13",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-14",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-14",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-15",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-15",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-16",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-16",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-17",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-17",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-18",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-18",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-19",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-19",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-20",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-20",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-21",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-21",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-22",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-22",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-23",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-23",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-24",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-24",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-25",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-25",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-26",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-26",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-27",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-27",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-28",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-28",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-29",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-29",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-30",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-30",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-31",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-31",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-32",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-32",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-33",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-33",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-34",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-34",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-35",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-35",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-36",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-36",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-37",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-37",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-38",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-38",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-39",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-39",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-40",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-40",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-41",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-41",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-42",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-42",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-43",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-43",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-44",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-44",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-45",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-45",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-46",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-46",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-47",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-47",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-48",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-48",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-49",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-49",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-50",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-50",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-51",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-51",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-52",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-52",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-53",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-53",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-54",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-54",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-55",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-55",
                "size": 2
            },
            {
                "count": 5,
                "target": "target-56",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-56",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-57",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-57",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-58",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-58",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-59",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-59",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-60",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-60",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-61",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-61",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-62",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-62",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-63",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-63",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-64",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-64",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-65",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-65",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-66",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-66",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-67",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-67",
                "size": 2
            },
            {
                "count": 7,
                "target": "target-68",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-68",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-69",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-69",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-70",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-70",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-71",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-71",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-72",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-72",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-73",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-73",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-74",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-74",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-75",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-75",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-76",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-76",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-77",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-77",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-78",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-78",
                "size": 2
            },
            {
                "count": 8,
                "target": "target-79",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-79",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-80",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-80",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-81",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-81",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-82",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-82",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-83",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-83",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-84",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-84",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-85",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-85",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-86",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-86",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-87",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-87",
                "size": 2
            },
            {
                "count": 6,
                "target": "target-88",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-88",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-89",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-89",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-90",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-90",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-91",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-91",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-92",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-92",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-93",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-93",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-94",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-94",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-95",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-95",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-96",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-96",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-97",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-97",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-98",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-98",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-99",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-99",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-100",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-100",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-101",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-101",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-102",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-102",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-103",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-103",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-104",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-104",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-105",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-105",
                "size": 2
            },
            {
                "count": 9,
                "target": "target-106",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-106",
                "size": 2
            },
            {
                "count": 7,
                "target": "target-107",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-107",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-108",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-108",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-109",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-109",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-110",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-110",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-111",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-111",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-112",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-112",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-113",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-113",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-114",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-114",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-115",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-115",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-116",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-116",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-117",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-117",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-118",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-118",
                "size": 2
            },
            {
                "count": 4,
                "target": "target-119",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-119",
                "size": 2
            },
            {
                "count": 12,
                "target": "target-120",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-120",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-121",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-121",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-122",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-122",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-123",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-123",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-124",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-124",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-125",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-125",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-126",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-126",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-127",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-127",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-128",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-128",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-129",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-129",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-130",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-130",
                "size": 2
            },
            {
                "count": 4,
                "target": "target-131",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-131",
                "size": 2
            },
            {
                "count": 12,
                "target": "target-132",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-132",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-133",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-133",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-134",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-134",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-135",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-135",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-136",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-136",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-137",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-137",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-138",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-138",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-139",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-139",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-140",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-140",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-141",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-141",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-142",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-142",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-143",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-143",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-144",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-144",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-145",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-145",
                "size": 2
            },
            {
                "count": 5,
                "target": "target-146",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-146",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-147",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-147",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-148",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-148",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-149",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-149",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-150",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-150",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-151",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-151",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-152",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-152",
                "size": 2
            },
            {
                "count": 3,
                "target": "target-153",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-153",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-154",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-154",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-155",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-155",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-156",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-156",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-157",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-157",
                "size": 2
            },
            {
                "count": 5,
                "target": "target-158",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-158",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-159",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-159",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-160",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-160",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-161",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-161",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-162",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-162",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-163",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-163",
                "size": 2
            },
            {
                "count": 4,
                "target": "target-164",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-164",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-165",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-165",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-166",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-166",
                "size": 2
            },
            {
                "count": 2,
                "target": "target-167",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-167",
                "size": 2
            },
            {
                "count": 4,
                "target": "target-168",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-168",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-169",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-169",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-170",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-170",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-171",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-171",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-172",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-172",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-173",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-173",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-174",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-174",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-175",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-175",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-176",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-176",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-177",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-177",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-178",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-178",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-179",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-179",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-180",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-180",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-181",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-181",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-182",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-182",
                "size": 2
            },
            {
                "count": 1,
                "target": "target-183",
                "color": "#333333",
                "source": "botnet",
                "type": "curvedArrow",
                "id": "botnet-target-183",
                "size": 2
            }
        ],
        "number_of_packets": 546,
        "subject": "Botnet Netflow"
    };

    $scope.currentSubject = $scope.graphElements['subject'];
    $scope.numberOfPings = $scope.graphElements["number_of_packets"];
    $scope.numberOfPingsPerMachine = 0;
    $scope.initiator = "";
    $scope.isFirstload = true;
    var sigmaContainer;

    $scope.getGraph = function() {
        graphElements.post({
                'params': $scope.jsonInput // JSON.parse($scope.jsonInput)
            },
            function(response) {
                $scope.graphElements = response;
                $scope.hasGraph = true;
                $scope.subjectsContainer = true;
                $scope.graphContainer = true;
                $scope.jsonInputContainer = false;
                for (var i in $scope.graphElements) {
                    for (var j in $scope.graphElements[i]) {
                        $timeout(function() {
                            $scope.loadGraph($scope.graphElements[i][j], $scope.isFirstload);
                            $scope.isFirstload = false;
                        }, 500);
                        return;
                    }
                }
            },
            function(response) {
                // error
                console.log(response);
            });
    }

    $scope.loadGraph = function(graph) {
        $scope.initiator = "";
        if (!$scope.isFirstload) {
            sigmaContainer.graph.clear();
            sigmaContainer.refresh();
        }

        sigmaContainer = new sigma({
            renderer: {
                container: document.getElementById('container'),
                type: 'canvas'
            },
            settings: {
                // defaultNodeColor: '#CCCCCC',
                // defaultEdgeColor: '#CCCCCC',
                // defaultLabelSize: 12,
                // zoomMin: 1,
                // zoomMax: 1,
                // enableCamera: false,
                // edgeLabelSize: 'proportional',
                minArrowSize: 15,
                maxEdgeSize: 2,
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
            if (e.data.node.id !== 'botnet') {
                $timeout(function() {
                    $scope.numberOfPingsPerMachine = e.data.node.count;
                }, 500);
            }
        });

        sigmaContainer.bind("outNode", function(e) {
            $timeout(function() {
                $scope.numberOfPingsPerMachine = 0;
            }, 500);
        });
    }

    $scope.downloadGraph = function() {
        html2canvas(document.querySelector("#graph-container")).then(function(canvas) {
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
        $scope.loadGraph($scope.graphElements, $scope.isFirstload);
        $scope.isFirstload = false;
    }, 500);
});
